import Image from 'next/image';
import awsData from '../data';
import stringTruncate from '../utils/string-truncate';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
import { PlaylistTrack, PlaylistTrackImg, PlaylistTrackPlayBtn, PlaylistTrackTeAndNnContainer, PlaylistTrackTitle, PlaylistTrackNarration, PlaylistTrackDelete } from '../styles/PlayerPlaylist.styled';
const PlayerPlaylist = () => {
	const hello = "gheiie";
	const isPlaying = false;
	return (
			<>
			{
			awsData.map(({ podcastId, podcastImageUrl, podcastTitle, podcastNaration }) => (
				<PlaylistTrack key={podcastId}>
				<PlaylistTrackImg>
					<Image
			          src={podcastImageUrl}
			          alt="episode art"
			          width={25}
			          height={25}
			          layout="responsive"
			        />
				</PlaylistTrackImg>
				<PlaylistTrackPlayBtn>
					{
              isPlaying
                ? (<PauseCircleOutlineIcon />)
                : (<PlayCircleOutlineIcon />)
            }
				</PlaylistTrackPlayBtn>
			<PlaylistTrackTeAndNnContainer>
				<PlaylistTrackTitle>{stringTruncate(podcastTitle, 20)}</PlaylistTrackTitle>
				<PlaylistTrackNarration>{stringTruncate(podcastNaration, 30)}</PlaylistTrackNarration>
			</PlaylistTrackTeAndNnContainer>
			<PlaylistTrackDelete>
				<CloseIcon />
			</PlaylistTrackDelete>
			</PlaylistTrack>
          
        ))
			}
			</>
		
		)
}

export default PlayerPlaylist;