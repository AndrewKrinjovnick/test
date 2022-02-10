import { List, Result, Skeleton } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { STATUS } from "../../const/status";

const ListComments = ({ comments, status, error }) => {
  if (error) {
    return <Result status="500" title="500" subTitle={error} />;
  }

  return (
    <List
      loading={status === STATUS.loading}
      itemLayout="horizontal"
      dataSource={comments}
      renderItem={(item) => (
        <List.Item actions={[<Link to={`/${item.id}`}>view more</Link>]}>
          <Skeleton title={false} loading={status === STATUS.loading} active>
            <List.Item.Meta title={item.name} description={item.email} />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

ListComments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number,
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string,
    })
  ).isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default ListComments;
