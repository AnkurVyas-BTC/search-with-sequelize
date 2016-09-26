import delay from './delay';

let request = require('request');

let items = [];

request('http://localhost:3001/api/v1/search', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    items = JSON.parse(body);
  }
});

class SearchApi {
  static getAllItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, delay);
    });
  }

  static searchItems(search_text, stocked) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let search_hash = {search_text: search_text, stocked:  stocked};
        let options = {
          url: 'http://localhost:3001/api/v1/search/search_item',
          method: 'POST',
          json: search_hash
        };

        request(options, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            resolve(body);
          }
        });
      }, delay);
    });
  }



  // static toggleTodoItem(item) {
	// 	item = Object.assign({}, item); // to avoid manipulating object passed in.
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       let request = require('request');
  //       let completed_map = item.completed == true ? 1 : 0;
  //       let options = {
  //         url: 'http://localhost:3001/api/todo_api/'+ item.id + '/toggle_status/' + completed_map,
  //         method: 'GET'
  //       };
	//
  //       request(options, function (error, response, body) {
  //         if (!error && response.statusCode == 200) {
  //           let response = JSON.parse(body);
  //           let new_item = Object.assign({}, {id: response.id, task_text: response.task_text, completed: response.completed});
  //           resolve(new_item);
  //         }
  //       });
  //     }, delay);
  //   });
  // }

}

export default SearchApi;
