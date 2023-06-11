import { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

function ToggleButtonCustom() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterChange = (event, newFilter) => {
    setSelectedFilter(newFilter);
  };

  return (
    <ToggleButtonGroup
      value={selectedFilter}
      exclusive
      onChange={handleFilterChange}
      aria-label="Filter options"
    >
      <ToggleButton value="all" aria-label="All">
        All
      </ToggleButton>
      <ToggleButton value="dark" aria-label="Dark">
        Dark
      </ToggleButton>
      <ToggleButton value="feudal" aria-label="Feudal">
        Feudal
      </ToggleButton>
      <ToggleButton value="castle" aria-label="Castle">
        Castle
      </ToggleButton>
      <ToggleButton value="imperial" aria-label="Imperial">
        Imperial
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleButtonCustom;
