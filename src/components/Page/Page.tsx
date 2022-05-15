// React/Redux
import React from "react";
import { Language, State } from '../../entities/State';
import { useSelector } from 'react-redux';

import locale from '../../localization.js';


const Page = () => {
  const currentLanguage: Language = useSelector((state: { common: State }) => state.common.language );

  const {
    name,
    profession,
    mainSkillsTitle,
    mainSkillsList,
    supportSkillsTitle,
    supportSkillsList,
    obsoleteSkillsTitle,
    obsoleteSkillsList,
    languagesTitle,
    languagesList
  } = locale[currentLanguage];

  return (
    <div className="about">

    <div id="about" className="about__container">
      <h1 className="about__title js-menu-section" data-item="about">{ name }</h1>
      <h2 className="about__title">{ profession }</h2>
      <div className="about__skills">
        <h3 className="about__title">{ mainSkillsTitle }</h3>
        <ul className="about__skills-list list">
          <li className="list__item">Верстка: <strong>HTML5, Pug/Jade, CSS3, SASS/LESS/Stylus, PostCSS</strong>.
            Кроссбраузерная, адаптивная, валидная
          </li>
          <li className="list__item">Опыт использования методологий верстки <strong>БЭМ, SMACSS</strong></li>
          <li className="list__item">Программирование: <strong>Javascript(ES5/ES6), CoffeScript, JQuery,
            Underscore</strong></li>
          <li className="list__item">Модульный подход к работе с кодом: <strong>CommonJS (Node.js), ES6 модули</strong>
          </li>
          <li className="list__item">Опыт работы с системами сборки проектов <strong>Gulp, Webpack, Make</strong></li>
          <li className="list__item">Опыт использования <strong>Git</strong></li>
          <li className="list__item">Опыт работы с <strong>CMS Joomla, Wordpress</strong> (в рамках написания
            собственных шаблонов + интегрирования сторонних шаблонов, модулей, плагинов, компонентов)
          </li>
          <li className="list__item"><strong>Php</strong> - опыт поддержки кода</li>
          <li className="list__item"><strong>React, Angular/ Jest</strong> - практический опыт в рамках обучающих
            заданий/туториалов и др.
          </li>
          <li className="list__item"><strong>Adobe Photoshop/Adobe XD/Figma</strong> - работа с макетами/прототипами
          </li>
          <li className="list__item">Опыт работы в команде с фронтенд и бэкенд программистами, веб-дизайнерами,
            тестировщиками
          </li>
          <li className="list__item">Опыт рефакторинга своего/чужого кода</li>
          <li className="list__item">Окружение: <strong>Mac/Win, Node.js/npm, PhpStorm/Sublime, GitLab/GitHub,
            Jira/Basecamp</strong></li>
          <li className="list__item list__item_line-through">Могу стишок рассказать, могу цветочек из бумаги сделать,
            могу мандаринами пожонглировать
          </li>
        </ul>
        <h3 className="about__title">{ mainSkillsTitle }</h3>
        <ul className="about__skills-list list">
            { Object.values(mainSkillsList).map((skill: string) => {
                return <li className="list__item"> { skill }</li>
            }) }
        </ul>
        <h3 className="about__title">{ supportSkillsTitle }</h3>
        <ul className="about__skills-list list">
            { supportSkillsList.split(' ').map((skill) => {
                return <li className="list__item"> { skill }</li>
            }) }
        </ul>
        <h3 className="about__title">{ obsoleteSkillsTitle }</h3>
        <ul className="about__skills-list list">
            { obsoleteSkillsList.split(' ').map((skill) => {
                return <li className="list__item"> { skill }</li>
            }) }
        </ul>
        <h3 className="about__title">{ languagesTitle }</h3>
        <ul className="about__skills-list list">
          <li className="list__item"><strong>Английский (Upper-Intermediate)</strong> - могу вести деловую переписку,
            читать профессиональную литературу и общаться на общие темы
          </li>
          <li className="list__item"><strong>Испанский</strong> - базовые знания</li>
          { Object.values(languagesList).map((lang: any) => {
            return <li className="list__item"><strong>{ lang }</strong></li>
          })}
        </ul>
      </div>
      <div className="about__cv">
        Полное резюме можно <a target="_blank" rel="noreferrer"
                               href="http://hh.ru/resume/f9eecb22ff029de4100039ed1f4963424f7235"
                               title="Посмотреть профиль на HeadHunter">посмотреть на сайте HeadHunter</a>
      </div>
    </div>
    </div>

  );
};

export default Page;

