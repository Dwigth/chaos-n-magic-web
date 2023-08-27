import { Box, TextField } from "@mui/material";

export function LevelTextField() {
  return (
    <Box
      alignItems={"center"}
      style={{
        width: "100%",
        height: "120%",
        marginTop: "5%",
      }}
    >
      <TextField
        variant="outlined"
        color="secondary"
        label="Nivel"
        defaultValue={1}
        style={{ maxWidth: "90%", minHeight: "100%", textAlign: "center" }}
      />
    </Box>
  );
}
