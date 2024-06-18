import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import classname from "classname";

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div>
      <div className="album">
        <div className="album__thumbnailUrl">
            <img src= {album.thumbnailUrl} alt={album.name}/>
        </div>
        <p className={classname({completed: album.status ==='completed'})}>{album.name}</p>        
      </div>
    </div>
  );
}

export default Album;
