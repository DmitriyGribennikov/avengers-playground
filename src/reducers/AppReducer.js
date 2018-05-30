
import { SET_DATES } from '../constants/ActionTypes'
import { toUtcStartOfDay } from '../utils/dateUtils'

const getInitialState = () => {
    return {
        startDate: 1527552000000,//toUtcStartOfDay().valueOf() ,
        endDate: 1528329600000 ///toUtcStartOfDay ().valueOf()
    };
}

const AppReducer = (state = getInitialState(), {type, payload}) => {
    switch (type) {
        case SET_DATES:
            return { ...state, startDate: payload.startDate, endDate: payload.endDate }
        default:
            return state;
    }
}

export default AppReducer;