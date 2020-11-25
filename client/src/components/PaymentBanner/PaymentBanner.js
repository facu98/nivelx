// IMPORTO LIBRERIAS DE React
import React  from 'react';
import { NavLink, useHistory } from 'react-router-dom'
// IMPORTO STYLOS Y BOOTSTRAP
//import PaymentBannerStyles from './PaymentBanner.css'
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentBanner = () => {
    return (

    <div class="col-xs-12 posicioncuatrobotones botonesescritorio">
        <div class="row head" >
              <a href="/formas_de_pago/" target="_blank"> </a>

              <div class="col-xs-3 boton_uno">
              <a href="/formas_de_pago/" target="_blank">
                  <div class="col-xs-2 anchoImgBoton">
                    <img class="img-barra" src="assets/img/start.svg"></img>
        </div>
        </a><a href="https://bit.ly/2AMfT6k"></a><div class="col-xs-11 textocuatrobotones"><a href="https://bit.ly/2AMfT6k">
            <ul class="margen-texto">
              <li class="boton-titulo">¡CUOTAS SIN INTERÉS!</li>
              <li class="boton-subtitulo">En productos seleccionados</li>
            </ul>
          </a>

          </div>
        </div>


      <a href="/FormasDeEnvio/" target="_blank">
        <div class="col-xs-3 boton_dos">
          <div class="col-xs-2 anchoImgBoton">
            <img class="img-barra" src="assets/img/TruckPx_2.svg"></img>
          </div>
          <div class="col-xs-11 textocuatrobotones">
            <ul class="margen-texto">
              <li class="boton-titulo">ENVÍOS A TODO EL PAÍS</li>
              <li class="boton-subtitulo">¡Rápido, sin vueltas!</li>
            </ul>
          </div>
        </div>
      </a>

      <a href="/donde_estamos/" target="_blank">
        <div class="col-xs-3 boton_tres">
          <div class="col-xs-2 anchoImgBoton">
            <img class="img-barra" src="/assets/img/MapPx.svg"></img>
          </div>
          <div class="col-xs-11 textocuatrobotones">
            <ul class="margen-texto">
              <li class="boton-titulo">¡RETIRÁ GRATIS!</li>
              <li class="boton-subtitulo">¿Dónde estamos?</li>
            </ul>
          </div>
        </div>
      </a>

      <a href="/politica_garantias/" target="_blank">
        <div class="col-xs-3 boton_cuatro">
          <div class="col-xs-2 anchoImgBoton">
            <img class="img-barra" src="/assets/img/ShieldPx.svg"/>
          </div>
          <div class="col-xs-11 textocuatrobotones">
            <ul class="margen-texto">
              <li class="boton-titulo">COMPRA 100% SEGURA</li>
              <li class="boton-subtitulo">Garantias Oficiales</li>
            </ul>
          </div>
        </div>
      </a>

    </div>
  </div>
      )
}

export default PaymentBanner;
