document.addEventListener('click', (e) => {

    // Переключатель языка
    let lang_elem = e.target.closest('.header-lang__open'),
        lang_block = document.querySelector('.header-lang');

    if (lang_elem)
    {
        lang_block.classList.toggle('header-lang_active')
    }
    else if (lang_block && lang_block.classList.contains('header-lang_active'))
    {
        lang_block.classList.remove('header-lang_active')
    }

    // Переключение темы
    if (e.target.closest('.header-theme'))
    {
        document.body.classList.toggle('dark-theme');
    }

    // Раскрытие меню
    if (e.target.closest('.header-main__mobile-btn') || e.target.closest('.menu-shadow'))
    {
        document.querySelector('.header-main__panel').classList.toggle('header-main__panel_open');

        document.querySelector('.menu-shadow').classList.toggle('menu-shadow_open');

        document.body.classList.toggle('overflow-hidden');
    }

    // Прокрутка наверх
    if (e.target.closest('.to-up'))
    {
        window.scrollTo({
            top: 0,
            behavior : "smooth"
        });
    }
});

document.addEventListener('scroll', () => {

    if (pageYOffset > 200)
    {
        document.querySelector('.to-up').classList.add('to-up_show');
    }
    else
    {
        document.querySelector('.to-up').classList.remove('to-up_show');
    }
});