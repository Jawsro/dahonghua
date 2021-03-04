import {HttpRequest} from "./request.js"

//用户信息
export function getUserTrainInfo(data){
  return HttpRequest.getRequest({
     method: "POST",
      url: "/api/train_user/getUserTrainInfo",
      data: data
  })
}
