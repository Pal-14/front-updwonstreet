import React from "react";
import CardBiens from "./CardBiens"
import "./Catalog.css"


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

  let Url = `https://scrumbag-back-updownstreet.osc-fr1.scalingo.io/get-public-pic/`;
  let UrlPrivatePic = `https://scrumbag-back-updownstreet.osc-fr1.scalingo.io/get-private-doc/`;

  /* Affichage des biens */
  const renderItems = () => {
    console.log(props.itemListPublic, "itempublic");
    return props.itemListPublic.map((item, id) => {
      return <CardBiens item={item} id={id} />;
    });
  };

  /* Affichage front */
  return (
    <div class="containBien">
      <div >
        <h4>Liste des biens</h4>
        <p>Ici vous pouvez consulter les biens immobiliers proposés.</p>
      </div>

      <div class="listBien">
        {renderItems()}
      </div>
    </div>
  );
}

export default Catalog;
