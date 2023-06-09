import { Box } from '@mui/material';
import Navbar from '../../components/Layout/Navbar';

import './index.scss';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box className="layout-container">
      <Navbar />
      <Box className="layout-content-container">{children}</Box>
    </Box>
  );
}

export default Layout;
