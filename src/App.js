import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import MultiFilter from "./components/filter/MultiFilter";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [products,setProducts] = useState([])
  const [liked,setLiked] = useState([])
  const [modal, setModal] = useState(false)

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
    let [cartItems,setCartItems] = useState ([])
    const addToCart = (item) => {
      const isExist = cartItems.find(cart => cart.id === item.id)
      if (isExist) {
        setCartItems(cartItem => cartItem.id === item.id ? item : cartItem)
      } else {
        setCartItems(prev => [...prev, item])
      }
    }

  // Remove From Cart
  const removeFromCart = (id) => {
    const removed = cartItems.filter(item => item.id !== id)
    setCartItems(removed)
  }

  // Categories Array
  const categories = products.map(product => product.category)
  .reduce((acc,item) => ((acc.includes(item)) ? acc : [...acc,item]),[])

  // Filter By checkbox
  const [selected, setSelected] = useState([]);
  const handleCheck = (e) => {
    const { value, checked } = e.target;
    if (checked === true) {
      setSelected((pre) => [...pre, value]);
    } else {
        setSelected((pre) => [...pre.filter((item) => item !== value)]);
    }
  }

  // let checked = products.filter(item => selected.indexOf(item.category) !== -1)
  // let filtered;
  // checked.length === 0 ? filtered = products : filtered = checked 
  const filterByCategory = (selected.length === 0) 
                    ? products 
                    : products.filter(item => selected.includes(item.category))

  // Filter By Sex
  const [option, setOption] = useState('all')
  const filterBySex = filterByCategory.filter(
    item => option === "Men" 
    ? item.title.includes("Men") 
    : option === "Women" 
    ? item.category.includes("Women") 
    : item)

  // Filter By Price
  const [price, setPrice] = useState(0)
  const filterByPrice = filterBySex.filter(item => price === 0 ? item : item.price <= price)
  // console.log(filterByPrice)

  return (
    <div className="App">
      <Header 
        handleShowHide = {handleShowHide}
        liked = {liked}
        cartItems = {cartItems}
        setModal = {setModal}
      />
      <Products 
        products = {filterByPrice}
        toggleLike = {toggleLike}
        liked = {liked}
        addToCart = {addToCart}
      />
      <MultiFilter
        multiFilter = {multiFilter} 
        categories = {categories}
        handleCheck = {handleCheck}
        setOption = {setOption}
        price = {price}
        setPrice = {setPrice}
      />
      {
        modal && <Cart
          cartItems = {cartItems}
          setModal = {setModal}
          removeFromCart = {removeFromCart}
        />
      }
    </div>
  );
}

export default App;
