XMIND.define("index", [], function() {


});

(function (global) {
  // 监听
  global.XMIND.listenFileChange((dataSource) => {
    console.log(dataSource);
    const app = document.getElementById('app');
    const columns = global.XMIND.constants.columns;
    // 创建表头
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    for (let i = 0; i < columns.length; i++) {
      const th = document.createElement('th');
      th.innerText = columns[i].title;
      tr.appendChild(th);
    }
    table.appendChild(tr);
    // 创建表内容
    for (let j = 0; j < dataSource.length; j++) {
      const tr = document.createElement('tr');
      for (let k = 0; k < columns.length; k++) {
        const td = document.createElement('td');
        const key = columns[k]['dataIndex'];
        td.innerText = dataSource[j][key];
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    app.appendChild(table);
  });
})(window);
