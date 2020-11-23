import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const ErrorComponent = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h5" component="h5" className={classes.text}>
        Ошибка: {props.error.message}
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    margin: "50px 0",
  },
  text: {
    color: "red",
  },
});
export default ErrorComponent;
