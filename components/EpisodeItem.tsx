import Image from 'next/image';
import NextLink from 'next/link';
import { useSession } from 'next-auth/client';
import { useMutation  } from 'react-query'
import { useAppDispatch } from '../redux/hooks';
 import { addToUserPlaylist, removeFromUserPlaylist } from '../lib/api/user-api-helpers';
import { showModalDialog } from '../redux/modal/modalSlice';
import { setPodcastPlayerData } from '../redux/player/playerSlice';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import {
  EpisodeItemContainer, EpisodeItemImgContainer, EpisodeItemDescContainer,
  EpisodeItemDetailContainer, EpisodeItemDetailPlayContainer, EpisodeItemTitle,
  EpisodeItemSummaryText, EpisodeItemLink, EpisodeItemAddToPlaylistIconButton
} from '../styles/EpisodeItem.styled';
import stringTruncate from '../lib/utils/string-truncate';
import { EpisodeProps } from '../types/app.d';

interface EpisodeItemProps {
  podcastData: EpisodeProps;

}

const EpisodeItem = ({ podcastData }:EpisodeItemProps) => {
  const [session, loading] = useSession();
  const {
    _id, episodeLogo, episodeTitle, episodeDescription, showSlug, isInUserPlaylist
  } = podcastData;
  const addToPlaylistMutation = useMutation((episodeUpdateData:{episodeId: string, userId: string}) => addToUserPlaylist(episodeUpdateData))
  const removeFromPlaylistMutation = useMutation((episodeUpdateData:{episodeId: string, userId: string}) => removeFromUserPlaylist(episodeUpdateData))
  const dispatch = useAppDispatch();
  return (
    <EpisodeItemContainer>
      <EpisodeItemImgContainer>
      <NextLink href={`/show/${showSlug}`} passHref>
      <EpisodeItemLink >
        <Image
          src={episodeLogo}
          alt="episode art"
          width={200}
          height={200}
          layout="responsive"
        />
        </EpisodeItemLink>
        </NextLink>
      </EpisodeItemImgContainer>
      <EpisodeItemDescContainer>
       <NextLink href={`/show/${showSlug}`} passHref>
      <EpisodeItemLink>
        <EpisodeItemTitle variant="h6">{episodeTitle}</EpisodeItemTitle>
        <EpisodeItemSummaryText>
          {stringTruncate(episodeDescription)}
        </EpisodeItemSummaryText>
        </EpisodeItemLink>
        </NextLink>
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
          {
            isInUserPlaylist ?
            (
               <EpisodeItemAddToPlaylistIconButton onClick={() => {
                    if(!loading && session) removeFromPlaylistMutation.mutate({episodeId: _id, userId: session.user._id })
               }} >
                  <PlaylistAddCheckIcon />
               </EpisodeItemAddToPlaylistIconButton>
            ):(
              <EpisodeItemAddToPlaylistIconButton onClick={() => {
              if(!loading && session) addToPlaylistMutation.mutate({episodeId: _id, userId: session.user._id })
            }}>
                  <PlaylistAddIcon />
               </EpisodeItemAddToPlaylistIconButton>
            )
          }
          <EpisodeItemSummaryText>FEB 20. 10mins</EpisodeItemSummaryText>
        </EpisodeItemDetailContainer>
      </EpisodeItemDescContainer>
    </EpisodeItemContainer>
  );
};

export default EpisodeItem;
