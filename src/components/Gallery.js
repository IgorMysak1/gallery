import React, { useEffect, useState } from "react";
import { AboutPicture } from "./AboutPicture";
import {
  CreateObj,
  templateListOfPicture,
} from "../utilits/createDataAboutUser";
import { fetchGallery } from "../services/api";
import "../style/gallery.scss";

export const Gallery = () => {
  const [listOfPictures, setListOfPictures] = useState(
    new Array(10).fill("").map((_, index) => templateListOfPicture(index))
  );
  useEffect(() => {
    (async () => {
      const response = await fetchGallery();
      setListOfPictures(
        response.map((dataAboutPicture) => new CreateObj(dataAboutPicture))
      );
    })();
  }, []);
  return (
    <div className="gallery _container">
      {listOfPictures.map((card) => (
        <AboutPicture key={card.id} {...card} />
      ))}
    </div>
  );
};
