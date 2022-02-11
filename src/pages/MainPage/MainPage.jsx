import { Col, Layout, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListComments from "../../components/ListComments";
import { fetchComments } from "../../store/reducers/commentReducer";

const MainPage = () => {
  const { allComments, status, error } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <Layout.Content className="container content">
      <Typography.Title>Test</Typography.Title>
      <Row justify="center">
        <Col span={23}>
          <ListComments comments={allComments} status={status} error={error} />
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default MainPage;
