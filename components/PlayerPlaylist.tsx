import Image from 'next/image';
import { useSession } from 'next-auth/client';
 import { useQuery, useMutation  } from 'react-query';
import { useAppDispatch } from '../redux/hooks';
import { setPodcastPlayerData } from '../redux/player/playerSlice';
 import { getUserPlaylist, removeFromUserPlaylist } from '../lib/api/user-api-helpers';
import stringTruncate from '../lib/utils/string-truncate';
import { EpisodeProps } from '../types/app.d';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
import { PlaylistTrack, PlaylistTrackImg, PlaylistTrackPlayBtn, PlaylistTrackTeAndNnContainer, PlaylistTrackTitle, PlaylistTrackNarration, PlaylistTrackDelete } from '../styles/PlayerPlaylist.styled';

interface PlayerPlaylistProps {
	playlist: Array<EpisodeProps>
}

const PlayerPlaylist = ({ playlist }:PlayerPlaylistProps) => {
	const [session, loading] = useSession();
	 const { isLoading, error, data} = useQuery<Array<EpisodeProps>>(`getUserPlaylist`, getUserPlaylist);
	 const removeFromPlaylistMutation = useMutation((episodeUpdateData:{episodeId: string, userId: string}) => removeFromUserPlaylist(episodeUpdateData))
	const dispatch = useAppDispatch();
	const isPlaying = false;
	return (
			!playlist.length ?
			(<p>Playlist Empty</p>
			):(
				<>
			{
				!isLoading && !error ?
			data?.map(({ _id, ...otherEpisodeData}) => (
				<PlaylistTrack key={_id}>
				<PlaylistTrackImg>
					<Image
			          src={otherEpisodeData.episodeLogo}
			          alt="episode art"
			          width={25}
			          height={25}
			          layout="responsive"
			        />
				</PlaylistTrackImg>
				<PlaylistTrackPlayBtn onClick={() => dispatch(setPodcastPlayerData(otherEpisodeData))}>
					{
              isPlaying
                ? (<PauseCircleOutlineIcon />)
                : (<PlayCircleOutlineIcon />)
            }
				</PlaylistTrackPlayBtn>
			<PlaylistTrackTeAndNnContainer>
				<PlaylistTrackTitle>{stringTruncate(otherEpisodeData.episodeTitle, 20)}</PlaylistTrackTitle>
				<PlaylistTrackNarration>{stringTruncate(otherEpisodeData.episodeDescription, 30)}</PlaylistTrackNarration>
			</PlaylistTrackTeAndNnContainer>
			<PlaylistTrackDelete onClick={() => {
                    if(!loading && session) removeFromPlaylistMutation.mutate({episodeId: _id, userId: session.user._id })
               }}>
				<CloseIcon />
			</PlaylistTrackDelete>
			</PlaylistTrack>
          
        ))
        :
        (<p>Loading Playlist</p>)
			}
			</>
			)
		
		)
}

export default PlayerPlaylist;