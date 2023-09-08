import { Box, Checkbox, CheckboxProps, styled } from "@mui/material";
import CheckStance from "/src/assets/images/charsheet/Stance_Icon_Checked.png";
import UncheckStance from "/src/assets/images/charsheet/Stance_Icon_Unchecked.png";

/** POSTURA
 *
 *
 */

const StanceCheckBox = styled(Checkbox)(({ theme }) => ({
  borderRadius: 13,
  width: 23,
  height: 23,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 30%)"
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

export function CSStanceIcon(props: CheckboxProps) {
  return (
    <Box>
      <StanceCheckBox
        sx={{
          "&:hover": { bgcolor: "transparent" },
          transform: "scale(1.5)",
        }}
        color="default"
        checkedIcon={
          <img
            src={CheckStance}
            style={{ filter: "saturate(150%) " }}
            width={24}
          />
        }
        icon={<img src={UncheckStance} width={24} />}
        inputProps={{ "aria-label": "Checkbox demo" }}
        {...props}
      />
    </Box>
  );
}
