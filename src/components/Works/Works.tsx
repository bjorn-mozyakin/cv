// Styles
import './Works.scss';

// React/Redux
import React from 'react';
import { useSelector } from 'react-redux';

import { Language, State } from '../../entities/State';

import locale from '../../localization/localization.js';

// Components
import Icon from '../Icon/Icon';
import Link from '../Link/Link';
import List from '../List/List';
import ListItem from '../List/ListItem';
import ListTitle from '../List/ListTitle';
import Plate from '../Plate/Plate';

const Skills = () => {
  const currentLanguage: Language = useSelector(
    (state: { common: State }) => state.common.language
  );

  const {
    worksTitle,
    worksList
  } = locale[currentLanguage];

  return (
    <div className="works">
      <List direction="horizontal">
        <ListTitle>{worksTitle}</ListTitle>
        {worksList.map((work: { title: string, imgSrc: string, link: string, alt: string}, i: number) => {
          return (
              <div className="works__block" key={`item_${i}`}>
                <Link {...{ href: work.link }}>
                  <img className="works__img" src={work.imgSrc} alt={work.alt} />
                </Link>
                <div className="works__title">{work.title}</div>
              </div>
          );
        })}
      </List>
    </div>
  );
};

export default Skills;
