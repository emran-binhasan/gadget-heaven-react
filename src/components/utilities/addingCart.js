import toast from "react-hot-toast";

// Get old Local Data
const getOldCartData = () => {
    const oldData = localStorage.getItem('Products');
    if (oldData) {
    const parsedData = JSON.parse(oldData);
    return Array.isArray(parsedData) ? parsedData : [];      
    }
    return []; 
  };
  
  // Add to Local Storage
    const addToCart = (data) => {
    const allData = getOldCartData();
    const addedData = allData.some(each =>each.id == data.id)
    if(!addedData){
        allData.push(data); 
        toast.success('Item added to Cart succesfully !')// Add new data to the array
        
    }
    else{
      toast.error('Item already added on Cart')
    }
    
    localStorage.setItem('Products',JSON.stringify(allData)); // Save updated array to localStorage
    };
    

    // remove
    const removeFromCart = (id) => {
      const allData = getOldCartData();
      const remaining = allData.filter(data => data.id != id)
      localStorage.setItem('Products',JSON.stringify(remaining))
      toast.error('Item removed from cart')
    }


  export { addToCart, getOldCartData ,removeFromCart };
  