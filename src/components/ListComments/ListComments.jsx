import { Checkbox, List, Result, Skeleton } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { STATUS } from "../../const/status";
import { addOrRemoveToFavorites } from "../../store/reducers/commentReducer";

const ListComments = ({ comments, status, error }) => {
  const dispatch = useDispatch();

  if (error) {
    return <Result status="500" title="500" subTitle={error} />;
  }

  if (!comments.length) {
    return <h3>No match found</h3>;
  }

  const checkboxHendler = (id) => {
    dispatch(addOrRemoveToFavorites(id));
  };

  return (
    <List
      loading={status === STATUS.loading}
      itemLayout="horizontal"
      pagination={
        comments.length >= 10 && {
          pageSize: 10,
          showSizeChanger: false,
        }
      }
      dataSource={comments}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Checkbox
              onChange={() => checkboxHendler(item.id)}
              checked={item.isSelected}
            >
              Add to favorites
            </Checkbox>,
            <Link to={`/${item.id}`}>view more</Link>,
          ]}
        >
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
