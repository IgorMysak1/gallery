import React from "react";
import "../style/socialChain.scss";
export const SocialChain = ({ url, name, link }) => {
  console.log(link);
  return (
    <a href={link} target="_blank" rel="noreferrer" className="socialChain">
      <img className="socialChain__picture" src={url} alt="Social icon" />
      <p className="socialChain__text">{name}</p>
    </a>
  );
};
