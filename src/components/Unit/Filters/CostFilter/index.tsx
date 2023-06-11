import { Box, Typography, Checkbox } from '@mui/material';
import SliderCustom from '../../SliderCustom';

import './index.scss';

function Filter({ type }) {
  return (
    <Box className="cost-filter-row">
      <Checkbox />
      <Typography className="cost-filter-row-title">{type}</Typography>
      <SliderCustom />
    </Box>
  );
}

function CostFilter() {
  const costTypes = ['Wood', 'Food', 'Gold'];
  return (
    <Box className="cost-filter-container">
      <Typography>Costs: (Min: 0 - Max: 200)</Typography>
      {costTypes.map((type) => (
        <Filter key={type} type={type} />
      ))}
    </Box>
  );
}

export default CostFilter;
