import React from 'react';
import { DatePicker, Select } from 'antd';
import moment from 'moment';
import styles from './index.less';
const { Option } = Select;

function DatePickerComponent(props) {
    const {onDateChange = () => { }, onTimeBreakChange = () => { }, value = null, style = {}, timeBreakVal='' } = props;
    const dateValue = value ? moment(value) : null;
    return (
        <div className={styles.datepicker}>
            <span className={styles.dateName}>计划时间</span>
            <DatePicker onChange={onDateChange} value={dateValue} style={{width: 150, ...style}}/>
            <Select value={timeBreakVal} style={{ width: 75, marginLeft: 4}} onChange={onTimeBreakChange}>
				<Option value={1}>上午</Option>
				<Option value={2}>下午</Option>
			</Select>
        </div> 
    );
}
export default DatePickerComponent;