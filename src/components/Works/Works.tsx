// Styles
import './Works.scss';

// React/Redux
import React from 'react';
import { useSelector } from 'react-redux';

import { Language, State } from '../../entities/State';

import locale from '../../localization/localization.js';

// Components
import Link from '../Link/Link';

const Works = () => {
  const currentLanguage: Language = useSelector(
    (state: { common: State }) => state.common.language
  );

  const {
    worksText,
    worksList
  } = locale[currentLanguage];

  return (
      <div className="works">
        <div className="works__list">
          {worksList.map((work: { title: string, imgSrc: string, link: string, alt: string}, i: number) => {
            return (
              <div className="works__block" key={`item_${i}`}>
                  <Link {...{ href: work.link, className: "works__link" }}>
                    <img className="works__img" src={work.imgSrc} alt={work.alt} />
                  </Link>
                  <div className="works__title">{work.title}</div>
                </div>
            );
          })}
        </div>
        <div className="works__text">{worksText}</div>
      </div>
  );
};

export default Works;
