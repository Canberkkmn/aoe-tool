import { ICostFilterData } from "../components/Unit/Filters/CostFilter";

const costData: ICostFilterData[] = [
  { name: "Wood", active: false, range: { min: 0, max: 200 } },
  { name: "Food", active: false, range: { min: 0, max: 200 } },
  { name: "Gold", active: false, range: { min: 0, max: 200 } },
];

export default costData;
