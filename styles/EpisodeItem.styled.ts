import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const EpisodeItemContainer = styled.div`
    /* border: 1px solid green; */
    flex-basis: 25%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 0 .78rem 0 0;
    margin-bottom: 1.72rem;

    @media(max-width: 846px) {
        padding-bottom: 1rem;
        /* border: none; */
        border-bottom: 1px solid #fff;
    }
`;

const EpisodeItemImgContainer = styled.div`
    /* border: 1px solid yellow; */
    flex-basis: 33%;
    height: 200px;

    & img {
        border-radius: 15px;
    }
`;
const EpisodeItemDescContainer = styled.div`
    /* border: 1px solid red; */
    flex-basis: 62%;

    & * {
        margin: 0;
        line-height: 1.43rem;
    }
    & h3 {
        margin-top: 1rem;
    }
`;

const EpisodeItemDetailContainer = styled.div`
    /* border: 1px solid purple; */
    display: flex;
    align-items: center;
    margin-top: .63rem;
`;

const EpisodeItemTitle = styled(Typography)`
    font-size: 1.11rem;
    @media(max-width: 846px) {
        font-size: 0.92rem;
    }
`;
const EpisodeItemSummaryText = styled(Typography)`
    font-size: .71rem;
`;

const EpisodeItemDetailPlayContainer = styled.div`
    /* border: 1px solid purple; */
    flex-basis: 12%;
    margin-right: .64rem;
    cursor: pointer;
`;

export {
  EpisodeItemContainer, EpisodeItemImgContainer, EpisodeItemDescContainer,
  EpisodeItemDetailContainer, EpisodeItemDetailPlayContainer,
  EpisodeItemTitle, EpisodeItemSummaryText,
};
