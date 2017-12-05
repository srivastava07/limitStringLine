	﻿(function($){
		$.fn.extend({
        
        limitStringLine: function(options) {

            // options for the plugin
            var defaults = {
            	lineNeeded: 2,
            	titleDiv: ".title"
            };

            var options =  $.extend(defaults, options);
            var lineNeeded = options.lineNeeded;
            var parentDiv = this;
            var titleDiv = options.titleDiv;

            var calulateTotalLine = function(ref){
            	var divheight = jQuery(ref).find(titleDiv).height(); 
            	var lineheight = jQuery(ref).find(titleDiv).css('line-height');
            	if(typeof lineheight !== 'undefined'){
            		lineheight = lineheight.replace('px','');            	
            	}else{
            		lineheight = 20;     
            	}        	
            	
            	var totalLine = Math.round(divheight/parseInt(lineheight));
            	return totalLine;
            };
            var init = function(){
            	jQuery(parentDiv).each(function( index,ref ) {
            		var text = jQuery(ref).find(titleDiv).text();
            		jQuery(ref).append('<div class="fake--title" style="display:none;">'+text+'</div>');
            	});
            	resizeTitle();
            	jQuery( window ).resize(function() {
            		jQuery(parentDiv).each(function( index,ref ) {
            			jQuery(ref).find(titleDiv).text(jQuery(ref).find('.fake--title').text());
            		}); 
            		resizeTitle();
            	});
            };


            var resizeTitle = function(){
            	jQuery(parentDiv).each(function( index,ref ) {
            		var text = jQuery(ref).find(titleDiv).text();			
            		var currentLine = calulateTotalLine(ref);            		
            		if(currentLine > lineNeeded){
            			if(typeof text !== 'undefined'){
            				var preText = "";
            				for(var i=0;i<text.length;i++){
            					var newText = text.substring(0, i);
            					newText = newText+'...' ;						
            					jQuery(ref).find(titleDiv).text(newText);
            					var totalLine = calulateTotalLine(ref);
            					if(totalLine > lineNeeded){
            						jQuery(ref).find(titleDiv).text(preText);
            						break;
            					}else{
            						preText = newText;
            					}
            				}
            			}
            		}
            	}); 
            };
            
           init();
        }
    });
	})(jQuery);
