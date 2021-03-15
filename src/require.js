// 写个模块加载器
(function (global) {
  global.XMIND = (function Manager() {
    let modules = {};
    function define(name, deps, impl) {
      for (let i = 0; i < deps.length; i++) {
        deps[i] = modules[deps[i]];
      }
      modules[name] = impl.apply(impl, deps);
    }
    function get(name) {
      return modules[name];
    }
    return {
      define: define,
      get: get,
    };
  })();
})(window);
