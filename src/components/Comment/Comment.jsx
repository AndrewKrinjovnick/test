import { Result, Skeleton, Typography } from "antd";
import React from "react";
import PropTypes from "prop-types";
import { STATUS } from "../../const/status";

const { Title, Paragraph } = Typography;

const Comment = ({ data, status, error }) => {
  if (error) {
    return <Result status="500" title="500" subTitle={error} />;
  }
  return (
    <div>
      <Skeleton loading={status === STATUS.loading}>
        <Title level={2}>{data.name}</Title>
        <Paragraph>{data.email}</Paragraph>
        <Paragraph>{data.body}</Paragraph>
      </Skeleton>
    </div>
  );
};

Comment.propTypes = {
  data: PropTypes.shape({
    postId: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default Comment;
