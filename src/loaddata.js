'use strict';

XMIND.define(['uploadFile'], [], function () {

  function listenFileChange(callback) {
    let fileInput = document.getElementById('csv');
    let readFile = function () {
      let reader = new FileReader();
      reader.onload = function (evt) {
        let json = csvJSON(reader.result);
        callback && callback(JSON.parse(json));
      };
      reader.readAsText(fileInput.files[0], 'utf-8');
    };
    fileInput.addEventListener('change', readFile);
  }

  function csvJSON(csv) {
    let lines = csv.split('\n');
    let result = [];
    let headers = lines[0].split(',');
    for (let i = 1; i < lines.length; i++) {
      let obj = {};
      let currentline = lines[i].split(',');
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }

    return JSON.stringify(result); //JSON
  }

  return {
    listenFileChange: listenFileChange,
  };
});
