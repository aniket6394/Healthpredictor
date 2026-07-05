import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
    Container,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Box
} from "@mui/material";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

import api from "../api/api";

import "../styles/auth.css";
import { Helmet } from "react-helmet-async";

<Helmet>
    <title>Register | AI Health Predictor</title>
</Helmet>
function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        full_name: "",
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

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

            await api.post("/auth/register", form);

            alert("Registration Successful");

            navigate("/");

        }

        catch (err) {

            alert(err.response?.data?.detail || "Registration Failed");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="auth-container">

            <Container maxWidth="sm">

                <Card className="auth-card">

                    <CardContent>

                        <Box
                            display="flex"
                            justifyContent="center"
                            mb={2}
                        >

                            <PersonAddAlt1Icon
                                sx={{
                                    fontSize:60,
                                    color:"#1976d2"
                                }}
                            />

                        </Box>

                        <Typography
                            variant="h4"
                            align="center"
                            fontWeight="bold"
                        >

                            Create Account

                        </Typography>

                        <Typography
                            align="center"
                            color="text.secondary"
                            mb={4}
                        >

                            Join AI Health Predictor

                        </Typography>

                        <form onSubmit={handleSubmit}>

                            <TextField

                                fullWidth

                                label="Full Name"

                                margin="normal"

                                name="full_name"

                                value={form.full_name}

                                onChange={handleChange}

                            />

                            <TextField

                                fullWidth

                                label="Email"

                                margin="normal"

                                name="email"

                                value={form.email}

                                onChange={handleChange}

                            />

                            <TextField

                                fullWidth

                                label="Password"

                                type="password"

                                margin="normal"

                                name="password"

                                value={form.password}

                                onChange={handleChange}

                            />

                            <Button

                                fullWidth

                                variant="contained"

                                className="auth-button"

                                type="submit"

                                disabled={loading}

                            >

                                {loading ? "Creating Account..." : "Register"}

                            </Button>

                        </form>

                        <Typography
                            align="center"
                            mt={3}
                        >

                            Already have an account?

                            <Link
                                to="/"
                                className="auth-link"
                            >

                                Login

                            </Link>

                        </Typography>

                    </CardContent>

                </Card>

            </Container>

        </div>

    );

}

export default Register;