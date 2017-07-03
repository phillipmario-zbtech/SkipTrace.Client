(function () {
  'use strict';

  angular
    .module('skiptrace.components')
    .directive('socialMediaList', socialMediaList);

  socialMediaList.$inject = ['$q'];

  function socialMediaList($q) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController:{
        socialMedias: '='
      },
      controller: SocialMediaListController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/components/socialMedia-list/socialMedia-list.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }
  /* @ngInject */
  function SocialMediaListController() {
    var vm = this;
    vm.socialMedia = {};
    vm.canAdd = canAdd;
    vm.canDelete = canDelete;

    vm.addSocialMedia = addSocialMedia;
    vm.deleteSocialMedia = deleteSocialMedia;

    function addSocialMedia() {
      var socialMedia = angular.copy(vm.socialMedia);
      vm.socialMedias.push(socialMedia);
      vm.socialMedia = {};
    }

    function deleteSocialMedia(socialMedia) {
      var index = vm.socialMedias.indexOf(socialMedia);
      return vm.socialMedias.splice(index, 1);
    }

    function canAdd() {
      return true;
    }

    function canDelete() {
      return true;
    }
  }
})();
