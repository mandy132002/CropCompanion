import { create } from "zustand";

const useStore = create((set)=> ({

  productId: null,
  setId: (id)=> set(state => ({productId: id})),
  
}))

export default useStore