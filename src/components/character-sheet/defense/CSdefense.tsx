import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, TextField } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 100,
}));

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
      borderRadius: 100,
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

export default function CSdefense() {
  return (
    <Box sx={{ width: "40%", padding: 1 }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
        spacing={6}
      >
        <Grid xs={6}>
          <Item>
            <CssTextField
              fullWidth
              type="number"
              label="Defensa"
              id="Defensa"
            />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <CssTextField
              fullWidth
              type="number"
              label="Defensa maxima"
              id="defensaMax"
            />
          </Item>
        </Grid>
        <Grid xs={3.5}>
          <Item></Item>
        </Grid>
        <Grid xs={0} xl={5} alignContent={"center"}>
          <Item>
            <CssTextField fullWidth type="number" label="Bono" id="bono" />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
