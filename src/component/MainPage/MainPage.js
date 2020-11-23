import React, { useEffect, useContext, useState } from "react";
import { connect } from "react-redux";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Typography, Divider, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  fetchListThunkAction,
  fetchListRequestAction,
  fetchShadowReloadListThunkAction,
} from "../../actions/actions";
import ServiceContext from "../context/ServiceContext";
import NewsCard from "../NewsCard/NewsCard";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import Spinner from "../Spinner/Spinner";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const MainPage = (props) => {
  const newsService = useContext(ServiceContext);
  const [resetInterval, setResetInterval] = useState(false);
  const classes = useStyles();
  const {
    fetchListThunkAction,
    fetchListRequestAction,
    fetchShadowReloadListThunkAction,
    listState: { list, error, isLoading },
  } = props;

  useEffect(() => {
    const fetchCondition = { canceled: false };
    fetchListThunkAction(newsService, fetchCondition);
    return () => {
      fetchListRequestAction();
      fetchCondition.canceled = true;
    };
  }, [resetInterval, fetchListThunkAction, fetchListRequestAction, newsService]);

  useEffect(() => {
    const fetchCondition = { canceled: false };
    const interval = setInterval(
      () => fetchShadowReloadListThunkAction(newsService, fetchCondition),
      60 * 1000
    );
    return () => {
      clearInterval(interval);
      fetchCondition.canceled = true;
    };
  }, [resetInterval, fetchShadowReloadListThunkAction, newsService]);

  return (
    <>
      <Box className={classes.flexContainer}>
        <Typography variant="subtitle1" component="h6" className={classes.subtitle}>
          Ваш источник крутых новостей!
        </Typography>
        <Box display="flex">
          <Typography
            variant="subtitle1"
            component="h6"
            color="textSecondary"
            className={`${classes.subtitle}, ${classes.disabled}`}
          >
            Показаны самые новые, но вы можете
          </Typography>
          <Button
            color="primary"
            className={classes.button}
            onClick={() => setResetInterval(!resetInterval)}
            disabled={isLoading}
          >
            Обновить
          </Button>
        </Box>
      </Box>
      <Divider className={classes.divider} />
      {error ? (
        <ErrorComponent error={error} />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <Box className={classes.listContainer}>
          <AutoSizer>
            {({ height, width }) => (
              <FixedSizeList
                height={height}
                width={width > 360 ? width : 360}
                itemSize={85}
                itemCount={list.length}
              >
                {({ index, style }) => (
                  <ErrorBoundary>
                    <NewsCard item={list[index]} style={style} />
                  </ErrorBoundary>
                )}
              </FixedSizeList>
            )}
          </AutoSizer>
        </Box>
      )}
    </>
  );
};

const useStyles = makeStyles({
  subtitle: {
    paddingLeft: 5,
  },
  divider: {
    margin: "10px 0",
  },
  listContainer: {
    flexGrow: 1,
    "@media (max-height:608px)": {
      minHeight: "100vh",
    },
  },
  button: {
    padding: "0 0 0 5px",
    marginLeft: 5,
  },
  disabled: {
    "@media (max-width:767px)": {
      display: "none",
    },
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});

const mapStateToProps = (state) => ({
  listState: state.listState,
});
const mapDispatchToProps = {
  fetchListThunkAction,
  fetchListRequestAction,
  fetchShadowReloadListThunkAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
