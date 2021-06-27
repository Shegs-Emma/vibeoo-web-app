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

const PlayerPlaylist = () => {
	const [session, loading] = useSession();
	 const { isLoading, error, data} = useQuery<Array<EpisodeProps>>(`getUserPlaylist`, getUserPlaylist);
	 const removeFromPlaylistMutation = useMutation((episodeUpdateData:{episodeId: string, userId: string}) => removeFromUserPlaylist(episodeUpdateData))
	const dispatch = useAppDispatch();
	const isPlaying = false;
	if(isLoading) return <p>Playlist Empty</p>;
	if(!isLoading && data){
		if(data.length){
			return (
				<>
				{
					data.map(episodeData => (
				<PlaylistTrack key={episodeData._id}>
				<PlaylistTrackImg>
					<Image
			          src={episodeData.episodeLogo}
			          alt="episode art"
			          width={25}
			          height={25}
			          layout="responsive"
			        />
				</PlaylistTrackImg>
				<PlaylistTrackPlayBtn onClick={() => dispatch(setPodcastPlayerData(episodeData))}>
					{
              isPlaying
                ? (<PauseCircleOutlineIcon />)
                : (<PlayCircleOutlineIcon />)
            }
				</PlaylistTrackPlayBtn>
			<PlaylistTrackTeAndNnContainer>
				<PlaylistTrackTitle>{stringTruncate(episodeData.episodeTitle, 20)}</PlaylistTrackTitle>
				<PlaylistTrackNarration>{stringTruncate(episodeData.episodeDescription, 30)}</PlaylistTrackNarration>
			</PlaylistTrackTeAndNnContainer>
			<PlaylistTrackDelete onClick={() => {
                    if(!loading && session) removeFromPlaylistMutation.mutate({episodeId: episodeData._id, userId: session.user._id })
               }}>
				<CloseIcon />
			</PlaylistTrackDelete>
			</PlaylistTrack>
          
        ))
				}
				</>
			)
		}
		return <p>Playlist Empty</p>;
	}
	return <p>Playlist Empty</p>;
}

export default PlayerPlaylist;