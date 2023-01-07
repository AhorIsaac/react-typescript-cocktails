import React from "react";
import { Link } from "react-router-dom";
import { CocktailProp } from "../context";

type CocktailComponentProps = CocktailProp & {
  key?: any;
};

const Cocktail: React.FC<CocktailComponentProps> = ({
  image,
  name,
  id,
  info,
  glass,
  key,
}: CocktailComponentProps): React.ReactElement => {
  return (
    <article className="cocktail glassmorphism">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="button-88">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
