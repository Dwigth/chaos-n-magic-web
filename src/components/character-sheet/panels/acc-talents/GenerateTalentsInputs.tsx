import { AddButton } from "../../../global-components/AddButton";
// import { DeleteButton } from "../../../global-components/DeleteButton";
import { Grid, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";
import { DeleteButton } from "../../../global-components/DeleteButton";

function AddDynamicTalent() {
  const { characterState, characterDispatch } = useCharacter();
  let params = useParams();
  let int = 0;

  async function putTalents(i: number, title?: string, desc?: string) {
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
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
    } catch (err) {
      console.log(err);
    }
  }

  int = characterState.talents.length;

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

  const addTalent = () => {
    characterDispatch({
      type: "add_talent",
    });
    putTalents(int, "", "");
  };

  const deleteTalent = (event: any, int: any) => {
    if (event.details == 2) {
      characterDispatch({
        type: "delete_talent",
        payload: {
          int,
        },
      });
      putTalents(int);
    }
  };

  return (
    <Grid>
      {characterState.talents.map(({}, array: number) => {
        return (
          <span key={array}>
            {characterState.talents[array].name != null ? (
              <>
                <Grid
                  container
                  direction="row"
                  sx={{ paddingRight: 1, paddingTop: 2 }}
                >
                  <Grid item xs={11}>
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
                  <Grid item xs={1}>
                    {array > 0 ? (
                      <DeleteButton
                        clicHandler={(e) => {
                          deleteTalent(e, array);
                        }}
                      />
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
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
              </>
            ) : null}
          </span>
        );
      })}

      <AddButton clicHandler={addTalent} />
    </Grid>
  );
}

export default AddDynamicTalent;
