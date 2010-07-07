/*
 • jQuery fancyBlend
 • http://christopherhein.com
 •
 • Copyright 2010, Christopher Hein
 • Free to use and abuse under the GPL license.
 • http://www.gnu.org/copyleft/gpl.html
 • 
 • March 2010
*/

(function($) 
{

  $.fn.shading = function(options)
  {      
      // Settings
    settings = jQuery.extend(
    {
      url: "/",
			title: "",
    }, options);

      // Varibles
    var body = $('body'); 
    var elem = $(this);  
    var href = $(this).attr('href');
    var title = $(this).attr('title');
    var rel = $(this).attr('rel');
    var att = $(this).attr('att');
		var title = $('#page_title').text();
    
      // Click Function
    elem.bind( 'click', function()
    {
			if( settings.title != "" )
			{
				$('#page_title').text(settings.title);
			}
			
      $('#shading_overlay').fadeOut(1, function() { $('#shading_overlay').remove(); $('#shading_click').remove(); });
      
        // Adding the Div
      body.append('<div id="shading_click"></div>');
      body.append('<div id="shading_overlay"></div>');
      $('#shading_overlay').append('<div id="shading_content"></div>');
      $('#shading_overlay').fadeOut(0);
      $('#shading_content').fadeOut(0);
        
      if( att != "image" )
			{
	  			// Ajax Load Page
	      $.ajax(
	        {
	        url: rel,
	        cache: true,
	        success: function(html){
	          $("#shading_content").append(html);
	        }
	      });
			} else if( att == "image" )
			{
				$('#shading_content').append('<img src="'+rel+'"/>');
			}

			$(window).bind('scroll', function()
			{
				var el = $('#shading_content');
		  	var windowpos = $(window).scrollTop();
				var middle = windowpos * .5; 
			  var finaldestination = windowpos;
				$('#shading_click').offset().top;
				$('#shading_overlay').offset().top;
				$('#shading_click').stop().css({'top':windowpos});
				$('#shading_overlay').stop().css({'top':windowpos});
			});
        
        // Show the content
      $('#shading_overlay').fadeIn(500).next('#shading_overlay').delay(200).fadeIn(500);
      
        // Make it disappear
      $('#shading_click').bind( 'click', function()
      {
				if( settings.title != "" )
				{
					$('#page_title').text(title);
				}
       
 				$('#shading_overlay').fadeOut(500, function() { $('#shading_overlay').remove(); $('#shading_click').remove(); });
        window.location.hash = "/";
				$(window).unbind('scroll');
      });
      
    });
        
  }
  
  $.fn.codeShading = function(options)
  {
      // Settings
    settings = jQuery.extend(
    {
      url: "/",
			title: "",
    }, options);
      
      // Varibles
    var body = $('body'); 
    var elem = $(this);  
    var href = $(this).attr('href');
    var title = $(this).attr('title');
    var rel = $(this).attr('rel');
    var att = $(this).attr('att');
		var title = $('#page_title').text();
		
		if( settings.title != "" )
		{
			$('#page_title').text(settings.title);
		}

    $('#shading_overlay').fadeOut(1, function() { $('#shading_overlay').remove(); $('#shading_content').remove(); $('#shading_click').remove();
        
        // Adding the Div
    body.append('<div id="shading_click"></div>');
    body.append('<div id="shading_overlay"></div>');
    $('#shading_overlay').append('<div id="shading_content"></div>');
    $('#shading_overlay').fadeOut(0);
    $('#shading_content').fadeOut(0);
        
    if( att != "image" )
		{
	  		// Ajax Load Page
	    $.ajax(
	    {
	      url: settings.url,
	      cache: true,
	        success: function(html){
	          $("#shading_content").append(html);
	        }
	     });
			} else if( att == "image" )
			{
				$('#shading_content').append('<img src="'+settings.url+'"/>');
			}
      
			$(window).bind('scroll', function()
			{
				var el = $('#shading_content');
		  	var windowpos = $(window).scrollTop();
				var middle = windowpos * .5; 
			  var finaldestination = windowpos;
				$('#shading_click').offset().top;
				$('#shading_overlay').offset().top;
				$('#shading_click').stop().css({'top':windowpos});
				$('#shading_overlay').stop().css({'top':windowpos});
			});
			
        // Show the content
      $('#shading_overlay').delay(200).fadeIn(500).next('#shading_overlay').delay(200).fadeIn(500);
      
        // Make it disappear
      $('#shading_click').bind( 'click', function()
      {
				if( settings.title != "" )
				{
					$('#page_title').text(title);
				}
       
 				$('#shading_overlay').fadeOut(500, function() { $('#shading_overlay').remove(); $('#shading_click').remove(); });
        window.location.hash = "/";
				$(window).unbind('scroll', function() {});
      });
    
    });
    
  }
  
	
})(jQuery);
