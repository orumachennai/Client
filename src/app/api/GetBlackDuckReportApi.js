const fetch = window.fetch;

class getBlackDuckReportApi {
  static getBlackDuckReport() {
	return fetch('../../json/blackDuck.json', {
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
}export default getBlackDuckReportApi;


