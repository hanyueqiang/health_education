import React, { Component } from 'react';
import { connect } from 'dva';
import StepTips from '@components/stepTips';
import SelectDepartment from '@components/selectDepartment';
import SelectWard from '@components/selectWard';
import SelectEduContents from '@components/selectEduContents';
import DatePickerComponent from '@components/datePickerComponent';

@connect(({ eduPlan }) => ({ ...eduPlan }))
class Index extends Component {
	state = {
		departVal: '',
		eduContentsVal: '',
		wardVal: '',
		planTime: null,
		timeBreakVal: 1
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

	render() {
		const { departSource, eduContentsSource,wardSource } = this.props;
		const { departVal, eduContentsVal, wardVal, planTime, timeBreakVal } = this.state;
		return (
			<div>
				<div>
					<StepTips count={1} name={'计划信息'} />
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
					<DatePickerComponent 
						value={planTime} 
						timeBreakVal={timeBreakVal} 
						onDateChange={this.onDateChange}
						onTimeBreakChange={this.onTimeBreakChange}
					/>

				</div>
				<div>
					</div>	
      </div>
		)
	}
}
export default Index;
