/**
 * @onSearch  点击图标或回车change
 * @style 传入自定义样式
 */
import React from 'react';
import { Badge } from 'antd';
import styles from './index.less';

function StepTips(props) {
	const { count = '',name=''} = props;

	return (
		<div className={styles.steps}>
            <Badge count={count} style={{background: '#1ECBB0', color: '#fff', marginBottom: 3}}/>
            <span className={styles.stepName}>{name}</span>    
		</div>
	);
}
export default StepTips;