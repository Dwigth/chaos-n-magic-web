import { Grid, IconButton, TextField } from "@mui/material";
import { FC, useState } from "react";
import { toast } from "react-toastify";
import Dices from "../../../../assets/images/icons/DiceIcon_DCM_Mini.png";

import Espada1 from "../../../../assets/images/icons/espada.webp";
import Espada2 from "../../../../assets/images/icons/2_espadas.webp";
import Espada3 from "../../../../assets/images/icons/3_espadas.webp";
import Hoja from "../../../../assets/images/icons/hoja.webp";
import Estrella from "../../../../assets/images/icons/estrella.webp";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";
import { DeleteButton } from "../../../global-components/DeleteButton";

interface passIndex {
  index: number;
}

let count = 0;

export const ActionTextField: FC<passIndex> = ({ index }) => {
  const { characterState, characterDispatch } = useCharacter();
  const [enable, isEnable] = useState(true);

  let params = useParams();

  const webhook =
    "https://discord.com/api/webhooks/1158534821228859423/sT5UpLeVNiILqTz7MVXrdhAEFymBW1f7USqhDV8015WnvlVRSukrQmA5-bo-b58UpOEQ";

  const messageDiscord =
    "Tirada de " + "**" + characterState.characterName + "**: ";

  async function sendDiscordMessages(val: string) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: val,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function putAction(int: number, event: any) {
    const { name, value } = event.target;
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["actions", int, name],
          value: value,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max + 1);
  }

  const Example = ({ imageURL }: { imageURL: any }) => (
    <img src={imageURL} width={25} />
  );

  const errorAlert = (men: string) => {
    toast.error(men, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: true,
      theme: "colored",
    });
  };

  const throwDiceCM = () => {
    const split = characterState.actions[index].formula.split("d");

    if (split == null) {
      let mensaje = "Error al leer el dado";
      return errorAlert(mensaje);
    }

    let quantity = parseInt(split[0]);

    if (split[1] == null || isNaN(quantity)) {
      let mensaje = "Error al leer el dado";
      return errorAlert(mensaje);
    }

    if (quantity > 10) {
      let mensaje = "Has intentado lanzar demasiados dados";
      return errorAlert(mensaje);
    }

    let plus = quantity;
    const respuestasCM = Array(plus);
    const respuestasDiscord = Array(plus);

    let bonus = split[1].split("+");

    let bonusInt = parseInt(bonus[1]);

    if (bonusInt > 99) {
      let mensaje = "El bonus es demasido alto";
      return errorAlert(mensaje);
    }

    if (bonus[0] == "cm") {
      let respuestasFinales = 0;

      let contador = 0;

      for (let i = 0; i < quantity; i++) {
        respuestasCM[i] = getRandomInt(6);

        switch (respuestasCM[i]) {
          case 1:
            respuestasCM[i] = Hoja;
            respuestasDiscord[i] = ` <:dcmhoja:1115403752598421575> `;
            respuestasFinales += 0;
            break;

          case 2:
            respuestasCM[i] = Hoja;
            respuestasDiscord[i] = ` <:dcmhoja:1115403752598421575> `;
            respuestasFinales += 0;
            break;

          case 3:
            respuestasCM[i] = Espada1;
            respuestasDiscord[i] = ` <:dcm1sw:1115403834710302761> `;
            respuestasFinales += 1;
            break;

          case 4:
            respuestasCM[i] = Espada2;
            respuestasDiscord[i] = ` <:dcm2sw:1115403890020597871> `;
            respuestasFinales += 2;
            break;

          case 5:
            respuestasCM[i] = Espada3;
            respuestasDiscord[i] = ` <:dcm3sw:1115403922652278868> `;
            respuestasFinales += 3;
            break;

          case 6:
            respuestasCM[i] = Estrella;
            respuestasDiscord[i] = ` <:dcmstar:1115403627503288400> `;
            respuestasFinales += 3;
            contador += 1;
            break;
        }
      }

      if (contador > 0) respuestasFinales = respuestasFinales * contador;

      if (bonus[1] != null) respuestasFinales = respuestasFinales + bonusInt;

      const ImageAlert = () => {
        return respuestasCM.map((image, indx) => (
          <span key={indx}>
            <Example imageURL={image} />{" "}
          </span>
        ));
      };

      const FinalResult = () => {
        return (
          <>
            {characterState.actions[index].formula}: {ImageAlert()} ={" "}
            {respuestasFinales}
          </>
        );
      };

      toast(FinalResult);

      if (enable) {
        count++;
        sendDiscordMessages(
          messageDiscord +
            respuestasDiscord.join("") +
            " + " +
            bonusInt +
            " = " +
            respuestasFinales
        );
        console.log(count);

        if (count >= 3) {
          isEnable(false);
          setTimeout(() => {
            isEnable(true), (count = 0);
          }, 30000);
        }
      }
    } else {
      let mensaje = "Comando incorrecto";
      return errorAlert(mensaje);
    }
  };

  const handleAction = (event: any, int: number) => {
    const { name } = event.target;
    const value = event.target.value;
    characterDispatch({
      type: "update_action",
      payload: {
        name,
        value,
        int,
      },
    });
  };

  async function EliminateAction(int: number) {
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["actions", int],
          value: {},
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const deleteAction = (event: any, int: any) => {
    if (event.detail == 2) {
      characterDispatch({
        type: "delete_action",
        payload: {
          int,
        },
      });
      EliminateAction(int);
    }
  };

  return (
    <Grid container direction="row" sx={{ marginTop: 0 }} spacing={0.5}>
      <Grid item xs={24} sm={3} md={3} lg={3} xl={3}>
        <TextField
          variant="standard"
          placeholder="Nombre"
          size="small"
          name="name"
          value={characterState.actions[index].name}
          onChange={(e) => handleAction(e, index)}
          onBlur={(e) => putAction(index, e)}
          fullWidth
        />
      </Grid>
      <Grid item xs={10} sm={2} md={2} lg={2} xl={2}>
        <TextField
          variant="standard"
          placeholder="1dcm"
          size="small"
          name="formula"
          value={characterState.actions[index].formula}
          onChange={(e) => handleAction(e, index)}
          onBlur={(e) => putAction(index, e)}
          fullWidth
        />
      </Grid>
      <Grid item xs={1.8} sm={1} md={1} lg={1} xl={1}>
        <IconButton onClick={throwDiceCM}>
          <img src={Dices} width={"120%"} />
        </IconButton>
      </Grid>
      <Grid item xs={24} sm={3} md={3} lg={3} xl={3}>
        <TextField
          variant="standard"
          placeholder="Tipo de Daño"
          size="small"
          name="damageType"
          value={characterState.actions[index].damageType}
          onChange={(e) => handleAction(e, index)}
          onBlur={(e) => putAction(index, e)}
          fullWidth
        />
      </Grid>
      <Grid item xs={24} sm={3} md={2} lg={2} xl={2}>
        <TextField
          variant="standard"
          placeholder="3 E, 1 P"
          size="small"
          name="energyCost"
          value={characterState.actions[index].energyCost}
          onChange={(e) => handleAction(e, index)}
          onBlur={(e) => putAction(index, e)}
          fullWidth
        />
      </Grid>
      <Grid item xs={1}>
        {index > 0 ? (
          <div>
            <DeleteButton clicHandler={(e) => deleteAction(e, index)} />
          </div>
        ) : null}
      </Grid>
    </Grid>
  );
};
