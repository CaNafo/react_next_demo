import axiosInstance from "config/axiosConfig";

export const getTodoList = async () => {
  let res = await axiosInstance.get(
    `todos`
  );

  return res.data["todos"];
};
