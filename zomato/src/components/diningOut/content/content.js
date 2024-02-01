import React from "react";
import "./content.css";

const Content = () => {
  const contentList = [
    {
      img: "https://b.zmtcdn.com/data/pictures/0/19113070/338aa283d6f1375cd1d6b87a5381bf16_featured_v2.jpg",
      discount: "Flat 15% OFF",
      address: {
        name: "Ohri's Uppu",
        place: "Andra, South Indian, Desi",
        landmark: "Banjara Hills, Hyderabad",
        rateing: "4.4*",
        price: "1,200 for two",
        distance: "6.1km",
      },
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/0/19113070/338aa283d6f1375cd1d6b87a5381bf16_featured_v2.jpg",
      discount: "Flat 15% OFF",
      address: {
        name: "Ohri's Uppu",
        place: "Andra, South Indian, Desi",
        landmark: "Banjara Hills, Hyderabad",
        rateing: "4.4*",
        price: "1,200 for two",
        distance: "6.1km",
      },
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/0/19113070/338aa283d6f1375cd1d6b87a5381bf16_featured_v2.jpg",
      discount: "Flat 15% OFF",
      address: {
        name: "Ohri's Uppu",
        place: "Andra, South Indian, Desi",
        landmark: "Banjara Hills, Hyderabad",
        rateing: "4.4*",
        price: "1,200 for two",
        distance: "6.1km",
      },
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/0/19113070/338aa283d6f1375cd1d6b87a5381bf16_featured_v2.jpg",
      discount: "Flat 15% OFF",
      address: {
        name: "Ohri's Uppu",
        place: "Andra, South Indian, Desi",
        landmark: "Banjara Hills, Hyderabad",
        rateing: "4.4*",
        price: "1,200 for two",
        distance: "6.1km",
      },
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/0/19113070/338aa283d6f1375cd1d6b87a5381bf16_featured_v2.jpg",
      discount: "Flat 15% OFF",
      address: {
        name: "Ohri's Uppu",
        place: "Andra, South Indian, Desi",
        landmark: "Banjara Hills, Hyderabad",
        rateing: "4.4*",
        price: "1,200 for two",
        distance: "6.1km",
      },
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/0/19113070/338aa283d6f1375cd1d6b87a5381bf16_featured_v2.jpg",
      discount: "Flat 15% OFF",
      address: {
        name: "Ohri's Uppu",
        place: "Andra, South Indian, Desi",
        landmark: "Banjara Hills, Hyderabad",
        rateing: "4.4*",
        price: "1,200 for two",
        distance: "6.1km",
      },
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/0/19113070/338aa283d6f1375cd1d6b87a5381bf16_featured_v2.jpg",
      discount: "Flat 15% OFF",
      address: {
        name: "Ohri's Uppu",
        place: "Andra, South Indian, Desi",
        landmark: "Banjara Hills, Hyderabad",
        rateing: "4.4*",
        price: "1,200 for two",
        distance: "6.1km",
      },
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/0/19113070/338aa283d6f1375cd1d6b87a5381bf16_featured_v2.jpg",
      discount: "Flat 15% OFF",
      address: {
        name: "Ohri's Uppu",
        place: "Andra, South Indian, Desi",
        landmark: "Banjara Hills, Hyderabad",
        rateing: "4.4*",
        price: "1,200 for two",
        distance: "6.1km",
      },
    },
    {
      img: "https://b.zmtcdn.com/data/pictures/0/19113070/338aa283d6f1375cd1d6b87a5381bf16_featured_v2.jpg",
      discount: "Flat 15% OFF",
      address: {
        name: "Ohri's Uppu",
        place: "Andra, South Indian, Desi",
        landmark: "Banjara Hills, Hyderabad",
        rateing: "4.4*",
        price: "1,200 for two",
        distance: "6.1km",
      },
    },
  ];
  return (
    <div className="content">
      <h1>Trending dining restaurants in Hyderabad</h1>
      <div className="content_cards">
        {contentList.map((item, index) => {
          return (
            <div key={index} className="content_card">
              <img src={item.img} alt="" />
              <div className="content_footer">
                <span>{item.discount}</span>
              </div>
              <div className="content_data">
                <span>
                  <h3>{item.address.name}</h3>
                  <p>{item.address.place}</p>
                  <p>{item.address.landmark}</p>
                </span>
                <span>
                  <div className="ratting">{item.address.rateing}</div>
                  <p>{item.address.price}</p>
                  <p>{item.address.distance}</p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
