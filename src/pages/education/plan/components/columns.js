
export const columns = context => ([
  {
    title: '床号',
    dataIndex: 'bedId',
    align: 'left',
    ellipsis: true,
    render: text => text || '-'
  },
  {
    title: '姓名',
    align: 'left',
    dataIndex: 'name',
    ellipsis: true,
    render: text => text || '-'
  },
  {
    title: '性别',
    align: 'left',
    ellipsis: true,
    dataIndex: 'sex',
    render: text => text || '-'
  },
  {
    title: '科室',
    align: 'left',
    ellipsis: true,
    dataIndex: 'depart',
    render: text => text || '-'
  },
  {
    title: '病区',
    align: 'left',
    ellipsis: true,
    dataIndex: 'quart',
    render: text => text || '-'
  },
  {
    title: '宣教内容',
    align: 'left',
    ellipsis: true,
    dataIndex: 'content',
    render: text => text || '-'
  },
  {
    title: '计划时间',
    align: 'left',
    ellipsis: true,
    dataIndex: 'plantime',
    render: text => text || '-'
  },
  {
    title: '执行状态',
    align: 'left',
    ellipsis: true,
    dataIndex: 'status',
    render: text => text || '-'
  },
  {
    title: '执行时间',
    align: 'left',
    ellipsis: true,
    dataIndex: 'time',
    render: text => text || '-'
  },
  {
    title: '操作',
    align: 'center',
    dataIndex: 'options',
    width: 120,
    render: (text, record) => (
      <div>
        <span className="smart-highlight" onClick={context.stopHandle.bind(context, record)}>停止</span>
        <span className="smart-highlight" onClick={context.editHandle.bind(context, record)} style={{marginLeft: 10}}>编辑</span>
        <span className="smart-highlight" onClick={context.delHandle.bind(context, record)} style={{marginLeft: 10}}>删除</span>
      </div>
    )
  },
]);
