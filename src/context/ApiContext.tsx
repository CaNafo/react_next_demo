import createApiContext from "./createApiContext";

const apiReducer = (state: any, action: any, params: any) => {
  switch (action.type) {

    default:
      return state;
  }
};


export const { Provider, Context } = createApiContext(
  apiReducer,
  {
  },
  {
  }
);
