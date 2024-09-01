import { createContext, useEffect, useState } from "react";
import { food_list } from "../image/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    //    yeh code ek item ko cartItem state mein add karta hai agar wo pehle se cart mein mojood nahi hai. Agar item pehle se cart mein hai, toh function kuch nahi karta
    const [cartItem, setCartItem] = useState({})

    const addToCart = (itemId) => {
        // Agar item cart mein mojood nahi hai, yeh line cartItem state ko update karti hai aur naya item add karti hai.
        //ek dish toh bydefault add hogi or else mai ek or add hogi
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))

            //is else mai ye batarahi hu k ek item add hoga agr woh 1 or dish order kre ga to oski quantity add hojaye
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getCartAmountTotal = () => {
        //by default cart mai total amount 0 hogi or phir agr cart mai kuch add hoga to iski value increase hogi
        //Yeh function basically cart mai jitne items hain, un sab ka total price calculate karta hai aur return karta hai.
        //Pehle, ek variable totalAmount initialize kiya gaya hai jismein 0 rakha gaya hai. Yeh total amount ko store karega
        //Yeh for loop cartItem object ke har item ke liye chal raha hai.
        //Yeh condition check karti hai ke agar cartItem mai kisi item ki quantity 0 se zyada hai, tab hi us item ka price calculate hoga
        //Yeh line food_list array se us item ki details find karti hai jiska _id cartItem ke item ke barabar hota hai.
        //Is line mai item ka price uski quantity ke saath multiply karke totalAmount mai add kiya ja raha hai.
        //Finally, jab loop khatam ho jata hai, to yeh function total calculated amount return kar deta hai
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItem[item]
            }

        }
        return totalAmount;
        
    }

    useEffect(() => {
        console.log(cartItem)
    }, [cartItem])




    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getCartAmountTotal

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider;






