import React, { useState } from 'react';
import styles from './productCard.module.css';
import { Link } from 'react-router';
import { useCart } from '../../hooks/useCart';
import { Spinner } from '../Spinner/Spinner';

interface ProductCardProps {
    item : any
}

export const ProductCard: React.FC<ProductCardProps> = ({item}) => {

    const {addProduct} = useCart();
    const [loadingImg,setLoadingImg]= useState(true);

    const handleAddProduct = ()=>{
        addProduct(item)
    }
    const handleLoadImg = ()=>{
        setLoadingImg(false);
    }
    return (
        <div className={styles.productContainer}>
            <div className={styles.titleContainer}>
                <h3>{item.title}</h3>
            </div>
            <div className={styles.imgContainer}>
                {loadingImg && <Spinner/>}        
                <img onLoad={handleLoadImg} className={loadingImg? styles.imgHidden :styles.img} src={item.image} alt="" />
            </div>
            <div className={styles.descriptionContainer}>
                <p>$ {item.price}</p>
                <button onClick={handleAddProduct}>🛒  Añadir al carrito</button>
                <Link to={`/detalle/${item.id}`}>detalle</Link>
            </div>
        </div>
    );
};
