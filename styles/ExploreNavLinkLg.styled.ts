import styled from 'styled-components';
import CustomLink from '../components/CustomLink';

const activePage = () => (
  `border-bottom: 1px solid red;
  color: red;
  padding-bottom: .46rem;
    `
);

const ExploreNavigationLg = styled.div`
    margin-top: 1.16rem;
    /* border: 1px solid yellow; */
    @media(max-width:942px){
        display: none;
    }
`;
const ExploreNavLgLink = styled(CustomLink)<{isActiveContent: boolean}>`
    color: #fff;
    margin-right: 1rem;
    cursor: pointer;
    ${(props) => (props.isActiveContent ? activePage() : '')}
    
`;

export { ExploreNavigationLg, ExploreNavLgLink };
