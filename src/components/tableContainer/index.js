import React, { Component } from 'react';
import { Table } from 'antd';

class Index extends Component {

  render() {
    const { style = {}, loading = false, dataSource = [], columns, pagination = false, scroll = undefined, bordered = false, onChange = undefined, rowKey = '', rowSelection = null, size = 'middle', className = '' } = this.props;
    const pageConfigs = {
      showTotal: (total, range) => {
        // const pSize = Math.ceil(total / pagination.pageSize - 0);
        return `共${total}条数据`;
      },
      showQuickJumper: true,
      // pageSizeOptions: ['10', '20', '50', '100'],
      size: 'middle',
      ...pagination
    }
    const paginationProps = pagination ? pageConfigs : false;
    return (
      <Table
        className={className}
        style={{ ...style }}
        loading={loading}
        dataSource={dataSource}
        columns={columns}
        rowKey={rowKey}
        pagination={paginationProps}
        onChange={onChange}
        bordered={bordered}
        scroll={scroll}
        rowSelection={rowSelection}
        size={size}
      />
    );
  }
}
export default Index;
