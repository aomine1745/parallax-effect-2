    $(document).ready(function(){
      $('section[data-type="parallax_section"]').each(function(){
              var $bgobj = $(this); // Variable para asignacion de objeto
              $(window).scroll(function() {
                $window = $(window);
                var yPos = -($window.scrollTop() / $bgobj.data('speed'));
                  // cordinadas del background
                  var coords = '50% '+ yPos + 'px';
                  // moviendo el background
                  $bgobj.css({ backgroundPosition: coords });
                });
            });
    });