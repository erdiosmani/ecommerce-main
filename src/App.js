import Products from "./components/products/Products";
import Cart from "./components/UI/Cart";
import Navbar from "./components/UI/Navbar";
import { useState } from "react";
import AddProducts from "./components/products/AddProducts";
import Modal from "./components/UI/Modal";



function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      image:
        "https://gv466hf5ah.gjirafa.net/image/1796/1796509.jpg?width=600&height=600",
      title: "Duks për meshkuj Adidas",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      price: 60.0,
    },
    {
      id: 2,
      image:
        "https://gv466hf5ah.gjirafa.net/image/1613/1613352.jpg?width=600&height=600",
      title: "Trenerka për meshkuj Nike",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      price: 61.0,
    },
    {
      id: 3,
      image:"https://gv466hf5ah.gjirafa.net/image/1612/1612317.jpg?width=600&height=600",
      title: "Atlete për meshkuj Puma,",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      price: 50.0,
    },{
      id: 4,
      image:"https://gv466hf5ah.gjirafa.net/image/1617/1617589.jpg?width=600&height=600",
      title: "Maicë për meshkuj Nike",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      price: 28.00,
  
    }
    
  ])
  
  
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  
  const hideModalHandler = () => {
    setShowModal(false)
  }
  const showModalHandler = () => {
    setShowModal(true)
  }


  const showHandler = () => {
    setShowCart(true);
  };
  const hideHandler = () => {
    setShowCart(false);
  };



  const addItemToCart = (item) => {
    const findIndex = cartItems.findIndex((element) => element.id === item.id);

    if (findIndex !== -1) {

      let cartArray = [...cartItems];

      const newItem = {
        ...cartArray[findIndex],
        quantity: cartArray[findIndex].quantity + 1,
      };

      cartArray[findIndex] = newItem;

      setCartItems(cartArray);
    } else {
      const itemToSave = {
        ...item,
        quantity: 1,
      };
      setCartItems((prevState) => [...prevState, itemToSave]);
    }
  };

  const removeProduct = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };


  //prej qasaj componentes AddProducts munesh me shtu produkte te reja

  const addProduct = (item) =>{
    setProducts((prevState)=> [...prevState,item]);
  }


  return (
    <div>
      {showCart && (
        <Cart
          onHideCart={hideHandler}
          items={cartItems}
          removeProduct={removeProduct}
        />
      )}
      <Navbar onShowCart={showHandler} cartItemsLength={cartItems.length} />
      <Products setCartItems={addItemToCart} products={products} showModalHandler={showModalHandler} setSelectedItem={setSelectedItem}/>
      {showModal && (<Modal onHideModal={hideModalHandler}  item={selectedItem}/>)}
      <AddProducts addProduct={addProduct}/> 
      
    </div>
  );
}

export default App;
