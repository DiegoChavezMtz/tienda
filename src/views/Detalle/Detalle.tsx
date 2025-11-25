import React , {useEffect,useState} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import { getSingleProduct } from '../../services/productsService';

export const Detalle: React.FC = () => {
    const params = useParams<string>();
    const [product, setProduct] = useState<any>();

    const idProduct  = params.idProduct

    useEffect(()=>{
        if(idProduct){
            getSingleProduct(idProduct).then(response => setProduct(response));
        }
    },[idProduct])

    return (
        <div>
            <Link to={'/'}>Volver</Link>
            {product && 
                <div>
                    <div>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <img src={product.image} alt="" />
                    </div>
                    <div>
                        <button>Añadir a carrito</button>
                    </div>
                </div>
            }
        </div>
    );
};