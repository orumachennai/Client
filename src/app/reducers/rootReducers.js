import { combineReducers } from 'redux';
import GetClamAVvirusReport from './getClamAVvirusReportReducer';
import GetfossVulnerableReport from './getGetfossVulnerableReportReducer';
import GetsurfaceAnalysisReportData from './getsurfaceAnalysisReportReducer';
import GetBlackDuckReportData from './getBlackDuckReportReducer';

const rootReducer = combineReducers({
 GetClamAVvirusReport,
 GetfossVulnerableReport,
 GetsurfaceAnalysisReportData,
 GetBlackDuckReportData
});

export default rootReducer;
