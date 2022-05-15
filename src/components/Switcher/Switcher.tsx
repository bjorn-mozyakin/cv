// Styles
import './Switcher.scss';

// React/Redux
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchLanguage } from '../../store/common/common.actions'

// Components
import { Language, State } from "../../entities/State";

const Switcher = () => {
    const currentLanguage: Language = useSelector((state: { common: State}) => state.common.language );
    const dispatch = useDispatch();

    return (
        <div className="switcher">
            {[Language.EN, Language.RU].map((lang: Language) => {
                return (
                    <div className={`switcher__item ${currentLanguage === lang ? "switcher__item_state_active" : ""}`}
                         onClick={() => dispatch(switchLanguage(lang))}>{ lang.toUpperCase() }</div>
                )
            })}
        </div>
    )
}

export default Switcher;
