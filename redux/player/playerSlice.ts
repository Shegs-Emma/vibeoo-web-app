import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PodcastPlayerState = {
  podcastImageUrl: string,
  podcastTitle: string,
  podcastNaration: string,
  podcastAudioUrl: string
}

const initialState: PodcastPlayerState = {
  podcastImageUrl: '',
  podcastTitle: '',
  podcastNaration: '',
  podcastAudioUrl: '',
};

export const podcastPlayerSlice = createSlice({
  name: 'podcastPlayerState',
  initialState,
  reducers: {
    setPodcastPlayerData: (state, action: PayloadAction<PodcastPlayerState>) => action.payload,
  },
});

export const { setPodcastPlayerData } = podcastPlayerSlice.actions;

export default podcastPlayerSlice.reducer;
