import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalSliceState = {
        isVisible: boolean,
        content: string
}

const initialState: ModalSliceState = {
  isVisible: false,
  content: '',
};

export const modalSlice = createSlice({
  name: 'modalDialogState',
  initialState,
  reducers: {
    showModalDialog: (state, action: PayloadAction<string>) => {
      state.isVisible = true;
      state.content = action.payload;
    },
    resetModalDialog: () => initialState,
  },
});

export const { showModalDialog, resetModalDialog } = modalSlice.actions;

export default modalSlice.reducer;
