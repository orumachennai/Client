import * as types from './ActionTypes';
import getfossVulnerableReportApi from '../api/GetfossVulnerableReportApi';

export function getfossVulnerableReportSuccess(getfossVulnerableReportData) {
  return { type: types.FOSS_VULNERABLE_REPORT_SUCCESS, getfossVulnerableReportData: { getfossVulnerableReportData } };
}

export function getfossVulnerableReportDates(getfossVulnerableReportDates) {
  return { type: types.FOSS_VULNERABLE_REPORT_DATES, getfossVulnerableReportDates: { getfossVulnerableReportDates } };
}

export function getfossVulnerableReportActualNumPackage(getfossVulnerableReportActualNumPackage) {
  return { type: types.FOSS_VULNERABLE_REPORT_ACTUALNUMPACKAGE, getfossVulnerableReportActualNumPackage: { getfossVulnerableReportActualNumPackage } };
}

export function getfossVulnerableReportTotalVulPackage(getfossVulnerableReportTotalVulPackage) {
  return { type: types.FOSS_VULNERABLE_REPORT_TOTALVULPACKAGE, getfossVulnerableReportTotalVulPackage: { getfossVulnerableReportTotalVulPackage } };
}

export function getfossVulnerableReportCriticalSeverity(getfossVulnerableReportCriticalSeverity) {
  return { type: types.FOSS_VULNERABLE_REPORT_CRITICAL_SEVERITY, getfossVulnerableReportCriticalSeverity: { getfossVulnerableReportCriticalSeverity } };
}

export function getfossVulnerableReportHighSeverity(getfossVulnerableReportHighSeverity) {
  return { type: types.FOSS_VULNERABLE_REPORT_HIGH_SEVERITY, getfossVulnerableReportHighSeverity: { getfossVulnerableReportHighSeverity } };
}

export function getfossVulnerableReportMediumSeverity(getfossVulnerableReportMediumSeverity) {
  return { type: types.FOSS_VULNERABLE_REPORT_MEDIUM_SEVERITY, getfossVulnerableReportMediumSeverity: { getfossVulnerableReportMediumSeverity } };
}

export function getfossVulnerableReportLowSeverity(getfossVulnerableReportLowSeverity) {
  return { type: types.FOSS_VULNERABLE_REPORT_LOW_SEVERITY, getfossVulnerableReportLowSeverity: { getfossVulnerableReportLowSeverity } };
}




export function getfossVulnerableReport() {
  return function defaultDispatch(dispatch) {
    return getfossVulnerableReportApi.getfossVulnerableReport().then((getfossVulnerableReportData) => {
		
		var dates = [];
		var actualNumPackage = [];
		var totalVulPackage = [];
		var criticalSeverity = [];
		var highSeverity = [];
		var mediumSeverity = [];
		var lowSeverity = [];
		
    	var response = getfossVulnerableReportData;
		
		function comp(a, b) {
          return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime();
        }
 
        response.sort(comp);
		
		for(let i=0;i<response.length;i++){
		  if("highSeverity" in response[i] === true){
			dates.push(response[i].dateTime);
			actualNumPackage.push(parseInt(response[i].actualNumPackage));
			totalVulPackage.push(parseInt(response[i].totalVulPackage));
			criticalSeverity.push(parseInt(response[i].criticalSeverity));
			
			highSeverity.push(parseInt(response[i].highSeverity));
			mediumSeverity.push(parseInt(response[i].mediumSeverity));
			lowSeverity.push(parseInt(response[i].lowSeverity));
		  }
		}
		
		
      dispatch(getfossVulnerableReportSuccess(getfossVulnerableReportData[response.length-1]));
	  
	  dispatch(getfossVulnerableReportDates(dates));
	  
	  dispatch(getfossVulnerableReportActualNumPackage(actualNumPackage));
	  dispatch(getfossVulnerableReportTotalVulPackage(totalVulPackage));
	  dispatch(getfossVulnerableReportCriticalSeverity(criticalSeverity));
	  
	  dispatch(getfossVulnerableReportHighSeverity(highSeverity));
	  dispatch(getfossVulnerableReportMediumSeverity(mediumSeverity));
	  dispatch(getfossVulnerableReportLowSeverity(lowSeverity));
	 
	  
	  
    }).catch((err) => {
      return Promise.reject(err);
    });
  };
}


