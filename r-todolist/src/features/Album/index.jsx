import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";
import queryString from "query-string";
import {
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom";
import TodoList from "../Todo/components/TodoList";

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

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });

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
    //setFilteredStatus("all");
    const queryParams = { status: "all" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompleteClick = () => {
    //setFilteredStatus("completed");
    const queryParams = { status: "completed" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNewClick = () => {
    //setFilteredStatus("new");
    const queryParams = { status: "new" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderedAlbumList = useMemo(() => {
    return albumList.filter(
      (album) => filteredStatus === "all" || filteredStatus === album.status
    );
  }, [albumList, filteredStatus]);

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || "all");
  }, [location.search]);

  return (
    <div>
      <h1> Album Yêu Thich</h1>
      <AlbumList
        albumList={renderedAlbumList}
        onAlbumClick={handleAlbumClick}
      />

      <div>
        <button onClick={handleShowAllClick}>show-all</button>
        <button onClick={handleShowCompleteClick}>show-completed</button>
        <button onClick={handleShowNewClick}>show-new</button>
      </div>
    </div>
  );
}

export default AlbumFeature;
