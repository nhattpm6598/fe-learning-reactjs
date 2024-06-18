import React, { useState } from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const [albumList, setAlbumList] = useState([
    {
      id: 1,
      name: "Trang Re May Man",
      status: "new",
      thumbnailUrl:
        "https://tq6.mediacdn.vn/thumb_w/640/133514250583805952/2020/7/11/-1594456254224668535202.jpg",
    },
    {
      id: 2,
      name: "Cong Nhan May Man",
      status: "completed",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo85UTt4pAfMZ5DveNdQLdUioM8BPfX9q5dg&s",
    },
    {
      id: 3,
      name: "Sửa Ống Nước May Man",
      status: "new",
      thumbnailUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kindai_Mahjong_Swimsuit_Festival_%28April%2C_2023%29IMG_9659.jpg/260px-Kindai_Mahjong_Swimsuit_Festival_%28April%2C_2023%29IMG_9659.jpg",
    },
  ]);

  const [filteredStatus, setFilteredStatus] = useState("all");

  const handleAlbumClick = (album, idx) => {
    //console.log(album, idx);

    //clone current array to the new one
    const newAlbumList = [...albumList];

    //toggle state
    newAlbumList[idx] = {
      ...newAlbumList[idx],
      status: newAlbumList[idx].status === "new" ? "completed" : "new",
    };

    //update todo list
    setAlbumList(newAlbumList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus("all");
  };
  const handleShowCompleteClick = () => {
    setFilteredStatus("completed");
  };
  const handleShowNewClick = () => {
    setFilteredStatus("new");
  };

  const renderedAlbumList = albumList.filter(
    (album) => filteredStatus === "all" || filteredStatus === album.status
  );
  console.log(renderedAlbumList);

  return (
    <div>
      <h1> Album Yêu Thich</h1>
      <AlbumList albumList={renderedAlbumList} onAlbumClick={handleAlbumClick} />

      <div>
        <button onClick={handleShowAllClick}>show-all</button>
        <button onClick={handleShowCompleteClick}>show-completed</button>
        <button onClick={handleShowNewClick}>show-new</button>
      </div>
    </div>
  );
}

export default AlbumFeature;
