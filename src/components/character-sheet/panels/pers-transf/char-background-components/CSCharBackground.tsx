import { Box, TextField } from "@mui/material";

export function CSCharBackground() {
  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        id="charbackground"
        name="charbackground"
        color="secondary"
        placeholder="Nació en las calles de Otualia..."
        variant="outlined"
        minRows={4}
        rows={4}
        size="small"
        inputProps={{
          style: {
            fontSize: "12px",
          },
        }}
        sx={{ fontSize: "10px" }}
        multiline
        fullWidth
        
      />
    </Box>
  );
}
