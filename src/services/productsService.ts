const URL = 'https://fakestoreapi.com/products';

export const getAllProducts = async ()=>{

    try {
        const response = await fetch(URL);

        const dataProducts = await response.json()

        return dataProducts;
        
    } catch (error) {
        return error
        
    }
    
            
}

export const getSingleProduct = async (id : string)=>{

    try {
        const response = await fetch(`${URL}/${id}`);

        const dataProduct = await response.json()

        return dataProduct;
        
    } catch (error) {

        return error
        
    }

}