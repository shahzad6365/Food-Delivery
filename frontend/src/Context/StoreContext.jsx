import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState({})
    const addToCart = (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    let totalcart = () => {
        let totalamount = 0;
        for( let item in cartItem){
            if(cartItem[item]>0){
                let iteminfo = food_list.find((product) => product._id === item)
                totalamount = totalamount + (iteminfo.price * cartItem[item])
            }
        }
        return totalamount;

    }
    const store = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        totalcart

        // Define your global state and methods here
    };
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;