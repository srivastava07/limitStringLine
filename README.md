# Limit Number of lines in a div
You can not limit large string to specified number of lines by this plugin.


# Features:
```html
1. It will automatically detect the parent div width and adjust itselft with number of line specified.
2. If the string is larger then it will automatically add dots (...) in the end.
3. It is compatible with all browsers.
4. number of lines can be configured.
```

# Installation Instruction:
```html
1. Add jQuery in your project
2. Add limitStringLine in your project
3. call the plugin inside document.ready
```

# Uses Example
```code
<script type="text/javascript">
	jQuery(function(){
		 $('.parentDiv').limitStringLine({lineNeeded:3,titleDiv:'.title'});
	});
</script>


<div class="parentDiv col-md-6 row">
	<div class="title col-md-3">
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
	</div>	
</div>

<div class="parentDiv col-md-6 row">
	<div class="title col-md-3">
		Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
	</div>
</div>
```

