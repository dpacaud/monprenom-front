'use strict';

/* Directives */


angular.module('monPrenom.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
  angular.module('monPrenom.directives', []).
  directive('chart', function(){
  	return {
  		restrict: 'A',
        link: function(scope , elem, attrs) {     
			
           	var chart = null,
                opts  = { };                   
            scope.$watch(attrs.ngModel, function(v){
                if(!chart){        
                    chart = $.plot(elem, v , opts);
                    elem.show();
                }else{                	
                    chart.setData(v);
                    chart.setupGrid();
                    chart.draw();
                }
            });
        }
  	}
  });
