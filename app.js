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
// Service for narrow  search
//-------------
// return $http(...).then(function (result) {
//     // process result and only keep items that match
//     var foundItems...
//
//     // return processed items
//     return foundItems;
// });
//---------------
function MenuSearchService() {
  var service = this;
  service.getMatchedMenuItems = function(searchTerm) {

  };

}


}]);
