import { Col, Layout, Row, Typography, Input, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListComments from "../../components/ListComments";
import { fetchComments } from "../../store/requests/commentsApi";
import { findСomments, sortBy } from "../../store/reducers/commentReducer";
import Splashscreen from "../../components/Splashscreen";

const { Search } = Input;

const initRadioValue = "name";

const MainPage = () => {
  const { filteredComments, status, error } = useSelector(
    (state) => state.comments
  );

  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState(initRadioValue);

  useEffect(() => {
    dispatch(fetchComments(initRadioValue));
  }, [dispatch]);

  const searchHendler = (query) => {
    if (query.trim()) {
      dispatch(
        findСomments({
          query,
          sort: radioValue,
        })
      );
    }
  };

  const listSort = (evt) => {
    setRadioValue(evt.target.value);
    dispatch(sortBy(evt.target.value));
  };

  return (
    <>
      <Splashscreen />
      <Layout.Content className="container content">
        <Typography.Title>Test</Typography.Title>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={(evt) => searchHendler(evt)}
        />
        <Radio.Group onChange={listSort} value={radioValue}>
          <Radio value="name">name</Radio>
          <Radio value="email">email</Radio>
        </Radio.Group>
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
