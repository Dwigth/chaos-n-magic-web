import { Checkbox, Grid, IconButton, TextField, styled } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";
import { useState } from "react";

const ItemField = styled(TextField)({
  "& .MuiInputBase-input": {
    paddingTop: 4,
  },
});

export function CSInventoryItem() {
  const { characterState, characterDispatch } = useCharacter();
  const [disabled, setDisabled] = useState(false);

  let params = useParams();

  async function putInventory(int: number, name: string, val: string) {
    try {
      await fetch("http://localhost:3000/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["inventory", "items", int, name],
          value: val,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleInventory = (event: any, int: number) => {
    const { name } = event.target;
    const value = event.target.value;
    characterDispatch({
      type: "update_inventory",
      payload: {
        name,
        value,
        int,
      },
    });
  };

  const handleChecked = (event: any, int: number) => {
    const { name, checked } = event.target;
    characterDispatch({
      type: "update_equiped",
      payload: {
        name,
        checked,
        int,
      },
    });
    putInventory(int, name, checked);
  };

  const handleShowDesc = (int: number) => {
    const value = characterState.inventory.items[int].showDescription;
    characterDispatch({
      type: "update_show_description",
      payload: {
        value,
        int,
      },
    });
  };

  // const deleteTalent = (int: any) => {
  //   characterDispatch({
  //     type: "delete_talent",
  //     payload: {
  //       int,
  //     },
  //   });
  // };

  const updateStatus = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      {characterState.inventory.items.map(({}, int: any) => {
        return (
          <Grid
            container
            direction={"row"}
            spacing={0.5}
            key={int}
            style={{
              padding: 0.1,
              marginBottom: 15,
              backgroundColor: "rgba(102,85,56, 0.1)",
            }}
            xs={24}
          >
            <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
              <ItemField
                id="inventory-item-quantity"
                name="quantity"
                variant="filled"
                color="secondary"
                placeholder="1"
                size="small"
                inputMode="numeric"
                type="number"
                value={characterState.inventory.items[int].quantity}
                onChange={(e) => handleInventory(e, int)}
                onBlur={() =>
                  putInventory(
                    int,
                    "quantity",
                    characterState.inventory.items[int].quantity
                  )
                }
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              />
            </Grid>
            <Grid item xs={8} sm={8.5} md={8.5} lg={8.5} xl={8.5}>
              <ItemField
                id="inventory-item-name"
                name="name"
                variant={"filled"}
                color="secondary"
                placeholder="Varita Mágica..."
                size="small"
                value={characterState.inventory.items[int].name}
                onChange={(e) => handleInventory(e, int)}
                onBlur={() =>
                  putInventory(
                    int,
                    "name",
                    characterState.inventory.items[int].name
                  )
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={2} sm={1.5} md={1.5} lg={1.5} xl={1.5}>
              <ItemField
                id="inventory-item-weigth"
                name="weight"
                variant="filled"
                color="secondary"
                placeholder="1 p"
                size="small"
                type="number"
                value={characterState.inventory.items[int].weight}
                onChange={(e) => handleInventory(e, int)}
                onBlur={() =>
                  putInventory(
                    int,
                    "weight",
                    characterState.inventory.items[int].weight
                  )
                }
              />
            </Grid>
            <Grid item xs={0} style={{ marginBottom: 1 }}>
              <Checkbox
                color="success"
                name="isEquipped"
                checked={characterState.inventory.items[int].isEquipped}
                onChange={(e) => handleChecked(e, int)}
              />
            </Grid>
            <Grid item>
              <IconButton onClick={() => handleShowDesc(int)}>
                <BusinessCenterIcon />
              </IconButton>
            </Grid>
            {characterState.inventory.items[int].showDescription ? (
              <Grid item xs={11.8} style={{ padding: 10 }}>
                <TextField
                  color="secondary"
                  variant="outlined"
                  label="Descripción"
                  placeholder="Esta bolsa de dormir es muy cómoda..."
                  minRows={2}
                  name="description"
                  value={characterState.inventory.items[int].description}
                  onChange={(e) => handleInventory(e, int)}
                  onBlur={() =>
                    putInventory(
                      int,
                      "description",
                      characterState.inventory.items[int].description
                    )
                  }
                  inputProps={{
                    style: {
                      fontSize: "12px",
                    },
                  }}
                  multiline
                  fullWidth
                />
              </Grid>
            ) : null}
          </Grid>
        );
      })}
    </>
  );
}
