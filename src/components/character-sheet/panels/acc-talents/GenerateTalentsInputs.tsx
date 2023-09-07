import { AddButton } from "../../../global-components/AddButton";
// import { DeleteButton } from "../../../global-components/DeleteButton";
import { Grid, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";

function AddDynamicTalent() {
  const { characterState, characterDispatch } = useCharacter();
  let params = useParams();
  let int = 0;

  async function putTalents(i: number, title: string, desc: string) {
    try {
      await fetch("http://localhost:3000/hero-sheet", {
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

  // const deleteTalent = (int: any) => {
  //   characterDispatch({
  //     type: "delete_talent",
  //     payload: {
  //       int,
  //     },
  //   });
  // };

  return (
    <>
      {characterState.talents.map(({}, array: number) => {
        return (
          <Grid key={array}>
            <Grid sx={{ paddingRight: 1, paddingTop: 2 }}>
              <Grid item xs={12}>
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

            {/* {array > 0 ? (
              <DeleteButton
                clicHandler={() => {
                  deleteTalent(array);
                }}
              />
            ) : null} */}
          </Grid>
        );
      })}
      <AddButton clicHandler={addTalent} />
    </>
  );
}

export default AddDynamicTalent;
