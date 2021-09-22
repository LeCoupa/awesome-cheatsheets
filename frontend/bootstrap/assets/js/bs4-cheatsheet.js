var card_collapse = 0;

$(document).ready(function(){
    //  Activate the Tooltips
    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

    $('.brand input').focusin(function(){
        $(this).parent().addClass('is-focused');
    }).focusout(function(){
        $(this).parent().removeClass('is-focused');
    });

    $('.modal').appendTo('body');

    if($(window).width() < 991 && $('.navbar').hasClass('bg-transparent')){
        $('.navbar').removeClass('bg-transparent').addClass('bg-faded');
    }

    if($('.twitter-sharrre-nav').length != 0){
        $('.twitter-sharrre-nav').sharrre({
          share: {
            twitter: true
          },
          enableHover: false,
          enableTracking: true,
          enableCounter: false,
          buttons: { twitter: {via: 'BootstrapBay'}},
          click: function(api, options){
            api.simulateClick();
            api.openPopup('twitter');
          },
          template: '<i class="fa fa-twitter"></i><p class="hidden-lg-up">Twitter</p>',
          url: 'https://www.creative-tim.com/cheatsheet/bootstrap4'
        });
    }

    if($('.facebook-sharrre-nav').length != 0){
        $('.facebook-sharrre-nav').sharrre({
          share: {
            facebook: true
          },
          enableHover: false,
          enableTracking: true,
          enableCounter: false,
          click: function(api, options){
            api.simulateClick();
            api.openPopup('facebook');
          },
          template: '<i class="fa fa-facebook-square"></i><p class="hidden-lg-up">Facebook</p>',
          url: 'https://www.creative-tim.com/cheatsheet/bootstrap4'
        });
    }

    if($('.google-sharrre-nav').length != 0){
        $('.google-sharrre-nav').sharrre({
          share: {
            googlePlus: true
          },
          enableCounter: false,
          enableHover: false,
          enableTracking: true,
          click: function(api, options){
            api.simulateClick();
            api.openPopup('googlePlus');
          },
          template: '<i class="fa fa-linkedin"></i><p class="hidden-lg-up">LinkedIn</p>',
          url: 'https://www.creative-tim.com/cheatsheet/bootstrap4'
        });
    }

    if($('.pinterest-sharrre-nav').length != 0){
        $('.pinterest-sharrre-nav').sharrre({
          share: {
            pinterest: true
          },
          enableCounter: false,
          enableHover: false,
          enableTracking: true,
          click: function(api, options){
            api.simulateClick();
            api.openPopup('pinterest');
          },
          template: '<i class="fa fa-linkedin"></i><p class="hidden-lg-up">LinkedIn</p>',
          url: 'https://www.creative-tim.com/cheatsheet/bootstrap4'
        });
    }

    var $input = $('.main .brand').find("#filter");
    $input.jcOnPageFilter({
        animateHideNShow: true,
        focusOnLoad: false,
        highlightColor: "yellow",
        textColorForHighlights: "#000000",
        caseSensitive: false,
        hideNegatives: false,
        childBlockClass: "jcorgFilterTextChild"
    });

    card_collapse = $('.card-collapse');
    SetCard(card_collapse);
});

function materialInit(){
    $.material.init();
}

$(window).on("resize", function(){
    if($(window).width() < 992){
        $('.navbar').removeClass('bg-transparent').addClass('bg-faded');
    } else {
        $('.navbar').addClass('bg-transparent').removeClass('bg-faded');
    }
});

$(document).on('click', '#expand-all', function(){
    $(this).html('Collapse-all');
    $(this).attr('id', 'collapse-all').attr('class', 'btn btn-info btn-block');

    $('.card-collapse').addClass('active');
    $('.card-collapse .card-header').siblings('.collapse').addClass('show');
});

$(document).on('click', '#collapse-all', function(){
    $(this).html('Expand-all');
    $(this).attr('id', 'expand-all').attr('class', 'btn btn-default btn-block');

    if($('.card-collapse.active').length != 0){
        $('.card-collapse').removeClass('active');
        $('.card-collapse .card-header').siblings('.collapse').removeClass('show');
    }
});

$(document).on('click', '#new', function(){
    $('body').toggleClass('show-highlight');

    if($('body').hasClass('show-highlight')){
        $('.card-collapse').addClass('active');
        $('.card-collapse .card-header').siblings('.collapse').addClass('show');

        $(this).attr('class', 'btn btn-info btn-block');
        $('#expand-all').html('Collapse-all').attr('id', 'collapse-all').attr('class', 'btn btn-info btn-block');
    } else{
        $(this).attr('class', 'btn btn-default btn-block');
    }
});

$(document).on('click', '#close', function(){
    $(this).parent().removeClass('open');
});

$(document).on('click', '.card-block li > a', function(){
    var attr = $(this).attr('data-html');

    if(typeof attr !== typeof undefined && attr !== false){
        $html_container = $($(this).data('html'));
    } else {
        $html_container = $(this).siblings('.html-code');
    }

    $('.card-block').find('a').removeClass('active');
    $(this).addClass('active');

    var html_code = $html_container.html();
    // $('.editor-preview #editor').html(html_code);

    $('.container-editor').addClass('open');

    editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.session.setMode("ace/mode/html");

    editor.setValue(html_code);

    function showHTML() {
       $('#return').html(editor.getValue());
    }

    editor.on("input", showHTML);
    showHTML();
});




$("#filter").keyup(function(){
    $('.card-collapse').removeClass('active');
    $('.card-header').siblings('.collapse').removeClass('show');
    $('.card-collapse').removeClass('hidden');
    setTimeout(function(){
        if($('.jcorgFilterTextChild').children('span').length != 0){
            $('.jcorgFilterTextChild').each(function(){
                if($(this).children('span').length != 0) {
                    $(this).children('span').closest('.card-collapse').removeClass('hidden');
                    $(this).children('span').closest('.card-collapse').addClass('active');
                    $(this).children('span').closest('.card-header').siblings('.collapse').addClass('show');
                    $(this).children('span').closest('.card-block').closest('.collapse').addClass('show');
                }
            });

            $('.card-collapse:not(.active)').addClass('hidden');
            SetCard($('.card-collapse.active'));
        }else{
            SetCard(card_collapse);
        }
    }, 100);
});


function SetCard(cards){
    $('.card-collapse.active').remove();

    var nr = 1;

    cards.each(function(){
        if(nr == 1){
            $('#col1').append($(this));
            nr = 2;
        } else if(nr == 2){
            $('#col2').append($(this));
            nr = 3;
        } else if(nr == 3){
            $('#col3').append($(this));
            nr = 4;
        } else if(nr == 4){
            $('#col4').append($(this));
            nr = 1;
        }
    });

    initCardCollapse();
}

function initCardCollapse(){
    $('.card.card-collapse > .collapse.show').each(function(){
        $(this).parent().addClass('active');
    });

    $('.card.card-collapse .collapse').on('show.bs.collapse', function(){
        $(this).parent().addClass('active');
    }).on('hidden.bs.collapse', function(){
        console.log("ajunge");
        $(this).parent().removeClass('active');
    });
}
