(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  Bem Estar */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         activate_subpage("#pagina_bem_estar"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
