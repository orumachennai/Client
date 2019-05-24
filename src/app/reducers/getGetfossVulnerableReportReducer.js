import initialState from './initialState';
import * as types from '../Actions/ActionTypes';

export default function fossVulnerableReport(state = initialState, action) {
  switch (action.type) {
	case types.FOSS_VULNERABLE_REPORT_SUCCESS:
      return Object.assign({}, state, action.getfossVulnerableReportData);
	case types.FOSS_VULNERABLE_REPORT_DATES:
      return Object.assign({}, state, action.getfossVulnerableReportDates);
	case types.FOSS_VULNERABLE_REPORT_ACTUALNUMPACKAGE:
      return Object.assign({}, state, action.getfossVulnerableReportActualNumPackage);
	case types.FOSS_VULNERABLE_REPORT_TOTALVULPACKAGE:
      return Object.assign({}, state, action.getfossVulnerableReportTotalVulPackage);
	case types.FOSS_VULNERABLE_REPORT_CRITICAL_SEVERITY:
      return Object.assign({}, state, action.getfossVulnerableReportCriticalSeverity);
	case types.FOSS_VULNERABLE_REPORT_HIGH_SEVERITY:
      return Object.assign({}, state, action.getfossVulnerableReportHighSeverity);
	case types.FOSS_VULNERABLE_REPORT_MEDIUM_SEVERITY:
      return Object.assign({}, state, action.getfossVulnerableReportMediumSeverity);
	case types.FOSS_VULNERABLE_REPORT_LOW_SEVERITY:
      return Object.assign({}, state, action.getfossVulnerableReportLowSeverity);
    default:
      return state;
  }
}
