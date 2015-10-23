$(document).ready(function() {
    $(function () {
        $(window).scroll(function () {
            var winTop = $(window).scrollTop();
            if (winTop >= 30) {
                $("body").addClass("sticky-header");
            } else {
                $("body").removeClass("sticky-header");
            }//if-else
        });//win func.
    });//ready func.

    $(function () {
        if ($('html').hasClass('csstransforms3d')) {
            $('.flipGroup').removeClass('slide').addClass('flip');
            $('.flipGroup.flip').hover(
                function () {
                    $(this).find('.frontImg').addClass('theFlip');
                },
                function () {
                    $(this).find('.frontImg').removeClass('theFlip');
                }
            );
        } else {
            $('.flipGroup').hover(
                function () {
                    $(this).find('.backImg').stop().animate({bottom:0}, 800, 'easeOutCubic');
                },
                function () {
                    $(this).find('.backImg').stop().animate({bottom: ($(this).height() * -1) }, 800, 'easeOutCubic');
                }
            );

        }

    });

    document.getElementById("description1").onclick = function() {myFunction()};
  function myFunction()
    {
        var userAnswer = prompt("please change description");
        document.getElementById('description1').innerHTML = userAnswer
    };

    document.getElementById("description2").onclick = function() {myFunction2 ()};
    function myFunction2()
    {
        var userAnswer = prompt("please change description");
        document.getElementById('description2').innerHTML = userAnswer
    };

    document.getElementById("description3").onclick = function() {myFunction3 ()};
    function myFunction3()
    {
        var userAnswer = prompt("please change description");
        document.getElementById('description3').innerHTML = userAnswer
    };

    document.getElementById("description4").onclick = function() {myFunction4()};
    function myFunction4()
    {
        var userAnswer = prompt("please change description");
        document.getElementById('description4').innerHTML = userAnswer
    };

    document.getElementById("description5").onclick = function() {myFunction5()};
    function myFunction5()
    {
        var userAnswer = prompt("please change description");
        document.getElementById('description5').innerHTML = userAnswer
    };

    document.getElementById("description6").onclick = function() {myFunction6()};
    function myFunction6()
    {
        var userAnswer = prompt("please change description");
        document.getElementById('description6').innerHTML = userAnswer
    };

    document.getElementById("description7").onclick = function() {myFunction7()};
    function myFunction7()
    {
        var userAnswer = prompt("please change description");
        document.getElementById('description7').innerHTML = userAnswer
    };

    document.getElementById("description8").onclick = function() {myFunction8()};
    function myFunction8()
    {
        var userAnswer = prompt("please change description");
        document.getElementById('description8').innerHTML = userAnswer
    };

    document.getElementById("description9").onclick = function() {myFunction9()};
    function myFunction9()
    {
        var userAnswer = prompt("please change description");
        document.getElementById('description9').innerHTML = userAnswer
    };



});
