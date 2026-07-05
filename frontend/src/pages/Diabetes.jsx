import { useState } from "react";
import { predictDiabetes } from "../services/prediction";

import {
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    Alert,
    CircularProgress,
    Box,
    Divider
} from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/prediction.css";
import { Helmet } from "react-helmet-async";

<Helmet>
    <title>Diabetes Prediction | AI Health Predictor</title>
</Helmet>
const fields = [
    {
        key: "Pregnancies",
        label: "Number of Pregnancies"
    },
    {
        key: "Glucose",
        label: "Glucose Level (mg/dL)"
    },
    {
        key: "BloodPressure",
        label: "Blood Pressure (mm Hg)"
    },
    {
        key: "SkinThickness",
        label: "Skin Thickness (mm)"
    },
    {
        key: "Insulin",
        label: "Insulin Level (IU/mL)"
    },
    {
        key: "BMI",
        label: "Body Mass Index (BMI)"
    },
    {
        key: "DiabetesPedigreeFunction",
        label: "Diabetes Pedigree Function"
    },
    {
        key: "Age",
        label: "Age (Years)"
    }
];

function Diabetes() {

    const [form, setForm] = useState({
        Pregnancies: "",
        Glucose: "",
        BloodPressure: "",
        SkinThickness: "",
        Insulin: "",
        BMI: "",
        DiabetesPedigreeFunction: "",
        Age: ""
    });

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const payload = {};

            Object.keys(form).forEach((key) => {

                payload[key] = Number(form[key]);

            });

            const response = await predictDiabetes(payload);

            setResult(response);

        }

        catch {

            alert("Prediction Failed");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <>

            <Navbar />

            <Container
                maxWidth="md"
                className="page-container"
            >

                <Typography
                    variant="h4"
                    className="prediction-title"
                >

                    Diabetes Risk Prediction

                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    mb={4}
                >

                    Enter your medical details below to predict your diabetes risk.

                </Typography>

                <Card className="prediction-card">

                    <CardContent>

                        <form onSubmit={handleSubmit}>

                            <Grid container spacing={3}>

                                {fields.map((field) => (

                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        key={field.key}
                                    >

                                        <TextField

                                            fullWidth

                                            label={field.label}

                                            name={field.key}

                                            value={form[field.key]}

                                            type="number"

inputProps={{
min:0
}}

                                            onChange={handleChange}

                                        />

                                    </Grid>

                                ))}

                            </Grid>

                            <Button

                                variant="contained"

                                fullWidth

                                className="predict-btn"

                                type="submit"

                                disabled={loading}

                            >

                                {

                                    loading

                                        ?

                                        <CircularProgress
                                            size={24}
                                            color="inherit"
                                        />

                                        :

                                        "Predict"

                                }

                            </Button>

                        </form>

                    </CardContent>

                </Card>

                {

                    result && (

                        <Card className="result-card">

                            <CardContent>

                                <Typography
                                    variant="h5"
                                    className="result-title"
                                >

                                    Prediction Result

                                </Typography>

                                <Divider sx={{ mb: 3 }} />

                                <Alert

                                    severity={
                                        result.prediction === 1
                                            ?
                                            "error"
                                            :
                                            "success"
                                    }

                                >

                                    {

                                        result.prediction === 1

                                            ?

                                            "HIGH RISK OF DIABETES"

                                            :

                                            "LOW RISK OF DIABETES"

                                    }

                                </Alert>

                                <Box mt={3}>

                                    <Typography className="result-text">

                                        <b>Prediction :</b>

                                        {

                                            result.prediction === 1

                                                ?

                                                " Positive"

                                                :

                                                " Negative"

                                        }

                                    </Typography>

                                    <Typography className="result-text">

                                        <b>Probability :</b>

                                        {(result.probability * 100).toFixed(2)}%

                                    </Typography>

                                    <Typography className="result-text">

                                        <b>Risk Level :</b>

                                        {result.risk_level}

                                    </Typography>

                                    <Typography className="result-text">

                                        <b>Recommendation :</b>

                                    </Typography>

                                    <Typography>

                                        {result.recommendation}

                                    </Typography>

                                </Box>

                            </CardContent>

                        </Card>

                    )

                }

            </Container>

            <Footer />

        </>

    );

}

export default Diabetes;