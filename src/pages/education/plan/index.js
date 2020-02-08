import React, { Component } from 'react';
import { connect } from 'dva';
import { columns } from './components/columns';
import TableContainer from '@components/tableContainer';
import FilterRegion from './components/filterRegion';
import AddPlanComponent from './components/addPlanComponent';
import EditPlanComponent from './components/editPlanComponent';
import DialogComponent from '@components/dialogComponent';
import { message } from 'antd';
// import styles from './index.less';

@connect(({ eduPlan }) => ({ ...eduPlan }))
class Index extends Component {
  state = {
    dialog: {
      title: '',
      contents: '',
      visible: false,
      style: {}
    },
    status: ''
  }
  componentDidMount() {
    // this.getEatingList();
  }

  getEatingList = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'eduPlan/getEatingList',
      payload: {}
    });
  }

  onTableChange = (pagination) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'eduPlan/save',
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
    message.success('已停止');
  }
  editHandle = (record) => {
    const { eduContentsSource } = this.props;
    this.toggleDialogShow(
      true,
      '编辑宣教计划',
      <EditPlanComponent record={record} eduContentsSource={eduContentsSource} onRef={ref => this.editPlantRef = ref} />,
      768
    );
    this.setState({
      status: 'addEduPlanOk'
    });

  }
  delHandle = () => {
    this.toggleDialogShow(true, '删除宣教计划', '确定要删除当前宣教计划吗？', 400);
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

  toggleDialogShow(visible = false, title = '', contents = '', width, style = {}) {
    this.setState({
      dialog: {
        visible,
        title,
        contents,
        width,
        style
      }
    });
  }

  addEduPlan = () => {
    this.toggleDialogShow(
      true,
      '添加宣教计划',
      <AddPlanComponent onRef={ref => this.addPlantRef = ref} />,
      968,
      { top: 20 }
    );
    this.setState({
      status: 'addEduPlanOk'
    });
  }

  render() {
    const { dataSource, loading, pagination, rowKey } = this.props;
    const { dialog } = this.state;
    return (
      <div>
        <FilterRegion addEduPlanHandle={this.addEduPlan} />
        <TableContainer
          columns={columns(this)}
          dataSource={dataSource}
          loading={loading}
          rowKey={rowKey}
          pagination={pagination}
          onChange={this.onTableChange}
        />
        <DialogComponent {...dialog} onOk={this.onDialogOk} onCancel={this.onDialogCancel} />
      </div>
    )
  }
}
export default Index;