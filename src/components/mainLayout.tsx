import { Box, Flex } from "@chakra-ui/react"

import BgImage from "../assets/bg-images/bg.png"
import routes from "routes";
import { useRouter } from "next/router";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { useTranslation } from "react-i18next";

interface LayoutParams {
    children: any;
    pageTitle: string;
}


const MainLayout = ({ children, pageTitle }: LayoutParams) => {
    const {asPath,push} = useRouter();
    const {t} = useTranslation();
    return <Box bgImage={BgImage.src} p="0.5rem" height='100vh' overflow='scroll'>
                <Box w='100%' textAlign="center" bg='transparent' textStyle='titleBold'>{pageTitle}</Box>
                <Flex>
                    
                    <Box minW="10rem" bg="navPrimary" borderRadius="0.5rem" h="80vh" padding="0.5rem">
                        {
                         routes.map((route,index)=>
                         <Link key={index} href={route.path as Url}>
                            <Box 
                            m="0.5rem" 
                            color={asPath===route.path?"blue.300":"blackAlpha.300"}
                            _hover={{
                                cursor:'pointer',
                                color:"lightblue"
                            }}>{t(route.name.toString())}</Box>
                         </Link>)
                        }
                    </Box>
                    <Box>
                        {children}  
                    </Box>
                </Flex>
            </Box>
}

export default MainLayout;