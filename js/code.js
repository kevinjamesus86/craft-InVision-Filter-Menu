(function(win) {

  var TRANSITION_END = 'transitionend webkitTransitionEnd MSTransitionEnd';
  var ANIMATION_END = 'animationend webkitAnimationEnd MSAnimationEnd';
  var $taskActions = $('.task-actions');
  var $taskList = $('.task-item');

  $taskActions.on(
    'click',
    '.task-menu-trigger',
    toggleTaskMenu
  );

  function toggleTaskMenu() {
    $taskActions.toggleClass('open');
  }

  $taskActions.on(
    'click',
    '[data-filter-by]',
    function filterClickHandler() {
      var filter = this.getAttribute('data-filter-by');
      var $unsmoosh = $taskList.filter('.smoosh.' + filter);
      var $smoosh = $taskList.filter(':not(.' + filter + '):not(.smoosh)');

      $unsmoosh.one(
        TRANSITION_END,
        function transitionEndHandler() {
          $unsmoosh.css('height', '');
        }
      );

      $smoosh.each(function() {
        this.style.height = this.offsetHeight + 'px';
      });

      win.setTimeout(function() {
        win.requestAnimationFrame(function() {
          toggleTaskMenu();
          $smoosh.addClass('smoosh');
          $unsmoosh.removeClass('smoosh');
        });
      }, 200);
    }
  );

  $(document).on('click', '.poof', function() {
    $(this).addClass('poofing').one(
      ANIMATION_END,
      function animationEndHandler() {
        $(this).removeClass('poofing');
      }
    );
  });

})(window);
