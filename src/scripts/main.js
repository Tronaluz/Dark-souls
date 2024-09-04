document.addEventListener("DOMContentLoaded", function () {
    const gamesButtons = document.querySelectorAll('[data-game-button]');
    const npcsTabs = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < npcsTabs.length; i++) {
        npcsTabs[i].addEventListener('click', function (e) {
            e.preventDefault();
            const tab = document.querySelector(`[data-tab-id=${e.target.dataset.tabButton}]`);
            hideAllTabs();
            tab.classList.add('npcs__list--active');
            removeActiveTab();
            e.target.classList.add('npcs__tabs__button--active');
        })
    };
})

function hideAllFilms() {
    const gamesContainer = document.querySelectorAll('[data-game-id]');

    for (let i = 0; i < gamesContainer.length; i++) {
        gamesContainer[i].classList.remove('about-game--active');
    };
}

function removeActiveFilm() {
    const gameButtons = document.querySelectorAll('[data-game-button]');

    for (let i = 0; i < gameButtons.length; i++) {
        gameButtons[i].classList.remove('game__items__item--active');
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('npcs__list--active');
    };
}

function removeActiveTab() {
    const tabButtons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('npcs__tabs__button--active');
    }
}