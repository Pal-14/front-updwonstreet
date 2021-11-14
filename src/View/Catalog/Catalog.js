import React, { useEffect, useState } from "react";
import "./Catalog.css";
import CardBiens from "./CardBiens";

function Catalog(props) {
  /* Variables */
  let item = props?.item;

  /* NEW DATA FROM ITEMS YOU CAN ACCESS AND SHOW */
  let itemInfosFinance = props?.item?.itemPublicData?.funding;
  console.log("Check OUT WHATS INSIDE THIS ITEM INFO BOX ", itemInfosFinance);

  let itemPicturesFromUser = props?.item?.itemPublicData?.itemPicturesFromUser;
  console.log(
    "Check OUT WHATS INSIDE THIS ITEM PIC ARRAY",
    itemPicturesFromUser
  );

  let Url = `http://localhost:5000/get-public-pic/`;
  let UrlBien = `http://localhost:500/get-private-doc/`;

  /* Événements */

  /* Fonctions de filtre */

  /* Affichage des biens */
  const renderItems = () => {
    console.log(props.itemListPublic, "itempublic");
    return props.itemListPublic.map((item, id) => {
      return <CardBiens item={item} id={id} />;
    });
  };

  /* Affichage front */
  return (
    <div>
      <div>
        <h4>Liste des biens</h4>
        <p>Ici vous pouvez consulter les biens immobiliers proposés.</p>
      </div>

      <div >
        {renderItems()}
      </div>
    </div>
  );
}

export default Catalog;
