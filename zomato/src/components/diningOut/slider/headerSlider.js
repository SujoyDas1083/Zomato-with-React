import React from "react";
import Slider from "react-slick";
import "./headerslider.css";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";

const HeaderSlider = () => {
  const sliderContent = [
    {
      src: "	https://b.zmtcdn.com/data/collections/8868e7345d624a79d5900711eb5f8d00_1696923263.png",
      title: "Best in Hyderabad",
      footer: "21 palces",
    },
    {
      src: "https://b.zmtcdn.com/data/collections/4d8bbdfe1fe2b4cfa8aad710676fcb61_1674847218.jpg",
      title: "Best in Hyderabad",
      footer: "21 palces",
    },
    {
      src: "	https://b.zmtcdn.com/data/collections/43ce271d3eba317d9174828a78fc56fa_1702619696.png",
      title: "Best in Hyderabad",
      footer: "21 palces",
    },
    {
      src: "https://b.zmtcdn.com/data/collections/57f7f839a8594abf4764d47d67151f68_1687954533.png",
      title: "Best in Hyderabad",
      footer: "21 palces",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="headerSlider">
      <h1>Collections</h1>
      <p>
        Explore curated lists of top restaurants, cafes, pubs, and bars in
        Hyderabad, based on trends
      </p>
      <div className="slider">
        <Slider {...settings}>
          {sliderContent.map((item, index) => {
            return (
              <div key={index} className="card">
                <img src={item.src} alt="images" />
                <div className="footer">
                  <h3>{item.title}</h3>
                  <span>{item.footer}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HeaderSlider;
