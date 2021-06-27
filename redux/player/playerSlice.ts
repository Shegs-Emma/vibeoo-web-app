import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EpisodeProps } from '../../types/app.d';

const initialState: EpisodeProps = {
  _id: '',
  episodeLogo: '',
  episodeTitle: '',
  episodeDescription: '',
  episodeAudioUrl: '',
  episodeSlug: '',
  showSlug: '',
  isInUserPlaylist: false
};

export const podcastPlayerSlice = createSlice({
  name: 'podcastPlayerState',
  initialState,
  reducers: {
    setPodcastPlayerData: (state, action: PayloadAction<EpisodeProps>) => action.payload,
  },
});

export const { setPodcastPlayerData } = podcastPlayerSlice.actions;

export default podcastPlayerSlice.reducer;
