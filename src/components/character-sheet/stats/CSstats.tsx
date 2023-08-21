import { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { TextField } from "@mui/material";

import { styled } from "@mui/material/styles";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";

export default function CSstats() {
  const [value, setAttribute] = useState({
    veneno: "",
    desangre: "",
    psiquico: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setAttribute((attributes) => {
      return { ...attributes, [name]: value };
    });
  };

  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: 13,
    width: 23,
    height: 23,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 0 0 1px rgb(16 22 26 / 40%)"
        : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
    backgroundImage:
      theme.palette.mode === "dark"
        ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
        : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background:
        theme.palette.mode === "dark"
          ? "rgba(57,75,89,.5)"
          : "rgba(206,217,224,.5)",
    },
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#edaf28",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#edaf28",
    },
  });

  function BpCheckbox(props: CheckboxProps) {
    return (
      <Checkbox
        sx={{
          "&:hover": { bgcolor: "transparent" },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        inputProps={{ "aria-label": "Checkbox demo" }}
        {...props}
      />
    );
  }

  const BpCheckedIcon2 = styled(BpIcon)({
    backgroundColor: "#2850ed",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#2850ed",
    },
  });

  function BpCheckbox2(props: CheckboxProps) {
    return (
      <Checkbox
        sx={{
          "&:hover": { bgcolor: "transparent" },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon2 />}
        icon={<BpIcon />}
        inputProps={{ "aria-label": "Checkbox demo" }}
        {...props}
      />
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Grid>
        <Grid xs={14}>
          <label htmlFor="">Postura</label>
          <BpCheckbox defaultChecked />
          <BpCheckbox defaultChecked />
          <BpCheckbox defaultChecked />

          <label htmlFor="">Postura temporal</label>
          <BpCheckbox />
          <BpCheckbox />
          <BpCheckbox />
          <BpCheckbox />

          <label htmlFor="">Hitos</label>
          <BpCheckbox2 />
          <BpCheckbox2 />
          <BpCheckbox2 />
          <BpCheckbox2 />

          <TextField
            id="outlined-basic"
            label="Nivel"
            variant="outlined"
            type="number"
            name="level"
          />
        </Grid>
        <Grid xs={5}>
          <label htmlFor="">Desangre</label>
          <input
            type="number"
            name="desangre"
            id="desangre"
            max={100}
            onChange={handleChange}
          />
          <ProgressBar
            completed={value.desangre}
            maxCompleted={100}
            bgColor="Red"
          />

          <label htmlFor="">Veneno</label>
          <input
            type="number"
            name="veneno"
            id="veneno"
            max={100}
            onChange={handleChange}
          />
          <ProgressBar
            completed={value.veneno}
            maxCompleted={100}
            bgColor="Green"
          />

          <label htmlFor="">Psiquico</label>
          <input
            type="number"
            name="psiquico"
            id="psiquico"
            max={100}
            onChange={handleChange}
          />
          <ProgressBar
            completed={value.psiquico}
            maxCompleted={100}
            bgColor="Purple"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
