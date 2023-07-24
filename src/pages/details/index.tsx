import { Box } from "@chakra-ui/react";

import MainLayout from "components/mainLayout";
import { useContext } from "react";
import { Context as ApiContext } from "context/ApiContext";
import { ITodo } from "interfaces/todoInterface";

const Details = ()=>{

    const {state} = useContext(ApiContext);

    var selectedTasks:ITodo[]=state.selectedTasks;

    return <MainLayout pageTitle="Details"><Box margin="1rem">{selectedTasks.map((task,index)=><Box key={index}>{task.todo}</Box>)}</Box></MainLayout>;

}

export default Details;