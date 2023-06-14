import { FC } from "react";
import { Box } from "@mui/material";

import AgeFilter from "../../components/Unit/Filters/AgeFilter";
import CostFilter from "../../components/Unit/Filters/CostFilter";
import DataGridCustom from "../../components/Unit/DataGridCustom";
import Layout from "../layout";

import "./index.scss";

const Unit: FC = () => {
  return (
    <Layout>
      <Box className="unit-container">
        <AgeFilter />
        <CostFilter />
        <DataGridCustom />
      </Box>
    </Layout>
  );
};

export default Unit;
