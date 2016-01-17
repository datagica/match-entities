const chai = require('chai')
chai.use(require('chai-fuzzy'))
const expect = chai.expect

import {
  matchAll, matchScore
}
from "../../lib/match-skills"

describe('MatchSkills', () => {
  describe('matchScore', () => {

    it('should return the score', function(done) {
      this.timeout(10000)


      const tests = [{
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
      }]

      tests.reduce((prom, test) => {

        return prom.then(() => {

          return matchScore(test.input.a, test.input.b).then(output => {
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
      this.timeout(10000)

      const tests = [{
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
          matches: [
            "skill-2"
          ]
        }
      }]
      tests.reduce((prom, test) => {

        return prom.then(() => {

          return matchAll(test.input.a, test.input.b, "ids").then(output => {
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
