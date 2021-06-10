import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const VisitorPlayerContainer = styled.div`
    /* border: 1px solid black; */
    
`;

const VisitorPlayerHeading = styled(Typography)`
    /* border: 1px solid white; */
    text-align: center;
    padding-left: 2rem;
    padding-right: 2rem;
`;

const VisitorPlayerImageContainer = styled.div`
    /* border: 1px solid yellow; */
    width: 40%;
    margin: .73rem auto;

    & img {
        border-radius: 10px;
    }
`;

const VisitorPlayerTitle = styled(Typography)`
    text-align: center;
`;
const VisitorPlayerDesc = styled(Typography)`
    color: #fff;
`;

export {
  VisitorPlayerContainer, VisitorPlayerHeading, VisitorPlayerImageContainer,
  VisitorPlayerTitle, VisitorPlayerDesc,
};
