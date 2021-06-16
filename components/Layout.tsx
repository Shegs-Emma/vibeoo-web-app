import { useEffect, ReactElement } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { setPodcastPlayerData } from '../redux/player/playerSlice';
import awsData from '../data';
import AppHeader from './Header';
import GeneralModal from './Modal';
import AppFooter from './Footer';

interface AppLayoutProps {
  children: ReactElement | ReactElement[]
}

const AppLayout = ({ children }:AppLayoutProps) => {
	const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setPodcastPlayerData(awsData[0]));
  }, []);
	return(
  <>
    <AppHeader />
    <GeneralModal />
    { children }
    <AppFooter />
  </>
)};

export default AppLayout;
