import { EpisodeItemsContainer } from '../styles/EpisodeItems.styled';
import EpisodeItem from './EpisodeItem';
import awsData from '../data';
import { EpisodeProps } from '../types/app.d';

interface EpisodeItemsProps {
  episodes: Array<EpisodeProps>;
}

const EpisodeItems = ({ episodes }: EpisodeItemsProps) => {
  // console.log('epi',episodes)
  const ant = '';
  return (
    <EpisodeItemsContainer>
      {
        episodes.map( episodeData => (
          <EpisodeItem key={episodeData._id} podcastData={episodeData} />
        ))
      }
    </EpisodeItemsContainer>
  );
};

export default EpisodeItems;
