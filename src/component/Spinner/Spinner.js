import React from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Spinner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.marginContainer}>
      <CircularProgress />
    </Box>
  );
};

const useStyles = makeStyles({
  marginContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "50px 0",
  },
});
export default Spinner;
