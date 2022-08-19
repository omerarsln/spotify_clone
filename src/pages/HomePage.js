import PlaylistCard from "../components/PlaylistCard";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HomePage = () => {
  const recentlyPlayed = useSelector((state) => state.recentlyPlayed);
  const recommended = useSelector((state) => state.recommended);

  return (
    <>
      <h1>Yakında Çalanlar</h1>
      <CardContainer>
        {recentlyPlayed.map((item) => {
          return (
            <PlaylistCard key={item.id} type={"recentlyPlayed"} info={item} />
          );
        })}
      </CardContainer>
      <h1>
        Tavsiye Edilenler <br /> Sevdiğin her şeyden biraz dinle.
      </h1>
      <CardContainer>
        {recommended.map((item) => {
          return (
            <PlaylistCard key={item.id} type={"recommended"} info={item} />
          );
        })}
      </CardContainer>
    </>
  );
};

export default HomePage;
