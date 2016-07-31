var draw = null;

var path = "./res/";
var ext = ".jpg"

// var names = [
//   "adventure-escape-game",
//   "adventure-puzzle-game",
//   "box5",
//   "Candy Jump",
//   "closedchain",
//   "Dynamite Game",
//   "Finger maZe 2",
//   "Finger Ski",
//   "Finger snowboard",
//   "FROG JUMP (jump jump jump)",
//   "GHOSTS",
//   "hexagon",
//   "lasergame (lazor game)",
//   "lightnet",
//   "Match 3 (ballshelf)",
//   "match 3 firewall (bubble rush in fire)",
//   "Match six (Hex Jewels)",
//   "platformer (Platformer HD) (на основе Runaway HD)",
//   "Platformer Shooter",
//   "plumbing (Plumber Flow)",
//   "pointsgame (Flow Connection Future)",
//   "pointsgame",
//   "runner (Run Fast) индиана джонс",
//   "tank game",
//   "threecolor (Shift It Fast)",
//   "threecolor (Sliding Blocks)",
//   "UPD lightnet",
//   "webgame (untangle web)",
//   "zuma (Arcanoid Break Classic)",
//   "Zuma Deluxe"
// ];

// corners
// a b   V <-
// c d   -> ^
// [a, c, d, b]

let mesh = {
  "regions": {
    "a": {
      "x": 0,
      "y": 0,
      "width": 160,
      "height": 240,
      "point": {}
    },
    "b": {
      "x": 160,
      "y": 0,
      "width": 160,
      "height": 240,
      "point": {}
    },
    "c": {
      "x": 320,
      "y": 0,
      "width": 160,
      "height": 240,
      "point": {}
    },
    "d": {
      "x": 0,
      "y": 240,
      "width": 160,
      "height": 240,
      "point": {}
    },
    "e": {
      "x": 160,
      "y": 240,
      "width": 160,
      "height": 240,
      "point": {}
    },
    "f": {
      "x": 320,
      "y": 240,
      "width": 160,
      "height": 240,
      "point": {}
    }
  },
  "layers": {
    "adventure-escape-game": {
      "x": 0,
      "y": 0,
      "width": 320,
      "height": 480,
      "corners": [
        "a",
        "d",
        "e",
        "b"
      ]
    },
    "adventure-puzzle-game": {
      "x": 160,
      "y": 0,
      "width": 320,
      "height": 480,
      "corners": [
        "b",
        "e",
        "f",
        "c"
      ]
    },
    "laser-game": {
      "x": 320,
      "y": 0,
      "width": 320,
      "height": 480,
      "corners": []
    }
  }
};
// "hexagon-game": {},
// "lazer-game": {},
// "tanks-game": {},
// "untangle-web-game": {}