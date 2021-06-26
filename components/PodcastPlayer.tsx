import {
  useState, useRef, useEffect, SyntheticEvent, ChangeEvent,
} from 'react';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Waveform from './Waveform';
import { EpisodeProps } from '../types/app.d';
import {
  AudioPlayerContainer, AudioPlayerContainerLoggedIn, ProgressBarSection, StyledIconButton, PlayerTimeContainer, PlayerTimeContainerLoggedIn, StyledDuration,
  StyledCurrentTime, StyledDivider, StyledVolumeContainer, StyledVolumeControl, PlayerTimeWaveformContainer
} from '../styles/PodcastPlayer.styled';

interface PodcastPlayerProps {
  podcastData: EpisodeProps,
  isLoggedIn?: boolean
}

const usePrevious = (value:string) => {
  const ref = useRef<string>();
  useEffect(() => {
    ref.current = value;
  })
  return ref.current;
}

const PodcastPlayer = ({ podcastData, isLoggedIn }:PodcastPlayerProps) => {
  const {
    episodeAudioUrl,
  } = podcastData;
  const [waveData, setWaveData] = useState(Array(isLoggedIn ? 160 : 40).fill(6).map(() => Math.random()));
  const [isPlaying, setPlaying] = useState(!isLoggedIn);
  const [currentTime, setCurrentTime] = useState('--:--');
  const [durationTime, setDurationTime] = useState('--:--');
  const [firsty, setFirsty] = useState(true);
  const [seekTime, setSeekTime] = useState(0);
  const [volume, setVolume] = useState(0.4);
  const audioRef = useRef<HTMLAudioElement>(null);
  const previousAudio = usePrevious(episodeAudioUrl);
  useEffect(() => {
    if (audioRef.current) audioRef.current.currentTime = seekTime;
  }, [seekTime]);
  useEffect(() => {
    if (episodeAudioUrl) {
      setWaveData(Array(isLoggedIn ? 160 : 40).fill(6).map(() => Math.random()));
      if(!firsty){
            audioRef.current?.play();
        setPlaying(true);
      }
      setFirsty(false);
      // if(previousAudio) {
      //     audioRef.current?.play();
      //   setPlaying(true);
      // }
      
    }
  }, [episodeAudioUrl]);
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
    isLoggedIn ?
    (
      <AudioPlayerContainerLoggedIn >
      <audio
        src={episodeAudioUrl}
        preload="auto"
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadataHandler}
        onTimeUpdate={onTimeUpdateHandler}
        onPlay={onPlayHandler}
        onVolumeChange={onVolumeChangeHandler}
        onEnded={onEndedHandler}
      />
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
                <PlayerTimeWaveformContainer>
                <PlayerTimeContainerLoggedIn>
                  <StyledCurrentTime>{currentTime}</StyledCurrentTime>
                  <StyledDivider>|</StyledDivider>
                  <StyledDuration>{durationTime}</StyledDuration>
                </PlayerTimeContainerLoggedIn>
                <Waveform
                  isLoggedIn
                  currentTime={audioRef.current?.currentTime}
                  duration={audioRef.current?.duration}
                  waveFormData={waveData}
                  seekTimeHandler={setSeekTime}
                />
                </PlayerTimeWaveformContainer>
      </AudioPlayerContainerLoggedIn>
      ):(
      <AudioPlayerContainer >
      <audio
        src={episodeAudioUrl}
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
      )

  );
};

PodcastPlayer.defaultProps = {
  isLoggedIn: false,
};

export default PodcastPlayer;
