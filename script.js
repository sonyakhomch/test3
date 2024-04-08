ymaps.ready(init);

function init(){
    // Создаем карту
    var myMap = new ymaps.Map("map", {
        center: [53.8996, 30.3322], // Координаты Могилева
        zoom: 12 // Масштаб карты
    });

    // Добавляем метку на карту
    var myPlacemark = new ymaps.Placemark([53.8996, 30.3322], {
        hintContent: 'Могилев, Беларусь',
        balloonContent: 'Могилев, Беларусь'
    });

    myMap.geoObjects.add(myPlacemark);
}

document.addEventListener('DOMContentLoaded', function() {
    var footer = document.querySelector('footer');
    var main = document.querySelector('main');

    function showFooter() {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
        var windowHeight = window.innerHeight;
        var documentHeight = Math.max(
            document.body.scrollHeight, document.body.offsetHeight,
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight
        );

        if (windowHeight + scrollTop >= documentHeight) {
            footer.style.display = 'block'; // Показываем футер, когда долистываем до конца страницы
        } else {
            footer.style.display = 'none'; // Скрываем футер в противном случае
        }
    }

    window.addEventListener('scroll', showFooter);
    window.addEventListener('resize', showFooter);
});
