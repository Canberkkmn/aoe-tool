import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { Box } from '@mui/material';
import Navbar from '../../components/Layout/Navbar';

import './index.scss';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <Box className="layout-container">
      <Navbar />
      <Box
        className={classNames({
          'layout-content-container-home': location.pathname === '/',
          'layout-content-container-unit': location.pathname === '/unit',
        })}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
