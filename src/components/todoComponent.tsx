import { Box, Checkbox, Flex, Tooltip } from "@chakra-ui/react"


import { ITodo } from "interfaces/todoInterface";
import { FC, useContext, useEffect, useState } from "react";
import { Context as ApiContext } from "context/ApiContext";

const TodoComponent : FC<ITodo> = (props) =>{
    const {state,setSelectedTasks} = useContext(ApiContext);
    const [todoDisplayedOnDetails,setTodoDisplayedOnDetails]=useState(false)    
    var selectedTasks:ITodo[]=state.selectedTasks;
    const {todo,completed,id} = props;



    useEffect(()=>{setTodoDisplayedOnDetails(selectedTasks.find((el)=>el.id===id)!==undefined)},[selectedTasks,id])

    return <Box 
                bg={completed?"green":"gray"} 
                color="white" 
                m="0.5rem"
                p="0.5rem"
                borderRadius="0.5rem"
                maxW="50vw"
                boxShadow='xl'
            
                >
           <Flex justifyContent='space-between'>{todo} <Tooltip hasArrow label="home.displayOnDetailsPage"><Checkbox isChecked={
                todoDisplayedOnDetails
           } 
           onChange={(_)=>{
            if(!todoDisplayedOnDetails){
                setTodoDisplayedOnDetails(true);
                selectedTasks.push({
                    todo:todo,
                    completed:completed,
                    id:id
                })
            }else{
                setTodoDisplayedOnDetails(false);
                selectedTasks = selectedTasks.filter((el)=>{ 
                    return el.id!==id})
                setSelectedTasks(selectedTasks)
            }
           }}/></Tooltip></Flex> 
        </Box>
}

export default TodoComponent;