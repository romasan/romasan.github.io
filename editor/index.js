'use strict';

let data = null;
let images = {};

let _draw = ()=>{


	// let text = $("textarea").val();
	// data = JSON.parse(text);
	console.log('draw', mesh);
	images = {};

	for(let layerName in mesh.layers) {
		
		$("#container").append(
			$("<img>")
				.prop({
					src: '../res/' + layerName + '.jpg',
					id: layerName
				})
		);
		$('#' + layerName)
			.css({
				width: mesh.layers[layerName].width + 'px',
				height: mesh.layers[layerName].height + 'px',
				top: mesh.layers[layerName].y + 'px',
				left: mesh.layers[layerName].x + 'px'
			})
			.resizable({
		      aspectRatio: mesh.layers[layerName].width / mesh.layers[layerName].height
		    })
			.parent()
				.draggable({
					stack: ".drag",
					grid:[10, 10]
				})
				.addClass("drag")
				.css({position: 'absolute'})
	}
};

let _get = ()=>{

	console.log('get');

	for(let i in images) {
		// images[i]
	}
};

let _controls = ()=>{

	let o = {};
	for(let attr in layerModel) {
		switch(layerModel[attr]) {
			case "int":
				o[attr] = 0;
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
										value: 0
									})
							)
					)
				);
				break;
			case "array":
				o[attr] = [];
				break;
		}
	}
	$('#controls').append(
		$('<button>')
			.text('Close Controls')
	);
};

window.onload = ()=>{
	
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