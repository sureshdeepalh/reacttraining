import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getImage } from "../store/action";

function ImageDetailsView(props) {
  const params = useParams();
  const { image } = useSelector((state) => state.album);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImage(+params.id));
  }, [params, dispatch]);
  return (
    <div className="ImageDetailsView">
      <img src={image?.url} alt="" />
      <div className="details">
        <h3>{image?.title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
          recusandae officiis. Quia corrupti quod corporis accusamus, dicta
          ipsam blanditiis, commodi nam quasi quis dignissimos, porro tempora
          doloremque maiores reiciendis itaque.
        </p>
        <div className="backBtn" onClick={() => props.history.goBack()}>
          Go Back
        </div>
      </div>
    </div>
  );
}

export default ImageDetailsView;
