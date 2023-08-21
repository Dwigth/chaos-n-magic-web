import { TextField } from "@mui/material";


export function HeroWalkingSpeed(){
    return(
        <TextField
              fullWidth
              id="info-velocity-run"
              label="Correr"
              variant="outlined"
              type="number"
              name="info-velocity-run"
              defaultValue="0"
              InputLabelProps={{
                style: {
                   fontSize: 14 
                }
              }}
            />
    )
}