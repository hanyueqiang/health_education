
export const columns = context => ([
  {
    title: '位置名称',
    dataIndex: 'bedId',
    align: 'left',
    ellipsis: true,
    render: text => text || '-'
  },
  {
    title: '位置坐标',
    align: 'left',
    dataIndex: 'name',
    ellipsis: true,
    render: text => text || '-'
  },
  {
    title: '科室',
    align: 'left',
    ellipsis: true,
    dataIndex: 'sex',
    render: text => text || '-'
  },
  {
    title: '病区',
    align: 'left',
    ellipsis: true,
    dataIndex: 'depart',
    render: text => text || '-'
  },
  {
    title: '宣教播报内容',
    align: 'left',
    ellipsis: true,
    dataIndex: 'quart',
    render: text => text || '-'
  },
  {
    title: '操作',
    align: 'center',
    dataIndex: 'options',
    width: 120,
    render: (text, record) => (
      <div>
        <span className="smart-highlight" onClick={context.editHandle.bind(context, record)} style={{marginLeft: 10}}>编辑</span>
        <span className="smart-highlight" onClick={context.delHandle.bind(context, record)} style={{marginLeft: 10}}>删除</span>
      </div>
    )
  },
]);
