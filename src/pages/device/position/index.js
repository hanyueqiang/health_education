import React, { Component } from 'react';
import { connect } from 'dva';
import { columns } from './components/columns';
import TableContainer from '@components/tableContainer';
import FilterRegion from './components/filterRegion';
// import styles from './index.less';

@connect(({ devicePos }) => ({ ...devicePos }))
class Index extends Component {
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

  }
  delHandle = () => {

  }

  render() {
    const { dataSource, loading, pagination, rowKey } = this.props;
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
      </div>
    )
  }
}
export default Index;