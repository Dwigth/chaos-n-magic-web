import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";

export default function ButtonAppBar() {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/`;
    localStorage.clear();
    navigate(path);
  };

  const source =
    "https://static.wixstatic.com/media/c1d84d_d6b0116e26844871bef856d0afddc335~mv2.png/v1/fill/w_165,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c1d84d_d6b0116e26844871bef856d0afddc335~mv2.png";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 100 }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            size="medium"
            sx={{ mr: 0, height: "5pc", flexGrow: 1 }}
            onClick={routeChange}
          >
            <img src={source} />
          </Button>

          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Character Wizard
          </Typography> */}
          <Button color="inherit" sx={{ ml: 80 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
