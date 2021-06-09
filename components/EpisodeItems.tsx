import { EpisodeItemsContainer } from '../styles/EpisodeItems.styled';
import EpisodeItem from './EpisodeItem';
import awsData from '../data';

const EpisodeItems = () => {
  const ant = '';
  return (
    <EpisodeItemsContainer>
      {
        awsData.map(({ podcastId, ...otherProps }) => (
          <EpisodeItem key={podcastId} podcastData={otherProps} />
        ))
      }
    </EpisodeItemsContainer>
  );
};

export default EpisodeItems;
