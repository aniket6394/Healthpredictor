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

import FavoriteIcon from "@mui/icons-material/Favorite";

import { login } from "../services/auth";

import "../styles/auth.css";
import { Helmet } from "react-helmet-async";

<Helmet>
    <title>Login | AI Health Predictor</title>
</Helmet>
function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const data = await login(email, password);

            localStorage.setItem(
                "token",
                data.access_token
            );

            navigate("/dashboard");

        }

        catch {

            alert("Invalid Email or Password");

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

                            <FavoriteIcon
                                sx={{
                                    fontSize:60,
                                    color:"#1976d2"
                                }}
                            />

                        </Box>

                        <Typography
                            variant="h4"
                            align="center"
                            gutterBottom
                            fontWeight="bold"
                        >

                            AI Health Predictor

                        </Typography>

                        <Typography
                            align="center"
                            color="text.secondary"
                            mb={4}
                        >

                            Welcome Back

                        </Typography>

                        <form onSubmit={handleLogin}>

                            <TextField

                                fullWidth

                                label="Email"

                                margin="normal"

                                value={email}

                                onChange={(e)=>setEmail(e.target.value)}

                            />

                            <TextField

                                fullWidth

                                label="Password"

                                type="password"

                                margin="normal"

                                value={password}

                                onChange={(e)=>setPassword(e.target.value)}

                            />

                            <Button

                                fullWidth

                                variant="contained"

                                size="large"

                                className="auth-button"

                                type="submit"

                                disabled={loading}

                            >

                                {loading ? "Signing In..." : "Login"}

                            </Button>

                        </form>

                        <Typography
                            align="center"
                            mt={3}
                        >

                            Don't have an account?

                            <Link
                                to="/register"
                                className="auth-link"
                            >

                                Register

                            </Link>

                        </Typography>

                    </CardContent>

                </Card>

            </Container>

        </div>

    );

}

export default Login;