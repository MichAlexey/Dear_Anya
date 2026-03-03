document.addEventListener('DOMContentLoaded', function() {

    const heartBtn = document.getElementById('heartButton');
    const messageBox = document.getElementById('heartMessage');

    const messages = [
        "Пенелопиии...",
        "Улыбнись — твоя улыбка делает меня счастливы, даже когда я этого не вижу!",
        "Ты самый прекрасный котенок!",
        "WeWewe...wewewe",
        "Давай когда нибудь слетаем в Итаку?)",
        "Никогда не грусти, моя Яшмовая Веточка...",
        "Вот и 8 марта... Проснись и пой, моя любовь...",
        "И все же твои губы самые желанные для меня)",
        "С каждым хлопанием ресниц ты заставляешь меня влюбляться снова и снова, будто в первый раз",
        "Не милы ни блеск экрана\n \nНи рутинные дела,\n \nЛишь твое мило мнамнамна,\n \nИм ты сердце заняла...",
        "Вот лежу и вспоминаю,\n \nТот до боли теплый день,\n \nЯ в фантазиях умираю,\n \nИ пишу я дребедень",
        "Я ранее всю жизнь скитался,\n \nСпокойно жил, не знал забот,\n \nА щас, на день один остался,\n \nИ сколько-ж боли и хлопот",
        "Я буду чтить, любить, лелеять,\n \nС тобой делить последний вдох.\n \nРостки любви я буду сеять\n \nИ пусть судьей мне будет бог",
        "Хочу попасть в твои я сны,\n \nС тобой бродить по облакам,\n \nПусть мимо пролетают дни,\n \nПусть ночь подарит счастье нам",
        "И пусть канут сотни других,\n \nПусть хоть пропадом все пропадут,\n \nМой взгляд уж не видит их,\n \nМои сны лишь тебя берегут",
        "Пускай я не смогу придумать\n \nСлова, чтоб передать себя,\n \nНо о тебе лишь буду думать,\n \nЯ буду жить лишь для тебя"
    ];

    heartBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        const randomMessage = messages[randomIndex];

        messageBox.innerHTML = randomMessage.replace(/\n/g, '<br>');

        messageBox.style.opacity = '1';

        heartBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            heartBtn.style.transform = 'scale(1)';
        }, 150);
    });

    console.log("Сайт для любимой принцессы! ❤️");

    const images = document.querySelectorAll('.gallery-img');
    
    if (window.IntersectionObserver) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }
            });
        }, { threshold: 0.5 });

        images.forEach(img => {
            img.style.opacity = '0.5';
            img.style.transform = 'scale(0.95)';
            img.style.transition = 'opacity 0.5s, transform 0.5s';
            observer.observe(img);
        });
    }

});

