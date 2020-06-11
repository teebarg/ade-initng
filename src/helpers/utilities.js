import swal from 'sweetalert';

class Utility {

  static getQueryParams(params) {
    if (typeof params === 'object') {
      const result = Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');
      return `?${result}`;
    }
    return params;
  }

  static handleError({ message, data }) {
    let mess;
    if (data.errors) {
      Object.keys(data.errors).map((item) => {
        mess = `${data.errors[item]} `;
      });
    }
    swal('An Error Occured!', mess || message || 'Please Contact Admin', 'error');
  }

  static handleSuccess(message = 'Requested action Successful') {
    swal('Ok', message, 'success');
  }

  static getBase64(file) {
    return new Promise(((resolve, reject) => {
      const read = new FileReader();
      read.onload = function () {
        resolve(String(read.result));
      };
      read.readAsDataURL(file);
    }));
  }
}

export default Utility;
