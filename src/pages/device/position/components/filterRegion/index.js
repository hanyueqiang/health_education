import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import SearchComponent from '@components/searchComponent';
import SelectDepartment from '@components/selectDepartment';
import SelectWard from '@components/selectWard';
import styles from './index.less';

@connect(({ eduPlan }) => ({ ...eduPlan }))
class Index extends Component {

	onSearch = (e) => {
		console.log(e)

	}

	onDepartChange = (e) => {
		console.log(e)
	}
	onWardChange = (e) => {
		console.log(e)
	}
	onEduContentsChange = (e) => {
		console.log(e)
	}
	addEduPlan = () => {
		console.log('add plan')
	}

	render() {
		const { departSource, departVal, wardSource, wardVal } = this.props;
		return (
			<div className={styles.filterRegion}>
				<div>
					<SearchComponent onSearch={this.onSearch} />
					<SelectDepartment
						options={departSource}
						value={departVal}
						onSelect={this.onDepartChange}
					/>
					<SelectWard
						options={wardSource}
						value={wardVal}
						onSelect={this.onWardChange}
					/>
				</div>
				<Button icon="import" type="primary" onClick={this.addEduPlan} className={styles.addPlan} >导入位置</Button>
			</div>
		)
	}
}
export default Index;