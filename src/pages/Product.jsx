import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";



function Product() {

  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productDate, setProductData] = useState(false)
  const [image, setImage] = useState("")


  const fetchProductData = async () => {
    products.map((item) => {
      if(item._id === productId) {
      setProductData (item);
      setImage(item.image[0])
      return null;

    }
    
    })

  }

  useEffect(() => {
    fetchProductData();
  },[productId, products])

console.log(productId);

  return productDate ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
{/* Product Data*/}
<div className="flex gap-12 sm:gap-13 flex-col sm:flex-row">
  {/* Product Images */}
  <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
    <div className="flex sm:flex-col oberflow-x-auto sm:overflow-y-scroll justify-between sm:justify-narmal sm:w-[18.7%] w-full">
      {
      productDate.image.map((item, index) => (

        <img src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"alt="" />
        
      ))
      }
        
    </div>
  </div>
  
  </div>

    </div>
  ) : <div className = "opacity-0">Loading...</div>
}

export default Product