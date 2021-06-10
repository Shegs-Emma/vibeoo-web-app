import { ReactElement } from 'react';
import AppHeader from './Header';
import GeneralModal from './Modal';
import AppFooter from './Footer';
import LoggedInPodcastPlayer from './LoggedInPodcastPlayer';

interface AppLayoutProps {
  children: ReactElement | ReactElement[]
}

const AppLayout = ({ children }:AppLayoutProps) => (
  <>
    <AppHeader />
    <GeneralModal />
    { children }
    <AppFooter />
    <LoggedInPodcastPlayer />
  </>
);

export default AppLayout;
