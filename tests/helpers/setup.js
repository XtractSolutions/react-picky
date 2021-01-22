//Polyfill
window.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
  return 0;
};

const { configure } = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

configure({ adapter: new Adapter() });
