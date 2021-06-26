import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { ButtonWithIcon, GlobalDropdownMenu, GlobalDropdownLink } from './Global.styled';

interface BannerTextProps {
    component: 'h1' | 'h2'
}

const activePage = () => (
  `background-color: black;
      color: #fff;
      padding-top: 0.48rem;
      padding-bottom: 0.48rem;
          `
);

const ListenIndexContainer = styled.div`
    background-color: black;
`;

const BannerContainer = styled.div`
    background-color: #FFD500;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    @media(min-width: 550px){
        justify-content: space-between;
        align-items: center;
        flex-flow: row-reverse nowrap;
        /* background-color: red; */
    }
`;

const BannerImgContainer = styled.div`
    width: 60%;
    margin: 0 auto 1rem;
    text-align: center;

    @media(min-width: 550px){
        width: 100%;
    }
`;

const BannerText = styled(Typography)<BannerTextProps>`
    color: black;
    font-size: 1.25rem;
    margin-bottom: 1rem;
    font-weight: 700;
`;

const ExploreNavigationContainer = styled.div`
    padding: 1rem 2rem;
    background-color: black;
    /* border: 1px solid blue; */
`;

const ExploreRecommendationContainer = styled.div`
    /* border: 1px solid green; */
    padding: 0 2rem;
    background-color: black;
    color: #fff;
   
`;
const ExploreRecommendationTitle = styled.p`
    font-weight: bold;
`;

const RecommendationDropdownBtn = styled(ButtonWithIcon)<{screensize: string}>`
    width: 33.63%;
    min-width: fit-content;
    @media(min-width: 549px){
        display: ${(props) => (props.screensize === 'mobile' ? 'none' : 'flex')};
        width: 43.63%;
    }
    @media(max-width: 549px){
        display: ${(props) => (props.screensize === 'desktop' ? 'none' : 'flex')};
    }
`;

const RecommendationDropdownMenu = styled(GlobalDropdownMenu)`
    background-color: #fff;
    width: 30.63%;
    & .MuiListItem-gutters {
        padding-left: 0;
        padding-right: 0;
    }
    @media(min-width: 549px) {
        width: 13.63%;
    }
`;

const RecommendationDropdownLink = styled(GlobalDropdownLink)`
     ${(props) => (props.isActiveContent ? activePage() : '')}
`;

const ExploreEpisodesContainer = styled.div``;

export {
  BannerContainer, BannerImgContainer, BannerText, ExploreNavigationContainer,
  ExploreRecommendationContainer, ExploreRecommendationTitle, ListenIndexContainer,
  RecommendationDropdownBtn, RecommendationDropdownMenu, RecommendationDropdownLink, 
  ExploreEpisodesContainer
};
