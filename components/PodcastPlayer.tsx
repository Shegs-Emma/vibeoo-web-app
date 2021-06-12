import {
  useState, useRef, useEffect, ReactEventHandler, SyntheticEvent, ChangeEvent,
} from 'react';
import IconButton from '@material-ui/core/IconButton';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Waveform from './Waveform';
import {
  AudioPlayerContainer, ProgressBarSection, StyledIconButton, PlayerTimeContainer, StyledDuration,
  StyledCurrentTime, StyledDivider, StyledVolumeContainer, StyledVolumeControl,
} from '../styles/PodcastPlayer.styled';

interface PodcastPlayerProps {
  podcastData: {
    podcastImageUrl: string,
  podcastTitle: string,
  podcastNaration: string,
  podcastAudioUrl: string
  }
}

const PodcastPlayer = ({ podcastData }:PodcastPlayerProps) => {
  const { podcastAudioUrl } = podcastData;
  const [waveData] = useState(Array(40).fill(6).map(() => Math.random()));
  const [isPlaying, setPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState('--:--');
  const [durationTime, setDurationTime] = useState('--:--');
  const [seekTime, setSeekTime] = useState(0);
  const [volume, setVolume] = useState(0.4);
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (audioRef.current) audioRef.current.currentTime = seekTime;
  }, [seekTime]);
  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setPlaying(!isPlaying);
  };
  const onLoadedMetadataHandler = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
    // console.log('metadata', e);
    const audioMedia = e.target as HTMLAudioElement;
    const currentTimeMinutes = Math.floor(audioMedia.currentTime / 60);
    const currentTimeSeconds = Math.floor(audioMedia.currentTime - currentTimeMinutes * 60);
    const durationMinutes = Math.floor(audioMedia.duration / 60);
    const durationSeconds = Math.floor(audioMedia.duration - durationMinutes * 60);

    setCurrentTime(
      `${currentTimeMinutes < 10 ? `0${currentTimeMinutes}`
        : currentTimeMinutes}:${currentTimeSeconds < 10 ? `0${currentTimeSeconds}`
        : currentTimeSeconds}`,
    );
    setDurationTime(
      `${durationMinutes < 10 ? `0${durationMinutes}`
        : durationMinutes}:${durationSeconds < 10 ? `0${durationSeconds}`
        : durationSeconds}`,
    );
  };
  const onTimeUpdateHandler = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
    const audioMedia = e.target as HTMLAudioElement;
    const currentTimeMinutes = Math.floor(audioMedia.currentTime / 60);
    const currentTimeSeconds = Math.floor(audioMedia.currentTime - currentTimeMinutes * 60);
    setCurrentTime(
      `${currentTimeMinutes < 10 ? `0${currentTimeMinutes}`
        : currentTimeMinutes}:${currentTimeSeconds < 10 ? `0${currentTimeSeconds}`
        : currentTimeSeconds}`,
    );
  };
  const onPlayHandler = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
    const audioMedia = e.target as HTMLAudioElement;
    audioMedia.volume = volume;
  };
  const onVolumeChangeHandler = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
    const audioMedia = e.target as HTMLAudioElement;
    // console.log('audio-volume', audioMedia.volume);
    setVolume(audioMedia.volume);
  };
  const onEndedHandler = () => {
    setPlaying(false);
    if (audioRef.current) audioRef.current.currentTime = 0;
  };
  const changeAudioVolume = (e: ChangeEvent<{}>, volumeValue: number | number[]) => {
    if (audioRef.current) audioRef.current.volume = volumeValue as number;
    setVolume(volumeValue as number);
  };

  return (
    <>
      <AudioPlayerContainer>
        <audio
          src={podcastAudioUrl}
          preload="auto"
          autoPlay
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadataHandler}
          onTimeUpdate={onTimeUpdateHandler}
          onPlay={onPlayHandler}
          onVolumeChange={onVolumeChangeHandler}
          onEnded={onEndedHandler}
        />
        <ProgressBarSection>
          <StyledIconButton
            color="inherit"
            aria-label="play-pause-toggle-button"
            onClick={() => handlePlay()}
          >
            {
              isPlaying
                ? (<PauseCircleOutlineIcon />)
                : (<PlayCircleOutlineIcon />)
            }
          </StyledIconButton>
          <Waveform
            currentTime={audioRef.current?.currentTime}
            duration={audioRef.current?.duration}
            waveFormData={waveData}
            seekTimeHandler={setSeekTime}
          />
        </ProgressBarSection>
        <PlayerTimeContainer>
          <StyledCurrentTime>{currentTime}</StyledCurrentTime>
          <StyledDivider>|</StyledDivider>
          <StyledDuration>{durationTime}</StyledDuration>
        </PlayerTimeContainer>
        <StyledVolumeContainer>
          <StyledVolumeControl
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={changeAudioVolume}
          />
        </StyledVolumeContainer>

      </AudioPlayerContainer>
    </>
  );
};

export default PodcastPlayer;
