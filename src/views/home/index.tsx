import { FC } from "react";
import { Box, CardMedia } from "@mui/material";

import Layout from "../layout";
import imagePath from "../../consts/imagePath";

import "./index.scss";

const Home: FC = () => {
  return (
    <Layout>
      <Box className="home-container">
        <CardMedia
          key={"home-page-card-media"}
          component="img"
          loading="lazy"
          image={imagePath}
        />
      </Box>
    </Layout>
  );
};

export default Home;
