import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {} from "react-router";

import AlbumCard from "../components/UI/AlbumCard";
import { getAlbum } from "../store/action";

function AlbumView(props) {
  const params = useParams();
  const history = useHistory();
  const { album } = useSelector((state) => state.album);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbum(+params.id));
  }, [params, dispatch]);

  const handleClick = (id) => {
    history.push(`/image/${id}`);
  };

  return (
    <div className="Home">
      {album.map((al, i) => {
        return (
          <AlbumCard
            key={i}
            handleClick={handleClick}
            id={al.id}
            title={al.title}
            image={al.url}
          />
        );
      })}
    </div>
  );
}

export default AlbumView;
