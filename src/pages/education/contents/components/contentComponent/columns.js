
export const columns = context => ([
  {
    title: '序号',
    dataIndex: 'bedId',
    align: 'left',
    ellipsis: true,
    render: text => text || '-'
  },
  {
    title: '位置名称',
    align: 'left',
    dataIndex: 'name',
    ellipsis: true,
    render: text => text || '-'
  },
  {
    title: '位置坐标',
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
    title: '宣教播报内容',
    align: 'left',
    ellipsis: true,
    dataIndex: 'content',
    render: text => text || '-'
  },
  {
    title: '操作',
    align: 'center',
    dataIndex: 'options',
    width: 120,
    render: (text, record) => (
      <div>
        <span className="span-highlight" onClick={context.editBroadcastHandle.bind(context, record)}>编辑</span>
      </div>
    )
  }
]);
