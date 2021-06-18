import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useSession } from 'next-auth/client';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import stringTruncate from '../utils/string-truncate';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import PlayerPlaylist from './PlayerPlaylist';
import {
  LoggedInPlayerPlaylistContainer, LoggedInPlayerContainer, LoggedInPlayerControlContainer, PlaylistPlayIconButton, PlayerEpisodeImg, PlaylistIconPlayerImgContainer,
  PlayerEpisodeDesc,
} from '../styles/LoggedInPodcastPlayer.styled';
import PodcastPlayer from './PodcastPlayer';

const DynamicPodcastPlayer = dynamic(
  () => import('./PodcastPlayer'),
  { ssr: false },
);

const LoggedInPodcastPlayer = () => {
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [session, loading] = useSession();
  const podcastPlayerState = useAppSelector((state) => state.podcastPlayer);
  if (session && !loading) {
    return (
      <>
      <LoggedInPlayerContainer>
      <LoggedInPlayerPlaylistContainer showPlaylist={showPlaylist}>
          <PlayerPlaylist />
      </LoggedInPlayerPlaylistContainer>
      <LoggedInPlayerControlContainer>
      <PlaylistIconPlayerImgContainer>
      <PlaylistPlayIconButton onClick={() => setShowPlaylist(!showPlaylist)}>
          <PlaylistPlayIcon />
      </PlaylistPlayIconButton>
        <PlayerEpisodeImg>
          <Image
            src={podcastPlayerState.podcastImageUrl}
            alt="Episode art"
            width={25}
            height={25}
            layout="responsive"
          />
        </PlayerEpisodeImg>
        </PlaylistIconPlayerImgContainer>
        <PlayerEpisodeDesc>
          <p>{stringTruncate(podcastPlayerState.podcastTitle)}</p>
          <span>{stringTruncate(podcastPlayerState.podcastNaration)}</span>
        </PlayerEpisodeDesc>
        <DynamicPodcastPlayer podcastData={podcastPlayerState} isLoggedIn />
        </LoggedInPlayerControlContainer>
      </LoggedInPlayerContainer>
      </>
    );
  }
  return null;
};

export default LoggedInPodcastPlayer;
