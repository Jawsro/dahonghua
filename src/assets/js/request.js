import axios from 'axios';
import {Dialog} from 'vant';

//var baseUrl = "http://test.train_class.net";

var  HttpRequest={
    getRequest({ url, data = {}, method = "GET" }) {
      return new Promise((resolve, reject) => {
        this._getRequest(url, resolve, reject, data, method);
      });
    },
     _getRequest :function(url, resolve, reject, data = {}, method = "GET") {
        let format = method.toLocaleLowerCase() ==='get'?'params':'data';
        axios({
          url:baseUrl + url,
          method: method,
          [format]: data,
          header: {
            "content-type": "application/json"
          }
        }).then(res => {
          if(res.data.status == false){
              Dialog.alert({
              title: '错误提示',
              message: res.data.msg,
            })
          }
          resolve(res.data);
        }).catch(err => {
          reject();
          Dialog.alert({
            title: '错误提示',
            message: err.message,
          })
        })
    }
}
 export {HttpRequest}
