import React, { Component } from 'react';
import { connect } from 'dva';
import { columns } from './components/columns';
import TableContainer from '@components/tableContainer';
import FilterRegion from './components/filterRegion';
import PositionForm from './components/positionForm';
import DialogComponent from '@components/dialogComponent';
// import styles from './index.less';

@connect(({ devicePos }) => ({ ...devicePos }))
class Index extends Component {
  state = {
    dialog: {
      title: '',
      contents: '',
      visible: false
    },
    status: '',
    visible: false
  }
  componentDidMount() {
    // this.getEatingList();
  }

  getEatingList = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'devicePos/getEatingList',
      payload: {}
    });
  }

  onTableChange = (pagination) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'devicePos/save',
      payload: {
        pagination: {
          current: pagination.current,
          total: pagination.total,
          pageSize: pagination.pageSize
        }
      }
    });
    // this.getEatingList();
  }

  stopHandle = () => {

  }
  editHandle = () => {
    this.setState({
      visible: true
    })

  }
  delHandle = () => {
    this.toggleDialogShow(true, '删除位置', '确定要删除当前位置吗？', 400);
    this.setState({
      status: 'delOk'
    });
  }

  onDialogCancel = () => {
    this.toggleDialogShow();
  }

  onDialogOk = () => {
    console.log(this.state.status)
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

  savePositionFormRef = formRef => {
    this.positionFormRef = formRef;
  }

  handleCancel = () => {
    this.setState({ visible: false });
	}

	handleOk = () => {
    const { form } = this.positionFormRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  render() {
    const { dataSource, loading, pagination, rowKey, departSource, wardSource } = this.props;
    const { dialog } = this.state;
    return (
      <div>
        <FilterRegion />
        <TableContainer
          columns={columns(this)}
          dataSource={dataSource}
          loading={loading}
          rowKey={rowKey}
          pagination={pagination}
          onChange={this.onTableChange}
        />
        <PositionForm
          wrappedComponentRef={this.savePositionFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
          departSource={departSource}
          wardSource={wardSource}
        />
        <DialogComponent {...dialog} onOk={this.onDialogOk} onCancel={this.onDialogCancel} />
      </div>
    )
  }
}
export default Index;