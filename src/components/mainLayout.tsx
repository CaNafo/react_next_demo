import { Box } from "@chakra-ui/react"

interface LayoutParams {
    children: any;
    pageTitle: string;
}


const MainLayout = ({ children, pageTitle }: LayoutParams) => {
    return <Box bg="lightblue" p="0.5rem">
        <Box w='100%' textAlign="center" bg='transparent' textStyle='titleBold'>{pageTitle}</Box>
        {children}
    </Box>
}

export default MainLayout;