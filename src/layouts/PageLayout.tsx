import {ReactNode} from "react";
import Footer from "../components/Footer/Footer";
import {Box, VStack} from "@chakra-ui/react";

interface PageLayoutProps {
    // header?: ReactNode
    footer?: ReactNode
    children: ReactNode
}

export const PageLayout = ({
    footer = <Footer/>,
    children
}: PageLayoutProps) => {
    return(
        <Box>
            {children}
            {footer}
        </Box>
    )
}