import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { BackgroundShadow } from "./BackgroundShadow";
import "../style/aboutPicture.scss";

export const AboutPicture = ({ color, other, user, ...rest }) => {
  const [isOpenCard, setIsOpenCard] = useState(false);
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("scrollOff");
  }, [isOpenCard]);
  return (
    <div className="aboutPicture" style={{ background: color }}>
      <div
        onClick={() => setIsOpenCard(true)}
        className="aboutPicture__content"
      >
        <img
          style={{ minheight: "267px" }}
          className="aboutPicture__picture"
          src={other.picture_url}
          alt="_Picture"
        />
        <p className="aboutPicture__owner">{user.name}</p>
      </div>
      {isOpenCard && (
        <>
          <BackgroundShadow />
          <Card
            setIsOpenCard={setIsOpenCard}
            color={color}
            other={other}
            user={user}
            {...rest}
          />
        </>
      )}
    </div>
  );
};
