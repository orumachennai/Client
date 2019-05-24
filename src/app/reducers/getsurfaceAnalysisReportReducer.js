import initialState from './initialState';
import * as types from '../Actions/ActionTypes';

export default function getsurfaceAnalysisReport(state = initialState, action) {
  switch (action.type) {
	case types.SURFACE_ANALYSIS_REPORT_SUCCESS:
      return Object.assign({}, state, action.getsurfaceAnalysisReportData);
	case types.SURFACE_ANALYSIS_REPORT_DATES:
      return Object.assign({}, state, action.getsurfaceAnalysisReportDates);
	case types.SURFACE_ANALYSIS_REPORT_TOTAL_SCANNED:
      return Object.assign({}, state, action.getsurfaceAnalysisReportTotalScanned);
	case types.SURFACE_ANALYSIS_REPORT_UP_STATE:
      return Object.assign({}, state, action.getsurfaceAnalysisReportUpState);
	case types.SURFACE_ANALYSIS_REPORT_DOWN_STATE:
      return Object.assign({}, state, action.getsurfaceAnalysisReportDownState);
    default:
      return state;
  }
}
