import React, { useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import styled from "styled-components";
import { Add, Edit } from "@material-ui/icons";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { addRecentlyPlayed, addRecommended } from "../store/actions";
import { connect } from "react-redux";
import Modal from "../commons/Modal";
import { TextField } from "@material-ui/core";

const PlaylistCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <PlaylistCardStyle>
        <div>
          <img src={props.info.images[0].url} alt={"cover"} />
          <div className="playIcon">
            <PlayArrowIcon />
          </div>
        </div>

        <div className="title">{props.info.name}</div>
        <div className="description">{props.info.description}</div>
        <div className="buttons">
          <Add onClick={handleOpen} />
          <Edit onClick={handleOpen} />
        </div>
      </PlaylistCardStyle>
      <Modal open={showModal} handleClose={handleClose}>
        <Container>
          <img src={props.info.images[0].url} alt={"cover"} />
          <TextField
            label="Name"
            value={props.info.name}
            style={{ marginTop: "20px" }}
          />
          <TextField
            label="Description"
            value={props.info.description}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          />
        </Container>
      </Modal>
    </>
  );
};

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addRecentlyPlayed,
      addRecommended,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(PlaylistCard);

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  img {
    margin: 30px;
    box-shadow: 5px 5px 10px #000000;
    min-width: 171px;
    min-height: 171px;
    width: 200px;
    height: 200px;
  }
`;

const PlaylistCardStyle = styled.div`
  :hover {
    .playIcon {
      visibility: visible;
    }
  }
  border-radius: 10px;
  background: #2d2e2e;
  width: 203px;
  height: 273px;
  margin: 20px 10px 0 10px;
  text-align: center;
  > div {
    position: relative;
  }
  img {
    margin: 16px 16px 0 16px;
    box-shadow: 5px 5px 10px #000000;
    min-width: 171px;
    min-height: 171px;
    width: 171px;
    height: 171px;
  }
  .playIcon {
    visibility: hidden;
    :hover {
      width: 40px;
      height: 40px;
    }
    display: flex;
    background: green;
    border-radius: 100%;
    position: absolute;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    bottom: 10px;
    right: 20px;
  }
  .title {
    margin: 10px 5px 5px 5px;
    font-size: 14px;
    font-weight: 500;
  }
  .description {
    max-height: 45px;
    white-space: nowrap;
    margin: 5px;
    font-size: 12px;
    font-weight: 500;
    opacity: 0.6;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .buttons {
    display: flex;
    justify-content: space-evenly;
  }
`;
