'use strict';

let data = null;
let images = {};

let addLayer = (_name, _layer)=>{

	$("#container").append(
			$("<img>")
				.prop({
					src: '../res/' + _name + '.jpg',
					id: _name
				})
		);
		$('#' + _name)
			.css({
				width  : _layer.width  + 'px',
				height : _layer.height + 'px',
				top    : _layer.y      + 'px',
				left   : _layer.x      + 'px'
			})
			.resizable({
	      aspectRatio: _layer.width / _layer.height
	    })
			.parent()
				.draggable({
					stack: ".drag",
					grid:[10, 10]
				})
				.addClass("drag")
				.css({position: 'absolute'});
};

let _draw = ()=>{

	// let text = $("textarea").val();
	// data = JSON.parse(text);
	images = {};

	for(let layerName in mesh.layers) {

		addLayer(layerName, mesh.layers[layerName]);
	}
};

let _get = ()=>{

	console.log('get');

	for(let i in images) {
		// images[i]
	}
};

let addControl = (attr)=>{

	$('#controls').append(
		$('<div>').append(
			$('<label>')
				.append(
					$('<span>')
						.html(attr + ':')
				)
				.append(
					$('<input>')
						.prop({
							id: 'input-' + attr,
							value: null
						})
				)
		)
	);
}

let _controls = ()=>{

	let o = {};
	for(let attr in layerModel) {
	
		if(layerModel[attr] == "int") {
			o[attr] = 0;
		}
		
		if(layerModel[attr] == "string") {
			o[attr] = "";
		}
		
		if(layerModel[attr] == "array") {
				o[attr] = [];
		}

		if(
			layerModel[attr] == "int"    ||
			layerModel[attr] == "string"
		) {

			addControl(attr);
		}
	
		
	
	}
	// $('#controls').append(
	// 	$('<button>')
	// 		.text('Close Controls')
	// );
};

let fillChanges = (_changes)=>{

	for(let i in _changes) {
		$('#input-' + i).prop({value: _changes[i]});
	}
}

// let _changes = null;

let _callback = (e)=>{
	
	if(e.target.className.indexOf('ui-resizable') >= 0) {

		let _changes = {
			id     : e.target.id                   ,
			width  : e.target.width                ,
			height : e.target.height               ,
			x      : e.target.parentNode.offsetLeft,
			y      : e.target.parentNode.offsetTop
		};

		fillChanges(_changes);
	}

};

window.onload = ()=>{
	
	document.body.addEventListener('mousedown', _callback);

	// $("#draw").click(_draw);
	_draw();

	_controls();
	
	$("#get").click(_get);
	

	// --
	// $("#container").append(
	// 	$("<img>")
	// 		.prop({
	// 			src: '../res/adventure-escape-game.jpg',
	// 			id: 'adventure-escape-game'
	// 		})
	// );
	// $('#adventure-escape-game')
	// 	.css({
	// 		width: '320px',
	// 		height: '480px',
	// 		top: '100px',
	// 		left: '100px'
	// 	})
	// 	.resizable({
	//       aspectRatio: 320 / 480
	//     })
	// 	.parent()
	// 		.addClass("drag")
	// 		.draggable({
	// 			stack: ".drag",
	// 			grid:[10, 10]
	// 		})
	// --


	// $("#container").append(
	// 	$("<img>")
	// 		.prop({
	// 			width: 320,
	// 			height: 480,
	// 			src: '../res/adventure-puzzle-game.jpg'
	// 		})
	// 		.addClass("drag")
	// 		.draggable({
	// 			stack: ".drag",
	// 			grid:[10, 10]
	// 		})
	// 		.css({
	// 			top: '100px',
	// 			left: '200px'
	// 		})
	// );
}