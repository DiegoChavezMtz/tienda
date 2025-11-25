import { useCartContext } from "../context/CartContext";

export const useCart = ()=>{
    const {cart , setCart} = useCartContext();

    const addProduct =(product : any)=>{
        const newCart = [...cart, product];
        console.log(newCart);
        setCart(newCart);
    }

    const getProducts = ()=>{
        return cart
    }

    const getTotal = ()=>{

        let total = 0;

        cart.forEach((element: { price: number }) => {
            total = total + element.price;
        });

        return total;

    }

    return {addProduct ,getProducts , getTotal}
}