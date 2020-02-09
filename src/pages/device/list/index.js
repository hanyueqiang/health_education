import React, { Component } from 'react';
import { connect } from 'dva';
import { columns } from './components/columns';
import TableContainer from '@components/tableContainer';
import FilterRegion from './components/filterRegion';
import DeviceForm from './components/deviceForm';
import DialogComponent from '@components/dialogComponent';
// import styles from './index.less';

@connect(({ deviceList }) => ({ ...deviceList }))
class Index extends Component {
  state = {
    dialog: {
      title: '',
      contents: '',
      visible: false
    },
    status: '',
    visible: false,
    formTitle: '编辑设备'
  }

  componentDidMount() {
    // this.getEatingList();
  }

  getEatingList = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'deviceList/getEatingList',
      payload: {}
    });
  }

  onTableChange = (pagination) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'deviceList/save',
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

  editHandle = () => {
    this.setState({
      visible: true,
      formTitle: '编辑设备'
    });
  }

  addDeviceHandle = () => {
    this.setState({
      visible: true,
      formTitle: '添加设备'
    });
  }

  delHandle = () => {
    this.toggleDialogShow(true, '删除设备', '确定要删除当前设备吗？', 400);
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

  saveDeviceFormRef = formRef => {
    this.deviceFormRef = formRef;
  }

  handleCancel = () => {
    this.setState({ visible: false });
	}

	handleOk = () => {
    const { form } = this.deviceFormRef.props;
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
        <FilterRegion addDeviceHandle={this.addDeviceHandle}/>
        <TableContainer
          columns={columns(this)}
          dataSource={dataSource}
          loading={loading}
          rowKey={rowKey}
          pagination={pagination}
          onChange={this.onTableChange}
        />
        <DeviceForm
          wrappedComponentRef={this.saveDeviceFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
          title={this.state.formTitle}
          departSource={departSource}
          wardSource={wardSource}
        />
        <DialogComponent {...dialog} onOk={this.onDialogOk} onCancel={this.onDialogCancel} />
      </div>
    )
  }
}
export default Index;