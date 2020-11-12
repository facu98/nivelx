import React from 'react';
import {connect} from 'react-redux';

export default function shoppingCart(props) {
    return(
        <div className= "container" style={{paddingTop: '6rem'}}>
            <div className= "card shopping-cart">
                <div className= "card-header bg-dark text-light">
                    <i className= "fa fa-shopping-cart pr-2" aria-hidden="true">
                        Carrito
                    </i>
                </div>
                <div className= "card-body">
                    {/* Tendria q hacer un componente items. Luego un map para mostrarlos */}
                </div>
                <div className= "card-footer">
                    <div className= "pull-right" style={{margin: '10px'}}>
                        <div className= "pull-right" style={{margin: '5px'}}>
                            Precio total: <b>{/* variable precio */}USD</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}