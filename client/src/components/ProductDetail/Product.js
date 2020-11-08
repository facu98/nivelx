import React, {useState, useEffect} from 'react';
import styles from './Product.module.css';


const productTemplate = ({ title, description, price, quantity }) => {

}





// funcionalidad para las imagenes pequeñas
/*
let productImg = document.getElementById("ProductImg");
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    productImg.src = smallImg[0].src;
}
smallImg[2].onclick = function () {
    productImg.src = smallImg[0].src;
}
smallImg[3].onclick = function () {
    productImg.src = smallImg[0].src;
}
*/

export default function Product({match}) {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/products/${match.params.id}`)
      .then((product) => product.json())
      .then((product) => {setProduct(product)})

  })

    return (
        <div>
            <div class = "small-container single-product">
                <div class = "row">
                    <div class = "col-2">
                        {/*src= "images/gallery-1.jpg" width="100%" id= "product-img"*/}

                        <div class= "small-img-row">
                            <div class= "small-img-col">
                                {/*src= "images/gallery-1.jpg" width="100%" class="small-img"*/}

                            </div>
                            <div class= "small-img-col">

                            </div>
                            <div class= "small-img-col">

                            </div>
                            <div class= "small-img-col">

                            </div>
                        </div>
                    </div>
                    <div class = "col-2">
                        <p>{product.category}</p>
                        <h1>{product.name}</h1>
                        <h4>{product.price}</h4>
                        {/*
                        <select>
                            <option>Select options</option>
                        </select>
                        */}


                        <h3>Details<i class="fa fa-indent"></i></h3>
                        <br/>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
