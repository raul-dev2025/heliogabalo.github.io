(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', ['$http', function($http) {
    var store = this;
    store.products = [];
    store.activeProduct = null;
    store.showAll = false;

    store.setActiveProduct = function(product) {
      store.activeProduct = product;
      store.showAll = false;
    };

    $http.get('/js/store-products.json').success(function(data){
      store.products = data;
      store.activeProduct = store.products[0]; // initialize after data loads
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });
})();