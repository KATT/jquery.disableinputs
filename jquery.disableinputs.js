;(function($) {
  var pluginName = 'disableInputs';
  var beforeStateKey = pluginName + '-before';

  $.fn[pluginName] = function(disable) {
    disable = (typeof disable == 'undefined' ? true : disable);

    this.each(function() {
      var $form = $(this);
      var $inputs = $form.find('textarea,input,select,button');

      if ($form.data(pluginName) === disable) {
        // console.log('no change on disableInputs');
        return;
      }
      $inputs.each(function(index, input) {
        var $input = $(input);
        var beforeState;
        if (disable) {
          // save state
          beforeState = $input.prop('disabled');
          $input.data(beforeStateKey, beforeState);
          $input.prop('disabled', 'disabled');
        } else {
          // retrieve state
          beforeState = $input.data(beforeStateKey);
          $input.prop('disabled', beforeState);
        }
      });

      $form.data(pluginName, disable);
    });
  };
})(jQuery);