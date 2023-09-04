import { useEffect, useState } from "react";
// import TalentTextField from "./TalentTextField";
import { AddButton } from "../../../global-components/AddButton";
import { DeleteButton } from "../../../global-components/DeleteButton";
import { Grid, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";

function AddDynamicInput() {
  const { characterState, characterDispatch } = useCharacter();
  let params = useParams();
  let int = 0;

  async function putTalents(i: number, title: string, desc: string) {
    try {
      const response = await fetch("http://localhost:3000/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["talents", i],
          value: {
            name: title,
            effect: desc,
          },
        }),
      });

      if (response.ok) {
        console.log("Se actualizo " + title);
      } else {
        console.log("Error al actualizar");
      }
    } catch (err) {
      console.log(err);
    }
  }

  int = characterState.talents.length;

  console.log(int);

  const handleTalents = (event: any, array: number) => {
    const { name } = event.target;
    let value = event.target.value as string;
    characterDispatch({
      type: "update_talents",
      payload: {
        array,
        name,
        value,
      },
    });
  };

  const addTalent = (int: any) => {
    characterDispatch({
      type: "add_talent",
      payload: {
        int,
      },
    });
    putTalents(int, "", "");
  };

  const deleteTalent = (int: any) => {
    characterDispatch({
      type: "delete_talent",
      payload: {
        int,
      },
    });
  };

  return (
    <Grid>
      {characterState.talents.map(({}, array: number) => {
        return (
          <span key={array}>
            <Grid
              container
              direction={"row"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              sx={{ paddingRight: 1, paddingTop: 2 }}
            >
              <Grid item xs={8}>
                <TextField
                  variant="outlined"
                  color="secondary"
                  placeholder="Nombre del Talento"
                  size="small"
                  name="name"
                  value={characterState.talents[array].name}
                  onChange={(e) => handleTalents(e, array)}
                  onBlur={() =>
                    putTalents(
                      array,
                      characterState.talents[array].name,
                      characterState.talents[array].effect
                    )
                  }
                />
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs>
                <TextField
                  variant="outlined"
                  color="secondary"
                  placeholder="Descripción"
                  name="effect"
                  minRows={2}
                  value={characterState.talents[array].effect}
                  onChange={(e) => handleTalents(e, array)}
                  onBlur={() =>
                    putTalents(
                      array,
                      characterState.talents[array].name,
                      characterState.talents[array].effect
                    )
                  }
                  multiline
                  fullWidth
                  inputProps={{ style: { fontSize: "0.8rem" } }}
                />
              </Grid>
            </Grid>

            {array > 0 ? (
              <DeleteButton
                clicHandler={() => {
                  deleteTalent(array);
                }}
              />
            ) : null}
          </span>
        );
      })}
      <AddButton clicHandler={() => addTalent(int)} />
    </Grid>
  );
}

export default AddDynamicInput;
