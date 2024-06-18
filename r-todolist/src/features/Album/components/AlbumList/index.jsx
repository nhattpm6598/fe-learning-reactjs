import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";
import "./style.scss";
import classname from "classname";

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
  onAlbumClick: PropTypes.func
};

AlbumList.defaultProps = {
  AlbumList: [],
  onAlbumClick: null
}

function AlbumList({ albumList, onAlbumClick }) {

  const handleAlbumClick = (album, idx) => {
    if(!onAlbumClick) return;

    onAlbumClick(album, idx);
  }

  return (
    <div>
      {/*
      <ul className="album-list">
        {albumList.map((album) => (
          <li key={album.id}>
            <Album album={album} />
          </li>
        ))}
      </ul>
      */}
      <ul className="album-list">
        {albumList.map((album, idx) => (
          <li key={album.id}>
            <div className="album">
              <div className="album__thumbnailUrl">
                <img src={album.thumbnailUrl} alt={album.name} />
              </div>
              <p
                className={classname({
                  completed: album.status === "completed",
                })}
                onClick={()=> handleAlbumClick(album, idx)}
              >
                {album.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
