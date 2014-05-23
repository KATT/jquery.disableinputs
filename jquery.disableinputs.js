jQuery.fn.disableInputs = function(disable) {
  this.each(function() {
    var $form = $(this);
    var $inputs = $form.find('textarea,input,select,button');

    if ($form.data('disableInputs') === disable) {
      // console.log('no change on disableInputs');
      return;
    }
    $inputs.each(function(e, input) {
      var $input = $(input);
      var beforeState;
      if (disable) {
        // save state
        beforeState = $input.prop('disabled');
        $input.data('disableInputsBefore', beforeState);
        $input.prop('disabled', 'disabled');
      } else {
        // retrieve state
        beforeState = $input.data('disableInputsBefore');
        $input.prop('disabled', beforeState);
      }
    });

    $form.data('disableInputs', disable);
  });
};
