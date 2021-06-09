import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';

const StyledDialog = styled(Dialog)`
    & .MuiDialog-paper {
        /* width: 400px; */
        background-color: red;
    }
     & .MuiDialogContent-root {
        margin-top: -1.76rem;
     }
    
`;

export { StyledDialog };
