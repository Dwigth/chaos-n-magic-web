// import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Item = styled(Paper)(({}) => ({
  background: "none",
  justifyContent: "center",
  boxShadow: "none",
  textAlign: "center",
  // ...theme.typography.body2,
  // padding: theme.spacing(0),
}));

export default function CSAttributes() {
  const [attributes, setAttribute] = useState({
    personalidad: "",
    combate: "",
    intelecto: "",
    fortaleza: "",
    agilidad: "",
    sentidos: "",
    mente: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAttribute((attributes) => {
      return { ...attributes, [name]: value };
    });
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
                  alignItems: 'center'
                },
              }}
              InputLabelProps={{
                style:{
                  fontSize: 'calc(100% - 14)'
                }
              }}
            />
            <Item>
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
                  alignItems: 'center'
                },                
              }}
              InputLabelProps={{
                style:{
                  fontSize: 'calc(100% - 14)'
                }
              }}
            />
            <Item>
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
              type="number"
              name="intelligent"
              defaultValue="0"
              onChange={handleChange}
              inputProps={{
                style: {
                  fontSize: 32,
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: 'center'
                },                
              }}
              InputLabelProps={{
                style:{
                  fontSize: 'calc(100% - 14)'
                }
              }}
            />
            <Item>
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
              type="number"
              name="strength"
              defaultValue="0"
              onChange={handleChange}
              inputProps={{
                style: {
                  fontSize: 32,
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: 'center'
                },                
              }}
              InputLabelProps={{
                style:{
                  fontSize: 'calc(100% - 14)'
                }
              }}
            />
          </Item>
          <Item>
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
              type="number"
              name="agility"
              defaultValue="0"
              onChange={handleChange}
              inputProps={{
                style: {
                  fontSize: 32,
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: 'center'
                },                
              }}
              InputLabelProps={{
                style:{
                  fontSize: 'calc(100% - 14)'
                }
              }}
            />
          </Item>
          <Item>
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
              type="number"
              name="senses"
              defaultValue="0"
              onChange={handleChange}
              inputProps={{
                style: {
                  fontSize: 32,
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: 'center'
                },                
              }}
              InputLabelProps={{
                style:{
                  fontSize: 'calc(100% - 14)'
                }
              }}
            />
          </Item>
          <Item>
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
              type="number"
              name="mind"
              defaultValue="0"
              onChange={handleChange}
              inputProps={{
                style: {
                  fontSize: 32,
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: 'center'
                },                
              }}
              InputLabelProps={{
                style:{
                  fontSize: 'calc(100% - 14)'
                }
              }}
            />
          </Item>
          <Item>
            <Avatar
              alt="Mente"
              src="/src/assets/images/attributes/Attributes_M.png"
              sx={{ width: "100%", height: "100%" }}
            ></Avatar>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
