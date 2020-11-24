import React from "react";
import { connect } from "react-redux";
import dompurify from "dompurify";
import { Typography, Box, Button, LinearProgress } from "@material-ui/core";
import backgroundArrow from "../../images/arrow.png";
import { makeStyles } from "@material-ui/core/styles";
import { fetchCommentTreeThunkAction } from "../../actions/actions";
import dateFormatter from "../../utils/dateFormatter";

const CommentCard = (props) => {
  const { comment, extendHandler, isExtended, closeHandler, depth } = props;
  const classes = useStyles({ depth });

  return !comment || comment.deleted ? null : (
    <Box className={classes.rootContainer}>
      <Box className={classes.commentaryContainer}>
        <Box className={classes.arrowContainer}>
          <Typography variant="body2" component="p" className={classes.arrow}>
            →
          </Typography>
        </Box>
        <Box className={classes.commentaryBody}>
          <Typography variant="body2" component="span">
            <p dangerouslySetInnerHTML={{ __html: dompurify.sanitize(comment.text) }} />
          </Typography>
          <Typography variant="subtitle2" component="p" color="textSecondary">
            От {comment.by}, {dateFormatter(comment.time)}
          </Typography>
        </Box>
      </Box>
      {comment.kids.length > 0 &&
        (!comment.extendedKids ? (
          isExtended ? (
            <LinearProgress className={classes.spinner} />
          ) : (
            <Button className={classes.button} onClick={extendHandler} color="primary">
              Показать ответы
            </Button>
          )
        ) : (
          <>
            {closeHandler && (
              <Button className={classes.button} onClick={closeHandler} color="primary">
                Скрыть ответы
              </Button>
            )}
            <Box className={classes.childrenContainer}>
              {comment.extendedKids.map((child) => (
                <CommentCard key={child.id} comment={child} depth={depth + 1} />
              ))}
            </Box>
          </>
        ))}
    </Box>
  );
};

const useStyles = makeStyles({
  rootContainer: {
    margin: "10px 0",
  },
  commentaryContainer: {
    display: "flex",
  },
  arrowContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: 10,
    background: `url(${backgroundArrow}) left top no-repeat`,
    backgroundSize: "1px 50%",
  },
  childrenContainer: (props) => ({
    marginLeft: props.depth < 10 ? 25 : 0,
  }),
  arrow: { lineHeight: "1px" },
  button: {
    marginLeft: 25,
    padding: 0,
    textTransform: "none",
    fontWeight: "normal",
  },
  spinner: {
    margin: "10px 0 10px 25px",
  },
});

const mapStateToProps = (state) => ({
  commentsState: state.commentsState,
});
const mapDispatchToProps = {
  fetchCommentTreeThunkAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(CommentCard);
