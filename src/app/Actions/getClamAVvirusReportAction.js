import * as types from './ActionTypes';
import getClamAVvirusReportApi from '../api/GetClamAVvirusReportApi';

export function getClamAVvirusReportSuccess(getClamAVvirusReportData) {
  return { type: types.CLAM_AV_VIRUS_REPORT_SUCCESS, getClamAVvirusReportData: { getClamAVvirusReportData } };
}

export function getClamAVvirusReportDates(getClamAVvirusReportDates) {
  return { type: types.CLAM_AV_REPORT_DATES, getClamAVvirusReportDates: { getClamAVvirusReportDates } };
}

export function getClamAVvirusReportPassed(getClamAVvirusReportPassed) {
  return { type: types.CLAM_AV_REPORT_PASSED, getClamAVvirusReportPassed: { getClamAVvirusReportPassed } };
}

export function getClamAVvirusReportInfected(getClamAVvirusReportInfected) {
  return { type: types.CLAM_AV_REPORT_INFECTED, getClamAVvirusReportInfected: { getClamAVvirusReportInfected } };
}

export function getClamAVvirusReportWarning(getClamAVvirusReportWarning) {
  return { type: types.CLAM_AV_REPORT_WARNING, getClamAVvirusReportWarning: { getClamAVvirusReportWarning } };
}

export function getClamAVvirusReportScannedDirectories(getClamAVvirusReportscannedDirectories) {
  return { type: types.CLAM_AV_REPORT_SCANNED_DIRECTORIES, getClamAVvirusReportscannedDirectories: { getClamAVvirusReportscannedDirectories } };
}

export function getClamAVvirusReport() {
  return function defaultDispatch(dispatch) {
    return getClamAVvirusReportApi.getClamAVvirusReport().then((getClamAVvirusReportData) => {
		
	  var dates = [];
	  var passed = [];
	  var infected = [];
		var warning  = [];
		var scannedDirectories = [];
	
	  var response = getClamAVvirusReportData;
		
		function comp(a, b) {
          return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime();
        }
 
        response.sort(comp);
		for(let i=0;i<response.length;i++){
			dates.push(response[i].dateTime);
			passed.push(parseInt(response[i].passed));
			infected.push(parseInt(response[i].infected));
			warning.push(parseInt(response[i].warning));
			scannedDirectories.push(parseInt(response[i].scanned_directories));
		}
		
      dispatch(getClamAVvirusReportSuccess(getClamAVvirusReportData[response.length-1]));
	  
	  dispatch(getClamAVvirusReportDates(dates));
	  dispatch(getClamAVvirusReportPassed(passed));
	  dispatch(getClamAVvirusReportInfected(infected));
		dispatch(getClamAVvirusReportWarning(warning));
		dispatch(getClamAVvirusReportScannedDirectories(scannedDirectories));
	  
    }).catch((err) => {
      return Promise.reject(err);
    });
  };
}


