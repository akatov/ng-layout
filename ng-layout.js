'use strict';

angular.module('ngLayout', [])
  .directive('ngLayout', [
    '$compile', '$timeout', '$templateCache', '$http',
    function ($compile, $timeout, $templateCache, $http) {
      var CONTENT_FOR = 'CONTENT_FOR'
      var YIELD = 'YIELD'
      return {
        restrict: 'E',
        scope: { src: '=' },
        transclude: true,
        compile: function(elmt, attr, transclude) {
          var element = elmt
          return function(scope, element, attrs) {
            $http.get(attr.src, {cache: $templateCache}).success(function(html) {
              var dom = $compile(html)(scope.$parent)
              element.append(dom)
              transclude(scope.$parent, function(clone, innerScope) {
                var cs = {}
                angular.forEach(clone, function(c) {
                  var e = angular.element(c)
                  var a = e.attr(CONTENT_FOR)
                  if (!!a) {
                    cs[a] = $compile(e)(innerScope)
                  }
                })
                angular.forEach(element.find(YIELD), function(e) {
                  var el = angular.element(e)
                  var a = el.attr(CONTENT_FOR)
                  var c = cs[a]
                  if (!!c) {
                    el.parent().append(c)
                    el.remove()
                  }
                })
              })
            })
          }
        }
      }
    }
  ])
