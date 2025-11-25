import React ,{useEffect , useState} from 'react';
import { CategoryFilter } from '../../components/CategoryFilter /CategoryFilter';
import { getAllProducts } from '../../services/productsService';
export const Home: React.FC = () => {
    const [products,setProducts]=useState();

    useEffect(()=>{
        getAllProducts().then(response => setProducts(response));
    },[])
  return (
            <>
            <h1>Tienda prueba stori</h1>
            <div>
                {products ? 
                <CategoryFilter products={products}/>
                : <span>Aquí va a ir el spinner</span> }
            </div>
            </>
        )
};
