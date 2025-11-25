export const setCategories = (products : Array<any>)=>{
    const categories : Array<string> = [];

    products.forEach((element: { category: string; }) => {
        if(!categories.includes(element.category)){
            categories.push(element.category)
        }
        
    });
   
    return categories
    
}