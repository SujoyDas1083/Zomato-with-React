import React, { useState } from "react";
import "./popularlocalities.css";

const PopularLocalities = () => {
  const [style, setStyle] = useState("hide");
  const [toggleLabel, setToggleLabel] = useState("SeeMore");

  const localities = [
    { title: "Park Street Area", footer: "175 places" },
    { title: "Sector 5, Salt Lake", footer: "234 places" },
    { title: "Sector 1, Salt Lake", footer: "243 places" },
    { title: "Ballygunge", footer: "170 places" },
    { title: "Southern Avenue", footer: "121 places" },
    { title: "Southern Avenue", footer: "121 places" },
    { title: "Southern Avenue", footer: "121 places" },
    { title: "Southern Avenue", footer: "121 places" },
    { title: "Southern Avenue", footer: "121 places" },
    { title: "Southern Avenue", footer: "121 places" },
    { title: "Southern Avenue", footer: "121 places" },
  ];
  const scContent = (item, index) => {
    return (
      <div key={index} className="sc_content">
        {/* <a href="/"> */}
        <div className="section">
          <div className="park">
            <h2>{item.title}</h2>
            <p>{item.footer}</p>
          </div>
          <i className="chevron">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1C1C1C"
              width="15"
              height="15"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              className="svg"
            >
              <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
            </svg>
          </i>
        </div>
        {/* </a> */}
      </div>
    );
  };
  let localitiesList = [];
  localities.forEach((item, index) => {
    localitiesList.push(
      index < 8 ? (
        scContent(item, index)
      ) : (
        <span key={index} className={style}>
          {scContent(item, index)}
        </span>
      )
    );
  });

  const onClickToggle = () => {
    setStyle(style === "show" ? "hide" : "show");
    setToggleLabel(toggleLabel === "SeeMore" ? "SeeLess" : "SeeMore");
  };

  return (
    <div className="footer_section">
      <h1>
        Popular location in and around <span>Kolkatta</span>
      </h1>

      <div className="footer_container">
        {localitiesList}
        <span onClick={onClickToggle} className="show">
          {scContent(
            toggleLabel === "SeeMore"
              ? { title: "See More", footer: "" }
              : { title: "See Less", footer: "" }
          )}
        </span>
      </div>
    </div>
  );
};

export default PopularLocalities;
