(function () {
'use strict';
angular.module('NarrowItDownApp',[])
.controller("NarrowItDownController",NarrowItDownController)
.service("MenuSearchService",MenuSearchService)
;
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowController = this;
  narrowController.getMatchedMenuItems = function(searchTerm) {
     MenuSearchService.getMatchedMenuItems(searchTerm);
  }

  #getMatchedMenuItems(searchTerm)
};



}]);
