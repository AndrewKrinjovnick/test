import { Layout } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comment from "../../components/Comment";
import { fetchOneComment } from "../../store/requests/commentsApi";

const CommentPage = () => {
  const { currentComment, error, status } = useSelector(
    (state) => state.comments
  );

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneComment(id));
  }, [dispatch, id]);

  return (
    <Layout.Content className="container content">
      <Comment data={currentComment} error={error} status={status} />
    </Layout.Content>
  );
};

export default CommentPage;
