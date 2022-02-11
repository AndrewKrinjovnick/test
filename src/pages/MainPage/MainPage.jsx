import { Col, Layout, Row, Typography, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListComments from "../../components/ListComments";
import { fetchComments } from "../../store/requests/comments";
import { findСomments } from "../../store/reducers/commentReducer";

const { Search } = Input;

const MainPage = () => {
  const { filteredComments, status, error } = useSelector(
    (state) => state.comments
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const searchHendler = (query) => {
    if (query.trim()) {
      dispatch(findСomments(query));
    }
  };

  return (
    <Layout.Content className="container content">
      <Typography.Title>Test</Typography.Title>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={(evt) => searchHendler(evt)}
      />
      <Row justify="center">
        <Col span={23}>
          <ListComments
            comments={filteredComments}
            status={status}
            error={error}
          />
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default MainPage;
