/*import _ from 'lodash';
function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());*/
import _ from 'lodash';
import $ from 'jquery'
function component () {
  var element = $('<div></div>');
  element.html(_.join(['Hello','webpack'], ' '))
  return element.get(0);
   }
  document.body.appendChild(component());