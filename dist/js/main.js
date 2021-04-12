"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ApiTest = /*#__PURE__*/function () {
  function ApiTest() {
    var _this = this;

    _classCallCheck(this, ApiTest);

    _defineProperty(this, "BASE_API_URL", 'http://circuslabs.net:3000/data');

    _defineProperty(this, "showMessage", function (message) {
      _this.messageEl.textContent = message;
    });

    _defineProperty(this, "getData", function (evt) {
      evt.preventDefault();
      console.log('retrieving data sire');
      var key = document.querySelector('[name="key"]').value;
      axios.get("".concat(_this.BASE_API_URL, "/").concat(key)).then(_this.processsResponse).catch(_this.processError);
    });

    _defineProperty(this, "processsResponse", function (response) {
      console.log("processing response, my liege", response);

      _this.showMessage('Your data, my liege: ' + response.data.data.value);
    });

    _defineProperty(this, "processError", function (error) {
      console.log('there was an error, my liege.', error);

      _this.showMessage('Error! ' + error.message);
    });

    _defineProperty(this, "postData", function (evt) {
      evt.preventDefault();
      var key = document.querySelector('[name="key"]').value;
      var messageVal = document.querySelector('[name="message"]').value;
      console.log('Preparing to post the key data: ' + key + ': ' + messageVal); // var objData = {
      //     value: `${messageVal}`,
      //     type: 'string',
      //     key: `${key}`,
      // }

      axios.post("".concat(_this.BASE_API_URL, "/").concat(key), {
        value: "".concat(messageVal),
        type: 'string',
        key: "".concat(key)
      }).then(function (response) {
        console.log(response);
      }).catch(function (response) {
        console.log(response);
      });
    });

    console.log('ApiTest()');
    this.messageEl = document.querySelector('p.getMessage');
    this.setupListeners();
  }

  _createClass(ApiTest, [{
    key: "setupListeners",
    value: function setupListeners() {
      var getForm = document.querySelector('form.get');
      var postForm = document.querySelector('form.post');
      getForm.addEventListener('submit', this.getData);
      postForm.addEventListener('submit', this.postData);
    }
  }]);

  return ApiTest;
}();

new ApiTest();
//# sourceMappingURL=main.js.map
