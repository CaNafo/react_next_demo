import { Box } from "@chakra-ui/react"


import { ITodo } from "interfaces/todoInterface";
import { FC } from "react";

const TodoComponent : FC<ITodo> = (props) =>{

    const {todo,completed} = props;

    return <Box 
                bg={completed?"green":"gray"} 
                color="white" 
                m="0.5rem"
                p="0.5rem"
                borderRadius="0.5rem"
                maxW="50vw"
                boxShadow='xl'
                >
            {todo}
        </Box>
}

export default TodoComponent;