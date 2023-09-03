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
import { useState, useEffect } from "react";
import { CSSensesControl } from "./info/Senses/CSSensesControl";
import TabPanel from "./panels/TabPanel";
import LockIcon from "@mui/icons-material/Lock";
import { useLocation, useParams } from "react-router-dom";

import { useCharacter } from "./reducer-context/CharacterContextProvider";

export const CharacterSheet = () => {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  let location = useLocation();

  function handleGameClick() {
    setDisabled(!disabled);
  }

  async function getSheetInfo() {
    try {
      const response = await fetch(
        `http://localhost:3000/hero-sheet?hero-sheet-id=${params.sheetId}&sheet-passcode=${location.state.passCode}`
      );

      if (response.ok) {
        const data = await response.json();
        const action = {
          type: "load_character",
          payload: data.heroBasicInfo,
        };
        characterDispatch(action);
      } else {
        setError("Esta hoja de personaje no esta disponible");
        console.log(error);
      }
    } catch (error) {
      setError("No se completo la solicitud para obtener los datos");
    }
  }

  useEffect(() => {
    getSheetInfo();
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
          ? location.state.passCode && (
              <>
                <Grid xs={0.9}>
                  <Typography variant="body1" color="success">
                    Password:
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="caption" color="secondary">
                    {location.state.passCode}
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
          <CSinfo />
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
              <DamageStacksControl />
            </Grid>
          </Grid>
          <Grid xs={24}>
            <CSEnergyControl />
          </Grid>
          <Grid xs={24}>
            <CSAttributes />
          </Grid>
        </Grid>
        <Grid xs={6}>
          <CSLevelControl />
          <Grid xs={6}>
            <CSPowerControl />
          </Grid>
          <Grid xs={6}>
            <CSSensesControl />
          </Grid>
        </Grid>
        <Grid xs={24}>
          <TabPanel />
        </Grid>
      </Grid>
    </Box>
  );
};
