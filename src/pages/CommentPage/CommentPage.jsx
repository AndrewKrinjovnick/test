import { Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Comment from "../../components/Comment";

const CommentPage = () => {
  const comment = useSelector((state) => state.comments.currentComment);

  return (
    <Layout.Content className="container content">
      <Comment data={comment} />
    </Layout.Content>
  );
};

export default CommentPage;
