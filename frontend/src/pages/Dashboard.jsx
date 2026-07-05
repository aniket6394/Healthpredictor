import { useNavigate } from "react-router-dom";

import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Box,
    Avatar
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/dashboard.css";
import { Helmet } from "react-helmet-async";

<Helmet>
    <title>Dashboard | AI Health Predictor</title>
</Helmet>
function Dashboard() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    return (

        <>

            <Navbar />

            <Container maxWidth="lg" className="dashboard-container">

                <Card className="welcome-card">

                    <CardContent>

                        <Box display="flex" alignItems="center">

                            <Avatar
                                sx={{
                                    bgcolor: "#1976d2",
                                    width: 70,
                                    height: 70,
                                    mr: 3
                                }}
                            >

                                <DashboardIcon sx={{ fontSize: 40 }} />

                            </Avatar>

                            <Box>

                                <Typography
                                    variant="h4"
                                    fontWeight="bold"
                                >

                                    Welcome to AI Health Predictor 

                                </Typography>

                                <Typography
                                    color="text.secondary"
                                >

                                    AI Health Predictor Dashboard

                                </Typography>

                            </Box>

                        </Box>

                    </CardContent>

                </Card>

                <Grid container spacing={4} mt={1}>

                    <Grid item xs={12} md={6}>

                        <Card className="dashboard-card">

                            <CardContent>

                                <BloodtypeIcon
                                    className="dashboard-icon diabetes"
                                />

                                <Typography variant="h5">

                                    Diabetes Prediction

                                </Typography>

                                <Typography color="text.secondary">

                                    Predict diabetes using machine learning.

                                </Typography>

                                <Button
                                    variant="contained"
                                    size="large"
                                    className="dashboard-btn"
                                    onClick={() => navigate("/diabetes")}
                                >

                                    Start Prediction

                                </Button>

                            </CardContent>

                        </Card>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Card className="dashboard-card">

                            <CardContent>

                                <FavoriteIcon
                                    className="dashboard-icon heart"
                                />

                                <Typography variant="h5">

                                    Heart Disease Prediction

                                </Typography>

                                <Typography color="text.secondary">

                                    Predict heart disease risk instantly.

                                </Typography>

                                <Button
                                    variant="contained"
                                    size="large"
                                    className="dashboard-btn"
                                    onClick={() => navigate("/heart")}
                                >

                                    Start Prediction

                                </Button>

                            </CardContent>

                        </Card>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Card className="dashboard-card">

                            <CardContent>

                                <HistoryIcon
                                    className="dashboard-icon history"
                                />

                                <Typography variant="h5">

                                    Prediction History

                                </Typography>

                                <Typography color="text.secondary">

                                    View all previous predictions.

                                </Typography>

                                <Button
                                    variant="contained"
                                    size="large"
                                    className="dashboard-btn"
                                    onClick={() => navigate("/history")}
                                >

                                    View History

                                </Button>

                            </CardContent>

                        </Card>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Card className="dashboard-card">

                            <CardContent>

                                <LogoutIcon
                                    className="dashboard-icon logout"
                                />

                                <Typography variant="h5">

                                    Logout

                                </Typography>

                                <Typography color="text.secondary">

                                    Securely sign out of your account.

                                </Typography>

                                <Button
                                    variant="contained"
                                    color="error"
                                    size="large"
                                    className="dashboard-btn"
                                    onClick={logout}
                                >

                                    Logout

                                </Button>

                            </CardContent>

                        </Card>

                    </Grid>

                </Grid>

            </Container>

            <Footer />

        </>

    );

}

export default Dashboard;