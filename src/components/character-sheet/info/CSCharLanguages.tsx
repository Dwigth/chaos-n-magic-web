import { TextField } from "@mui/material";

export function CSCharLanguages(){
    return(
        <TextField
              fullWidth
              id="info-languages"
              label="Idiomas"
              variant="outlined"
              color="secondary"
              type="text"
              name="info-languages"
              defaultValue=" "
              multiline
              placeholder="Idioma 1"
              minRows={2}
            />
    );
}