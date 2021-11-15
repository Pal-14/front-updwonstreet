import React from "react";
import appt1 from "../../img/appt1.jpg";

function CardBiens(props) {

    let Url = `http://localhost:5000/get-public-pic/`;

    console.log(props.item);
  return (
    <div className="best">
      <div class="card cardHome">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src={`${Url}${props?.item?.itemPublicData?.itemPicturesFromUser[1]}`}  />
        </div>
        <div class="card-contentHome">
          <span class="card-title activator grey-text text-darken-4">
            {props?.item?.itemPublicData?.description?.name}
          </span>
          <p>
            <a className="rouge">Voir le bien</a>
          </p>
        </div>

        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
          {props?.item?.itemPublicData?.description?.name}
          </span>
          <i class="material-icons right">close</i>
          <p>
          {props?.item?.itemPublicData?.description?.city}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardBiens;
