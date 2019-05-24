const fetch = window.fetch;

class getClamAVvirusReportApi {
  static getClamAVvirusReport() {
	return fetch('../../json/clamAV.json', {
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
}export default getClamAVvirusReportApi;


