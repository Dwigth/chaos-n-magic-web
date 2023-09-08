import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

export default function ButtonAppBar() {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/`;
    // localStorage.clear();
    navigate(path);
  };

  const source =
    "https://static.wixstatic.com/media/c1d84d_d6b0116e26844871bef856d0afddc335~mv2.png/v1/fill/w_165,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c1d84d_d6b0116e26844871bef856d0afddc335~mv2.png";
  return (
    <Box sx={{ padding: 7 }}>
      <AppBar position="absolute">
        <Toolbar>
          <Button
            size="small"
            sx={{ alignItems: "center", flex: 1 }}
            onClick={routeChange}
          >
            <img src={source} width={150} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
