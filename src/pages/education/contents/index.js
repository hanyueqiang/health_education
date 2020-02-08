import React, { Component } from 'react';
import { connect } from 'dva';
import { columns } from './components/columns';
import TableContainer from '@components/tableContainer';
import DialogComponent from '@components/dialogComponent';
import FilterRegion from './components/filterRegion';
import ContentComponent from './components/contentComponent';
// import styles from './index.less';

@connect(({ eduContents }) => ({ ...eduContents }))
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
      type: 'eduContents/getEatingList',
      payload: {}
    });
  }

  onTableChange = (pagination) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'eduContents/save',
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
    this.toggleDialogShow(
      true,
      '编辑宣教内容',
      <ContentComponent onRef={ref => this.eduContentRef = ref} />,
      968,
      { top: 20 }
    );
    this.setState({
      status: 'editEduPlanOk'
    });

  }
  delHandle = () => {
    this.toggleDialogShow(true, '删除宣教内容', '确定要删除当前宣教内容吗？', 400);
    this.setState({
      status: 'delOk'
    });
  }
  addEduContentHandle = () => {
    this.toggleDialogShow(
      true,
      '添加宣教内容',
      <ContentComponent onRef={ref => this.eduContentRef = ref} />,
      968,
      { top: 20 }
    );
    this.setState({
      status: 'addEduPlanOk'
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

  render() {
    const { dataSource, loading, pagination, rowKey } = this.props;
    const { dialog } = this.state;
    return (
      <div>
        <FilterRegion addEduContentHandle={this.addEduContentHandle} />
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