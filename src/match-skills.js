class MatchSkills {

  constructor(opts = {}) { }

  static matchAll(a1, a2, returnType = "ids"){

    let score = 0;
    const map = new Map();
    (Array.isArray(a1) ? a1 : []).forEach(s1 => {
      (Array.isArray(a2) ? a2 : []).forEach(s2 => {
        if (typeof s1 !== "undefined" && typeof s1.id !== "undefined" &&
            typeof s2 !== "undefined" && typeof s2.id !== "undefined" &&
            s1.id === s2.id) {
          map.set(`${s1.id}`, s1);
          score += 1;
        }
      })
    })

    const matches =
      (returnType === "values") ?
      Array.from(map.values()).map(item => ite) :
        (returnType === "ids") ?
        Array.from(map.keys()) :
          (returnType === "map") ?
          map : [];

     return Promise.resolve({
      score: score,
      matches: matches
    });
  }

  static matchScore(a1, a2){
    return Promise.resolve(
      (Array.isArray(a1) ? a1 : []).reduce((s, s1) => s +
      (Array.isArray(a2) ? a2 : []).reduce((s, s2) => (s1.id === s2.id) ? s + 1 : s
      , 0), 0))
  }
}


module.exports = MatchSkills.matchAll
module.exports.default = MatchSkills.matchAll
module.exports.matchAll = MatchSkills.matchAll
module.exports.matchScore = MatchSkills.matchScore
module.exports.MatchSkills = MatchSkills
