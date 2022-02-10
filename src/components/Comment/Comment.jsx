import { Typography } from "antd";
import React from "react";
import PropTypes from "prop-types";

const { Title, Paragraph } = Typography;

const Comment = ({ data }) => {
  return (
    <>
      <Title level={2}>{data.name}</Title>
      <Paragraph>{data.email}</Paragraph>
      <Paragraph>{data.body}</Paragraph>
    </>
  );
};

Comment.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      postId: PropTypes.number,
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string,
    })
  ).isRequired,
};

export default Comment;
