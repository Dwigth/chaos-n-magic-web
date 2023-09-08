import { Accordion, AccordionDetails, TextField, styled } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { MagicSpellDescription } from "./MagicSpellDescription";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";
import { FC } from "react";

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<MenuBookIcon sx={{ fontSize: "0.9rem", marginRight: 3 }} />}
    {...props}
  />
))(() => ({
  "& .MuiAccordionSummary-content": {
    paddingBottom: 0,
    marginBottom: 0,
    marginTop: -5,
    padding: 1,
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    color: "#6bd0c9",
    transform: "rotate(0deg)",
  },
}));

interface SpellbookDesc {
  type: string;
}

export const MagicSpellComponent: FC<SpellbookDesc> = ({ type }) => {
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

  return (
    <>
      {characterState.spellbook[type].map(({}, index: any) => {
        return (
          <span key={index}>
            {characterState.spellbook[type][index].name != null ? (
              <>
                <Accordion
                  elevation={3}
                  sx={{
                    width: "100%",
                    height: "100%",
                    paddingBottom: 2,
                    paddingTop: 2,
                  }}
                >
                  <AccordionSummary expandIcon={<MenuBookIcon />}>
                    <TextField
                      color="secondary"
                      variant="standard"
                      label="Nombre"
                      name="name"
                      value={characterState.spellbook[type][index].name}
                      onChange={(e) => handleSpellbook(e, index, type)}
                      onBlur={() =>
                        putSpellbook(
                          index,
                          "name",
                          characterState.spellbook[type][index].name
                        )
                      }
                    />
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: "#0a1006" }}>
                    <MagicSpellDescription type={type} index={index} />
                  </AccordionDetails>
                </Accordion>
              </>
            ) : null}
          </span>
        );
      })}
    </>
  );
};
