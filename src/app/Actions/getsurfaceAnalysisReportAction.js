import * as types from './ActionTypes';
import getsurfaceAnalysisReportApi from '../api/GetsurfaceAnalysisReportApi';

export function getsurfaceAnalysisReportSuccess(getsurfaceAnalysisReportData) {
  return { type: types.SURFACE_ANALYSIS_REPORT_SUCCESS, getsurfaceAnalysisReportData: { getsurfaceAnalysisReportData } };
}

export function getsurfaceAnalysisReportDates(getsurfaceAnalysisReportDates) {
  return { type: types.SURFACE_ANALYSIS_REPORT_DATES, getsurfaceAnalysisReportDates: { getsurfaceAnalysisReportDates } };
}

export function getsurfaceAnalysisReportTotalScanned(getsurfaceAnalysisReportTotalScanned) {
  return { type: types.SURFACE_ANALYSIS_REPORT_TOTAL_SCANNED, getsurfaceAnalysisReportTotalScanned: { getsurfaceAnalysisReportTotalScanned } };
}

export function getsurfaceAnalysisReportUpState(getsurfaceAnalysisReportUpState) {
  return { type: types.SURFACE_ANALYSIS_REPORT_UP_STATE, getsurfaceAnalysisReportUpState: { getsurfaceAnalysisReportUpState } };
}


export function getsurfaceAnalysisReportDownState(getsurfaceAnalysisReportDownState) {
  return { type: types.SURFACE_ANALYSIS_REPORT_DOWN_STATE, getsurfaceAnalysisReportDownState: { getsurfaceAnalysisReportDownState } };
}


export function getsurfaceAnalysisReport() {
  return function defaultDispatch(dispatch) {
    return getsurfaceAnalysisReportApi.getsurfaceAnalysisReport().then((getsurfaceAnalysisReportData) => {
	   var response = getsurfaceAnalysisReportData;
       function comp(a, b) {
         return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime();
       }

      response.sort(comp);
	  
		var dates = [];
		var totalScanned = [];
		var upState = [];
		var downState = [];
		
    	
		for(let i=0;i<response.length;i++){
			dates.push(response[i].dateTime);
			totalScanned.push(parseInt(response[i].totalScanned));
			upState.push(parseInt(response[i].upState));
			downState.push(parseInt(response[i].downState));
		}
		
    dispatch(getsurfaceAnalysisReportSuccess(getsurfaceAnalysisReportData[response.length-1]));
	  dispatch(getsurfaceAnalysisReportDates(dates));
	  dispatch(getsurfaceAnalysisReportTotalScanned(totalScanned));
	  dispatch(getsurfaceAnalysisReportUpState(upState));
	  dispatch(getsurfaceAnalysisReportDownState(downState));
	  
    }).catch((err) => {
      return Promise.reject(err);
    });
  };
}


