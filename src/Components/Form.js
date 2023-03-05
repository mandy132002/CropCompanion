import { useState } from "react";
import '../css/form.css'

const Form = () => {
  const [itemName, setItemName] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [quantity, setquantity] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div className="create">
      <h2>Add a New Item</h2>
      <form>
        <label>Item name:</label>
        <input 
          type="text" 
          required 
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <label>Sellers Name</label>
        <input type="text"
          required
          value={sellerName}
          onChange={(e) => setSellerName(e.target.value)}
        ></input>
        <label>Product's Quantity</label>
        <input
        type="text"
        required
        value={quantity}
        onChange={(e) => setquantity(e.target.value)}          
        ></input>
        <label>Product's Price</label>
        <input
        type="number    "
        required
        value={price}
        onChange={(e) => setPrice(e.target.value)}          
        ></input>
        <button>Add Item</button>
      </form>
    </div>
  );
}
 
export default Form;