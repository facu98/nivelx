import React from 'react';
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

export default function Product(selectedProduct) {
    return (
        <div>
            <div class = "small-container single-product">
                <div class = "row">
                    <div class = "col-2">
                        {/*src= "images/gallery-1.jpg" width="100%" id= "product-img"*/}
                        <img>Im a img</img>
                        <div class= "small-img-row">
                            <div class= "small-img-col">
                                {/*src= "images/gallery-1.jpg" width="100%" class="small-img"*/}
                                <img>img 1</img>
                            </div>
                            <div class= "small-img-col">
                                <img>img 2</img>
                            </div>
                            <div class= "small-img-col">
                                <img>img 3</img>
                            </div>
                            <div class= "small-img-col">
                                <img>img 4</img>
                            </div>
                        </div>
                    </div>
                    <div class = "col-2">
                        <p>{selectedProduct.category}</p>
                        <h1>{selectedProduct.title}</h1>
                        <h4>{selectedProduct.price}</h4>
                        {/* 
                        <select>
                            <option>Select options</option>
                        </select>
                        */}
                        <input type="number" value= "1"> quantity to buy</input>

                        <h3>Details<i class="fa fa-indent"></i></h3>
                        <br/>
                        <p>{selectedProduct.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}