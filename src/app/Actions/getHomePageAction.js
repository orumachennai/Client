import * as types from './ActionTypes';
import getBlackDuckReportApi from '../api/GetBlackDuckReportApi';

export function getBlackDuckReportSuccess(getBlackDuckReportData) {
  return { type: types.BLACK_DUCK_VIRUS_REPORT_SUCCESS, getBlackDuckReportData: { getBlackDuckReportData } };
}

export function getBlackDuckReportDates(getBlackDuckReportDates) {
  return { type: types.BLACK_DUCK_REPORT_DATES, getBlackDuckReportDates: { getBlackDuckReportDates } };
}

export function getBlackDuckReportHigh(getBlackDuckReportHigh) {
  return { type: types.BLACK_DUCK_REPORT_HIGH, getBlackDuckReportHigh: { getBlackDuckReportHigh } };
}

export function getBlackDuckReportLow(getBlackDuckReportLow) {
  return { type: types.BLACK_DUCK_REPORT_LOW, getBlackDuckReportLow: { getBlackDuckReportLow } };
}

export function getBlackDuckReportMedium(getBlackDuckReportMedium) {
  return { type: types.BLACK_DUCK_REPORT_MEDIUM, getBlackDuckReportMedium: { getBlackDuckReportMedium } };
}

export function getBlackDuckReportNone(getBlackDuckReportNone) {
  return { type: types.BLACK_DUCK_REPORT_NONE, getBlackDuckReportNone: { getBlackDuckReportNone } };
}

export function getBlackDuckReport() {
  return function defaultDispatch(dispatch) {
    return getBlackDuckReportApi.getBlackDuckReport().then((getBlackDuckReportData) => {

      var dates = [];
      var high = [];
      var medium = [];
      var low = [];
      var none = [];

      var response = getBlackDuckReportData;


      function getDateTimeFormatter(date) {
        const monthNames = ["Jan", "Feb", "Mar", "April", "May", "June",
          "July", "Aug", "Sepr", "Oct", "Nov", "Dec"
        ];

        var date = new Date(date);
        var yr = date.getFullYear();
        var mo = monthNames[date.getMonth()];
        var day = date.getDate();

        var hours = date.getHours();
        var hr = hours < 10 ? '0' + hours : hours;

        var minutes = date.getMinutes();
        var min = (minutes < 10) ? '0' + minutes : minutes;

        var seconds = date.getSeconds();
        var sec = (seconds < 10) ? '0' + seconds : seconds;
        var am_pm = date.getHours() >= 12 ? "PM" : "AM";
        var newDateString = mo + ' ' + day + ',' + yr;
        var newTimeString = hr + ':' + min + ' ' + am_pm;

        var excelDateString = newDateString + ' ' + newTimeString;

        return excelDateString;
      }


      function comp(a, b) {
        return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime();
      }

      response.sort(comp);

      for (let i = 0; i < response.length; i++) {
        let date_formated = getDateTimeFormatter(response[i].dateTime);
        dates.push(date_formated);
        high.push(parseInt(response[i].HIGH));
        medium.push(parseInt(response[i].MEDIUM));
        low.push(parseInt(response[i].LOW));
        none.push(parseInt(response[i].OK));
      }

      

      var DashBoardValue = getBlackDuckReportData[response.length - 1];
      var dashboardDate = getDateTimeFormatter(DashBoardValue.dateTime);
      DashBoardValue.dateTime = dashboardDate;


      dispatch(getBlackDuckReportDates(dates));
      dispatch(getBlackDuckReportHigh(high));
      dispatch(getBlackDuckReportMedium(medium));
      dispatch(getBlackDuckReportLow(low));
      dispatch(getBlackDuckReportNone(none));
      dispatch(getBlackDuckReportSuccess(DashBoardValue));
    }).catch((err) => {
      return Promise.reject(err);
    });
  };
}


