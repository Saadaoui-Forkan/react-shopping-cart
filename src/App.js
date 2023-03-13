import { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [products,setProducts] = useState([])
  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProducts(data)
  }
  useEffect(()=> {
    fetchProducts()
  }, [])
  return (
    <div className="App">
      <Header />
      <Products 
        products = {products}
      />
    </div>
  );
}

export default App;
