<?php

$navbarHtml = <<<HTML
    <nav class="nav container">
        <a href="#" class="nav__logo">ASOUTHERNCAT</a>

        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list grid">
            <li class="nav__item">
              <a href="#home" class="nav__link">
                <i class="uil uil-estate nav__icon"></i>
                <p i18n="home">Home</p>
              </a>
            </li>
            <li class="nav__item">
              <a href="#about" class="nav__link">
                <i class="uil uil-user nav__icon"></i>
                <p i18n="about">About</p>
              </a>
            </li>
            <li class="nav__item">
              <a href="#skills" class="nav__link">
                <i class="uil uil-file-alt nav__icon"></i>
                <p i18n="skills">Skills</p>
              </a>
            </li>
            <li class="nav__item">
              <a href="#portfolio" class="nav__link">
                <i class="uil uil-scenery nav__icon"></i>
                <p i18n="portfolio">Portfolio</p>
              </a>
            </li>
            <li class="nav__item">
              <a href="#contact" class="nav__link">
                <i class="uil uil-message nav__icon"></i>
                <p i18n="contact">Contactme</p>
              </a>
            </li>
            <li class="nav__item">
              <div class="nav__link" id="translate" value="en">
                <svg class="icon nav__icon-svg" aria-hidden="true">
                  <use xlink:href="#icon-fanyi"></use>
                </svg>
                <a class="=nav__link" id="nav__translate">Translate</a>
              </div>
            </li>
          </ul>
          <i class="uil uil-times nav__close" id="nav-close"></i>
        </div>

        <div class="nav__btns">
          <i class="uil uil-moon change-theme" id="theme-button"></i>
          <div class="nav__toggle" id="nav-toggle">
            <i class="uil uil-apps"></i>
          </div>
        </div>
      </nav>

HTML;

echo $navbarHtml;