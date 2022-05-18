import { State, Language } from '../../entities/State';

import * as ACTIONS from './common.actions-consts';

const initialState: State = {
  language: Language.EN
};

const reducerCommon = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIONS.SWITCH_LANGUAGE:
      return {
        ...state,
        language: action.language
      };

    default:
      return state;
  }
};

export default reducerCommon;
