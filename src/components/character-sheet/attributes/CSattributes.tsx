import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Box, TextField } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = styled(Paper)(({}) => ({
  background: "none",
  justifyContent: "center",
  boxShadow: "none",
  textAlign: "center",
  // ...theme.typography.body2,
  // padding: theme.spacing(0),
}));

function getRandomInt(max: any) {
  return Math.floor(Math.random() * max + 1);
}

export default function CSAttributes() {
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
    const { name, value } = event.target;
    setAttribute((attributes) => {
      return { ...attributes, [name]: value };
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
    <Box sx={{ width: "140%", padding: 1 }}>
      <Grid
        container
        rowSpacing={0}
        columnSpacing={{ xs: 1, sm: 3, md: 0 }}
        spacing={0}
        columns={7}
      >
        <Grid xs={1}>
          <Item>
            <TextField
              id="attribute_personality"
              variant="outlined"
              name="personalidad"
              color="secondary"
              defaultValue="0"
              label="Personalidad"
              type="number"
              size="medium"
              onChange={handleChange}
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
              <Avatar
                alt="Personalidad"
                src="/src/assets/images/attributes/Attributes_P.png"
                sx={{ width: "100%", height: "100%" }}
              ></Avatar>
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
              defaultValue="0"
              onChange={handleChange}
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
              <Avatar
                alt="Combate"
                src="/src/assets/images/attributes/Attributes_C.png"
                sx={{ width: "100%", height: "100%" }}
              ></Avatar>
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
              defaultValue="0"
              onChange={handleChange}
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
              <Avatar
                alt="Intelecto"
                src="/src/assets/images/attributes/Attributes_I.png"
                sx={{ width: "100%", height: "100%" }}
              ></Avatar>
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
              defaultValue="0"
              onChange={handleChange}
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
            <Avatar
              alt="Fortaleza"
              src="/src/assets/images/attributes/Attributes_F.png"
              sx={{ width: "100%", height: "100%" }}
            ></Avatar>
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
              defaultValue="0"
              onChange={handleChange}
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
            <Avatar
              alt="Agilidad"
              src="/src/assets/images/attributes/Attributes_A.png"
              sx={{ width: "100%", height: "100%" }}
            ></Avatar>
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
              defaultValue="0"
              onChange={handleChange}
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
            <Avatar
              alt="Sentidos"
              src="/src/assets/images/attributes/Attributes_S.png"
              sx={{ width: "100%", height: "100%" }}
            ></Avatar>
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
              defaultValue="0"
              onChange={handleChange}
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
            <Avatar
              alt="Mente"
              src="/src/assets/images/attributes/Attributes_M.png"
              sx={{ width: "100%", height: "100%" }}
            ></Avatar>
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
}
