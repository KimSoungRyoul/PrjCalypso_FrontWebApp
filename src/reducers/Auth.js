import * as types from "../action/actionTypes";

const initialState = {
  isLogin: false,
  id: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      console.log("reducer");
      console.log(action);
      if (action.payload.data) {
        console.log("로그인성공");
        return {
          ...action.payload.data,
          isLogin: true
        };
      } else {
        return alert(action.payload);
      }
    case types.ISLOGIN:
      return state;
    default:
      return state;
  }
}
