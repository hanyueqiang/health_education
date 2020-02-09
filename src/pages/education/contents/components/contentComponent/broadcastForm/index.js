import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';
const { TextArea } = Input;
const FormItem = Form.Item;

@Form.create()
class Index extends Component {

	render() {
		const { visible, onCancel, onOk, form } = this.props;
		const { getFieldDecorator } = form;
		const formItemLayout = {
			labelCol: { span: 3 },
			wrapperCol: { span: 19 },
		};
		return (
			<Modal
				visible={visible}
				title="编辑宣教播报内容"
				okText="保存"
				onCancel={onCancel}
				onOk={onOk}
				width={660}
			>
				<Form {...formItemLayout}>
					<FormItem
						label="播报内容">
						{getFieldDecorator('content', {
							rules: [
								{ required: true, message: '播报内容不能为空' },
								{ max: 250, message: '超出最大长度' }
							],
						})(
							<TextArea rows={4} placeholder="请输入" />
						)}
					</FormItem>
				</Form>
			</Modal>
		);
	}
}
export default Index;