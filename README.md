# jquery.disableInputs


Small jQuery plugin to toggle `disabled` on all of a element's controls (`input`/`textarea`/`select`/`button`).

Useful when processing an AJAX submission on a form.

## Usage example:

```js
$('.my-ajax-form').on('submit', function(e) {
  e.preventDefault();
  var $this = $(this);

  // disable form's inputs after serialising (otherwise you won't get the values)
  var data = $this.serialize();

  $this.disableInputs(true);

  $.ajax({
    url: $this.attr('action'),
    type: 'post',
    dataType: 'json',
    data: data,
    success: function(data) {
      // do something
    },
    complete: function() {
      // reset the form's inputs to the state they were before
      $this.disableInputs(false);
    }
  });
});
```

## License

MIT
