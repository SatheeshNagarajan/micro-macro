"use strict";

function getData(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function(){
      if(this.status >= 200 && this.status < 300) {
        resolve(xhr.response)
      }
      else{
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function(){
      reject({
        status: xhr.status,
        statusText: xhr.statusText
      });
    };
    xhr.send()
  });
}

getData("GET", "http://jsonplaceholder.typicode.com/todos").then(function(data) {
  let todos = JSON.parse(data);
  let output = "";
  for(let todo of todos) {
    output += `
    <li>
    <h3>${todo.title}</h3>
    </li>
    `
  }
  document.getElementById('template').innerHTML = output;
}).catch(function(error) {
  console.log(error);
});
