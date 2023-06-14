import { FC } from "react";
import { Box, Typography } from "@mui/material";
import ToggleButtonCustom from "../../ToggleButtonCustom";

const AgeFilter: FC = () => {
  return (
    <Box className="age-filter-container">
      <Typography className="age-filter-title">Ages:</Typography>
      <ToggleButtonCustom />
    </Box>
  );
};

export default AgeFilter;
