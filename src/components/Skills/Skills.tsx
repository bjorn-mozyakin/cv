// Styles
import './Skills.scss';

// React/Redux
import React from 'react';
import { useSelector } from 'react-redux';

import { Language, State } from '../../entities/State';

import locale from '../../localization/localization.js';

// Components
import List from '../List/List';
import ListItem from '../List/ListItem';
import ListTitle from '../List/ListTitle';
import Plate from '../Plate/Plate';

const Skills = () => {
  const currentLanguage: Language = useSelector(
    (state: { common: State }) => state.common.language
  );

  const {
    layoutTitle,
    layoutList,
    jsTitle,
    jsList,
    designTitle,
    designList,
    environmentTitle,
    environmentList,
    supportSkillsTitle,
    supportSkillsList,
    obsoleteSkillsTitle,
    obsoleteSkillsList,
    languagesTitle,
    languagesList,
    skillsText
  } = locale[currentLanguage];

  return (
    <>
      <div className="skills">
        <div className="skills__block">
          <List direction="horizontal">
            <ListTitle>{layoutTitle}</ListTitle>
            {layoutList.split(' ').map((skill: string, i: number) => {
              return (
                <ListItem key={`item_${i}`}>
                  <Plate>{skill}</Plate>
                </ListItem>
              );
            })}
          </List>
          <List direction="horizontal">
            <ListTitle>{jsTitle}</ListTitle>
            {jsList.split(' ').map((skill: string, i: number) => {
              return (
                <ListItem key={`item_${i}`}>
                  <Plate>{skill}</Plate>
                </ListItem>
              );
            })}
          </List>
          <List direction="horizontal">
            <ListTitle>{designTitle}</ListTitle>
            {designList.split(' ').map((skill: string, i: number) => {
              return (
                <ListItem key={`item_${i}`}>
                  <Plate>{skill}</Plate>
                </ListItem>
              );
            })}
          </List>
          <List direction="horizontal">
            <ListTitle>{environmentTitle}</ListTitle>
            {environmentList.split(' ').map((skill: string, i: number) => {
              return (
                <ListItem key={`item_${i}`}>
                  <Plate>{skill}</Plate>
                </ListItem>
              );
            })}
          </List>
        </div>
        <div className="skills__block">
          <List direction="horizontal">
            <ListTitle>{supportSkillsTitle}</ListTitle>
            {supportSkillsList.split(' ').map((skill: string, i: number) => {
              return (
                <ListItem key={`item_${i}`}>
                  <Plate>{skill}</Plate>
                </ListItem>
              );
            })}
          </List>
          <List direction="horizontal">
            <ListTitle>{obsoleteSkillsTitle}</ListTitle>
            {obsoleteSkillsList.split(' ').map((skill: string, i: number) => {
              return (
                <ListItem key={`item_${i}`}>
                  <Plate>{skill}</Plate>
                </ListItem>
              );
            })}
          </List>
          <List direction="horizontal">
            <ListTitle>{languagesTitle}</ListTitle>
            {Object.values(languagesList).map((lang: string, i: number) => {
              return (
                <ListItem key={`item_${i}`}>
                  <Plate>{lang}</Plate>
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
      <div className="works__text">{skillsText}</div>
    </>
  );
};

export default Skills;
