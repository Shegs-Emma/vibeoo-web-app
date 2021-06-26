import { useEffect, ReactElement } from 'react';
import { useSession } from 'next-auth/client';
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
  const [session, loading] = useSession();
  console.log('se',session);
	const dispatch = useAppDispatch();
  useEffect(() => {
    if(session) dispatch(setPodcastPlayerData(session.user.lastPlayed));
  }, [session]);
	return(
  <>
    <AppHeader />
    <GeneralModal />
    { children }
    <AppFooter />
  </>
)};

export default AppLayout;
