import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { CSEnergyButton } from "./CSEnergyButton";
import GEbuttons from "./GenerateEnergyButtons";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

// .energy_btn {
//   order: 1;
//   border: 0px solid black;
//   border-radius: 50%;
//   background: greenyellow;
//   height: 65px;
//   width: 65px;

//   appearance: none;
//   -webkit-appearance: none;
//   cursor: pointer;
//   z-index: 1;
//   outline: none;

//   background-image: url("Images/Energía_Fondo.png");
//   background-position: center;
//   background-size: 53px;
//   background-repeat: no-repeat;
// }

// .energy_btn:checked {
//   opacity: 0;
//   z-index: 0;
//   position: absolute;
// }

// .energy_btn:checked ~ .energy_btn {
//   order: 3;
//   background-color: transparent;
// }

// .energy_btn.reset_eng {
//   order: 2;
//   background-color: greenyellow;
// }

export function CSEnergyControl() {
  return (
    <Box sx={{ width: "100%", padding: 0, textAlign: "center" }}>
      <Grid
        container
        item
        spacing={2}
        columns={16}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"stretch"}
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={24}
      >
        <Grid item xs={16}>
          <Typography variant="h5">Energía</Typography>
        </Grid>
        {/* <input type="radio" className="energy_btn reset_eng" name="energy" />
        <input type="radio" className="energy_btn" name="energy" />
        <input type="radio" className="energy_btn" name="energy" />
        <input type="radio" className="energy_btn" name="energy" />
        <input type="radio" className="energy_btn" name="energy" />
        <input type="radio" className="energy_btn" name="energy" />
        <input type="radio" className="energy_btn" name="energy" /> */}

        <Grid item xs={2.5} sm={1.2} md={1.3} lg={1} xl={1}>
          <CSEnergyButton defaultChecked />
        </Grid>
        <Grid item xs={2.5} sm={1.2} md={1.3} lg={1} xl={1}>
          <CSEnergyButton defaultChecked />
        </Grid>
        <Grid item xs={2.5} sm={1.2} md={1.3} lg={1} xl={1}>
          <CSEnergyButton defaultChecked />
        </Grid>
        <Grid item xs={2.5} sm={1.2} md={1.3} lg={1} xl={1}>
          <CSEnergyButton defaultChecked />
        </Grid>
        <Grid item xs={2.5} sm={1.2} md={1.3} lg={1} xl={1}>
          <CSEnergyButton defaultChecked />
        </Grid>
        <Grid item xs={2.5} sm={1.2} md={1.3} lg={1} xl={1}>
          <CSEnergyButton defaultChecked />
        </Grid>
        <GEbuttons />
      </Grid>
    </Box>
  );
}
