$(function () {
    let start = false;
    $('#start').click(function () {
        start = !start;
        if (start) {
            $('#status').text('Started!');
            setTimeout(function () {
                play();
            }, 200)
        } else {
            restart();
        }
    });
});

function play() {
    let loser = false;
    $('#maze').mouseleave(function () {
        $('.boundary').addClass('youlose');
        loser = true;
    });

    $('.boundary').each(function (idx, e) {
        $(e).mouseover(function () {
            $(e).addClass('youlose');
            loser = true;
        })
    });

    $('#end').mouseover(function () {
        if (!loser) {
            $('#status').text('You win!!!');
        } else {
            $('#status').text('You lose!!!');
        }
    });

    $('#end').mouseleave(function () {
        restart();
    });
}

function restart() {
    $('#status').text('Reseting...');
    setTimeout(function () {
        location.reload();
    }, 200);
}