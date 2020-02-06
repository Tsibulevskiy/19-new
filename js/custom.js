(function($) {

    $('.popup').click(function(e) {
        if (e.target.className.indexOf('js-popup-close') !== -1) {
            $(this).fadeOut();
        }
    });

    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
        return false;
    });

    $('.js-popup-open').on('click', function() {
        $('.popup').fadeIn();
    });

    let $clock_wrap = $('.clock-wrap'),
        date_start = '2020-02-13 19:00:00',
        Date_start = new Date(date_start),
        date_now = new Date(),
        template = `
            <div class="clock-elem">
                <span>%D</span>
                <p class="text-secondary">дней</p>
            </div>
            <div class="clock-elem">
                <span>%H</span>
                <p class="text-secondary">часов</p>
            </div>
            <div class="clock-elem">
                <span>%M</span>
                <p class="text-secondary">минут</p>
            </div>
            <div class="clock-elem clock-elem-320">
                <span>%S</span>
                <p class="text-secondary">секунд</p>
            </div>
            <div class="clock-elem ms-wrap">
                <span class="ms">00</span>
                <p class="text-secondary">милисек.</p>
            </div>
            <img src="images/clock.png" class="clock-img" alt="">
        `;

    let count = 100;

    setInterval(timer, 10);

    function timer() {
        let _null = '';
        if (count <= 0) {
            count = 100;
        }
        count--;
        if (count < 10) {
            _null = '0'
        }
        $('.ms').text(_null + count);
    }
    if (Date_start < date_now) {
        $clock_wrap.hide()
    }

    $clock_wrap.countdown(date_start, function(event) {
        $(this).html(event.strftime(template));
    }).on('finish.countdown', function() {
        $clock_wrap.hide();
    });

    window.onscroll = function() { myFunction() };

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }

    // Получаем нужный элемент
    var elements = document.querySelectorAll('.js-check-visible');

    var Visible = function(target) {
        // Все позиции элемента
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };
        let bg = target.querySelector('.js-toggle')

        if (targetPosition.bottom > windowPosition.top &&
            targetPosition.top < windowPosition.bottom &&
            targetPosition.right > windowPosition.left &&
            targetPosition.left < windowPosition.right &&
            !bg.classList.contains('visible')) {
            bg.classList.add('visible')
                // if (window.innerHeight / 2 < target.getBoundingClientRect().y) {
                //     const position = window.innerHeight / 2 - target.getBoundingClientRect().y
                //     if (bg.dataset.left === '') {
                //       bg.style.left = position + 'px'
                //     } else if (bg.dataset.center === '') {
                //       bg.style.left = -position + 100 + '%'
                //     } else {
                //       bg.style.left = -position + 'px'
                //     }
                //
                // } else {
                //   if (bg.dataset.center === '') {
                //     bg.style.left = '50%'
                //   } else {
                //     bg.style.left = '-7px'
                //   }
                //
                // }
        } else {
            // Если элемент не видно, то запускаем этот код
        }
    };

    window.addEventListener('scroll', function() {
        elements.forEach((el) => {
            Visible(el);
        })

    });

    elements.forEach((el) => {
        Visible(el);
    })

















})(jQuery);