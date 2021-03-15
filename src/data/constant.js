'use strict';

XMIND.define('contant', [], function () {
  const columns = [
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
  ];
  return {
    TABLE_COLUMNS: columns,
  };
});
