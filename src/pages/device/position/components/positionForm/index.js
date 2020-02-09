import React, { Component } from 'react';
import { Modal, Form, Input, Select } from 'antd';
const { TextArea } = Input;
const FormItem = Form.Item;
const { Option } = Select;

@Form.create()
class Index extends Component {

	render() {
		const { visible, onCancel, onOk, form, departSource, wardSource } = this.props;
		const { getFieldDecorator } = form;
		const formItemLayout = {
			labelCol: { span: 5 },
			wrapperCol: { span: 17 },
		};
		return (
			<Modal
				visible={visible}
				title={"编辑定位位置"}
				okText="保存"
				onCancel={onCancel}
				onOk={onOk}
				width={660}
			>
				<Form {...formItemLayout}>
					<FormItem
						label="位置名称">
						{getFieldDecorator('deviceId', {
							rules: [{
								whitespace: true,
								required: true, message: '名称不能为空或超出最大长度',
								max: 32,
							}],
						})(
							<Input placeholder="请输入" />
						)}
					</FormItem>
                    <FormItem
						label="位置坐标">
						{getFieldDecorator('deviceId', {
							rules: [{
								whitespace: true,
								required: false, message: '',
								max: 32,
							}],
						})(
							<span>1022.35; 487.10, 856.25</span>
						)}
					</FormItem>
					<FormItem
						label="科室信息">
						{getFieldDecorator('department', {
							rules: [{
								whitespace: true,
								required: true, message: '名称不能为空或超出最大长度',
							}],
						})(
							<Select placeholder="请选择">
								{departSource.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
							</Select>
						)}
					</FormItem>
					<FormItem
						label="病区信息">
						{getFieldDecorator('department', {
							rules: [{
								whitespace: true,
								required: true, message: '名称不能为空或超出最大长度',
							}],
						})(
							<Select placeholder="请选择">
								{wardSource.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
							</Select>
						)}
					</FormItem>
					<FormItem
						label="宣教播报内容">
						{getFieldDecorator('remarks', {
							rules: [
								{ required: true, message: '不能为空' },
								{ max: 250, message: '超出最大长度' }
							],
						})(
							<TextArea rows={2} placeholder="请输入" />
						)}
					</FormItem>
				</Form>
			</Modal>
		);
	}
}
export default Index;