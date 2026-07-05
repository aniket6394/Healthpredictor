import { useEffect, useState } from "react";
import { getHistory } from "../services/prediction";

import {
    Container,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    LinearProgress,
    Box,
    CircularProgress
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/history.css";
import { Helmet } from "react-helmet-async";

<Helmet>
    <title>History | AI Health Predictor</title>
</Helmet>
function History() {

    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchHistory = async () => {

            try {

                const data = await getHistory();

                console.log(data);

                setHistory(data);

            } catch (err) {

                console.error(err);

            } finally {

                setLoading(false);

            }

        };

        fetchHistory();

    }, []);

    return (

        <>

            <Navbar />

            <Container
                maxWidth="lg"
                className="history-container"
            >

                <Typography
                    variant="h4"
                    className="history-title"
                >

                    Prediction History

                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    mb={4}
                >

                    View all your previous predictions.

                </Typography>

                {

                    loading ?

                    (

                        <Box
                            display="flex"
                            justifyContent="center"
                            mt={8}
                        >

                            <CircularProgress />

                        </Box>

                    )

                    :

                    history.length === 0 ?

                    (

                        <Paper
                            sx={{
                                p:5,
                                borderRadius:4,
                                textAlign:"center"
                            }}
                        >

                            <Typography variant="h6">

                                No Prediction History Found

                            </Typography>

                            <Typography color="text.secondary">

                                Make a prediction to see your records here.

                            </Typography>

                        </Paper>

                    )

                    :

                    (

                        <TableContainer
                            component={Paper}
                            className="history-table"
                        >

                            <Table>

                                <TableHead>

                                    <TableRow>

                                        <TableCell>

                                            Disease

                                        </TableCell>

                                        <TableCell>

                                            Prediction

                                        </TableCell>

                                        <TableCell>

                                            Probability

                                        </TableCell>

                                        <TableCell>

                                            Recommendation

                                        </TableCell>

                                        <TableCell>

                                            Date

                                        </TableCell>

                                    </TableRow>

                                </TableHead>

                                <TableBody>

                                    {

                                        history.map((item) => (

                                            <TableRow
                                                key={item.id}
                                                hover
                                            >

                                                <TableCell>

                                                    <Box
                                                        display="flex"
                                                        alignItems="center"
                                                        gap={1}
                                                    >

                                                        {

                                                            item.disease
                                                                .toLowerCase()
                                                                .includes("heart")

                                                            ?

                                                            <FavoriteIcon color="error"/>

                                                            :

                                                            <BloodtypeIcon color="primary"/>

                                                        }

                                                        {item.disease}

                                                    </Box>

                                                </TableCell>

                                                <TableCell>

                                                    <Chip

                                                        label={item.prediction}

                                                        color={
                                                            item.prediction === "Positive"
                                                                ? "error"
                                                                : "success"
                                                        }

                                                    />

                                                </TableCell>

                                                <TableCell width={220}>

                                                    <LinearProgress

color={
item.prediction==="Positive"
?
"error"
:
"success"
}
/>

                                                    <Typography mt={1}>

                                                        {(item.probability * 100).toFixed(2)}%

                                                    </Typography>

                                                </TableCell>

                                                <TableCell>

                                                    {item.recommendation}

                                                </TableCell>

                                                <TableCell>

                                                    {

                                                        new Date(
                                                            item.created_at
                                                        ).toLocaleString()

                                                    }

                                                </TableCell>

                                            </TableRow>

                                        ))

                                    }

                                </TableBody>

                            </Table>

                        </TableContainer>

                    )

                }

            </Container>

            <Footer />

        </>

    );

}

export default History;