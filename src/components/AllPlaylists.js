import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const AllPlaylistsStyle = styled.div`
  margin-top: 100px;
  width: 100%;
  h1 {
    opacity: 100%;
    font-weight: 200;

    margin-bottom: 15px;
    margin-left: 24px;
    font-size: 14px;
    letter-spacing: 0.15em;
  }
  input {
    margin: 0 0 10px 24px;
    text-align: center;
    color: white;
    border-radius: 20px;
    font-size: 20px;
    border: none;
    background: #2d2e2e;
    width: calc(100% - 48px);
    height: 35px;
    :focus {
      outline: none;
    }
  }

  > div {
    overflow: auto;
    height: 100%;
    h2 {
      margin-left: 24px;
      margin-top: 18px;
      font-size: 14px;
      font-weight: 500;
      opacity: 0.6;
    }
  }
`;

const AllPlaylists = () => {
  const allPlaylists = useSelector((state) => state.allPlaylists);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const changeHandler = (event) => {
    const filteredArray = allPlaylists.filter((item) => {
      return item.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setSearchTerm(event.target.value);
    setFilteredList(filteredArray);
  };
  return (
    <AllPlaylistsStyle>
      <h1>ÇALMA LİSTELERİN</h1>
      <input
        type="text"
        placeholder="Ara"
        value={searchTerm}
        onChange={changeHandler}
      />
      <div>
        {searchTerm.length === 0
          ? allPlaylists.map((item) => <h2 key={item.id}>{item.name}</h2>)
          : filteredList.map((item) => {
              return <h2 key={item.id}>{item.name}</h2>;
            })}
      </div>
    </AllPlaylistsStyle>
  );
};
export default AllPlaylists;
