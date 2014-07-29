angular.module('AppFilters', []).
  filter('htmlToPlaintext', function () {
      return function (text) {
          return String(text).replace(/<[^>]+>/gm, '');
      }
  }
);