import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Personalty from "../../../assets/images/attributes/Attributes_P.png";
import Combat from "../../../assets/images/attributes/Attributes_C.png";
import Inteligent from "../../../assets/images/attributes/Attributes_I.png";
import Fortress from "../../../assets/images/attributes/Attributes_F.png";
import Agility from "../../../assets/images/attributes/Attributes_A.png";
import Sense from "../../../assets/images/attributes/Attributes_S.png";
import Mind from "../../../assets/images/attributes/Attributes_M.png";

const Item = styled(Paper)(({}) => ({
  background: "none",
  justifyContent: "center",
  boxShadow: "none",
  textAlign: "center",
  draggable: "false",
  // ...theme.typography.body2,
  // padding: theme.spacing(0),
}));

function getRandomInt(max: any) {
  return Math.floor(Math.random() * max + 1);
}

interface Props {
  Combate: (comb: number) => void;
  Fortaleza: (fort: number) => void;
  Mente: (mind: number) => void;
}

export const CSAttributes: FC<Props> = ({ Combate, Fortaleza, Mente }) => {
  const [attributes, setAttribute] = useState({
    personalidad: 0,
    combate: 0,
    intelecto: 0,
    fortaleza: 0,
    agilidad: 0,
    sentidos: 0,
    mente: 0,
  });

  const handleChange = (event: any) => {
    const { name } = event.target;
    const value = Math.max(0, Math.min(99, Number(event.target.value)));
    setAttribute((attributes) => {
      return { ...attributes, [name]: value };
    });

    if (name == "combate") {
      Combate(value);
    }

    if (name == "fortaleza") {
      Fortaleza(value);
    }

    if (name == "mente") {
      Mente(value);
    }

    console.log("Combate: " + Combate);
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
      icon: () => (
        <img
          src="/src/assets/images/icons/dados-d12.png"
          style={{ width: "100%" }}
        />
      ),
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
        columnSpacing={{ xs: 1, sm: 3, md: 0 }}
        spacing={0}
        columns={7}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid xs={7}>
          <Typography variant="h5" align="center" sx={{ padding: 2 }}>
            Atributos
          </Typography>
        </Grid>
        <Grid xs={1}>
          <Item>
            <TextField
              id="attribute_personality"
              variant="outlined"
              name="personalidad"
              color="secondary"
              label="Personalidad"
              type="number"
              size="medium"
              onChange={handleChange}
              value={attributes.personalidad}
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
              onClick={() => tirada("Personalidad", attributes.personalidad)}
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
        <Grid xs={1}>
          <Item>
            <TextField
              id="outlined-basic"
              variant="outlined"
              color="secondary"
              type="number"
              name="combate"
              onChange={handleChange}
              value={attributes.combate}
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
            <Item onClick={() => tirada("Combate", attributes.combate)}>
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
        <Grid xs={1}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Intelecto"
              variant="outlined"
              color="secondary"
              type="number"
              name="intelecto"
              onChange={handleChange}
              value={attributes.intelecto}
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
            <Item onClick={() => tirada("Intelecto", attributes.intelecto)}>
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
        <Grid xs={1}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Fortaleza"
              variant="outlined"
              color="secondary"
              type="number"
              name="fortaleza"
              onChange={handleChange}
              value={attributes.fortaleza}
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
          <Item onClick={() => tirada("Fortaleza", attributes.fortaleza)}>
            <Button size="small">
              <Avatar
                alt="Fortaleza"
                src={Fortress}
                sx={{ width: "100%", height: "100%" }}
              ></Avatar>
            </Button>
          </Item>
        </Grid>
        <Grid xs={1}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Agilidad"
              variant="outlined"
              color="secondary"
              type="number"
              name="agilidad"
              onChange={handleChange}
              value={attributes.agilidad}
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
          <Item onClick={() => tirada("Agilidad", attributes.agilidad)}>
            <Button size="small">
              <Avatar
                alt="Agilidad"
                src={Agility}
                sx={{ width: "100%", height: "100%" }}
              ></Avatar>
            </Button>
          </Item>
        </Grid>
        <Grid xs={1}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Sentidos"
              variant="outlined"
              color="secondary"
              type="number"
              name="sentidos"
              onChange={handleChange}
              value={attributes.sentidos}
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
          <Item onClick={() => tirada("Sentidos", attributes.sentidos)}>
            <Button size="small">
              <Avatar
                alt="Sentidos"
                src={Sense}
                sx={{ width: "100%", height: "100%" }}
              ></Avatar>
            </Button>
          </Item>
        </Grid>
        <Grid xs={1}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Mente"
              variant="outlined"
              color="secondary"
              type="number"
              name="mente"
              onChange={handleChange}
              value={attributes.mente}
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
          <Item onClick={() => tirada("Mente", attributes.mente)}>
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
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Box>
  );
};
