import { CardMedia } from '@mui/material';
import Layout from '../layout';

function Home() {
  return (
    <Layout>
      <CardMedia
        key={'home-page-card-media'}
        component="img"
        loading="lazy"
        image="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg"
      />
    </Layout>
  );
}

export default Home;
