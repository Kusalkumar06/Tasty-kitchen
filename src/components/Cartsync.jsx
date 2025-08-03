import React, { useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { useSelector,useDispatch } from "react-redux";
import slice from "../redux/slices";

const actions = slice.actions

function Cartsync() {
  const firstLoad =useRef(true)
  const { items } = useSelector((store) => {
    return store.sliceState;
  });
  const dispatch = useDispatch();
  const jwttoken = Cookies.get("jwt_token");

  useEffect(() => {
    if (firstLoad.current){

       if (!jwttoken) return;

      const cart = localStorage.getItem(`cart_${jwttoken}`);
      if (cart !== null ){
        try{
          dispatch(actions.setCart(JSON.parse(cart)));
        } catch (e) {
          console.error("Failed to parse cart from localStorage", e);

        }
      } else{
        localStorage.setItem(`cart_${jwttoken}`, JSON.stringify([]));
      }
        
        
      firstLoad.current = false;
    }
  },[jwttoken])

  useEffect(() => {
     if (!jwttoken) return;
    console.log("Updated items", items);
    if (!firstLoad.current && jwttoken) {
      localStorage.setItem(`cart_${jwttoken}`, JSON.stringify(items));
    }
  }, [items, jwttoken]);

  return null;
}

export default Cartsync;
