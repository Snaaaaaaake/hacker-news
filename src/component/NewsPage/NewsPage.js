import React, { useEffect, useContext, useState } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import dompurify from "dompurify";
import { Typography, Divider, Button, Box, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  fetchSingleNewsRequestAction,
  fetchSingleNewsThunkAction,
  fetchShadowReloadCommentListThunkAction,
} from "../../actions/actions";
import ServiceContext from "../context/ServiceContext";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import Spinner from "../Spinner/Spinner";
import CommentList from "../CommentList/CommentList";
import dateFormatter from "../../utils/dateFormatter";

const NewsPage = (props) => {
  const newsService = useContext(ServiceContext);
  const [resetInterval, setResetInterval] = useState(false);
  const params = useParams();
  const history = useHistory();
  const classes = useStyles();
  const {
    fetchSingleNewsThunkAction,
    fetchSingleNewsRequestAction,
    fetchShadowReloadCommentListThunkAction,
    singleNewsState: { news, error, isLoading },
  } = props;

  useEffect(() => {
    const fetchCondition = { canceled: false };
    fetchSingleNewsThunkAction(newsService, fetchCondition, params.id);
    return () => {
      fetchSingleNewsRequestAction();
      fetchCondition.canceled = true;
    };
  }, [resetInterval, fetchSingleNewsThunkAction, fetchSingleNewsRequestAction, newsService, params.id]);

  useEffect(() => {
    const fetchCondition = { canceled: false };
    const interval = setInterval(
      () => fetchShadowReloadCommentListThunkAction(newsService, fetchCondition),
      60 * 1000
    );
    return () => {
      clearInterval(interval);
      fetchCondition.canceled = true;
    };
  }, [resetInterval, newsService, fetchShadowReloadCommentListThunkAction]);

  return error ? (
    <ErrorComponent error={error} />
  ) : isLoading ? (
    <Spinner />
  ) : !news || news.type !== "story" ? (
    <ErrorComponent error={new Error("404: нет такой новости!")} />
  ) : (
    <>
      <Divider className={classes.divider} />
      <Box className={classes.flexContainer}>
        <Typography variant="h4" component="h2">
          {news.title}
        </Typography>
        <Button className={classes.button} color="primary" onClick={() => history.push("/")}>
          Назад
        </Button>
      </Box>
      {news.text && (
        <Typography variant="body1" component="span">
          <p dangerouslySetInnerHTML={{ __html: dompurify.sanitize(news.text) }} />
        </Typography>
      )}
      {news.url && (
        <Link className={classes.link} target="_blank" variant="subtitle2" href={news.url}>
          Ссылка на полную версию новости
        </Link>
      )}
      <Typography variant="subtitle2" component="p" color="textSecondary">
        Автор {news.by}, дата {dateFormatter(news.time)}
      </Typography>
      <Divider className={classes.divider} />
      <Box className={classes.flexContainer}>
        <Typography variant="subtitle1" component="p">
          Комментарии ({news.descendants})
        </Typography>
        <Button className={classes.button} color="primary" onClick={() => setResetInterval(!resetInterval)}>
          Обновить комментарии
        </Button>
      </Box>
      <CommentList />
    </>
  );
};

const useStyles = makeStyles({
  divider: {
    margin: "10px 0",
  },
  link: {
    marginTop: 10,
  },
  button: {
    marginLeft: 5,
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});

const mapStateToProps = (state) => ({
  singleNewsState: state.singleNewsState,
});
const mapDispatchToProps = {
  fetchSingleNewsRequestAction,
  fetchSingleNewsThunkAction,
  fetchShadowReloadCommentListThunkAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
