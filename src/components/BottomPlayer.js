import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  PlayCircleOutlineOutlined,
  PauseCircleOutlineOutlined,
  SkipNextOutlined,
  SkipPreviousOutlined,
  FavoriteBorderOutlined,
  CreditCardRounded,
} from "@material-ui/icons";
import { LinearProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import logo from "../assets/Logo.png";

const BottomPlayerStyle = styled.div`
  width: 100%;
  background: #282828;
  display: flex;
  flex: 4;
  height: 95px;
  .playingNow {
    flex: 1;
    display: flex;
    align-items: center;
    color: #ffffff;
    h1 {
      max-width: 120px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
    }
    > img {
      padding-left: 24px;
    }
    > div {
      padding-left: 16px;
      padding-right: 24px;
    }
  }
  .player {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;

    .progressBar {
      align-self: center;
      width: calc(100% * 496 / 683);
    }
    .playerButtons {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const BottomPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [value, setValue] = useState(0);
  const [id, setId] = useState(null);
  const [index, setIndex] = useState(0);
  const musicList = useSelector((state) => state.musicList);

  useEffect(() => {
    if (value > 100) {
      clearInterval(this.state.id);
      setId(null);
      setPlaying(false);
      setValue(0);
    }
  }, [value]);

  const nextMusic = () => {
    if (index < musicList.length - 1) {
      setIndex((prevState) => prevState + 1);
      setValue(0);
    }
  };

  const prevMusic = () => {
    if (index > 0) {
      setIndex((prevState) => prevState - 1);
      setValue(0);
    }
  };

  const playButtonHandler = () => {
    if (playing === true) {
      clearInterval(id);
      setPlaying(false);
      setId(null);
    } else {
      setPlaying(true);
      const intervalId = setInterval(() => {
        setValue((prevState) => prevState + 2);
      }, 200);
      setId(intervalId);
    }
  };

  return (
    <BottomPlayerStyle>
      <div className="playingNow">
        <img
          src={musicList.length === 0 ? logo : musicList[index].url}
          width={48}
          height={48}
          alt="Cover"
        />
        <div>
          <h1>{musicList.length === 0 ? "Title" : musicList[index].title}</h1>
          <h1
            style={{
              fontWeight: 400,
              fontSize: 12,
              marginTop: 1,
              opacity: 0.7,
            }}
          >
            Madness
          </h1>
        </div>
        <FavoriteBorderOutlined
          opacity={0.6}
          style={{ marginRight: 10 }}
          fontSize={"small"}
        />
        <CreditCardRounded opacity={0.6} fontSize={"small"} />
      </div>
      <div className="player">
        <div className="playerButtons">
          <SkipPreviousOutlined
            htmlColor={"white"}
            opacity={0.6}
            width={14}
            onClick={prevMusic}
          />
          {playing === false ? (
            <PlayCircleOutlineOutlined
              htmlColor={"white"}
              opacity={0.6}
              width={36}
              fontSize={"large"}
              style={{ margin: "0 35px 0 35px" }}
              onClick={playButtonHandler}
            />
          ) : (
            <PauseCircleOutlineOutlined
              htmlColor={"white"}
              opacity={0.6}
              width={36}
              fontSize={"large"}
              style={{ margin: "0 35px 0 35px" }}
              onClick={playButtonHandler}
            />
          )}

          <SkipNextOutlined
            htmlColor={"white"}
            opacity={0.6}
            width={14}
            onClick={nextMusic}
          />
        </div>
        <div className="progressBar">
          <LinearProgress
            value={value}
            variant="determinate"
            style={{ color: "white" }}
          />
        </div>
      </div>
      <div style={{ flex: 1 }} />
    </BottomPlayerStyle>
  );
};
export default BottomPlayer;
