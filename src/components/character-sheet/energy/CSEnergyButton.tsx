import { Box, Checkbox, CheckboxProps, styled } from "@mui/material";
import CheckEnergy from "/src/assets/images/charsheet/Energy_Full_Icon.png";
import UncheckEnergy from "/src/assets/images/charsheet/Energy_Unchecked_Icon.png";

const EnergyBox = styled(Checkbox)(({ theme }) => ({
  borderRadius: 16,
  width: 32,
  height: 32,
  color: "green",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 1%)"
      : "inset 0 0 0 1px rgba(12,22,26,.2), inset 0 -1px 0 rgba(16,22,26,0)",
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(16,22,26,0)" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.0),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,0.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#ebf1f5" : "#30404d",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

export function CSEnergyButton(props: CheckboxProps) {
  return (
    <Box>
      <EnergyBox
        sx={{
          "&:hover": { bgcolor: "transparent" },
          transform: "scale(1.5)",
        }}
        color="default"
        checkedIcon={
          <img
            src={CheckEnergy}
            style={{ filter: "saturate(240%) " }}
            width={32}
          />
        }
        icon={<img src={UncheckEnergy} width={32} />}
        inputProps={{ "aria-label": "Checkbox demo" }}
        {...props}
        size="medium"
      />
    </Box>
  );
}
