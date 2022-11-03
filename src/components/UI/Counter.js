import React, {useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
      setCounter(counter + 1);
    };
    const decrement = () => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    };
  return (
    <>
      <div class="custom-number-input h-10 w-32">
        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
          onClick={decrement}
            data-action="decrement"
            class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span class="m-auto text-2xl font-thin">−</span>
          </button>
          <span
            class="outlineNone focus:outline-none  text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center justify-center text-gray-700  outline-none"
          >{counter}</span>
          <button
            onClick={increment}
            data-action="increment"
            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span class="m-auto text-2xl font-thin" >+</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
