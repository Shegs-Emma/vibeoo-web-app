import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { StyledButton } from './Global.styled';

interface ShowFollowBtnProps {
  isFollowing: boolean;
}

const followingShow = (isFollowing = false) => (isFollowing
  ? `background-color: yellow;
      color: black;
          `
  : `background-color: black;
      color: #fff;
          `);

const ShowPageContainer = styled.div``;

const ShowPageBannerContainer = styled.div`
  padding: 2rem 0 3rem 1rem;
  background-color: red;
`;

const ShowInfoContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
const ShowImageContainer = styled.div`
  flex-basis: 30%;
  & img {
    border-radius: 15px;
  }
  @media (min-width: 600px) {
    flex-basis: 10%;
  }
`;
const ShowDescContainer = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
`;
const ShowTitle = styled(Typography)`
  font-size: 2.35rem;
`;
const ShowAuthor = styled(Typography)<{component: 'body1'}>`
  color: black;
  text-transform: capitalize;
`;
const ShowGenre = styled(Typography)<{component: 'body1'}>`
  text-transform: capitalize;
`;

const ShowFollowBtn = styled(StyledButton)<ShowFollowBtnProps>`
  ${(props) => followingShow(props.isFollowing)}
  padding-left: 1.24rem;
  padding-right: 1.24rem;
  text-transform: capitalize;
  font-weight: bold;
  &:hover {
    ${(props) => followingShow(props.isFollowing)}
  }
`;

const ShareShowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin-top: 1rem;
  padding-right: 1rem;
  & > div {
    display: inline-block;
    margin-right: 1rem;
    cursor: pointer;
  }
`;

export {
  ShowPageContainer,
  ShowPageBannerContainer,
  ShowInfoContainer,
  ShowImageContainer,
  ShowDescContainer,
  ShowTitle,
  ShowAuthor,
  ShowGenre,
  ShowFollowBtn,
  ShareShowContainer,
};
