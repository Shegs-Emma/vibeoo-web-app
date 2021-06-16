import Image from 'next/image';
import { useSession } from 'next-auth/client';
import { useAppDispatch } from '../redux/hooks';
import { showModalDialog } from '../redux/modal/modalSlice';
import { setPodcastPlayerData } from '../redux/player/playerSlice';
import {
  EpisodeItemContainer, EpisodeItemImgContainer, EpisodeItemDescContainer,
  EpisodeItemDetailContainer, EpisodeItemDetailPlayContainer, EpisodeItemTitle,
  EpisodeItemSummaryText,
} from '../styles/EpisodeItem.styled';
import stringTruncate from '../utils/string-truncate';

interface EpisodeItemProps {
  podcastData: {
    podcastImageUrl: string,
  podcastTitle: string,
  podcastNaration: string,
  podcastAudioUrl: string
  }

}

const EpisodeItem = ({ podcastData }:EpisodeItemProps) => {
  const [session, loading] = useSession();
  const {
    podcastImageUrl, podcastTitle, podcastNaration,
  } = podcastData;
  const dispatch = useAppDispatch();
  return (
    <EpisodeItemContainer>
      <EpisodeItemImgContainer>
        <Image
          src={podcastImageUrl}
          alt="episode art"
          width={200}
          height={200}
          layout="responsive"
        />
      </EpisodeItemImgContainer>
      <EpisodeItemDescContainer>
        <EpisodeItemTitle variant="h6">{podcastTitle}</EpisodeItemTitle>
        <EpisodeItemSummaryText>
          {stringTruncate(podcastNaration)}
        </EpisodeItemSummaryText>
        <EpisodeItemDetailContainer>
          <EpisodeItemDetailPlayContainer
            onClick={() => {
              dispatch(setPodcastPlayerData(podcastData));
              if (!session && !loading) dispatch(showModalDialog('playPodcast'));
            }}
          >
            <Image
              src="/episode_play_img.svg"
              alt="episode play btn image"
              width={200}
              height={200}
              layout="responsive"
            />
          </EpisodeItemDetailPlayContainer>
          <EpisodeItemSummaryText>FEB 20. 10mins</EpisodeItemSummaryText>
        </EpisodeItemDetailContainer>
      </EpisodeItemDescContainer>
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;
