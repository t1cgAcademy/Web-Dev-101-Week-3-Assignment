var logic = require('./logic.js');
var args = process.argv.slice(2);

// TEST DATA
const data = [
  { name: "Phil",   "state": "MD", "tz": "EST", "age": 12, "status": "child", "scores": [180, 171, 179], "senior": true  },
  { name: "Bob",    "state": "NY", "tz": "EST", "age": 18, "status": "adult", "scores": [156, 200, 172], "senior": true  },
  { name: "Alice",  "state": "IL", "tz": "CST", "age": 19, "status": "adult", "scores": [190, 190, 189], "senior": false },
  { name: "Jon",    "state": "TX", "tz": "CST", "age": 20, "status": "adult", "scores": [120, 135, 160], "senior": false },
  { name: "Sue",    "state": "MA", "tz": "EST", "age": 15, "status": "teen",  "scores": [230, 200, 198], "senior": true  },
  { name: "Rex",    "state": "DC", "tz": "EST", "age": 11, "status": "child", "scores": [134, 67, 150],  "senior": false },
  { name: "Beth",   "state": "MI", "tz": "CST", "age": 13, "status": "teen",  "scores": [203, 267, 220], "senior": true  },
  { name: "Joe",    "state": "SD", "tz": "CST", "age": 17, "status": "teen",  "scores": [115, 116, 114], "senior": true  },
];

// TESTING LOGIC
const testLogic = [
  {
    "id": "filterAge",
    "got": JSON.stringify(data.map((p) => { return logic.filterAge(p) })),
    "want": JSON.stringify(data.map((p) => { return p.status }))
  },
  {
    "id": "getTimeZone",
    "got": JSON.stringify(data.map((p) => { return logic.getTimeZone(p) })),
    "want": JSON.stringify(data.map((p) => { return p.tz })),
  },
  {
    "id": "isSenior",
    "got": JSON.stringify(data.map((p) => { return logic.isSenior(p) })),
    "want": JSON.stringify(data.map((p) => {return p.senior })),
  }
]

var numFailed = 0
for (var i = 0; i < testLogic.length; i++) {
  var t = testLogic[i]
  if (t.got !== t.want) {
    numFailed += 1
    if ('-l' === args[0]) {
      console.log(`Failed logic test for ${t.id}. \nGot: \n${t.got}\nWant: \n${t.want}\n`)
    }
  }
}

if (numFailed > 0) {
  console.log(`Failing ${numFailed} logic test(s).`)
} else {
  console.log("Passing all logic tests.")
}


// TESTING LOOPS
const testLoops = [
  {
    "id": "highestScore",
    "got": logic.highestScore(data),
    "want": "Got The highest score is 267 from Beth",
  },
  {
    "id": "avgScore",
    "got": JSON.stringify(data.map((p) => { return logic.avgScore(p.scores)})),
    "want": JSON.stringify(data.map((p) => { return parseInt((p.scores.reduce((a, b) => a + b, 0)) / p.scores.length) })),
  },
  {
    "id": "drawLine",
    "got": logic.drawLine(5),
    "want": "*****",
  },
  {
    "id": "drawSquare",
    "got": logic.drawSquare(3),
    "want": "***\n***\n***\n",
  },
  {
    "id": "drawTriangle",
    "got": logic.drawTriangle(3),
    "want": "*\n**\n***\n",
  },
  {
    "id": "palindrome",
    "got": logic.palindrome("abccba"),
    "want": true,
  },
  {
    "id": "palindrome",
    "got": logic.palindrome("abcba"),
    "want": true,
  },
  {
    "id": "palindrome",
    "got": logic.palindrome("abcdfcba"),
    "want": false,
  },
];

var numFailed = 0
for (var i = 0; i < testLoops.length; i++) {
  var t = testLoops[i]
  if (t.got !== t.want) {
    numFailed += 1
    if ('-l' === args[0]) {
      console.log(`Failed loop test for ${t.id}. \nGot: \n${t.got}\nWant: \n${t.want}\n`)
    }
  }
}

if (numFailed > 0) {
  console.log(`Failing ${numFailed} loop test(s).`)
} else {
  console.log("Passing all loop tests.")
}
