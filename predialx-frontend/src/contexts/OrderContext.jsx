import { createContext, useState } from "react";

export const OrderContext = createContext({});

export function OrderContextProvider(props) {
    const [orders, setOrders] = useState([]);

    return (
        <OrderContext.Provider value={{orders, setOrders}}>
            {props.children}
        </OrderContext.Provider>   
    );
}