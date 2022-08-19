import React from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import profilePic from "../assets/profile.jpg";

export const MainHeaderStyle = styled.div`
  align-items: center;
  display: flex;
  background: linear-gradient(113.83deg, #121212 0.59%, #121212 99.74%);
  padding: 30px;

  > button {
    display: flex;
    width: 24px;
    height: 24px;
    margin: 0 10px 0 0;
    align-items: center;
    background: black;
    text-decoration: none;
    border-radius: 100%;
    border: none;
  }
  > input {
    margin: 0 0 0 24px;
    text-align: center;
    color: white;
    border-radius: 20px;
    font-size: 20px;
    border: none;
    background: #2d2e2e;
    width: 370px;
    height: 35px;
  }
  > input:focus {
    outline: none;
  }
  > div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 35px;
    > div {
      height: 100%;
      justify-content: flex-end;
      width: 203px;
      border-radius: 27px;
      background: #2d2e2e;
      align-items: center;
      display: flex;
      color: white;
      > img {
        margin-left: 8px;
        border-radius: 100%;
      }
      > p {
        font-size: 14px;
        font-weight: 500;
        opacity: 0.6;
        width: 100%;
        text-align: center;
      }
    }
  }
`;

const MainHeader = () => {
  return (
    <MainHeaderStyle>
      <button>
        <ChevronLeft htmlColor={"white"} opacity={0.6} />
      </button>
      <button>
        <ChevronRight htmlColor={"white"} opacity={0.6} />
      </button>
      <input type="text" placeholder="Ara" />
      <div>
        <div>
          <img src={profilePic} alt="profile" width={24} height={24} />
          <p>Ömer Arslan</p>
        </div>
      </div>
    </MainHeaderStyle>
  );
};

export default MainHeader;
