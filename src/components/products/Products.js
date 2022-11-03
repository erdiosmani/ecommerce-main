import React from "react";

import Card from "../UI/Card";

function Products({
  setCartItems,
  addToProducts,
  products,
  showModalHandler,
  setSelectedItem,
}) {
  return (
    <>
      <div className="grid grid-cols-4 gap-2 justify-items-center">
        {products.map((product) => (
          <Card
            key={product.id}
            details={product}
            setCartItems={setCartItems}
            addToProducts={addToProducts}
            showModalHandler={showModalHandler}
            setSelectedItem={setSelectedItem}
          />
        ))}
      </div>
    </>
  );
}

export default Products;
