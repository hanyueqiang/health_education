import React, { Component } from 'react';
import { connect } from 'dva';
import StepTips from '@components/stepTips';
import SelectDepartment from '@components/selectDepartment';
import SelectWard from '@components/selectWard';
import InputComponent from '@components/inputComponent';
import TableContainer from '@components/tableContainer';
import { columns } from './columns';
import { Checkbox } from 'antd';
import styles from './index.less';

const selectData = [];
for (let i = 0; i < 15; i++) {
	selectData.push({
		bedId: i + 1,
		name: `${i}床`,
		age: 32,
		sex: '丹丹',
		content: `London Lane no. ${i}`,
	});
}

@connect(({ eduPlan }) => ({ ...eduPlan }))
class Index extends Component {
	state = {
		departVal: '',
		eduContentsVal: '',
		wardVal: '',
		planTime: null,
		timeBreakVal: 1,
		selectedRowKeys: [],
		eduNameVal: ''
	}

	componentDidMount() {
		this.props.onRef && this.props.onRef(this);
	}

	onDepartChange = (val) => {

	}

	onEduContentsChange = (val) => {

	}
	onDateChange = (val) => {

	}

	onChooseChange = (e) => {
		console.log(e.target.checked)
	}
	onInputChange = (e) => {
		console.log(e.target.value)
		this.setState({
			eduNameVal: e.target.value
		});
	}

	onSelectChange = selectedRowKeys => {
		console.log('selectedRowKeys changed: ', selectedRowKeys);
		this.setState({ selectedRowKeys });
	};

	render() {
		const { departSource, wardSource, loading, rowKey } = this.props;
		const { departVal, eduNameVal, wardVal, selectedRowKeys } = this.state;
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
		};
		return (
			<div>
				<div>
					<StepTips count={1} name={'宣教信息'} />
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
					<InputComponent
						value={eduNameVal}
						onInputChange={this.onInputChange}
					/>
				</div>
				<div className={styles.step2}>
					<StepTips count={2} name={'选择位置'} />
					<span className={styles.selectCount}>已选择<span className={styles.lightCount}>{selectedRowKeys.length}</span>位患者</span>
					<Checkbox onChange={this.onChooseChange}>只显示选中患者</Checkbox>
					<div className={styles.selectTable}>
						<TableContainer
							columns={columns(this)}
							dataSource={selectData}
							loading={loading}
							rowKey={rowKey}
							pagination={false}
							rowSelection={rowSelection}
							scroll={{ y: 300 }}
							onChange={this.onTableChange}
						/>
						<span className={styles.remarks}>注：参考时长根据宣教内容字数、患者床号位置、机器人移动速度计算得出供参考</span>
					</div>

				</div>
			</div>
		)
	}
}
export default Index;
