import { Box, CardMedia } from '@mui/material';
import Layout from '../layout';

const imagePath = '../../../public/Images/Age-of-banner.jpg';

function Home() {
  return (
    <Layout>
      <Box
        sx={{
          padding: '56px',
        }}
      >
        <CardMedia
          key={'home-page-card-media'}
          component="img"
          loading="lazy"
          image={imagePath}
        />
      </Box>
    </Layout>
  );
}

export default Home;
