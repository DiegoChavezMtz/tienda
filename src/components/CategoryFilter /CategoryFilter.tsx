import React, { useEffect, useRef, useState } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { setCategories } from './utils/setCategories';
import styles from './category.module.css'

interface CategoryFilterProps {
    products : Array<any>
}
 
export const CategoryFilter: React.FC<CategoryFilterProps> = ({products}) => {

    const [productsCategories , setProductsCategories] = useState<Array<string>>();
    const [categorySelected , setCategorySelected] = useState<string>('all');
    const categorySelector = useRef<any>('all');

    const handleCategoryChange = ()=>{
        console.log(categorySelector.current.value);
        setCategorySelected(categorySelector.current.value)
    }

    useEffect(()=>{
        setProductsCategories(setCategories(products));
    },[products])

    return (
        <div>
            <div className={styles.selectorContainer}>
                <select className={styles.select} ref={categorySelector} onChange={handleCategoryChange}>
                    <option value="all">-- Todo (Selecciona una categoría)</option>
                    {products && productsCategories?.map((item,key)=>{
                            return <option value={item} key={key}>{item.toUpperCase()}</option>
                        })
                    }
                </select>
            </div>
            <div className={styles.productsContainer}>
                {products && products.map((item : any, key : any)=>{

                                if(categorySelected != 'all'){
                                    if(categorySelected == item.category){
                                        return <ProductCard 
                                                    key={key}
                                                    item={item}
                                                />
                                    }
                                }else{
                                return <ProductCard 
                                                key={key}
                                                item={item}/>
                                }
                            })
                    
                }
            </div>
            
        </div>
    );
};