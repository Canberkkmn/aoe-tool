import { FC } from "react";
import { useLocation } from "react-router-dom";

import { Box, Typography, Link, List, ListItem } from "@mui/material";
import getPageTitle from "../../../utils/getPageTitle";

import "./index.scss";

const Navbar: FC = () => {
  const location = useLocation();

  const renderTitle = () => {
    const currentTitle = getPageTitle(
      location.pathname.includes("/unit-detail")
        ? "/unit-detail"
        : location.pathname
    );

    return <Typography>{currentTitle}</Typography>;
  };

  return (
    <Box className="navbar-container">
      <Box className="navbar-title-container">{renderTitle()}</Box>

      <List className="navbar-list-container">
        <ListItem className="navbar-list-item">
          <Link href="/">Home</Link>
        </ListItem>
        <ListItem className="navbar-list-item">
          <Link href="/unit">Units</Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Navbar;
