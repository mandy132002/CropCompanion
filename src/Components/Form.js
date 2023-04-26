import { useState } from 'react';
import '../css/form.css';
import { addProduct } from '../api';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const parts = user.split('.');
  const payload = JSON.parse(atob(parts[1]));
  const [formState, setFormState] = useState({
    name: '',
    price: '',
    quantity: '',
    sellerId: payload.email,
    image:'',
  });

  // handle form field changes and update form state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const convertToBase64 =(event) =>{
    event.preventDefault();
    var reader = new FileReader();
    // image converted to base64
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () =>{
      // console.log(reader.result);
      setFormState((prevState) => ({ ...prevState, image: reader.result }))
    };
    reader.onerror = error =>{
      console.log("Error: ",error);
    };

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // send formState data to API using fetch or axios
    console.log(formState);
    addProduct(formState);
    toast("Product added successfully!", {style: {backgroundColor: '#f5cbcc'}});
    setFormState({
      name: '',
      price: '',
      quantity: '',
      sellerId: payload.email,
      image:'',
    });
  };

  return (
    <div className="create">
      <h2>Add a New Item</h2>
      <form>
        <label>Item name:</label>
        <input
          type="text"
          required
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
        {/* <label>Sellers Name</label>
        <input
          required
          value={sellerName}
          onChange={handleChange}
        ></input> */}
        <label>Price</label>
        <input
          type="number"
          required
          name="price"
          value={formState.price}
          onChange={handleChange}
        ></input>
        <label>Product's Quantity</label>
        <input
          type="text"
          required
          name="quantity"
          value={formState.quantity}
          onChange={handleChange}
        ></input>

        <input  
        accept='image/*'
        type="file" 
        onChange={convertToBase64}/>
        <button type="submit" onClick={handleSubmit}>
          Add Item
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Form;
