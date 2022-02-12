import { Col, Layout, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListComments from "../../components/ListComments";
import { fetchComments } from "../../store/requests/commentsApi";
import Splashscreen from "../../components/Splashscreen";
import SearchComments from "../../components/SearchComments";

const initRadioValue = "name";

const MainPage = () => {
  const { filteredComments, status, error } = useSelector(
    (state) => state.comments
  );
  const isVisited = localStorage.getItem("visited");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(initRadioValue));
    return () => {
      localStorage.setItem("visited", true);
    };
  }, [dispatch]);

  return (
    <>
      {!isVisited && <Splashscreen />}
      <Layout.Content className="container content">
        <Typography.Title>Test</Typography.Title>
        <SearchComments sort={initRadioValue} />
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
    </>
  );
};

export default MainPage;
