import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import dateFormatter from "../../utils/dateFormatter";

const NewsCard = ({ item, style }) => {
  const classes = useStyles();
  return !item ? null : (
    <Card key={item.id} className={classes.cardRoot} style={style} variant="outlined">
      <CardContent className={classes.cardContainer}>
        <Link color="primary" className={classes.itemText} to={`/${item.id}`}>
          <Typography
            title={item.title}
            className={`${classes.itemText} ${classes.title}`}
            variant="h6"
            component="h2"
          >
            {item.title}
          </Typography>
        </Link>
        <Typography className={classes.itemText} variant="body2">
          Автор: {item.by} | Дата: {dateFormatter(item.time)} | Рейтинг: {item.score}
        </Typography>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    minWidth: 300,
    border: "none",
    background: "none",
  },
  cardContainer: {
    padding: 5,
  },
  itemText: {
    "text-overflow": "ellipsis",
    "white-space": "nowrap",
    overflow: "hidden",
  },
  title: {
    color: theme.palette.primary.main,
  },
}));

export default NewsCard;
