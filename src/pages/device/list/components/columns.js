
export const columns = context => ([
  {
    title: '设备名称',
    dataIndex: 'bedId',
    align: 'left',
    ellipsis: true,
    render: text => text || '-'
  },
  {
    title: '设备号',
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
    title: '备注',
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
        <span className="span-highlight" onClick={context.editHandle.bind(context, record)} style={{marginLeft: 10}}>编辑</span>
        <span className="span-highlight" onClick={context.delHandle.bind(context, record)} style={{marginLeft: 10}}>删除</span>
      </div>
    )
  },
]);
