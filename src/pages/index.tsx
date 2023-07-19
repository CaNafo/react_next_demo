import type { NextPage } from "next";

import { Box, Button, Flex } from "@chakra-ui/react";
import MainLayout from "components/mainLayout";
import { useQuery } from "react-query";
import { getTodoList } from "services/todoServices";
import { useState } from "react";
import { ITodo } from "interfaces/todoInterface";
import TodoComponent from "components/todoComponent";


const Home: NextPage = () => {

  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const { status: todoStatus, refetch: refetchTodos } = useQuery("todoList", getTodoList, {
    enabled: false,
    cacheTime: 50000,
    staleTime: 50000,
    onSuccess: (data: ITodo[]) => {
      console.log("🚀 ~ file: index.tsx:12 ~ data:", data)
      setTodoList([...todoList,...data]);
    }
  })

  return <MainLayout pageTitle="Home Page">
    {todoStatus === "success" && todoList.map((e,index) => <TodoComponent key={index} id={e.id} todo={e.todo} completed={e.completed} />)}
    <Box h="4rem"/>
    <Flex justifyContent='center' pos='absolute' bottom='1rem' left='0rem' right='0rem'>
    <Button variant="primaryButton" onClick={() => refetchTodos()}>Fetch Todo List</Button>
    <Button variant="primaryButton" onClick={() => setTodoList([])}>Remove Todo List</Button>
    </Flex>
  </MainLayout>


};

export default Home;
