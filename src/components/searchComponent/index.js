/**
 * @onSearch  点击图标或回车change
 * @style 传入自定义样式
 */
// import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

function SearchComponent(props) {
	const { onSearch = () => { }, style = {} } = props;

	const onChange = (val) => {
		onSearch(val);
	};

	return (
		<Search
			placeholder="请输入搜索内容"
			onSearch={onChange}
			style={{ width: 180, ...style }}
		/>
	);
}
export default SearchComponent;
