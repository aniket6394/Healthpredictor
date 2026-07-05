import { useState } from "react";
import { predictHeart } from "../services/prediction";

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
    Divider,
    MenuItem
} from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/prediction.css";
import { Helmet } from "react-helmet-async";

<Helmet>
    <title>Heart Disease Prediction | AI Health Predictor</title>
</Helmet>
const fields = [
    {
        key: "age",
        label: "Age (Years)"
    },
    {
        key: "sex",
        label: "Sex (1 = Male, 0 = Female)"
    },
    {
        key: "cp",
        label: "Chest Pain Type (0-3)"
    },
    {
        key: "trestbps",
        label: "Resting Blood Pressure (mm Hg)"
    },
    {
        key: "chol",
        label: "Cholesterol (mg/dL)"
    },
    {
        key: "fbs",
        label: "Fasting Blood Sugar (>120 mg/dL)"
    },
    {
        key: "restecg",
        label: "Resting ECG Result (0-2)"
    },
    {
        key: "thalach",
        label: "Maximum Heart Rate"
    },
    {
        key: "exang",
        label: "Exercise Induced Angina (1/0)"
    },
    {
        key: "oldpeak",
        label: "ST Depression"
    },
    {
        key: "slope",
        label: "Slope (0-2)"
    },
    {
        key: "ca",
        label: "Major Vessels (0-3)"
    },
    {
        key: "thal",
        label: "Thalassemia (0-3)"
    }
];

function Heart() {

    const [form, setForm] = useState({
        age: "",
        sex: "",
        cp: "",
        trestbps: "",
        chol: "",
        fbs: "",
        restecg: "",
        thalach: "",
        exang: "",
        oldpeak: "",
        slope: "",
        ca: "",
        thal: ""
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

            const response = await predictHeart(payload);

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

                    Heart Disease Prediction

                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    mb={4}
                >

                    Enter your medical details below to predict heart disease risk.

                </Typography>

                <Card className="prediction-card">

                    <CardContent>

                        <form onSubmit={handleSubmit}>

                            <Grid container spacing={3}>

                                {

                                    fields.map((field) => (

                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            key={field.key}
                                        >

                                            {
field.key === "sex" ? (

<TextField
    select
    fullWidth
    label="Sex"
    name="sex"
    value={form.sex}
    onChange={handleChange}
>

    <MenuItem value={0}>Female</MenuItem>
    <MenuItem value={1}>Male</MenuItem>

</TextField>

)

: field.key === "cp" ? (

<TextField
    select
    fullWidth
    label="Chest Pain Type"
    name="cp"
    value={form.cp}
    onChange={handleChange}
>

    <MenuItem value={0}>Typical Angina</MenuItem>
    <MenuItem value={1}>Atypical Angina</MenuItem>
    <MenuItem value={2}>Non-anginal Pain</MenuItem>
    <MenuItem value={3}>Asymptomatic</MenuItem>

</TextField>

)

: field.key === "restecg" ? (

<TextField
    select
    fullWidth
    label="Resting ECG"
    name="restecg"
    value={form.restecg}
    onChange={handleChange}
>

    <MenuItem value={0}>Normal</MenuItem>
    <MenuItem value={1}>ST-T Wave Abnormality</MenuItem>
    <MenuItem value={2}>Left Ventricular Hypertrophy</MenuItem>

</TextField>

)

: field.key === "slope" ? (

<TextField
    select
    fullWidth
    label="ST Slope"
    name="slope"
    value={form.slope}
    onChange={handleChange}
>

    <MenuItem value={0}>Upsloping</MenuItem>
    <MenuItem value={1}>Flat</MenuItem>
    <MenuItem value={2}>Downsloping</MenuItem>

</TextField>

)

: field.key === "thal" ? (

<TextField
    select
    fullWidth
    label="Thalassemia"
    name="thal"
    value={form.thal}
    onChange={handleChange}
>

    <MenuItem value={0}>Unknown</MenuItem>
    <MenuItem value={1}>Fixed Defect</MenuItem>
    <MenuItem value={2}>Normal</MenuItem>
    <MenuItem value={3}>Reversible Defect</MenuItem>

</TextField>

)

: (

<TextField

fullWidth

type="number"

label={field.label}

name={field.key}

value={form[field.key]}

inputProps={{
min:0
}}

onChange={handleChange}

/>

)
}
                                        </Grid>

                                    ))

                                }

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

                                <Divider sx={{ mb:3 }} />

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

                                            "HIGH RISK OF HEART DISEASE"

                                            :

                                            "LOW RISK OF HEART DISEASE"

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

                                        {(result.probability*100).toFixed(2)}%

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

export default Heart;