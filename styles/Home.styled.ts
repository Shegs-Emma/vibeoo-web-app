import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import CustomButtonLink from '../components/CustomButtonLink';

const HomeListenInBanner = styled.div`
    background-image: url('/home_listen_bg.png');
    background-repeat: no-repeat;
    background-size: 100% 70vh;
    padding: 1rem 2rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`;
const HomeListenInBannerMainText = styled(Typography)`
    color: #fff;
    font-size: 1.85rem;
    line-height: 3.32rem;
    font-weight: 700;

`;
const HomeBannerSecondaryText = styled(Typography)<{component: 'p'}>`
    line-height: 2.32rem;
    font-weight: 600;
`;

const HomeDiscoverSection = styled.div`
    /* border: 1px solid green; */
    background-color: #E5E5E5;
    color: black;
    padding: 2rem 2rem 3.65rem;
    & .MuiGrid-container > .MuiGrid-grid-xs-12:first-child {
        text-align: center;
    }
    & .MuiGrid-container > .MuiGrid-grid-xs-12:last-child {
        align-self: center;
    }
`;

const HomeListenInImgContainer = styled.div`
        /* border: 1px solid green; */
        flex-basis: 300px;
        height: auto;
        @media(max-width: 749px){
            flex-basis: 200px;
        }
        @media(max-width: 749px){
            display: none;
        }
        @media(min-width: 750px) {
        flex-basis: 300px;
    }
`;

const HomeListenInIntroContainer = styled.div`
    /* border: 1px solid red; */
    flex-basis: 45%;
    padding-top: 2rem;
        @media(max-width: 749px){
            flex-basis: 100%;
        }
    @media(min-width: 658px) {
        flex-basis: 60%;
    }
        @media(min-width: 1000px) {
        flex-basis: 45%;
    }
`;

const StyledLink = styled(CustomButtonLink)`
    text-transform: none;
    color: #470D25; 
    font-weight: 700;
    background-color: yellow;
    padding-left: 1.48rem;
    padding-right: 1.48rem;
    border-radius: 50px;
    &:hover {
        background-color: yellow;
    }
`;

export {
  HomeListenInBanner, HomeListenInBannerMainText, HomeBannerSecondaryText,
  HomeDiscoverSection, HomeListenInImgContainer, HomeListenInIntroContainer, StyledLink,
};
