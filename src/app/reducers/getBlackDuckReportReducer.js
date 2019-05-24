import initialState from './initialState';
import * as types from '../Actions/ActionTypes';

export default function getBlackDuckReport(state = initialState, action) {
  switch (action.type) {
    case types.BLACK_DUCK_VIRUS_REPORT_SUCCESS:
    return Object.assign({}, state, action.getBlackDuckReportData);
case types.BLACK_DUCK_REPORT_DATES:
    return Object.assign({}, state, action.getBlackDuckReportDates);
case types.BLACK_DUCK_REPORT_HIGH:
    return Object.assign({}, state, action.getBlackDuckReportHigh);
case types.BLACK_DUCK_REPORT_LOW:
    return Object.assign({}, state, action.getBlackDuckReportLow);
case types.BLACK_DUCK_REPORT_MEDIUM:
    return Object.assign({}, state, action.getBlackDuckReportMedium);
case types.BLACK_DUCK_REPORT_NONE:
    return Object.assign({}, state, action.getBlackDuckReportNone);
    default:
      return state;
  }
}
