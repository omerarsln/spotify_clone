import React from "react";
import styled from "styled-components";
import {
  SearchOutlined,
  HomeOutlined,
  LibraryBooksOutlined,
} from "@material-ui/icons";
import logo from "../assets/Logo.png";

import { Link } from "react-router-dom";
import AllPlaylists from "./AllPlaylists";

const SidebarStyle = styled.div`
  background: #030303;
  width: 225px;
  min-width: 225px;
  color: #ffffff;

  img {
    margin-top: 40px;
    margin-left: 25px;
    margin-bottom: 25px;
  }
  button {
    :hover {
      background: green;
    }
    width: 100%;
    align-items: center;
    display: flex;
    padding: 5px 5px 5px 24px;
    text-decoration: none;
    color: #ffffff;
    background-color: #030303;
    border: none;
    font-size: 14px;
  }
`;

const Sidebar = () => {
  return (
    <SidebarStyle>
      <img src={logo} alt="logo" width={148} />
      <button>
        <HomeOutlined width={14} height={16} opacity={0.6} />
        <Link to="/">Giriş</Link>
      </button>
      <button>
        <SearchOutlined width={14} height={16} opacity={0.6} />
        <Link to="/gozat">Gözat</Link>
      </button>
      <button>
        <LibraryBooksOutlined width={14} height={16} opacity={0.6} />
        <Link to="/kitaplık">Kitaplık</Link>
      </button>
      <AllPlaylists />
    </SidebarStyle>
  );
};

export default Sidebar;
