import React ,{useEffect , useState} from 'react';
import { CategoryFilter } from '../../components/CategoryFilter /CategoryFilter';
import { getAllProducts } from '../../services/productsService';
import { Spinner } from '../../components/Spinner/Spinner';
import { PopUpError } from '../../components/PopUpError.tsx/PopUpError';
import styles from './detalle.module.css'

export const Home: React.FC = () => {

    const [products,setProducts]=useState();
    const [error,setError]=useState(null);

    useEffect(()=>{
        getAllProducts().then(response => setProducts(response))
                        .catch(error => setError(error))
    },[])
  return (
            <>
                <div className={products ? styles.homeContainer : styles.homeContainerCenter}>
                    {products ? 
                        <CategoryFilter products={products}/>
                        : error ? <></> : <Spinner/>
                    }
                </div>
                {error && <PopUpError/>}
            </>
        )
};
