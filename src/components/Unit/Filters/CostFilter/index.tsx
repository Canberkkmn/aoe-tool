import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, Checkbox, Slider } from "@mui/material";
import { setCostFilterAction } from "../../../../redux/actions/newFilterAction";

import "./index.scss";

export interface ICostFilterDataRange {
  min: number;
  max: number;
}
export interface ICostFilterData {
  name: string;
  active: boolean;
  range: ICostFilterDataRange;
}

export const costData: ICostFilterData[] = [
  { name: "Wood", active: false, range: { min: 0, max: 200 } },
  { name: "Food", active: false, range: { min: 0, max: 200 } },
  { name: "Gold", active: false, range: { min: 0, max: 200 } },
];

const CostFilter: FC = () => {
  const [costFilter, setCostFilter] = useState<ICostFilterData[]>(costData);
  const dispatch = useDispatch();

  const handleCheckboxClick = (
    cost: ICostFilterData,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setCostFilter((state) => {
      return state.map((singleCost) => {
        if (singleCost.name === cost.name) {
          return {
            ...singleCost,
            active: !singleCost.active,
          };
        }
        return singleCost;
      });
    });

    dispatch(
      setCostFilterAction({
        name: cost.name,
        active: !cost.active,
        range: cost.range,
      })
    );
  };

  const handleSliderChange = (
    cost: ICostFilterData,
    event: Event,
    newValue: number | number[]
  ) => {
    setCostFilter((state) => {
      return state.map((singleCost) => {
        if (singleCost.name === cost.name) {
          return {
            ...singleCost,
            range: {
              ...singleCost.range,
              min: newValue as number,
            },
          };
        }
        return singleCost;
      });
    });

    dispatch(
      setCostFilterAction({
        name: cost.name,
        active: cost.active,
        range: {
          ...cost.range,
          min: newValue as number,
        },
      })
    );
  };

  return (
    <Box className="cost-filter-container">
      <Typography>Costs: (Min: 0 - Max: 200)</Typography>
      {costFilter.map((cost) => (
        <Box key={cost.name} className="cost-filter-row">
          <Checkbox
            key={cost.name}
            checked={cost.active}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              handleCheckboxClick(cost, event);
            }}
          />
          <Typography className="cost-filter-row-title">{cost.name}</Typography>
          <Box
            width={250}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
          >
            <Slider
              max={200}
              defaultValue={0}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={(event: Event, value: number | number[]) => {
                handleSliderChange(cost, event, value);
              }}
              sx={{
                maxWidth: 200,
                alignSelf: "center",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography>{cost.range.min}</Typography>
            <Typography
              sx={{
                margin: "0 8px",
              }}
            >
              -
            </Typography>
            <Typography>{cost.range.max}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CostFilter;
