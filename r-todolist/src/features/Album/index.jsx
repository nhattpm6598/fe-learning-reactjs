import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Trang Re May Man",
      thumbnailUrl:
        "https://tq6.mediacdn.vn/thumb_w/640/133514250583805952/2020/7/11/-1594456254224668535202.jpg",
    },
    {
      id: 2,
      name: "Trang Re May Man",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo85UTt4pAfMZ5DveNdQLdUioM8BPfX9q5dg&s",
    },
    {
      id: 3,
      name: "Trang Re May Man",
      thumbnailUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kindai_Mahjong_Swimsuit_Festival_%28April%2C_2023%29IMG_9659.jpg/260px-Kindai_Mahjong_Swimsuit_Festival_%28April%2C_2023%29IMG_9659.jpg",
    },
  ];

  return (
    <div>
      <h1> Album Yêu Thich</h1>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
