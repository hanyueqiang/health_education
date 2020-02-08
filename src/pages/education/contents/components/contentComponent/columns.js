
export const columns = context => ([
  {
    title: '序号',
    dataIndex: 'bedId',
    align: 'left',
    ellipsis: true,
    render: text => text || '-'
  },
  {
    title: '床号',
    align: 'left',
    dataIndex: 'name',
    ellipsis: true,
    render: text => text || '-'
  },
  {
    title: '姓名',
    align: 'left',
    ellipsis: true,
    dataIndex: 'sex',
    render: text => text || '-'
  },
  {
    title: '性别',
    align: 'left',
    ellipsis: true,
    dataIndex: 'depart',
    render: text => text || '-'
  },
  {
    title: '年龄',
    align: 'left',
    ellipsis: true,
    dataIndex: 'quart',
    render: text => text || '-'
  },
  {
    title: '科室',
    align: 'left',
    ellipsis: true,
    dataIndex: 'content',
    render: text => text || '-'
  },
  {
    title: '病区',
    align: 'left',
    ellipsis: true,
    dataIndex: 'plantime',
    render: text => text || '-'
  },
  {
    title: '入院时间',
    align: 'left',
    ellipsis: true,
    dataIndex: 'status',
    render: text => text || '-'
  },
  {
    title: '主治医生',
    align: 'left',
    ellipsis: true,
    dataIndex: 'time',
    render: text => text || '-'
  },
  {
    title: '责任护士',
    align: 'left',
    ellipsis: true,
    dataIndex: 'time2',
    render: text => text || '-'
  },
  {
    title: '参考时长',
    align: 'left',
    ellipsis: true,
    dataIndex: 'time3',
    render: text => text || '-'
  }
]);
