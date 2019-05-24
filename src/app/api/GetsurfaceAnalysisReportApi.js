const fetch = window.fetch;

class getsurfaceAnalysisReportApi {
  static getsurfaceAnalysisReport() {
	return fetch('../../json/AttackSurfaceAnalysis.json', {
      method:'GET',
	  headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => {
       return response.json();
    }).catch((error) => {
       return Promise.reject(error);
    });
  }
}export default getsurfaceAnalysisReportApi;


