var categories_template, photos_template, detail_template;

var current_category = animals_data.category[0];
var current_animal = current_category.animals[0];

function showTemplate(template, data){
	var html = template(data);
	$('#content').html(html);
}

$('document').ready(function() {

	var source = $("#categories-template").html();
	categories_template = Handlebars.compile(source);
	
	source = $("#photos-template").html();
	photos_template = Handlebars.compile(source);

	source = $("#detail-template").html();
	detail_template = Handlebars.compile(source);


	// navigation
	$('.nav-tabs li').click(function() {
		$(".nav-tabs .active").removeClass("active");
		$(this).addClass("active");
	});

	$('#categories-tab').click(function() {
		showTemplate(categories_template, animals_data);

		$('.category-thumbnail').click(function() {
			var index = $(this).data("id");
			current_category = animals_data.category[index];
			$('#photos-tab').click();
		});
	});

	$('#photos-tab').click(function() {
		showTemplate(photos_template, current_category);

		$('.animal-thumbnail').click(function() {
			var index = $(this).data("id");
			current_animal = current_category.animals[index];
			$('#detail-tab').click();
		});
	});

	$('#detail-tab').click(function() {
		showTemplate(detail_template, current_animal);
	});

	// initial call
	$('#categories-tab').click();

});