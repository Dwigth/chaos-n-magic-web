import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Personalty from "../../../assets/images/attributes/Attributes_P.png";
import Combat from "../../../assets/images/attributes/Attributes_C.png";
import Inteligent from "../../../assets/images/attributes/Attributes_I.png";
import Fortress from "../../../assets/images/attributes/Attributes_F.png";
import Agility from "../../../assets/images/attributes/Attributes_A.png";
import Sense from "../../../assets/images/attributes/Attributes_S.png";
import Mind from "../../../assets/images/attributes/Attributes_M.png";
import { useCharacter } from "../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";
import DiceAlert from "../../../assets/images/icons/dados-d12.png";

const Item = styled(Paper)(({}) => ({
  background: "none",
  justifyContent: "center",
  boxShadow: "none",
  textAlign: "center",
  draggable: "false",
}));

function getRandomInt(max: any) {
  return Math.floor(Math.random() * max + 1);
}

export const CSAttributes = () => {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function putAttributesValues(name: string, val: string) {
    try {
      await fetch("http://localhost:3000/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["attributes", name, "value"],
          value: val,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleAttribute = (event: any) => {
    const { name } = event.target;
    const value = Math.max(-6, Math.min(6, Number(event.target.value)));
    characterDispatch({
      type: "update_attributes",
      payload: {
        name,
        value,
      },
    });
  };

  const alerts = (men: string) => {
    toast.info(men, {
      position: "bottom-right",
      autoClose: 8000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: () => <img src={DiceAlert} style={{ width: "100%" }} />,
      theme: "light",
    });
  };

  const tirada = (attr: string, val: number) => {
    let random = getRandomInt(12);
    console.log("Numero random = " + random);
    let sum = random + Number(val);

    const mensaje = attr + ": d12(" + random + ") + " + val + " = " + sum;

    alerts(mensaje);
  };

  return (
    <Box sx={{ width: "100%", padding: 1 }}>
      <Grid
        container
        rowSpacing={0}
        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
        spacing={0}
        columns={7}
        justifyContent={"center"}
        alignItems={"center"}
        xs={8}
        sm={7}
        md={7}
        lg={7}
        xl={7}
      >
        <Grid xs={7}>
          <Typography variant="h5" align="center" sx={{ padding: 2 }}>
            Atributos
          </Typography>
        </Grid>
        <Grid xs={2} sm={1} md={1} lg={1} xl={1}>
          <Item>
            <TextField
              id="attribute_personality"
              variant="outlined"
              name="personality"
              color="secondary"
              label="Personalidad"
              type="number"
              size="medium"
              onChange={handleAttribute}
              value={characterState.attributes.personality.value}
              onBlur={() =>
                putAttributesValues(
                  "personality",
                  characterState.attributes.personality.value
                )
              }
              inputProps={{
                style: {
                  fontSize: 32,
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "calc(100% - 14)",
                },
              }}
            />
            <Item
              onClick={() =>
                tirada(
                  "Personalidad",
                  characterState.attributes.personality.value
                )
              }
            >
              <Button size="small" draggable="false">
                <Avatar
                  alt="Personalidad"
                  src={Personalty}
                  sx={{ width: "100%", height: "100%" }}
                  draggable="false"
                />
              </Button>
            </Item>
          </Item>
        </Grid>
        <Grid xs={2} sm={1} md={1} lg={1} xl={1}>
          <Item>
            <TextField
              id="outlined-basic"
              variant="outlined"
              color="secondary"
              type="number"
              name="combat"
              onChange={handleAttribute}
              value={characterState.attributes.combat.value}
              onBlur={() =>
                putAttributesValues(
                  "combat",
                  characterState.attributes.combat.value
                )
              }
              label="Combate"
              size="medium"
              inputProps={{
                style: {
                  fontSize: 32,
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "calc(100% - 14)",
                },
              }}
            />
            <Item
              onClick={() =>
                tirada("Combate", characterState.attributes.combat.value)
              }
            >
              <Button size="small" color="secondary">
                <Avatar
                  alt="Combate"
                  src={Combat}
                  sx={{ width: "100%", height: "100%" }}
                  draggable="false"
                ></Avatar>
              </Button>
            </Item>
          </Item>
        </Grid>
        <Grid xs={2} sm={1} md={1} lg={1} xl={1}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Intelecto"
              variant="outlined"
              color="secondary"
              type="number"
              name="intellect"
              onChange={handleAttribute}
              value={characterState.attributes.intellect.value}
              onBlur={() =>
                putAttributesValues(
                  "intellect",
                  characterState.attributes.intellect.value
                )
              }
              inputProps={{
                style: {
                  fontSize: 32,
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "calc(100% - 14)",
                },
              }}
            />
            <Item
              onClick={() =>
                tirada("Intelecto", characterState.attributes.intellect.value)
              }
            >
              <Button size="small">
                <Avatar
                  alt="Intelecto"
                  src={Inteligent}
                  sx={{ width: "100%", height: "100%" }}
                ></Avatar>
              </Button>
            </Item>
          </Item>
        </Grid>
        <Grid xs={2} sm={1} md={1} lg={1} xl={1}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Fortaleza"
              variant="outlined"
              color="secondary"
              type="number"
              name="fortitude"
              onChange={handleAttribute}
              value={characterState.attributes.fortitude.value}
              onBlur={() =>
                putAttributesValues(
                  "fortitude",
                  characterState.attributes.fortitude.value
                )
              }
              inputProps={{
                style: {
                  fontSize: 32,
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "calc(100% - 14)",
                },
              }}
            />
          </Item>
          <Item
            onClick={() =>
              tirada("Fortaleza", characterState.attributes.fortitude.value)
            }
          >
            <Button size="small">
              <Avatar
                alt="Fortaleza"
                src={Fortress}
                sx={{ width: "100%", height: "100%" }}
              ></Avatar>
            </Button>
          </Item>
        </Grid>
        <Grid xs={2} sm={1} md={1} lg={1} xl={1}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Agilidad"
              variant="outlined"
              color="secondary"
              type="number"
              name="agility"
              onChange={handleAttribute}
              value={characterState.attributes.agility.value}
              onBlur={() =>
                putAttributesValues(
                  "agility",
                  characterState.attributes.agility.value
                )
              }
              inputProps={{
                style: {
                  fontSize: 32,
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "calc(100% - 14)",
                },
              }}
            />
          </Item>
          <Item
            onClick={() =>
              tirada("Agilidad", characterState.attributes.agility.value)
            }
          >
            <Button size="small">
              <Avatar
                alt="Agilidad"
                src={Agility}
                sx={{ width: "100%", height: "100%" }}
              ></Avatar>
            </Button>
          </Item>
        </Grid>
        <Grid xs={2} sm={1} md={1} lg={1} xl={1}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Sentidos"
              variant="outlined"
              color="secondary"
              type="number"
              name="senses"
              onChange={handleAttribute}
              value={characterState.attributes.senses.value}
              onBlur={() =>
                putAttributesValues(
                  "senses",
                  characterState.attributes.senses.value
                )
              }
              inputProps={{
                style: {
                  fontSize: 32,
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "calc(100% - 14)",
                },
              }}
            />
          </Item>
          <Item
            onClick={() =>
              tirada("Sentidos", characterState.attributes.senses.value)
            }
          >
            <Button size="small">
              <Avatar
                alt="Sentidos"
                src={Sense}
                sx={{ width: "100%", height: "100%" }}
              ></Avatar>
            </Button>
          </Item>
        </Grid>
        <Grid xs={2} sm={1} md={1} lg={1} xl={1}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Mente"
              variant="outlined"
              color="secondary"
              type="number"
              name="mind"
              onChange={handleAttribute}
              value={characterState.attributes.mind.value}
              onBlur={() =>
                putAttributesValues(
                  "mind",
                  characterState.attributes.mind.value
                )
              }
              inputProps={{
                style: {
                  fontSize: 32,
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "calc(100% - 14)",
                },
              }}
            />
          </Item>
          <Item
            onClick={() =>
              tirada("Mente", characterState.attributes.mind.value)
            }
          >
            <Button size="small">
              <Avatar
                alt="Mente"
                src={Mind}
                sx={{ width: "100%", height: "100%" }}
              ></Avatar>
            </Button>
          </Item>
        </Grid>
      </Grid>
      <ToastContainer
        position="bottom-right"
        autoClose={8000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        icon={() => <img src={DiceAlert} style={{ width: "100%" }} />}
        theme="light"
      />
    </Box>
  );
};
