import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import SearchComponent from '@components/searchComponent';
import SelectDepartment from '@components/selectDepartment';
import SelectWard from '@components/selectWard';
import SelectEduContents from '@components/selectEduContents';
import DialogComponent from '@components/dialogComponent';
import AddPlanComponent from '../addPlanComponent';
import styles from './index.less';

@connect(({ eduPlan }) => ({ ...eduPlan }))
class Index extends Component {
	state = {
		dialog: {
			title: '',
			contents: '',
			visible: false
		}
	}

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
		this.toggleDialogShow(true, '添加宣教计划', <AddPlanComponent onRef={ref => this.addPlantRef = ref}/>, 968);
	}

	onDialogCancel = () => {
		this.toggleDialogShow();
	}

	onDialogOk = () => {
		
	}

	toggleDialogShow(visible = false, title = '', contents = '', width) {
		this.setState({
			dialog: {
				visible,
				title,
				contents,
				width
			}
		});
	}

	render() {
		const { departSource, departVal, wardSource, wardVal, eduContentsSource, eduContentsVal } = this.props;
		const { dialog } = this.state;
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
					<SelectEduContents
						options={eduContentsSource}
						value={eduContentsVal}
						onSelect={this.onEduContentsChange}
					/>
				</div>
				<Button icon="plus" type="primary" onClick={this.addEduPlan} className={styles.addPlan} >添加宣教计划</Button>
				<DialogComponent {...dialog} onOk={this.onDialogOk} onCancel={this.onDialogCancel} />
			</div>
		)
	}
}
export default Index;