import { CSinfo } from "./info/CSinfo";
import { CSEnergyControl } from "./energy/CSEnergyControl";

import Grid from "@mui/material/Unstable_Grid2";
import { Container, IconButton, Typography } from "@mui/material";
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
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useCharacter } from "./reducer-context/CharacterContextProvider";
import { toast } from "react-toastify";

export const CharacterSheet = () => {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const { characterDispatch } = useCharacter();

  let params = useParams();

  let location = useLocation();

  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  function handleGameClick() {
    setDisabled(!disabled);
  }

  const advertise = () => {
    toast.warn(
      "Recuerda guardar el ID y la contraseña de tu hoja de personaje",
      {
        position: "top-center",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        icon: true,
      }
    );
  };

  async function getSheetInfo() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_CHAOS_SERVER}/hero-sheet?hero-sheet-id=${
          params.sheetId
        }&sheet-passcode=${location.state.passCode}`
      );

      if (response.ok) {
        const data = await response.json();
        const action = {
          type: "load_character",
          payload: data.heroBasicInfo,
        };
        characterDispatch(action);
        advertise();
      } else {
        setError("Esta hoja de personaje no esta disponible");

        console.log(error);
      }
    } catch (err) {
      routeChange();
      setError("No se completo la solicitud para obtener los datos");
    }
  }

  useEffect(() => {
    getSheetInfo();
  }, []);

  return (
    <Container maxWidth={"xl"}>
      <Grid
        container
        direction="row"
        justifyContent={"flex-end"}
        alignItems={"center"}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Grid xs={1} sm={0.5} md={0.4} lg={0.3} xl={0.3}>
          <Typography variant="body1" color="success">
            ID:
          </Typography>
        </Grid>
        <Grid xs={4.9} sm={3} md={2.4} lg={1.7} xl={1.5}>
          <Typography variant="caption" color="secondary">
            {params.sheetId}
          </Typography>
        </Grid>
        {disabled
          ? location.state.passCode && (
              <>
                <Grid xs={3.7} sm={1.9} md={1.2} lg={0.9} xl={0.7}>
                  <Typography variant="body1" color="success">
                    Password:
                  </Typography>
                </Grid>
                <Grid xs={1.9} sm={1} md={0.6} lg={0.5} xl={0.4}>
                  <Typography variant="caption" color="secondary">
                    {location.state.passCode}
                  </Typography>
                </Grid>
              </>
            )
          : null}
        <Grid xs={1}>
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
        // columnSpacing={{ xs: 0, sm: 0, md: 0, xl: 0 }}
      >
        <Grid xs={24} sm={24} md={8} lg={6} xl={6}>
          <CSinfo />
        </Grid>
        <Grid container xs={24} sm={24} md={16} lg={12} xl={12} spacing={1}>
          <Grid xs={24} sm={24} md={13} lg={13} xl={14}>
            <CSDefense />
          </Grid>
          <Grid
            container
            xs={24}
            sm={24}
            md={11}
            lg={11}
            xl={10}
            direction={"column"}
          >
            <Grid xs={22} sm={24} md={24} lg={24} xl={24}>
              <CSStanceControl />
            </Grid>
            <Grid xs={22} sm={22} md={22} lg={20} xl={22}>
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
        <Grid xs={24} sm={24} md={13} lg={6} xl={6}>
          <Grid>
            <CSLevelControl />
          </Grid>
          <Grid>
            <CSPowerControl />
          </Grid>
          <Grid>
            <CSSensesControl />
          </Grid>
        </Grid>
        <Grid xs={24}>
          <TabPanel />
        </Grid>
      </Grid>
    </Container>
  );
};
