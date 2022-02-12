import { Input, Radio } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { sortBy, findСomments } from "../../store/reducers/commentReducer";
import style from "./SearchComments.module.scss";

const { Search } = Input;

const SearchComments = ({ sort }) => {
  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState(sort);

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
      <Search
        className={style.search}
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
    </>
  );
};

SearchComments.propTypes = {
  sort: PropTypes.string,
};

SearchComments.defaultProps = {
  sort: "name",
};

export default SearchComments;
