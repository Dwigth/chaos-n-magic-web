import { Grid, TextField, styled } from "@mui/material";
import { DeleteButton } from "../../../../global-components/DeleteButton";

const SpellTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    fontSize: "10px",
    lineHeight: "1.5",
  },
  "& .MuiInputLabel-root": {
    marginTop: 0,
    fontSize: "10px",
  },
});


export function MagicSpellDescription() {
  return (
    <Grid container spacing={0.5}>
      <Grid item xs={6}>
        <SpellTextField
          variant="standard"
          label="Tiempo"
          placeholder="3 Energía"
          size="small"
        />
      </Grid>
      <Grid item xs={6}>
        <SpellTextField
          variant="standard"
          label="Coste"
          placeholder="1 Poder"
          size="small"
        />
      </Grid>
      <Grid item xs={6}>
        <SpellTextField
          variant="standard"
          label="Rango"
          placeholder="10u"
          size="small"
        />
      </Grid>
      <Grid item xs={6}>
        <SpellTextField
          variant="standard"
          label="Duración"
          placeholder="Instantáneo"
          size="small"
        />
      </Grid>
      <Grid item xs={6}>
        <SpellTextField
          variant="standard"
          label="AD"
          placeholder="2dcm"
          size="small"
        />
      </Grid>
      <Grid item xs={6}>
        <SpellTextField
          variant="standard"
          label="Daño"
          placeholder="Fuego"
          size="small"
        />
      </Grid>
      <Grid item xs={12}>
        <SpellTextField
          variant="standard"
          placeholder="Este hechizo es muy poderoso..."
          size="small"
          minRows={3}
          multiline
          maxRows={6}
          fullWidth
        />
      </Grid>
      <Grid item xs={1}>
        <DeleteButton clicHandler={function (val: any): void {
                  throw new Error("Function not implemented.");
              } } />
      </Grid>
    </Grid>
  );
}
