import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";

import "../styles/navbar.css";

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {

        localStorage.removeItem("token");
        navigate("/");

    };

    const active = (path) =>
        location.pathname === path ? "active-nav-btn" : "nav-btn";

    return (

        <AppBar
            position="sticky"
            elevation={2}
            className="navbar"
        >

            <Toolbar>

                <Box
                    display="flex"
                    alignItems="center"
                    sx={{ flexGrow: 1 }}
                >

                    <LocalHospitalIcon
                        sx={{
                            mr:1,
                            fontSize:35
                        }}
                    />

                    <Typography
                        variant="h6"
                        fontWeight="bold"
                    >

                        AI Health Predictor

                    </Typography>

                </Box>

                <Button
                    className={active("/dashboard")}
                    startIcon={<DashboardIcon />}
                    onClick={() => navigate("/dashboard")}
                >
                    Dashboard
                </Button>

                <Button
                    className={active("/diabetes")}
                    startIcon={<BloodtypeIcon />}
                    onClick={() => navigate("/diabetes")}
                >
                    Diabetes
                </Button>

                <Button
                    className={active("/heart")}
                    startIcon={<FavoriteIcon />}
                    onClick={() => navigate("/heart")}
                >
                    Heart
                </Button>

                <Button
                    className={active("/history")}
                    startIcon={<HistoryIcon />}
                    onClick={() => navigate("/history")}
                >
                    History
                </Button>

                <Button
                    color="error"
                    variant="contained"
                    startIcon={<LogoutIcon />}
                    sx={{ ml:2 }}
                    onClick={logout}
                >
                    Logout
                </Button>

            </Toolbar>

        </AppBar>

    );

}

export default Navbar;