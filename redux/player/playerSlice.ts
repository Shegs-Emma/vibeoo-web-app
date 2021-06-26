import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EpisodeProps } from '../../types/app.d';

const initialState: EpisodeProps = {
  episodeLogo: '',
  episodeTitle: '',
  episodeDescription: '',
  episodeAudioUrl: '',
  showSlug: ''
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
