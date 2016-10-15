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
// ----------------------------------------------------------------
/*
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
    },
*/
    "avatar": {
      "width": 1008,
      "height": 1008,
      "orientation": "vertical",
      "x": 0,
      "y": 0,
      "corners": []
    },
    "adventure-escape-game": {
     "width": 640,
     "height": 960,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "adventure-puzzle-game": {
     "width": 640,
     "height": 960,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "arkanoid-break-game": {
     "width": 646,
     "height": 955,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "box-five-game": {
     "width": 640,
     "height": 960,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "bubble-rush-in-fire-game": {
     "width": 646,
     "height": 999,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "closed-chain-game": {
     "width": 640,
     "height": 960,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "dynamite-game": {
     "width": 640,
     "height": 960,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "finger-maze-game": {
     "width": 640,
     "height": 948,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "flow-connection-game": {
     "width": 640,
     "height": 1004,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "ghosts-game": {
     "width": 568,
     "height": 320,
     "orientation": "landscape",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "hexagon-game": {
     "width": 640,
     "height": 948,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "hex-jewels-game": {
     "width": 646,
     "height": 999,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "laser-game": {
     "width": 640,
     "height": 948,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "light-flow-game": {
     "width": 646,
     "height": 955,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "platformer-shooter-game": {
     "width": 950,
     "height": 558,
     "orientation": "landscape",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "plumber-flow-game": {
     "width": 640,
     "height": 1004,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "points-game": {
     "width": 640,
     "height": 786,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "run-fast-game": {
     "width": 950,
     "height": 558,
     "orientation": "landscape",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "shift-it-fast-game": {
     "width": 646,
     "height": 955,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "sliding-blocks-game": {
     "width": 646,
     "height": 955,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "tanks-game": {
     "width": 646,
     "height": 955,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
    "untangle-web-game": {
     "width": 646,
     "height": 955,
     "orientation": "vertical",
     "x": 0,
     "y": 0,
     "corners": []
    },
// ----------------------------------------------------------------
  }
};
// "hexagon-game": {},
// "lazer-game": {},
// "tanks-game": {},
// "untangle-web-game": {}