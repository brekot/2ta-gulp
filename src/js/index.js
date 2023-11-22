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
    }

    // Прокрутка наверх
    if (e.target.closest('.to-up'))
    {
        window.scrollTo({
            top: 0,
            behavior : "smooth"
        });
    }

    // Блок поделиться
    let share_elem = e.target.closest('.share-block__open'),
        share_block = document.querySelector('.share-block-panel');

    if (share_elem)
    {
        share_block.classList.toggle('share-block-panel_active')
    }
    else if (share_block && share_block.classList.contains('share-block-panel_active'))
    {
        share_block.classList.remove('share-block-panel_active')
    }

    // Кнопка Копировать ссылку
    if (e.target.closest('.share-block-panel__link_copy'))
    {
		let input = document.createElement('textarea');

		input.style.fontSize = '12pt';
		input.style.border = '0';
		input.style.padding = '0';
		input.style.margin = '0';
		input.style.position = 'absolute';
		input.style.left = '-9999px';
		input.setAttribute('readonly', '');

		input.value = window.location.href;

		document.body.appendChild(input);

		input.select();
		input.setSelectionRange(0, 99999);

		document.execCommand('copy');

		input.remove();
    }
});

// Показать кнопку наверх
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