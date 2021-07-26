import { useState, ReactChild } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { resetModalDialog } from '../redux/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import LoginSignup from './LoginSignup';
import VisitorPodcastPlayer from './VisitorPodcastPlayer';
import { StyledDialog } from '../styles/Modal.styled';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
const GeneralModal = () => {
  const modalDialogState = useAppSelector((state) => state.modalDialog);
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(resetModalDialog());

  interface dialogContentType {
    [key: string]: () => ReactChild
}

  const dialogContent: dialogContentType = {
    login: () => <LoginSignup type="login" />,
    signup: () => <LoginSignup type="signup" />,
    playPodcast: () => <VisitorPodcastPlayer />,
  };

  return (
    <div>
      <StyledDialog
        aria-labelledby="transition-modal-title"
        open={modalDialogState.isVisible}
        scroll="body"
      >
        <DialogActions>
          <IconButton aria-label="close" className="hg" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogContent>
          {
              modalDialogState.content ? dialogContent[modalDialogState.content]() : null
          }
        </DialogContent>
      </StyledDialog>
    </div>
  );
};

export default GeneralModal;
