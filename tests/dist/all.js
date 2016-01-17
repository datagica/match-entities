'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _matchSkills = require('../../lib/match-skills');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chai = require('chai');
chai.use(require('chai-fuzzy'));
var expect = chai.expect;

describe('MatchSkills', function () {
  describe('matchScore', function () {

    it('should return the score', function (done) {
      this.timeout(10000);

      var tests = [{
        input: {
          a: [{
            id: "skill-1"
          }, {
            id: "skill-2"
          }, {
            id: "skill-3"
          }],
          b: [{
            id: "skill-2"
          }, {
            id: "skill-3"
          }]
        },
        output: 2
      }];

      tests.reduce(function (prom, test) {

        return prom.then(function () {

          return (0, _matchSkills.matchScore)(test.input.a, test.input.b).then(function (output) {
            expect(output).to.be.like(test.output);
            return _promise2.default.resolve(true);
          });
        });
      }, _promise2.default.resolve(0)).then(function (ended) {
        done();
      }).catch(function (err) {
        console.error(err);
        done();
      });
    });
  });

  describe('matchAll', function () {

    it('should return list of matched items', function (done) {
      this.timeout(10000);

      var tests = [{
        input: {
          a: [{
            id: "skill-1"
          }, {
            id: "skill-2"
          }],
          b: [{
            id: "skill-2"
          }, {
            id: "skill-3"
          }]
        },
        output: {
          score: 1,
          matches: ["skill-2"]
        }
      }];
      tests.reduce(function (prom, test) {

        return prom.then(function () {

          return (0, _matchSkills.matchAll)(test.input.a, test.input.b, "ids").then(function (output) {
            expect(output).to.be.like(test.output);
            return _promise2.default.resolve(true);
          });
        });
      }, _promise2.default.resolve(0)).then(function (ended) {
        done();
      }).catch(function (err) {
        console.error(err);
        done();
      });
    });
  });
});