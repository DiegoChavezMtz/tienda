import React from 'react';
import styles from './productCard.module.css';
import { Link } from 'react-router';

interface ProductCardProps {
    id: number,
    title : string,
    price : string,
    image : string
}

export const ProductCard: React.FC<ProductCardProps> = ({title , price , image , id}) => {
    return (
        <div className={styles.container}>
            <div>
                <h3>{title}</h3>
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={image} alt="" />
            </div>
            <div>
                <p>{price}</p>
                <button>Añadir al carrito</button>
                <Link to={`/detalle/${id}`}>detalle</Link>
            </div>
        </div>
    );
};
