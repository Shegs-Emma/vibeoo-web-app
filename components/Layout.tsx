import { ReactElement } from 'react';
import AppHeader from './Header';
import GeneralModal from './Modal';
import AppFooter from './Footer';

interface AppLayoutProps {
  children: ReactElement | ReactElement[]
}

const AppLayout = ({ children }:AppLayoutProps) => (
  <>
    <AppHeader />
    <GeneralModal />
    { children }
    <AppFooter />
  </>
);

export default AppLayout;
