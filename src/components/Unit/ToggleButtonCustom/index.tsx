import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import { setAgeFilterAction } from "../../../redux/actions/filterAction";

const ToggleButtonCustom: FC = () => {
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState("All");

  /**
   * Handles the filter change event and dispatches the age filter action.
   * @param {React.MouseEvent<HTMLElement, MouseEvent>} _ - The click event.
   * @param {string} newFilter - The selected filter value.
   */
  const handleFilterChange = (
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    newFilter: string
  ) => {
    setSelectedFilter(newFilter);

    dispatch(setAgeFilterAction(newFilter));
  };

  return (
    <ToggleButtonGroup
      value={selectedFilter}
      exclusive
      onChange={handleFilterChange}
      aria-label="Filter options"
    >
      <ToggleButton value="All" aria-label="All">
        All
      </ToggleButton>
      <ToggleButton value="Dark" aria-label="Dark">
        Dark
      </ToggleButton>
      <ToggleButton value="Feudal" aria-label="Feudal">
        Feudal
      </ToggleButton>
      <ToggleButton value="Castle" aria-label="Castle">
        Castle
      </ToggleButton>
      <ToggleButton value="Imperial" aria-label="Imperial">
        Imperial
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleButtonCustom;
