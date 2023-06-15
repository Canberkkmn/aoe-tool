import React, { FC, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import { getInitialUnitData } from "../../redux/actions/unitAction";
import { Unit } from "../../data/units/types";
import Layout from "../layout";

import "./index.scss";

const UnitDetail: FC = () => {
  const {
    initialUnitData,
  }: {
    initialUnitData: Unit[];
  } = useSelector((state: any) => state.unitReducer);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getInitialUnitData());
  }, [dispatch]);

  const renderProperty = useCallback((data: Unit) => {
    const renderValue = (value: string) => {
      if (Array.isArray(value)) {
        return (
          <List dense>
            {value.map((item, index) => (
              <ListItem key={index} className="property-item">
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        );
      } else if (typeof value === "object") {
        return (
          <List dense>
            {Object.entries(value).map(([key, innerValue]) => (
              <ListItem key={key} className="property-item">
                <ListItemText primary={`${key}: ${innerValue}`} />
              </ListItem>
            ))}
          </List>
        );
      } else {
        return <Typography>{value}</Typography>;
      }
    };

    return (
      <Box className="property" key={data.id}>
        {Object.entries(data).map(([key, value], index) => (
          <React.Fragment key={data.id + "-" + index}>
            <Box className="property-item">
              <Typography
                variant="subtitle1"
                component="strong"
                className="property-key"
              >
                {key}:
              </Typography>
              {renderValue(value)}
            </Box>
            {index !== Object.entries(data).length - 1 && (
              <Divider className="property-divider" />
            )}
          </React.Fragment>
        ))}
      </Box>
    );
  }, []);

  const renderData = useMemo(() => {
    if (!initialUnitData || initialUnitData.length === 0) return;

    const singleUnit = initialUnitData.find((unit: Unit) => {
      return unit.id.toString() === location.pathname.split("/:")[1];
    });

    if (!singleUnit)
      return <div data-testid="unit-detail-placeholder">No unit found</div>;

    return renderProperty(singleUnit);
  }, [initialUnitData, location.pathname, renderProperty]);

  return (
    <Layout>
      <Box className="UnitDetail" data-testid="unit-detail-container">
        {renderData}
      </Box>
    </Layout>
  );
};

export default UnitDetail;
