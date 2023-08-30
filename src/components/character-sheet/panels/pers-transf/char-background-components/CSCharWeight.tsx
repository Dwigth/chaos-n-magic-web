import { Box, Grid, TextField, Typography } from "@mui/material";


export function CSCharWeight(){
    return(
        <Box>
            <Grid spacing={1} alignItems={"center"} justifyContent={"flex-end"} container>
                <Grid item xs={4} md={3}>
                    <Typography variant={"body1"}>Peso</Typography>
                </Grid>
                <Grid item xs={8} md={8}>
                    <TextField id="charweight" name="charweight" variant="outlined" size="small" placeholder="0kg (Pesado)" fullWidth/> 
                </Grid>
            </Grid>
        </Box>
    )
}