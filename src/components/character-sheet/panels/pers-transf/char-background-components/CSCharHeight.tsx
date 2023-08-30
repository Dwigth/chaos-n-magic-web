import { Box, Grid, Typography, TextField } from "@mui/material";


export function CSCharHeight(){
    return(
        <Box>
        <Grid spacing={1} alignItems={"center"} justifyContent={"flex-end"} container>
            <Grid item xs={4} md={3}>
                <Typography variant={"body1"} >Altura</Typography>
            </Grid>
            <Grid item xs={8}>
                <TextField id="charheight" name="charheight" variant="outlined" size="small" placeholder="1.5m (Mediano)" fullWidth/> 
            </Grid>
        </Grid>
    </Box>
    )
}