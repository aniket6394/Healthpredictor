import {

    Box,

    Typography,

    Divider

} from "@mui/material";

function Footer(){

    return(

        <Box
            sx={{

                mt:8,

                bgcolor:"#1565c0",

                color:"white",

                py:4

            }}
        >

            <Divider sx={{mb:3}} />

            <Typography
                align="center"
                variant="h6"
            >

                AI Health Predictor

            </Typography>

            <Typography
                align="center"
                variant="body2"
                mt={1}
            >

                AI Powered Disease Prediction System

            </Typography>

            <Typography
                align="center"
                variant="body2"
                mt={1}
            >

                Developed by Creator

            </Typography>

            <Typography
                align="center"
                variant="caption"
                display="block"
                mt={2}
            >

                © 2026 All Rights Reserved

            </Typography>

        </Box>

    );

}

export default Footer;