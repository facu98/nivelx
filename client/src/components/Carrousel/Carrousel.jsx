
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



export default function () {
  return (
    <Carousel className="mb-5" >
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://www.necxus.com.ar/BannerPrincipal/banner_1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/optimize/o:f_webp/resources/exhibitors/MLA-aniversario/de35e170-e950-11ea-b3d2-23d954cc4cf0-home-slider_desktop.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-e55607e0-6fa4-4506-82ef-8a683436cf9c.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
   
  )
}
