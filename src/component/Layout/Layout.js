import React from "react";
import { Link } from "react-router-dom";
import { Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "../../images/backgroundImage.jpg";

const Layout = (props) => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Link to="/" className={classes.title} title={"На главную"}>
          <Typography variant="h2" component="h1" className={classes.title}>
            Hacker News
          </Typography>
        </Link>
        {props.children}
      </Paper>
    </Container>
  );
};

const useStyles = makeStyles({
  root: {
    minHeight: "100%",
    display: "flex",
    padding: 0,
  },
  paper: {
    margin: 5,
    flexGrow: 1,
    padding: "5px 10px",
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "repeat",
    minWidth: 360,
  },
  title: {
    color: "black",
    textDecoration: "none",
    "white-space": "nowrap",
  },
});

export default Layout;
