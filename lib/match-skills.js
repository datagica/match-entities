"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MatchSkills = function () {
  function MatchSkills() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    (0, _classCallCheck3.default)(this, MatchSkills);
  }

  (0, _createClass3.default)(MatchSkills, null, [{
    key: "matchAll",
    value: function matchAll(a1, a2) {
      var returnType = arguments.length <= 2 || arguments[2] === undefined ? "ids" : arguments[2];

      var score = 0;
      var map = new _map2.default();
      (Array.isArray(a1) ? a1 : []).forEach(function (s1) {
        (Array.isArray(a2) ? a2 : []).forEach(function (s2) {
          if (typeof s1 !== "undefined" && typeof s1.id !== "undefined" && typeof s2 !== "undefined" && typeof s2.id !== "undefined" && s1.id === s2.id) {
            map.set("" + s1.id, s1);
            score += 1;
          }
        });
      });

      var matches = returnType === "values" ? (0, _from2.default)(map.values()).map(function (item) {
        return ite;
      }) : returnType === "ids" ? (0, _from2.default)(map.keys()) : returnType === "map" ? map : [];

      return _promise2.default.resolve({
        score: score,
        matches: matches
      });
    }
  }, {
    key: "matchScore",
    value: function matchScore(a1, a2) {
      return _promise2.default.resolve((Array.isArray(a1) ? a1 : []).reduce(function (s, s1) {
        return s + (Array.isArray(a2) ? a2 : []).reduce(function (s, s2) {
          return s1.id === s2.id ? s + 1 : s;
        }, 0);
      }, 0));
    }
  }]);
  return MatchSkills;
}();

module.exports = MatchSkills.matchAll;
module.exports.default = MatchSkills.matchAll;
module.exports.matchAll = MatchSkills.matchAll;
module.exports.matchScore = MatchSkills.matchScore;
module.exports.MatchSkills = MatchSkills;