import React,{useState} from "react";

function Item({ name, category }) {
  const [incart,setcart]=useState(false)
  const changeclass= incart ? "in-cart" : ""
  function changestate(params) {
    setcart((incart)=>!incart);
  }
  
  
  return (
    <li className={changeclass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changestate}> {incart ? "Add to Cart":"Remove From Cart" } </button>
    </li>
  );
}

export default Item;
