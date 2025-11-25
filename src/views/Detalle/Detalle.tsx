import React , {useEffect,useState} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import { getSingleProduct } from '../../services/productsService';
import { useCart } from '../../hooks/useCart';
import styles from './detalle.module.css';

export const Detalle: React.FC = () => {

    const params = useParams<string>();
    const [product, setProduct] = useState<any>();
    const {getProducts , addProduct} = useCart();

    const idProduct  = params.idProduct;

    console.log(getProducts());

    const handleAddProducts = ()=>{
        addProduct(product);
    }

    useEffect(()=>{
        if(idProduct){
            getSingleProduct(idProduct).then(response => setProduct(response));
        }
    },[idProduct])

    return (
        <div>
            <div className={styles.mainContainer}>
                <Link to={'/'}><span className={styles.buttonBack}>{`<- Volver`}</span></Link>
            </div>
            {product && 
                <div className={styles.contentContainer}>
                    <div className={styles.imgContainer}>
                        <img src={product.image} alt="" />
                    </div>
                    <div className={styles.descriptionContainer}>
                        <h3>{product.title}</h3>
                        <span>
                            {product.rating.rate} ⭐️ {`(${product.rating.count})`}
                        </span>
                        <p>{product.description}</p>
                        <p>$ {product.price}</p>
                        <button onClick={handleAddProducts}>Añadir a carrito</button>
                    </div>
                </div>
            }
        </div>
    );
};