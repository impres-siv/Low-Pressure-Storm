// Edited by Casie
// Alternate webpage with varying numbers of responses and a calculated response.

// This is an array of prompts, groups, and weights.
var prompts = [
{
	prompt: 'How old are you?',
	weight: -1,
	class: 'group0'
},
{
	prompt: 'How much do you make a year?',
	weight: -1,
	class: 'group1'
},
{
	prompt: 'How much do you put in your 401k a year?',
	weight: -1,
	class: 'group2'
}
,
{
	prompt: 'How much is in your 401k so far?',
	weight: -1,
	class: 'group3'
},
{
	prompt: 'What do you want your lifestyle to be like in retirement?',
	weight: -1,
	class: 'group4'
},
{
	prompt: 'How old will you be when you retire?',
	weight: -1,
	class: 'group5'
}

]


// This nexted array has one array is for
// a particular prompt and contains an array of the possible values,
// the weight associated with the value, its class, and an image
var prompt_values = [

//How old u are?
[{
	value: 'Generation Z bb',
	class: 'btn-default btn-cheapest',
	weight: 5,
	//img: "https://images.parents.mdpcdn.com/sites/parents.com/files/styles/width_360/public/images/p_BPH105.jpg"

},
{
	value: 'Just your average millenial',
	class: 'btn-default btn-cheap',
	weight: 3,
	//img: "http://kbfinancialadvisors.com/kb/wp-content/uploads/2015/08/young-professionals-group.jpg"
},
{
	value: 'Generation X',
	class: 'btn-default btn-average',
	weight: -3,
	//img: "http://www.executivestyle.com.au/content/dam/images/g/m/k/f/t/x/image.related.articleLeadwide.620x349.gma0uo.png/1454478935348.jpg"
},
{
	value: 'Baby Boomer!',
	class: 'btn-default btn-costly',
	weight: -5,
	//img: "https://cloudfront.beautyheaven.com.au/sites/default/files/styles/heaven_fullsize/public/article_main_images/14309-skin-care-fifties-main.jpg?itok=IcQoEIl9"
}],

//How much do you make a year? -- funnier way to ask?
[{
	value: 'Under 30,000',
	class: 'btn-default btn-cheapest',
	weight: 5
},
{
	value: '31,000 - 40,000',
	class: 'btn-default btn-cheap',
	weight: 3,
},
{
	value: '41,000-50,000',
	class: 'btn-default btn-average',
	weight: 0
},
{
	value: '51,000-60,000',
	class: 'btn-default btn-costly',
	weight: -3
},
{
	value: '61,000 and over',
	class: 'btn-default btn-most-costly',
	weight: -5
}],

//How much do you save annually for retirement?' - funny pics?
[{
	value: 'I\'m supposed to do what? (< $2,000)',
	class: 'btn-default btn-cheapest',
	weight: 5
},
{
	value: 'I put some in! ($2,250-$10,000)',
	class: 'btn-default btn-cheap',
	weight: 3,
},
{
	value: 'A good amount! ($8,250-$12,000)',
	class: 'btn-default btn-costly',
	weight: -3
},
{
	value: 'Plenty. (Over $12,000)',
	class: 'btn-default btn-most-costly',
	weight: -5
}],

//How much have you saved so far?
[{
	value: 'Do I even have a 401k? (< $2,000)',
	class: 'btn-default btn-cheapest',
	weight: 5
},
{
	value: 'Some... ($2,000-$10,000)',
	class: 'btn-default btn-cheap',
	weight: 3,
},

{
	value: 'A good amount! ($50,000-$90,000)',
	class: 'btn-default btn-costly',
	weight: -3
},
{
	value: 'My 401k is overflowing. (Over $90,000)',
	class: 'btn-default btn-most-costly',
	weight: -5
}],
//What do you want your lifestyle to be like in retirement?
[{
	value: 'I\'ll think about it later.',
	class: 'btn-default btn-cheapest',
	weight: 5
},
{
	value: 'I guess I will wanna do ok?',
	class: 'btn-default btn-cheap',
	weight: 3,
},
{
	value: 'I want to have a good amount.',
	class: 'btn-default btn-average',
	weight: 0
},
{
	value: 'I want to be very comfortable.',
	class: 'btn-default btn-costly',
	weight: -3
},
{
	value: 'I am ready to let that ca$h flow.',
	class: 'btn-default btn-most-costly',
	weight: -5
}],
//How old will you be when you retire?'
[{
	value: 'I figured I\'ll work forever.',
	class: 'btn-default btn-cheapest',
	weight: 5
},
{
	value: 'Definitely before I\'m 70.',
	class: 'btn-default btn-cheap',
	weight: 3,
},
{
	value: 'Before I am 60.',
	class: 'btn-default btn-costly',
	weight: -3
},
{
	value: 'Early!',
	class: 'btn-default btn-most-costly',
	weight: -5
}],
]


