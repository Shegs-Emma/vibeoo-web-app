// import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    /* border: 1px solid green; */
    background-color: black;
    padding: 2rem;
`;
const FooterLogoContainer = styled.div`
    /* border: 1px solid red; */
    width: 35%;
    margin-bottom: 1rem;
    @media(min-width:600px){
        /* margin-bottom: 21rem; */
    }
`;

const FooterLinkHeading = styled.h6`
    margin: 0;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem;
`;

const FooterLinkContainer = styled.ul`
    list-style: none;
    padding-left: 0;
    /* border: 1px solid red; */
    
`;

const FooterLink = styled.li`
    color: #fff;
    font-weight: lighter;
    cursor: pointer;
    border: 1px solid yellow;
`;
const StyledFooterGrid = styled.div`
    /* border: 1px solid yellow; */
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    & > * {
        flex-basis: 50%;
    }
`;
const StoreImgContainer = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    
    @media(max-width: 750px){
        display: none;
    }
`;
const PlayStoreImg = styled.div`
    cursor: pointer;
`;
const AppStoreImg = styled.div`
    margin-left: 1rem;
    cursor: pointer;
`;

const FooterCopyright = styled.p`
    color: #fff;
    margin-bottom: 2rem;
    margin-top: 3rem;
`;

export {
  FooterContainer, FooterLogoContainer, FooterLinkContainer, FooterLink, FooterLinkHeading, FooterCopyright, StyledFooterGrid, StoreImgContainer, PlayStoreImg, AppStoreImg,
};
