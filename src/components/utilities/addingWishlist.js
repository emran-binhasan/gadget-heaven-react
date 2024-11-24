// Get old Local Data

import toast from "react-hot-toast";
const getOldListData = () => {
    const oldWLData = localStorage.getItem('Wishlist');
    if (oldWLData) {
    const parsedWLData = JSON.parse(oldWLData);
    return Array.isArray(parsedWLData) ? parsedWLData : [];      
    }
    return []; 
  };
  
  // Add to Local Storage
    const addToWishlist = (data) => {
    document.getElementById(data.id).setAttribute('disabled','true')
    const allWLData = getOldListData();
    const addedWLData = allWLData.some(each =>each.id == data.id)
    if(!addedWLData){
        allWLData.push(data);
        toast.success('Item added to Wishlist succesfully !');
    }
    else{
      
      toast.error("Product already added in wishlist!")
      document.getElementById(data.id).setAttribute('disabled',)
    }
    localStorage.setItem('Wishlist',JSON.stringify(allWLData)); // Save updated array to localStorage
    };


    // remove
    const removeFromWishList = (id) => {
      const allWLData = getOldListData();
     
      const remainingWL = allWLData.filter(each => each.id != id)
      localStorage.setItem('Wishlist',JSON.stringify(remainingWL))
      toast.error('Item removed from wishlist')
    }








    
  export { addToWishlist, getOldListData,removeFromWishList };

