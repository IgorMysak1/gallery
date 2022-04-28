import React, { useState } from "react";
import { SocialChain } from "./SocialChain";
import "../style/card.scss";

export const Card = ({ setIsOpenCard, user, other, social }) => {
  const [openOnAllScreen, setOpenOnAllScreen] = useState(false);
  return (
    <div className="card">
      <img
        onClick={() => setIsOpenCard((prev) => !prev)}
        className="card__cross"
        src="img/cross.svg"
        alt="Cross"
      />
      <div
        className="card__picture"
        onClick={() => setOpenOnAllScreen(!openOnAllScreen)}
      >
        <img
          src={other.picture_url}
          alt="_Picture"
          className={openOnAllScreen ? "open" : ""}
        />
      </div>
      <div className="card__user">
        <div className="card__username">
          <img src={user.avatar} alt="Avatar" />
          <p className="card__name">{user.name}</p>
        </div>
        <p className="card__bio">{user.bio}</p>
        <div className="card__info">
          <p>Some more info:</p>
          <ul>
            <li>Location: {other.location}</li>
            <li>Photos: {other.amountPhotos}</li>
            <li>Likes: {other.amountLikes}</li>
            <li>
              Portfolio:{" "}
              <a href={user.portfolio_url} target="_blank" rel="noreferrer">
                (url)
              </a>
            </li>
          </ul>
        </div>
        <div className="card__social">
          {!!social.twitter && (
            <SocialChain
              link={`https://twitter.com/${social.paypal_email}`}
              url="img/twitter.svg"
              name="twitter"
            />
          )}
          {!!social.instagram && (
            <SocialChain
              link={`https://www.instagram.com/${social.instagram}/?hl=uk`}
              url="img/instagram.svg"
              name="instagram"
            />
          )}
        </div>
      </div>
    </div>
  );
};
