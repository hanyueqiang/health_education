import React, { Component } from 'react';
import SelectEduContents from '@components/selectEduContents';
import DatePickerComponent from '@components/datePickerComponent';

const RenderInfo = ({ title, name }) => <div style={{ margin: '10px 0 10px 20px' }}><span>{title}</span><span style={{marginLeft: 10}}>{name}</span></div>;

export default class Index extends Component {

	onEduContentsChange = () => {

	}
	onDateChange = () => {

	}
	onTimeBreakChange = () => {

	}

	render() {
		const { eduContentsSource } = this.props
		return (
			<div>
				<RenderInfo title={'床号信息'} name={'01-01'} />
				<RenderInfo title={'患者姓名'} name={'张三'} />
				<RenderInfo title={'科室信息'} name={'呼吸内科'} />
				<RenderInfo title={'病区信息'} name={'病区三'} />
				<div>
					<SelectEduContents
						options={eduContentsSource}
						value={''}
						onSelect={this.onEduContentsChange}
					/>
				</div>
				<div style={{marginTop: 12}}>
					<DatePickerComponent
						value={null}
						timeBreakVal={1}
						onDateChange={this.onDateChange}
						onTimeBreakChange={this.onTimeBreakChange}
					/>
				</div>
				<RenderInfo title={'参考时长'} name={'1分30秒（根据宣教内容字数、患者床号位置、机器人移动速度计算得出，仅供参考）'} />
			</div>
		)
	}
}