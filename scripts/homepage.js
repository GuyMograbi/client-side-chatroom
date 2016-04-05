

var gridster;

window.addEventListener("message", function(e){
    console.log('got message',e);
    $('iframe').each(function(a,iframe){
        iframe.contentWindow.postMessage(e.data,'*');
    });
}, false);


$(function(){


    gridster = $(".gridster > ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [50, 50],
        resize:{
            enabled:true
        }
    }).data('gridster');

    var widget = ['<li title="double click me!" class="add-another"><span class="content">+</span></li>',4,4];

    gridster.add_widget.apply(gridster, widget);

    $(document).delegate('.add-another','dblclick', function(){
        var newIframe = $('<iframe src="chat-window.html"></iframe>');
        $('.add-another').prepend(newIframe).removeClass('add-another');
        $('li .content').remove();
        gridster.add_widget.apply(gridster, widget);
    })

});


