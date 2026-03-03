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
        "Не милы ни блеск экрана\nНи рутинные дела,\nЛишь твое мило мнамнамна,\nИм ты сердце заняла...",
        "Вот лежу и вспоминаю,\nТот до боли теплый день,\nЯ в фантазиях умираю,\nИ пишу я дребедень",
        "Я ранее всю жизнь скитался,\nСпокойно жил, не знал забот,\nА щас, на день один остался,\nИ сколько-ж боли и хлопот",
        "Я буду чтить, любить, лелеять,\nС тобой делить последний вдох.\nРостки любви я буду сеять\nИ пусть судьей мне будет бог",
        "Хочу попасть в твои я сны,\nС тобой бродить по облакам,\nПусть мимо пролетают дни,\nПусть ночь подарит счастье нам",
        "И пусть канут сотни других,\nПусть хоть пропадом все пропадут,\nМой взгляд уж не видит их,\nМои сны лишь тебя берегут",
        "Пускай я не смогу придумать\nСлова, чтоб передать себя,\nНо о тебе лишь буду думать,\nЯ буду жить лишь для тебя"
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