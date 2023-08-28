import { InputLabel, TextField, styled } from "@mui/material";

export const PowerField = styled(TextField)({
  "& .MuiInputBase-input": {
    fontSize: "10px",
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
    textAlign: "center",
  },
});

export const PowerFieldLabel = styled(InputLabel)({
  fontSize: "0.8rem",
  marginBottom: "-15%",
  width: "105%",
  marginLeft: "1%",
});
