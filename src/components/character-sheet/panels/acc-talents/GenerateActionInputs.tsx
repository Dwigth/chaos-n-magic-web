import { useParams } from "react-router-dom";
import { AddButton } from "../../../global-components/AddButton";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";
import { ActionTextField } from "./ActionTextField";
import { Grid } from "@mui/material";

function AddDynamicAction() {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  let int = 0;

  async function putAction(int: number) {
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["actions", int],
          value: {
            name: "",
            formula: "",
            damageType: "",
            energyCost: "",
          },
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  int = characterState.actions.length;

  const addAction = () => {
    characterDispatch({
      type: "add_action",
    });
    putAction(int);
  };

  // const handleDelete = (i: any) => {
  //   const deletVal = [...val];
  //   deletVal.splice(i, 1);
  //   setVal(deletVal);
  // };

  return (
    <Grid>
      {characterState.actions.map(({}, int: number) => {
        return (
          <span key={int}>
            <ActionTextField index={int} />

            {/* {int > 0 ? (
              <DeleteButton clicHandler={() => handleDelete(int)} />
            ) : null} */}
          </span>
        );
      })}
      <AddButton clicHandler={() => addAction()} />
    </Grid>
  );
}
export default AddDynamicAction;
