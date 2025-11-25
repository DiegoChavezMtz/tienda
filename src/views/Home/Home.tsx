import React ,{useEffect , useState} from 'react';
import { CategoryFilter } from '../../components/CategoryFilter /CategoryFilter';
import { getAllProducts } from '../../services/productsService';
import { useCart } from '../../hooks/useCart';
import { Spinner } from '../../components/Spinner/Spinner';
import { PopUpError } from '../../components/PopUpError.tsx/PopUpError';
export const Home: React.FC = () => {

    const [products,setProducts]=useState();
    const [error,setError]=useState(null);

    const {getProducts} = useCart();

    console.log(getProducts())

    useEffect(()=>{
        getAllProducts().then(response => setProducts(response))
                        .catch(error => setError(error))
    },[])
  return (
            <>
                <div>
                    {products ? 
                        <CategoryFilter products={products}/>
                        : <Spinner/>
                    }
                </div>
                {error && PopUpError}
            </>
        )
};
