import type { NextPage } from "next";

import { Box, Button, Flex } from "@chakra-ui/react";
import MainLayout from "components/mainLayout";
import { useQuery } from "react-query";
import { getTodoList } from "services/todoServices";
import { useState } from "react";

interface ITodo {
  id: number,
  title: String,
  completed: boolean
}

const Home: NextPage = () => {

  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const { status: todoStatus, refetch: refetchTodos } = useQuery("todoList", getTodoList, {
    enabled: false,
    cacheTime: 50000,
    staleTime: 50000,
    onSuccess: (data: ITodo[]) => {
      console.log("🚀 ~ file: index.tsx:12 ~ data:", data)
      setTodoList(data);
    }
  })

  return <MainLayout pageTitle="This a page title">
    {todoStatus === "success" && todoList.map((e) => <Box key={e.id}>{e.title}</Box>)}
    <Button variant="primaryButton" onClick={() => refetchTodos()}>Fetch Todo List</Button>
    <Button variant="primaryButton" onClick={() => setTodoList([])}>Remove Todo List</Button>
  </MainLayout>


};

export default Home;