// For each prompt, create a list item to be inserted in the list group
function createPromptItems() {

	for (var i = 0; i < prompts.length; i++) {
		var prompt_li = document.createElement('li');
		var prompt_p = document.createElement('p');
		var prompt_text = document.createTextNode(prompts[i].prompt);

		prompt_li.setAttribute('class', 'list-group-item prompt');
		prompt_p.appendChild(prompt_text);
		prompt_li.appendChild(prompt_p);

		document.getElementById('quiz').appendChild(prompt_li);
	}
}

// For each possible value, create a button for each to be inserted into each li of the quiz
// function createValueButtons() {

function createValueButtons() {
	//for each question
	for (var li_index = 0; li_index < prompts.length; li_index++) {
		//crate div
		var group = document.createElement('div');
		//put it in class
		group.className = 'btn-group btn-group-justified';

		//for all 4 or 5 values
		for (var i = 0; i < prompt_values[li_index].length; i++) {
			//create div
			var btn_group = document.createElement('div');

			//create class
			btn_group.className = 'btn-group';

			//Create a container to hold the image if there is one.
			btn_group.setAttribute("id", "container");

			//add button label
			var button = document.createElement('button');

			//Get the invidiual button labe;
			var button_text = document.createTextNode(prompt_values[li_index][i].value);

			//Simplify the group# process and get the class of the button.
			var groupNum = 'group' + li_index
			button.className = groupNum + ' value-btn btn ' + groupNum + prompt_values[li_index][i].class;
			button.appendChild(button_text);

			// If there is an image for the prompt value, embed it.
			if ((prompt_values[li_index][i].img) != null) {
						var imgValue = document.createElement("IMG");
						imgValue.setAttribute("src", prompt_values[li_index][i].img);
						imgValue.setAttribute("alt", prompt_values[li_index][i].value);
						button.appendChild(imgValue);
			}


			btn_group.appendChild(button);
			group.appendChild(btn_group);

			document.getElementsByClassName('prompt')[li_index].appendChild(group);
		}
	}
}

createPromptItems();
createValueButtons();

// Keep a running total of the values they have selected. If the total is negative, the user is introverted. If positive, user is extroverted.
// Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.
var total = 0;

// Get the weight associated to group number
function findPromptWeight(prompts, group) {
	var weight = 0;

	for (var i = 0; i < prompts.length; i++) {
		if (prompts[i].class === group) {
			weight = prompts[i].weight;
		}
	}

	return weight;
}

// Get the weight associated to the value
function findValueWeight(values, value) {
	var weight = 0;

	for (var i = 0; i < values.length; i++) {
		if (values[i].value === value) {
			weight = values[i].weight;
		}
	}

	return weight;
}

// When user clicks a value to cheap/costly with the prompt, display to the user what they selected
$('.value-btn').mousedown(function () {
	var classList = $(this).attr('class');
	// console.log(classList);
	var classArr = classList.split(" ");
	// console.log(classArr);
	var this_group = classArr[0];
	// console.log(this_group);

	// If button is already selected, de-select it when clicked and subtract any previously added values to the total
	// Otherwise, de-select any selected buttons in group and select the one just clicked
	// And subtract deselected weighted value and add the newly selected weighted value to the total
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
		total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
	} else {
		// $('[class='thisgroup).prop('checked', false);
		total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
		// console.log($('.'+this_group+'.active').text());
		$('.'+this_group).removeClass('active');

		// console.log('group' + findValueWeight(prompt_values, $('.'+this_group).text()));
		// $(this).prop('checked', true);
		$(this).addClass('active');
		total += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
	}

	console.log(total);
})



$('#submit-btn').click(function () {
	// After clicking submit, add up the totals from answers
	// For each group, find the value that is active
	$('.results').removeClass('hide');
	$('.results').addClass('show');

	if(total < 0) {

		document.getElementById('results').innerHTML = '<b>You should pay more attention to your 401k!</b>';
	} else {
		document.getElementById('results').innerHTML = '<b>You are ambiverted!</b><br><br>\
		Since introverts and extroverts are the extremes of the scale, the rest of us fall somewhere in the middle. Many of us lean one way or the other, but there are some who are quite balanced between the two tendencies. These people are called ambiverts.\
<br><br>\
So let’s look at how an ambivert compares.\
<br><br>\
Ambiverts exhibit both extroverted and introverted tendencies. This means that they generally enjoy being around people, but after a long time this will start to drain them. Similarly, they enjoy solitude and quiet, but not for too long. Ambiverts recharge their energy levels with a mixture of social interaction and alone time.'
	}

	// Hide the quiz after they submit their results
	$('#quiz').addClass('hide');
	$('#submit-btn').addClass('hide');
	$('#retake-btn').removeClass('hide');
})

// Refresh the screen to show a new quiz if they click the retake quiz button
$('#retake-btn').click(function () {
	$('#quiz').removeClass('hide');
	$('#submit-btn').removeClass('hide');
	$('#retake-btn').addClass('hide');

	$('.results').addClass('hide');
	$('.results').removeClass('show');
})
