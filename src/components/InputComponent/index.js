/**
 * @onSearch  点击图标或回车change
 * @style 传入自定义样式
 */
import React from 'react';
import { Input } from 'antd';
import styles from './index.less';

function InputComponent(props) {
	const { onInputChange = () => { }, style = {}, value = '' } = props;

	return (
		<div className={styles.edu_select}>
			<span className={styles.edu_title}>宣教内容</span>
			<Input value={value} onChange={onInputChange} placeholder={'请输入'} style={{ width: 200, ...style }} />
		</div>

	);
}
export default InputComponent;
