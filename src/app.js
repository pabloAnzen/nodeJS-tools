require('angular');

var app = angular.module('myApp', []);

/**
 * @ngdoc controller
 * @name myApp.controller:myController1
 * @description
 * Descripción del ntrolador generado
 */

app.controller('myController1', function () {
	var cinco = {
		'cinco'           : 5123,
		'tres'            : 4,
		'variableDeNombre': 100,
		'escapes'         : {
			'sadfasdf': 123,
			'asf'     : 1234
		}
	};
});

/**
 * @ngdoc directive
 * @name myApp.directive:escribePablo
 * @scope
 * @restrict E
 * @description
 * Directiva que imprime la palabra "Pablo" dentro de una etiqueta h1
 *
 * */

app.directive('escribePablo',  function () {
	return {
		restrict: 'E',
		template: '<h1>Pablo</h1>'
	};
});
