import { CSinfo } from "./info/CSinfo";
import { CSEnergyControl } from "./energy/CSEnergyControl";

import Grid from "@mui/material/Unstable_Grid2";
import { Box, IconButton, Typography } from "@mui/material";
import { CSAttributes } from "./attributes/CSattributes";
import CSDefense from "./defense/CSdefense";
import CSStanceControl from "./stance/CSStanceControl";
import { CSLevelControl } from "./info/level/CSLevelControl";
import { DamageStacksControl } from "./damage-stacks/DamageStacksControl";
import { CSPowerControl } from "./power/CSPowerControl";
import { useState, FC, useEffect } from "react";
import { CSSensesControl } from "./info/Senses/CSSensesControl";
import TabPanel from "./panels/TabPanel";
import LockIcon from "@mui/icons-material/Lock";
import { useParams } from "react-router-dom";

interface idCharacterSheet {
  Datos: any;
}

export const CharacterSheet: FC<idCharacterSheet> = ({ Datos }) => {
  const [combat, setCombat] = useState(0);
  const [fort, setFortess] = useState(0);
  const [mind, setMind] = useState(0);
  const [senses, setSenses] = useState(0);

  const [disabled, setDisabled] = useState(false);

  function handleGameClick() {
    setDisabled(!disabled);
  }

  let params = useParams();

  const [error, setError] = useState("");

  async function handleClick() {
    try {
      const response = await fetch(
        `http://localhost:3000/hero-sheet?hero-sheet-id=${params.sheetId}`
      );

      if (response.ok) {
        const data = await response.json();

        console.log({ data });
      } else {
        setError("Esta hoja de personaje no esta disponible");
      }
    } catch (error) {
      setError("No se completo la solicitud para obtener los datos");
    }
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <Box
      sx={{
        width: "80%",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "2%",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent={"flex-end"}
        alignItems={"center"}
      >
        <Grid xs={0.3}>
          <Typography variant="body1" color="success">
            ID:
          </Typography>
        </Grid>
        <Grid xs={1.7}>
          <Typography variant="caption" color="secondary">
            {params.sheetId}
          </Typography>
        </Grid>
        {disabled
          ? params.sheetPasscode && (
              <>
                <Grid xs={0.9}>
                  <Typography variant="body1" color="success">
                    Password:
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="caption" color="secondary">
                    {params.sheetPasscode}
                  </Typography>
                </Grid>
              </>
            )
          : null}
        <Grid xs={0.5}>
          <IconButton color="secondary" onClick={handleGameClick}>
            <LockIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        container
        columns={24}
        rowSpacing={1}
        spacing={1}
        alignItems={"stretch"}
        justifyContent={"center"}
        columnSpacing={{ xs: 0, sm: 0, md: 0 }}
      >
        <Grid xs={6}>
          <CSinfo Datos={Datos} />
        </Grid>
        <Grid container xs={12} columns={24}>
          <Grid xs={14}>
            <CSDefense />
          </Grid>
          <Grid container xs={10} direction={"column"}>
            <Grid xs>
              <CSStanceControl />
            </Grid>
            <Grid xs>
              <DamageStacksControl
                combat={combat}
                fortaleza={fort}
                mente={mind}
              />
            </Grid>
          </Grid>
          <Grid xs={24}>
            <CSEnergyControl />
          </Grid>
          <Grid xs={24}>
            <CSAttributes
              Combate={(c) => setCombat(c)}
              Fortaleza={(f) => setFortess(f)}
              Mente={(m) => setMind(m)}
              Sentidos={(s) => setSenses(s)}
              Datos={Datos}
            />
          </Grid>
        </Grid>
        <Grid xs={6}>
          <CSLevelControl />
          <Grid xs={6}>
            <CSPowerControl Datos={Datos} />
          </Grid>
          <Grid xs={6}>
            <CSSensesControl senses={senses} />
          </Grid>
        </Grid>
        <Grid xs={24}>
          <TabPanel />
        </Grid>
      </Grid>
    </Box>
  );
};
