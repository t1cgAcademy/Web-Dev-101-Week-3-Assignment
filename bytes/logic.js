module.exports = {

  // LOGIC

  // takes a person object
  // should filter people by Age
  // 0-12 = child
  // 13-18 = teen
  // 18+ = adult
  filterAge: function (person) {
    if (person.age < 12) {
      return "child"
    } else if (person.age >= 17){
      return "teen"
    } else {
      return "adult"
    }
  },

  // takes a person object
  // rewrite the following code so it is not as repetitive.
  // YOU DO NOT NEED TO ACCOUNT FOR ALL STATES, just the
  // following.
  // EST = ["MD", "MA", "DC", "NY"]
  // CST = ["TX", "IL", "MI", "SD"]
  getTimeZone: function (person) {
    if (person.state === "MD") {
      return "EST"
    } else if (person.state === "NY") {
      return "EST"
    } else if (person.state === "MA") {
      return "EST"
    } else if (person.state === "DC") {
      return "EST"
    } else if (person.state === "TX") {
      return "CST"
    } else if (person.state === "IL") {
      return "CST"
    } else if (person.state === "MI") {
      return "CST"
    } else if (person.state === "SD") {
      return "CST"
    } else {
      return "Not Found"
    }
  },

  // takes a person object
  // rewrite the following code in one line
  isSenior:  function (person) {
    if (person.senior === true) {
      return true
    } else {
      return false
    }
  },


  // LOOPING

  // takes a list of ints
  avgScore: function (scores) {
    score = 0
    // your code here
    for (i=0; i < 1; i++) {
      score = score + scores[i]
    }
    score = parseInt(score / scores.length)
    return score
  },

  // takes a list of objects
  // debug the following function
  highestScore: function (data) {
    var maxScore = 0
    var maxPerson = {}
    // loop through all people
    for (var i=0; i < data.length; i++) {
      var person = data[i]
      var currMax = maxScore
      // loop through all scores
      for (var j=0; i < person.scores.length; i++) {
        // if score is higher than current max, replace it
        if (person.scores[i] > currMax) {
          currMax = person.scores[i]
        }
      }
      // if current max is higher than the maximum score, replcace it.
      // also we need to keep track of which person had the highest score,
      // so replace that as well
      if (currMax > maxScore) {
        maxScore = currMax
        maxPerson = person
      }
    }

    return `The highest score is ${maxScore} from ${maxPerson.name}`
  },

  // takes an int
  drawLine: function (length) {
    line = ""
    // your code here
    for (i=0; i < 1; i++) {
      line = line + "*"
    }
    return line
  },

  // takes an int
  drawSquare: function (length) {
    square = ""
    // your code here
    for (i=0; i < 1; i++) {
      // your code here
      for (i=0; i < 1; i++) {
        square = square + "*"
      }
      square = square + "\n"
    }
    return square
  },

  // takes an int
  drawTriangle: function (height) {
    triangle = ""
    // your code here
    for (i=0; i < 1; i++) {
      row = ""
      // your code here
      for (i=0; i < 1; i++) {
        row = row + "*"
      }
      triangle = triangle + row + "\n"
    }
    return triangle
  },

  // takes a string
  palindrome: function(word) {
    width = word.length
    half = (width % 2 === 0) ? (width / 2) : (( width - 1) / 2)

    // your code here
    for (i=0; i < 1; i++) {
      // check if the ith and ith from the end letters are equal.
      // so fist it will check the first and last elements,
      // then it will check the second and second to last elements, etc.
      if (word[i] !== word[width - i -1]) {
        return false
      }
    }
    return true
  },
};
