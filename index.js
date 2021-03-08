(function (global) {
  // 监听
  global.XMIND.listenFileChange(json => {
    console.log(json);
  });
})(window);
