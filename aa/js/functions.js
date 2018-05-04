$(document).ready(function() {
	$(".scroll").click(function(event){
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	});
});

$(document).ready(function() {
	var windowHeight = $(window).height();

	$(".work").css('height', windowHeight),
	$("#contact").css('height', windowHeight);

});

$(window).resize(function() {
	var windowHeight = $(window).height();

	$(".work").css('height', windowHeight),
	$("#contact").css('height', windowHeight);

});


//HOMEPAGE LINK HOVER

//Graphic Designer
$(document).ready(function() {
		//Preload
		$('<img/>').hide().attr('src', 'https://media.giphy.com/media/NEVT1WQFlHec8/giphy.gif').load(function(){
				$('body').append($(this));
		});
		$('#gr').hover(function() {
				$('body').css('background-image', 'url("https://media.giphy.com/media/NEVT1WQFlHec8/giphy.gif")', 'cover');
				$('body').css('background-size', 'cover');
				$('body').css('color', '#000');
		}, function() {
				$('body').css('background', '');
				$('body').css('color', '');
		});


    $('#gr').hover(function() {
        $('body').css('background-color', '#000');
				$('body').css('color', '#000');
				$('a').css('color', '#000');
				$('#gr').css('color', '#ce0000');
    }, function() {
        $('body').css('background', '');
				$('body').css('color', '');
				$('a').css('color', '');
    });
});

//Photographer
$(document).ready(function() {
    //Preload
    $('<img/>').hide().attr('src', 'https://media.giphy.com/media/T8XBQuVeSaKQw/giphy.gif').load(function(){
        $('body').append($(this));
    });

    $('#ph').hover(function() {
        $('body').css('background-image', 'url("https://media.giphy.com/media/T8XBQuVeSaKQw/giphy.gif")', 'cover');
				$('body').css('background-size', 'cover');
				$('body').css('background-position', 'center');
				$('body').css('color', '#fff');
				$('a').css('color', '#fff');
				$('#ph').css('color', '#ce0000');
    }, function() {
        $('body').css('background', '');
				$('body').css('color', '');
				$('a').css('color', '');
    });
});

//Connect
$(document).ready(function() {
    //Preload
    $('<img/>').hide().attr('src', 'https://media.giphy.com/media/vIg5t0KHYqgE0/giphy.gif').load(function(){
        $('body').append($(this));
    });

    $('#co').hover(function() {
        $('body').css('background-image', 'url("https://media.giphy.com/media/vIg5t0KHYqgE0/giphy.gif")', 'cover');
				$('body').css('background-size', 'cover');
				$('body').css('background-position', 'center');
				$('body').css('color', '#fff');
				$('a').css('color', '#fff');
				$('#co').css('color', '#ce0000');
    }, function() {
        $('body').css('background', '');
				$('body').css('color', '');
				$('a').css('color', '');
    });
});

//CONTACT LINK HOVER
//email
$(document).ready(function() {
    $('#em').hover(function() {
        $('body').css('background-color', '#000');
				$('body').css('color', '#999');
				$('a').css('color', '#999');
				$('#em').css('color', '#fff');
    }, function() {
        $('body').css('background', '');
				$('body').css('color', '');
				$('a').css('color', '');
    });
});
//twitter
$(document).ready(function() {
    $('#tw').hover(function() {
        $('body').css('background-color', '#1da1f2');
				$('body').css('color', '#fff');
				$('a').css('color', '#fff');
				$('#tw').css('color', '#000');
    }, function() {
        $('body').css('background', '');
				$('body').css('color', '');
				$('a').css('color', '');
    });
});
//instagram
$(document).ready(function() {
    $('#ig').hover(function() {
        $('body').css('background-color', '#c32aa3');
				$('body').css('color', '#fff');
				$('a').css('color', '#fff');
				$('#ig').css('color', '#000');
    }, function() {
        $('body').css('background', '');
				$('body').css('color', '');
				$('a').css('color', '');
    });
});
//dribbble
$(document).ready(function() {
    $('#dr').hover(function() {
        $('body').css('background-color', '#ea4c89');
				$('body').css('color', '#fff');
				$('a').css('color', '#fff');
				$('#dr').css('color', '#000');
    }, function() {
        $('body').css('background', '');
				$('body').css('color', '');
				$('a').css('color', '');
    });
});
//linkedin
$(document).ready(function() {
    $('#lk').hover(function() {
        $('body').css('background-color', '#007bb5');
				$('body').css('color', '#fff');
				$('a').css('color', '#fff');
				$('#lk').css('color', '#000');
    }, function() {
        $('body').css('background', '');
				$('body').css('color', '');
				$('a').css('color', '');
    });
});
