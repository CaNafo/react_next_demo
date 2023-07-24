import createApiContext from "./createApiContext";

import { ITodo } from "interfaces/todoInterface";
const apiReducer = (state: any, action: any, params: any) => {
  switch (action.type) {

    case "setSelectedTasks" :{
      return{...state, selectedTasks: action.params}
    }

    default:
      return state;
  }
};

const setSelectedTasks = (dispatch:any, params:any)=>(props:ITodo[])=>{
  dispatch({
    type:"setSelectedTasks",params:props
  })
}


export const { Provider, Context } = createApiContext(
  apiReducer,
  {
    setSelectedTasks
  },
  {
    selectedTasks: [] as ITodo[]
  }
);
