const chai = require('chai')
chai.use(require('chai-fuzzy'))
const expect = chai.expect

const matchEntities = require("../lib/match-entities");

describe('match entities', () => {
  describe('matchScore', () => {

    it('should return the score', function(done) {

      const tests = [{
        input: {
          a: [{
            id: "entity-1"
          }, {
            id: "entity-2"
          }, {
            id: "entity-3"
          }],
          b: [{
            id: "entity-2"
          }, {
            id: "entity-3"
          }]
        },
        output: 2
      },
      {
        input: {
          a: ["entity-1","entity-2","entity-3"],
          b: ["entity-2","entity-3"]
        },
        output: 2
      }]

      tests.reduce((prom, test) => {

        return prom.then(() => {

          return matchEntities.matchScore(test.input.a, test.input.b).then(output => {
            expect(output).to.be.like(test.output)
            return Promise.resolve(true)
          })
        })
      }, Promise.resolve(0)).then(ended => {
        done()
      }).catch(err => {
        console.error(err)
        done()
      })
    })
  })

  describe('matchAll', () => {

    it('should return list of matched items', function(done) {

      const tests = [{
        input: {
          a: [{
            id: "entity-1"
          }, {
            id: "entity-2"
          }],
          b: [{
            id: "entity-2"
          }, {
            id: "entity-3"
          }]
        },
        output: {
          score: 1,
          matches: [
            "entity-2"
          ]
        }
      }]
      tests.reduce((prom, test) => {

        return prom.then(() => {

          return matchEntities.matchAll(test.input.a, test.input.b, "ids").then(output => {
            expect(output).to.be.like(test.output)
            return Promise.resolve(true)
          })
        })
      }, Promise.resolve(0)).then(ended => {
        done()
      }).catch(err => {
        console.error(err)
        done()
      })
    })

  })

})
