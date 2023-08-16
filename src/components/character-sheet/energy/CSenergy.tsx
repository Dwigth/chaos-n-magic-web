// import React from "react";
import { styled } from "@mui/material/styles";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { Box } from "@mui/material";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#060505" : "#fff",
//   // ...theme.typography.body2,
//   padding: theme.spacing(0),
//   textAlign: "center",
//   // color: theme.palette.grey[500],
// }));

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 13,
  width: 26,
  height: 26,
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
  backgroundColor: "#25e67f",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#25e67f",
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

export default function CSenergy() {
  return (
    <Box sx={{ width: "100%", padding: 3, textAlign: "center" }}>
      <Grid spacing={0}>
        <Grid xs={12}>
          <BpCheckbox {...label} defaultChecked />
          <BpCheckbox {...label} defaultChecked />
          <BpCheckbox {...label} defaultChecked />
          <BpCheckbox {...label} defaultChecked />
          <BpCheckbox {...label} defaultChecked />
          <BpCheckbox {...label} defaultChecked />
          <BpCheckbox {...label} defaultChecked disabled />
          <BpCheckbox {...label} defaultChecked disabled />
          <h2>Energia</h2>
        </Grid>
      </Grid>
    </Box>
  );
}
