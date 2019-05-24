import initialState from './initialState';
import * as types from '../Actions/ActionTypes';

export default function getClamAVvirusReport(state = initialState, action) {
  switch (action.type) {
	case types.CLAM_AV_VIRUS_REPORT_SUCCESS:
      return Object.assign({}, state, action.getClamAVvirusReportData);
	case types.CLAM_AV_REPORT_DATES:
      return Object.assign({}, state, action.getClamAVvirusReportDates);
	case types.CLAM_AV_REPORT_PASSED:
      return Object.assign({}, state, action.getClamAVvirusReportPassed);
	case types.CLAM_AV_REPORT_INFECTED:
      return Object.assign({}, state, action.getClamAVvirusReportInfected);
	case types.CLAM_AV_REPORT_WARNING:
      return Object.assign({}, state, action.getClamAVvirusReportWarning);
      case types.CLAM_AV_REPORT_SCANNED_DIRECTORIES:
      return Object.assign({}, state, action.getClamAVvirusReportscannedDirectories);
    default:
      return state;
  }
}
