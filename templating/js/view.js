var $j = jQuery.noConflict();  // Avoid conflict with the prototype library
// the main template for the view 
var template = "<tr><td>#{title}</td><td>#{author}</td><td>#{network}</td></tr>";

// Compilation of the template. This returns a object
var myTemplate = new Template(template);

var userData = '';

// Get the user data from server
$j.ajax({
	url: 'data/data.json',
	method: 'GET',
	dataType: 'json',
	async: false,
	success: function(data){
		userData = data.show;
	}
});

// For each user data repeat the template and append to the table body
userData.each(function (s) {
  var content = myTemplate.evaluate(s);
  $j('#prototypeView tbody').append(content);
});



