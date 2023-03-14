import React from 'react'
import Card from "./Card"
import Slider from 'react-slick'

const data = [
  { img: "/images/vr.jpg" },
  { img: "/images/vr.jpg" },
  { img: "/images/vr.jpg" },
  { img: "/images/vr.jpg" },
  { img: "/images/vr.jpg" },
]

const Test = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <>
      <div name = "Data" className = "w-full py-5 bg-gradient-to-b from-black to-gray-800">
        <h1 className = "text-4xl pt-8 pb-4 px-24 font-semibold max-md:text-center text-white">Happy Client Works</h1>
      
        <div className = "relative px-24 py-10">
          <Slider {...settings}>
            {data.map((el, index) => <Card key = {index} img = {el.img} />)}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Test
