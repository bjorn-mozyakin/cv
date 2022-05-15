// Styles
import './Contacts.scss';

// React/Redux
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import Icon from '../Icon/Icon';
import Link from '../Link/Link';
import Title from '../Title/Title';
import locale from '../../localization.js';
import { Language, State } from "../../entities/State";

const Contacts = () => {
    const currentLanguage: Language = useSelector((state: { common: State}) => state.common.language );
    const { hometown, contactsTitle } = locale[currentLanguage];

    return (
        <div className="contacts">
            <Title>{ contactsTitle }</Title>
            <ul className="contacts__list">
                <li className="contacts__item"><Icon {...{icon: 'home'} }>{ hometown }</Icon></li>
                <li className="contacts__item">
                    <Link {...{href: 'mailto:rakov.di@gmail.com'} }>
                        <Icon {...{icon: 'email'} }>rakov.di@gmail.com</Icon>
                    </Link>
                </li>
                <li className="contacts__item">
                    <Link {...{href: 'https://www.linkedin.com/in/rakovdi/'} }>
                        <Icon {...{icon: 'linkedin'} }>LinkedIn</Icon>
                    </Link>
                </li>
                <li className="contacts__item">
                    <Link {...{href: 'https://github.com/bjorn-mozyakin'} }>
                        <Icon {...{icon: 'github'} }>GitHub</Icon>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Contacts;