import { useEffect, useState } from "react";
import MultiFilter from "./components/filter/MultiFilter";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [products,setProducts] = useState([])
  const [liked,setLiked] = useState([])

  // fetch api
  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProducts(data)
  }
  useEffect(()=> {
    fetchProducts()
  }, [])

  // show and hide MultiFilter Component
  const [multiFilter,setMultiFilter] = useState('multi-filter')
  const handleShowHide = () => {
    multiFilter === 'multi-filter' 
    ? setMultiFilter('multi-filter active-multi-filter') 
    : setMultiFilter('multi-filter') 
  }

  // Add To Cart
  const toggleLike = (id) =>  {
      if (liked.includes(id) ) {
        setLiked(liked.filter(item=> item !== id))
      } else{
        setLiked([...liked , id])
      }
    }

    // Add To Cart
    const addToCart = () => {
      console.log("first")
    }

  // Categories Array
  const categories = products.map(product => product.category)
  .reduce((acc,item) => ((acc.includes(item)) ? acc : [...acc,item]),[])

  return (
    <div className="App">
      <Header 
        handleShowHide = {handleShowHide}
        liked = {liked}
      />
      <Products 
        products = {products}
        toggleLike = {toggleLike}
        liked = {liked}
        addToCart = {addToCart}
      />
      <MultiFilter
        multiFilter = {multiFilter} 
        categories = {categories}
      />
    </div>
  );
}

export default App;
