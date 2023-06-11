import { useState } from 'react';
import { Box, Slider, Typography } from '@mui/material';

function SliderCustom() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <Box
      width={300}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
      }}
    >
      <Slider
        max={200}
        defaultValue={0}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={handleChange}
        sx={{
          maxWidth: 200,
          alignSelf: 'center',
        }}
      />
      <Typography>{value}</Typography>
    </Box>
  );
}

export default SliderCustom;
