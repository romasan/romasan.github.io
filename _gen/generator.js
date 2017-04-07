var _layers = [
	{name: "adventure-escape-game"   },
	{name: "arkanoid-break-game"     },
	{name: "box-five-game"           },
	{name: "bubble-rush-in-fire-game"},
	{name: "avatar"                  },
	{name: "closed-chain-game"       },
	{name: "dynamite-game"           },
	{name: "adventure-puzzle-game"   },
	{name: "finger-maze-game"        },
	{name: "flow-connection-game"    },
	{name: "ghosts-game"             },
	{name: "hex-jewels-game"         },
	{name: "laser-game"              },
	{name: "light-flow-game"         },
	{name: "platformer-shooter-game" },
	{name: "plumber-flow-game"       },
	{name: "hexagon-game"            },
	{name: "points-game"             },
	{name: "run-fast-game"           },
	{name: "shift-it-fast-game"      },
	{name: "sliding-blocks-game"     },
	{name: "tanks-game"              },
	{name: "untangle-web-game"       },

	{name: "adventure-escape-game"   },
	{name: "arkanoid-break-game"     },
	{name: "box-five-game"           },
	{name: "bubble-rush-in-fire-game"},
	{name: "avatar"                  },
	{name: "closed-chain-game"       },
	{name: "dynamite-game"           },
	{name: "adventure-puzzle-game"   },
	{name: "finger-maze-game"        },
	{name: "flow-connection-game"    },
	{name: "ghosts-game"             },
	{name: "hex-jewels-game"         },
	{name: "laser-game"              },
	{name: "light-flow-game"         },
	{name: "platformer-shooter-game" },
	{name: "plumber-flow-game"       },
	{name: "hexagon-game"            },
	{name: "points-game"             },
	{name: "run-fast-game"           },
	{name: "shift-it-fast-game"      },
	{name: "sliding-blocks-game"     },
	{name: "tanks-game"              },
	{name: "untangle-web-game"       }
];

const PAGE      = 'page'     ,
      LANDSCAPE = 'landscape',
      PORTRAIT  = 'portrait' ;
		
// Preload
var preload = callback => {

	let _preload = 0;

	let _container = document.getElementById(PAGE);

	for(let i in _layers) {
				
		let _img = document.createElement('img');
				
		_img.src = '../res/' + _layers[i].name + '.jpg';
				
		_img.onload = e => {
			_preload += 1;
			if(
				_preload == _layers.length &&
				typeof callback == "function"
			) {
				callback();
			}
		}
				
		_container.appendChild(_img);
				
		_layers[i].img = _img;
	}
};

// Statistics
let statistic = e => {
			
	let window_width       = document.body.offsetWidth ,
	    window_height      = document.body.offsetHeight,
	    window_orientation = window_width >= window_height
	    	? LANDSCAPE
	    	: PORTRAIT;

	console.log('window', window_width, window_height, window_orientation);

	let typesCount = {};
	    typesCount[LANDSCAPE] = 0;
	    typesCount[PORTRAIT]  = 0;
			
	let minHeight = 200;// -1;
	for(let i in _layers) {

		_layers[i].width  = _layers[i].img.naturalWidth,
		_layers[i].height = _layers[i].img.naturalHeight;

		console.log(_layers[i].name, _layers[i].width, _layers[i].height, '/2:', _layers[i].width / 2, _layers[i].height / 2);

		_layers[i].orientation = _layers[i].width >= _layers[i].height ? LANDSCAPE : PORTRAIT;
				
		typesCount[_layers[i].orientation] += 1;

		// if(minHeight < 0) {
		// 	minHeight = _layers[i].height;
		// } else if(_layers[i].height < minHeight) {
		// 	minHeight = _layers[i].height;
		// }
	}
	
	console.log('minHeight:', minHeight);

	// let sumMinWidth = 0;
	// for(let i in _layers) {
				
	// 	_layers[i].minHeight = minHeight;
	// 	_layers[i].minWidth  = _layers[i].width * (minHeight / _layers[i].height);
				
	// 	sumMinWidth += _layers[i].minWidth;
				
	//}

	// console.log('sumMinWidth:', sumMinWidth);

	let rowsCount = (window_height / minHeight) | 0,
	    rowHeight = window_height / rowsCount   | 0;

	console.log('rowsCount:', rowsCount);
	console.log('rowHeight:', rowHeight);

	let sumNewWidth = 0;
	for(let i in _layers) {
		_layers[i].newHeight = rowHeight;
		_layers[i].newWidth  = _layers[i].width * (rowHeight / _layers[i].height);

		sumNewWidth += _layers[i].newWidth;
	}

	let rowWidth = (sumNewWidth / rowsCount) | 0;
	let minPicCountInRow = (_layers.length / rowsCount) | 0;

	console.log('minPicCountInRow:', minPicCountInRow);

	let rowNum = -1;
	let left = 0;
	for(let i in _layers) {
		rowNum = i % minPicCountInRow == 0 && rowNum < rowsCount ? rowNum + 1 : rowNum;
		_layers[i].rowNum = rowNum;
		if(i == 0) {
			_layers[0].top = 0;
			_layers[0].left = 0;
		} else if(_layers[i].rowNum == _layers[i - 1].rowNum){

			let minWidth = _layers[i].newWidth > _layers[i - 1].newWidth ? _layers[i - 1].newWidth : _layers[i].newWidth;

			if(i % minPicCountInRow != 0 || left > 0) {
				left += ((minWidth / 2) | 0);
			}
			_layers[i].top  = _layers[i].rowNum * rowHeight;
			_layers[i].left = left;
		} else {
			left = 0;
		}

		_layers[i].img.style.height   = _layers[i].newHeight + 'px';
		_layers[i].img.style.width    = _layers[i].newWidth  + 'px';
		_layers[i].img.style.position = 'absolute';
		_layers[i].img.style.top      = _layers[i].top       + 'px';
		_layers[i].img.style.left     = _layers[i].left      + 'px';
	}

	console.log('_layers:', _layers);

	// document.getElementById(PAGE).style.width = rowWidth + 'px';

	// Show page
	document.getElementById(PAGE).style.display = 'block';

	console.log('typesCount:' , typesCount);
}
		
window.onload = e => {
	preload(statistic);
}
