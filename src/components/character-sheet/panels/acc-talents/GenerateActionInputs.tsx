import { useParams } from "react-router-dom";
import { AddButton } from "../../../global-components/AddButton";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";
import { ActionTextField } from "./ActionTextField";
import { Grid } from "@mui/material";
import { DeleteButton } from "../../../global-components/DeleteButton";

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

  int = characterState.actions.length;

  const addAction = () => {
    characterDispatch({
      type: "add_action",
    });
    putAction(int);
  };

  const deleteAction = (int: any) => {
    characterDispatch({
      type: "delete_action",
      payload: {
        int,
      },
    });
    EliminateAction(int);
  };

  return (
    <Grid>
      {characterState.actions.map(({}, index: number) => {
        return (
          <span key={index}>
            {characterState.actions[index].name != null ? (
              <>
                <ActionTextField index={index} />

                {index > 0 ? (
                  <DeleteButton clicHandler={() => deleteAction(index)} />
                ) : null}
              </>
            ) : null}
          </span>
        );
      })}
      <AddButton clicHandler={() => addAction()} />
    </Grid>
  );
}
export default AddDynamicAction;
