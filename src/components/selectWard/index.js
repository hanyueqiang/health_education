/**
 * @onSearch  点击图标或回车change
 * @style 传入自定义样式
 */
import React from 'react';
import { Select } from 'antd';
import styles from './index.less';
const { Option } = Select;

function SelectWard(props) {
	const { onSelect = () => { }, style = {}, options = [], value = ''} = props;

	const onChange = (val) => {
		onSelect(val);
	};

	return (
		<div className={styles.edu_select}>
			<span className={styles.edu_title}>病区</span>
			<Select value={value} style={{ width: 84, ...style }} onChange={onChange}>
				<Option value={''}>全部</Option>
				{options.map(item => <Option  key={item.id} value={item.id}>{item.name}</Option>)}
			</Select>
		</div>

	);
}
export default SelectWard;
