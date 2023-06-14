import { Box } from "@mui/material";
import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

import { getInitialUnitData } from "../../../redux/actions/unitAction";
import { Unit } from "../../../data/units/types";

const DataGridCustom: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ageFilter, costFilter } = useSelector(
    (state: any) => state.filterReducer
  );
  const { initialUnitData } = useSelector((state: any) => state.unitReducer);
  const [rows, setRows] = useState([] as GridRowsProp);

  useEffect(() => {
    dispatch(getInitialUnitData());
  }, [dispatch]);

  useEffect(() => {
    if (initialUnitData.length === 0 && rows.length === 0) return;

    setRows(() => {
      return initialUnitData.map((unit: Unit) => {
        let cost = "";

        if (unit.cost?.Food) {
          cost += `Food: ${unit.cost?.Food},`;
        }

        if (unit.cost?.Wood) {
          cost += ` Wood: ${unit.cost?.Wood},`;
        }

        if (unit.cost?.Gold) {
          cost += ` Gold: ${unit.cost?.Gold}`;
        }

        return {
          id: unit.id,
          name: unit.name,
          age: unit.age,
          cost,
        };
      });
    });
  }, [initialUnitData, rows.length]);

  const getColumns = () => {
    return [
      {
        field: "id",
        headerName: "ID",
        width: 30,
        type: "number",
        flex: "0 0 auto",
      },
      {
        field: "name",
        type: "string",
        headerName: "Name",
        flex: 1,
      },
      {
        field: "age",
        type: "string",
        headerName: "Age",
        flex: 1,
      },
      {
        field: "cost",
        type: "string",
        headerName: "Cost",
        flex: 1,
      },
    ];
  };

  const handleRowClick = (params: any) => {
    if (!params.id) return;

    navigate(`/unit-detail/:${params.id}`);
  };

  return (
    <>
      <Box
        sx={{
          height: 500,
          width: "100%",
        }}
      >
        <DataGrid
          rows={rows}
          columns={getColumns() as unknown as GridColDef[]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
          disableColumnMenu
          disableColumnFilter
          onRowClick={handleRowClick}
          sx={{
            "& .MuiDataGrid-cell": {
              cursor: "pointer",
              borderRight: "1px solid #ccc",
              borderBottom: "1px solid #ccc",
            },
            "& .MuiDataGrid-row": {
              cursor: "pointer",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#f5f5f5",
              borderRight: "1px solid #ccc",
            },
          }}
        />
      </Box>
    </>
  );
};

export default DataGridCustom;
