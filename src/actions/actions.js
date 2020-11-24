import compareArrays from "../utils/compareArrays";

const fetchListRequestAction = () => ({
  type: "FETCH_LIST_REQUEST",
});
const fetchListSuccessAction = (data) => ({
  type: "FETCH_LIST_SUCCESS",
  payload: data,
});
const fetchListFailureAction = (data) => ({
  type: "FETCH_LIST_FAILURE",
  payload: data,
});
const saveIdsAction = (data) => ({
  type: "SAVE_IDS",
  payload: data,
});

const fetchListThunkAction = (service, fetchCondition) => (dispatch) => {
  let finalList = [];
  async function fetchPack(list) {
    try {
      const listItemPromiseArray = list
        .slice(finalList.length, finalList.length + service.packLength)
        .map((id) => service.getSingleItem(id));
      const listItemArray = await Promise.all(listItemPromiseArray);
      if (!fetchCondition.canceled) {
        finalList = [...finalList, ...listItemArray];
        dispatch(fetchListSuccessAction(finalList));
        if (finalList.length < service.listLength) fetchPack(list);
      }
    } catch (error) {
      throw dispatch(fetchListFailureAction(error));
    }
  }
  dispatch(fetchListRequestAction());
  service
    .getRawList()
    .then((rawIds) => {
      const ids = rawIds.slice(0, service.listLength);
      dispatch(saveIdsAction(ids));
      fetchPack(ids);
    })
    .catch((error) => dispatch(fetchListFailureAction(error)));
};

const fetchShadowReloadListThunkAction = (service, fetchCondition) => async (dispatch, getState) => {
  try {
    const rawList = await service.getRawList();
    const newIdsList = rawList.slice(0, service.listLength);
    const oldIdsList = getState().listState.ids;
    if (!compareArrays(newIdsList, oldIdsList) && !fetchCondition.canceled) {
      const newItemList = await service.getListFromIds(newIdsList);
      dispatch(fetchListSuccessAction(newItemList));
      dispatch(saveIdsAction(newIdsList));
    }
  } catch (error) {
    dispatch(fetchListFailureAction(error));
  }
};

const fetchSingleNewsRequestAction = () => ({
  type: "FETCH_SINGLE_NEWS_REQUEST",
});
const fetchSingleNewsSuccessAction = (data) => ({
  type: "FETCH_SINGLE_NEWS_SUCCESS",
  payload: data,
});
const fetchSingleNewsFailureAction = (data) => ({
  type: "FETCH_SINGLE_NEWS_FAILURE",
  payload: data,
});

const fetchSingleNewsThunkAction = (service, fetchCondition, id) => (dispatch) => {
  fetchSingleNewsRequestAction();
  service
    .getSingleItem(id)
    .then((data) => {
      if (!fetchCondition.canceled) dispatch(fetchSingleNewsSuccessAction(data));
    })
    .catch((error) => dispatch(fetchSingleNewsFailureAction(error)));
};

const fetchCommentsRequestAction = () => ({
  type: "FETCH_COMMENTS_REQUEST",
});
const fetchCommentsSuccessAction = (data) => ({
  type: "FETCH_COMMENTS_SUCCESS",
  payload: data,
});
const fetchCommentsFailureAction = (data) => ({
  type: "FETCH_COMMENTS_FAILURE",
  payload: data,
});

const fetchCommentListThunkAction = (service, fetchCondition, ids) => (dispatch) => {
  dispatch(fetchCommentsRequestAction());
  service
    .getListFromIds(ids)
    .then((data) => {
      if (!fetchCondition.canceled) dispatch(fetchCommentsSuccessAction(data));
    })
    .catch((error) => dispatch(fetchCommentsFailureAction(error)));
};

const fetchShadowReloadCommentListThunkAction = (service, fetchCondition) => async (dispatch, getState) => {
  try {
    const oldNews = getState().singleNewsState.news;
    const newNews = await service.getSingleItem(oldNews.id);
    if (oldNews.descendants !== newNews.descendants && !fetchCondition.canceled) {
      dispatch(fetchSingleNewsSuccessAction(newNews));
    }
  } catch (error) {
    dispatch(fetchCommentsFailureAction(error));
  }
};

const fetchCommentTreeThunkAction = (service, fetchCondition, ids, parent, setExtendedComment) => (
  dispatch,
  getState
) => {
  async function getCommentTree(ids) {
    try {
      const commentList = await service.getListFromIds(ids);
      const extendedCommentListPromiseArray = commentList.map(async (comment) => {
        if (comment.kids.length > 0) comment.extendedKids = await getCommentTree(comment.kids);
        return comment;
      });
      return Promise.all(extendedCommentListPromiseArray);
    } catch (error) {
      throw error;
    }
  }
  getCommentTree(ids)
    .then((tree) => {
      if (!fetchCondition.canceled) {
        const comments = getState().commentsState.comments;
        const updatedComments = comments.map((item) => {
          if (item.id === parent) item.extendedKids = tree;
          return item;
        });
        dispatch(fetchCommentsSuccessAction(updatedComments));
        setExtendedComment(null);
      }
    })
    .catch((error) => dispatch(fetchCommentsFailureAction(error)));
};

const removeCommentTreeThunkAction = (id) => (dispatch, getState) => {
  const comments = getState().commentsState.comments;
  const updatedComments = comments.map((comment) => {
    if (comment.id === id) delete comment.extendedKids;
    return comment;
  });
  dispatch(fetchCommentsSuccessAction(updatedComments));
};

export {
  fetchListRequestAction,
  fetchListThunkAction,
  fetchShadowReloadListThunkAction,
  fetchSingleNewsRequestAction,
  fetchSingleNewsThunkAction,
  fetchCommentsRequestAction,
  fetchCommentListThunkAction,
  fetchShadowReloadCommentListThunkAction,
  fetchCommentTreeThunkAction,
  removeCommentTreeThunkAction,
};
