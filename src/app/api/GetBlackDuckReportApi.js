const fetch = window.fetch;

class getBlackDuckReportApi {
  static getBlackDuckReport() {
    console.log("getBlackDuckReport called")
	return fetch('http://localhost:8000/api/transaction', {
      method:'GET',
	  headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => {
       return response.json();
    }).catch((error) => {
      console.log("Error ",error)
       return Promise.reject(error);
    });
  }
}export default getBlackDuckReportApi;


