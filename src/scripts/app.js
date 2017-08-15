var CB_Object = (function($, global) {

  /**************************
   *
   *   jQuery Extensions
   *
  ***************************/
  $.extend({
    jpost: function(url, body) {
      console.log(body);
      return $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify(body),
        contentType: "application/json",
        dataType: 'json'
      });
    }
  });



  /**************************
   *
   *   VARIABLE DECLARATIONS
   *
  ***************************/


  /**************************
   *
   *   TEMPLATES
   *
  ***************************/


  /**************************
   *
   *   FUNCTION DECLARATIONS              
   *
  ***************************/

  
  // All event handlers should be placed in this function
  function events () {
  }

  // All data initialiaztion should go in this function
  function init () {
  }

  // Wait for DOM to load before firing event and init functions
  $(document).ready(function () {
    events()
    init()
  });

  // Object that returns global methods and variables
  return {
  }

})(jQuery, window); 