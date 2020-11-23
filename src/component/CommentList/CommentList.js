import React, { useEffect, useContext, useState } from "react";
import { connect } from "react-redux";
import {
  fetchCommentsRequestAction,
  fetchCommentListThunkAction,
  fetchCommentTreeThunkAction,
  removeCommentTreeThunkAction,
} from "../../actions/actions";
import ServiceContext from "../context/ServiceContext";
import CommentCard from "../CommentCard/CommentCard";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import Spinner from "../Spinner/Spinner";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const CommentList = (props) => {
  const newsService = useContext(ServiceContext);
  const [extendedComment, setExtendedComment] = useState(null);

  const {
    fetchCommentsRequestAction,
    fetchCommentListThunkAction,
    fetchCommentTreeThunkAction,
    removeCommentTreeThunkAction,
    commentsState: { comments, error, isLoading },
    singleNewsState: { news },
  } = props;

  useEffect(() => {
    const fetchCondition = { canceled: false };
    fetchCommentListThunkAction(newsService, fetchCondition, news.kids);
    return () => {
      fetchCommentsRequestAction();
      fetchCondition.canceled = true;
    };
  }, [fetchCommentListThunkAction, fetchCommentsRequestAction, newsService, news.kids]);

  useEffect(() => {
    const fetchCondition = { canceled: false };
    if (extendedComment)
      fetchCommentTreeThunkAction(
        newsService,
        fetchCondition,
        extendedComment.kids,
        extendedComment.id,
        setExtendedComment
      );
    return () => (fetchCondition.canceled = true);
  }, [extendedComment, fetchCommentTreeThunkAction, newsService]);

  return error ? (
    <ErrorComponent error={error} />
  ) : isLoading ? (
    <Spinner />
  ) : (
    comments.map((comment) => {
      const isExtended = extendedComment && extendedComment.id === comment.id;
      return (
        <ErrorBoundary key={comment.id}>
          <CommentCard
            extendHandler={() => setExtendedComment(comment)}
            closeHandler={() => removeCommentTreeThunkAction(comment.id)}
            isExtended={isExtended}
            comment={comment}
            depth={0}
          />
        </ErrorBoundary>
      );
    })
  );
};

const mapStateToProps = (state) => ({
  singleNewsState: state.singleNewsState,
  commentsState: state.commentsState,
});
const mapDispatchToProps = {
  fetchCommentsRequestAction,
  fetchCommentListThunkAction,
  fetchCommentTreeThunkAction,
  removeCommentTreeThunkAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
