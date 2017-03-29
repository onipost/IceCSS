var carousel = {
    init: function(container){
        console.log('init');
        $(container).addClass('slider_container');
        console.log('slider_container added');
        var item_count = $(container).children().length;
        console.log(item_count);
        //generate control dots
        if(carousel.options['control_dots'] == true){
            carousel.generate_dots(container, item_count);
        }
        //generate control buttons
        if(carousel.options['control_buttons'] == true){
            carousel.generate_buttons(container);
        }
    },
    generate_dots: function(container, item_count){
        console.log('generate control dots started');
        for(var i=0; i<item_count; i++){
            $('<div class="'+carousel.options['class_default_dot']+'"></div>').appendTo(container).attr('data-dot-id', i);
        }
        console.log('generate control dots success');
    },
    generate_buttons: function (container) {
        console.log('generate buttons started');
        $('<div class="'+carousel.options['class_button_back']+'"></div>').appendTo(container).attr('data-role', 'button-back');
        $('<div class="'+carousel.options['class_button_next']+'"></div>').appendTo(container).attr('data-role', 'button-next');
        console.log('generate buttons success');
    },
    options: {
        'loop': false,
        'speed': 300,
        'auto_scroll': false,
        'control_buttons': true,
        'control_dots': true,
        'class_default_dot': 'control_dot',
        'class_button_next' : 'button_next',
        'class_button_back' : 'button_back'
    }
};