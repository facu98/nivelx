import React from 'react';
import styles from './Product.module.css';

const productTemplate = ({ title, description, price, quantity }) => {

}

export default function Product(selectedProduct) {
    return (
        <div className={styles.cardMargin}>
            <table>
                <tr>
                    <th>{selectedProduct.title}</th>
                    <th>{selectedProduct.price}</th>
                </tr>
                <tr>
                    <th>{selectedProduct.description}</th>
                </tr>
                <tr>
                    <th>cantidad</th>
                </tr>
                <tr>
                    <th>{selectedProduct.quantity}</th>

                </tr>
            </table>

        </div>
    );
}