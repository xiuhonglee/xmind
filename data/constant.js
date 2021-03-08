(function (global) {
  if (!global.XMIND) {
    global.XMIND = Object.create(null);
  }
  global.XMIND.constant = {
    columns: [
      {
        title: '账单时间',
        dataIndex: 'time',
      },
      {
        title: '账单类型',
        dataIndex: 'type',
      },
      {
        title: '账单分类',
        dataIndex: 'category',
      },
      {
        title: '账单金额',
        dataIndex: 'amount',
      },
    ],
  };
})(window);
