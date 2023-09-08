import { Grid, TextField, styled } from "@mui/material";
// import { DeleteButton } from "../../../../global-components/DeleteButton";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";
import { FC } from "react";
import { DeleteButton } from "../../../../global-components/DeleteButton";

const SpellTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    fontSize: "10px",
    lineHeight: "1.5",
  },
  "& .MuiInputLabel-root": {
    marginTop: 0,
    fontSize: "10px",
  },
});

interface SpellbookDesc {
  type: string;
  index: number;
}

export const MagicSpellDescription: FC<SpellbookDesc> = ({ type, index }) => {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function putSpellbook(int: number, name: string, val: any) {
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["spellbook", type, int, name],
          value: val,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleSpellbook = (event: any, int: number, type: any) => {
    const { name } = event.target;
    const value = event.target.value;
    characterDispatch({
      type: "update_spellbook_info",
      payload: {
        type,
        name,
        value,
        int,
      },
    });
  };

  async function EliminateMagic(int: number) {
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["spellbook", type, int],
          value: {},
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const deleteMagic = (int: any) => {
    characterDispatch({
      type: "delete_magic",
      payload: {
        type,
        int,
      },
    });
    EliminateMagic(int);
  };

  return (
    <Grid container spacing={0.5}>
      <Grid item xs={6}>
        <SpellTextField
          variant="standard"
          label="Tiempo"
          placeholder="3 Energía"
          size="small"
          name="time"
          value={characterState.spellbook[type][index].time}
          onChange={(e) => handleSpellbook(e, index, type)}
          onBlur={() =>
            putSpellbook(
              index,
              "time",
              characterState.spellbook[type][index].time
            )
          }
        />
      </Grid>
      <Grid item xs={6}>
        <SpellTextField
          variant="standard"
          label="Coste"
          placeholder="1 Poder"
          size="small"
          name="cost"
          value={characterState.spellbook[type][index].cost}
          onChange={(e) => handleSpellbook(e, index, type)}
          onBlur={() =>
            putSpellbook(
              index,
              "cost",
              characterState.spellbook[type][index].cost
            )
          }
        />
      </Grid>
      <Grid item xs={6}>
        <SpellTextField
          variant="standard"
          label="Rango"
          placeholder="10u"
          size="small"
          name="range"
          value={characterState.spellbook[type][index].range}
          onChange={(e) => handleSpellbook(e, index, type)}
          onBlur={() =>
            putSpellbook(
              index,
              "range",
              characterState.spellbook[type][index].range
            )
          }
        />
      </Grid>
      <Grid item xs={6}>
        <SpellTextField
          variant="standard"
          label="Duración"
          placeholder="Instantáneo"
          size="small"
          name="duration"
          value={characterState.spellbook[type][index].duration}
          onChange={(e) => handleSpellbook(e, index, type)}
          onBlur={() =>
            putSpellbook(
              index,
              "duration",
              characterState.spellbook[type][index].duration
            )
          }
        />
      </Grid>
      <Grid item xs={6}>
        <SpellTextField
          variant="standard"
          label="AD"
          placeholder="2dcm"
          size="small"
          name="ad"
          value={characterState.spellbook[type][index].ad}
          onChange={(e) => handleSpellbook(e, index, type)}
          onBlur={() =>
            putSpellbook(index, "ad", characterState.spellbook[type][index].ad)
          }
        />
      </Grid>
      <Grid item xs={6}>
        <SpellTextField
          variant="standard"
          label="Daño"
          placeholder="Fuego"
          size="small"
          name="damage"
          value={characterState.spellbook[type][index].damage}
          onChange={(e) => handleSpellbook(e, index, type)}
          onBlur={() =>
            putSpellbook(
              index,
              "damage",
              characterState.spellbook[type][index].damage
            )
          }
        />
      </Grid>
      <Grid item xs={12}>
        <SpellTextField
          variant="standard"
          placeholder="Este hechizo es muy poderoso..."
          size="small"
          minRows={3}
          multiline
          maxRows={6}
          fullWidth
          name="description"
          value={characterState.spellbook[type][index].description}
          onChange={(e) => handleSpellbook(e, index, type)}
          onBlur={() =>
            putSpellbook(
              index,
              "description",
              characterState.spellbook[type][index].description
            )
          }
        />
      </Grid>
      <Grid item xs={12}>
        {index > 0 ? (
          <DeleteButton clicHandler={() => deleteMagic(index)} />
        ) : null}
      </Grid>
    </Grid>
  );
};
