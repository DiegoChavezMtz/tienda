import { createContext , useContext , useState } from "react";

const cartContext = createContext<any>([]);

export const useCartContext = ()=>{
    const context = useContext(cartContext);

    if(!context){
        throw new Error('UseCartContext debe ser usado en CartProvider');
    }

    return context
}

export const CartProvider  = ({children}: any)=>{

    const [cart,setCart]= useState<any>([]);

    const toolCart : any= {cart , setCart};

    return(
        <cartContext.Provider value={toolCart}>
            {children}
        </cartContext.Provider>
    )
}