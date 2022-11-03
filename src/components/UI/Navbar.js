import React from "react";
import { BsCart4 } from "react-icons/bs";
import logo from "../../assets/images/logo2.png"

function Navbar(props) {

  return (
    <div>
      <nav class="bg-slate-100 shadow">
        <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div class="flex justify-between items-center">
            <div>
                <img className="w-1/2" src={logo}/>
            </div>
          </div>
          <div class="md:flex items-center">
            <div class="flex justify-center md:block" >
              <div className="bg-gray-900 flex flex-row justify-center items-center w-[180px] h-12 gap-1 rounded-full cursor-pointer hover:bg-cyan-500" onClick={props.onShowCart} >
                <button
                  onClick={props.onShowCart}
                  className="w-[100px] flex text-white font-bold animate-pulse"
                  // class="absolute top-5  right-32  w-24 flex  rounded-full bg-indigo-500 text-white p-1"
                >
                  <BsCart4 className="mt-1 mr-1 " /> Your cart
                </button>
                <span className="bg-gray-800 rounded-full w-10 text-center font-bold text-white">{props.cartItemsLength}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
