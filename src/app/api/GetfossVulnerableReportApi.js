const fetch = window.fetch;

class getfossVulnerableReportApi {
  static getfossVulnerableReport() {
	return fetch('../../json/foss.json', {
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
}export default getfossVulnerableReportApi;


