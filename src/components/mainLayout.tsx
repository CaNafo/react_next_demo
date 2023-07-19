import { Box } from "@chakra-ui/react"

import BgImage from "../assets/bg-images/bg.png"

interface LayoutParams {
    children: any;
    pageTitle: string;
}


const MainLayout = ({ children, pageTitle }: LayoutParams) => {
    return <Box bgImage={BgImage.src} p="0.5rem" height='100vh' overflow='scroll'>
        <Box w='100%' textAlign="center" bg='transparent' textStyle='titleBold'>{pageTitle}</Box>
        {children}
    </Box>
}

export default MainLayout;