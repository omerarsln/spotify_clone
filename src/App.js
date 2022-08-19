import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import { useEffect } from "react";
import {
  getAllPlaylists,
  getMusicList,
  getRecentlyPlayed,
  getRecommended,
} from "./store/actions";
import Main from "./components/Main";
import BottomPlayer from "./components/BottomPlayer";

const AppStyle = styled.div`
  width: 100%;
  height: 100vh;
`;
const TopStyle = styled.div`
  display: flex;
  height: calc(100vh - 95px);
`;

const App = (props) => {
  useEffect(() => {
    props.getMusicList();
    props.getAllPlaylists();
    props.getRecommended();
    props.getRecentlyPlayed();
  }, [props]);

  return (
    <AppStyle>
      <TopStyle>
        <Sidebar />
        <Main />
      </TopStyle>
      <BottomPlayer />
    </AppStyle>
  );
};

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getRecentlyPlayed,
      getRecommended,
      getMusicList,
      getAllPlaylists,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(App);
