import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState({})
    const url = "http://localhost:4000"
    const [token, setToken] = useState("")
    const [food_list, setFoodList] = useState([])
    const addToCart = async (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post("http://localhost:4000/api/cart/add", { itemId }, { headers: { token } })
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post("http://localhost:4000/api/cart/remove", { itemId }, { headers: { token } })
        }
    }
    let totalcart = () => {
        let totalamount = 0;
        for (let item in cartItem) {
            if (cartItem[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item)
                totalamount = totalamount + (iteminfo.price * cartItem[item])
            }
        }
        return totalamount;

    }

    const getFoodList = async () => {
        const response = await axios.get(url + "/api/food/list")
        setFoodList(response.data.data)
    }


    const loadCartdata = async (token) => {
        const response = await axios.post("http://localhost:4000/api/cart/get", {}, { headers: { token } })
        setCartItem(response.data.data)
    }

    useEffect(() => {

        async function loadData() {
            await getFoodList()
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartdata(localStorage.getItem("token"))
            }
        }
        loadData()
    }, [])
    const store = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        totalcart,
        url,
        token,
        setToken

        // Define your global state and methods here
    };
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;