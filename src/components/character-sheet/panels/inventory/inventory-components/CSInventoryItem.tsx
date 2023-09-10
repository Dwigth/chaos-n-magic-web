import { Checkbox, Grid, IconButton, TextField, styled } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";
import { DeleteButton } from "../../../../global-components/DeleteButton";
import { AddButton } from "../../../../global-components/AddButton";

const ItemField = styled(TextField)({
  "& .MuiInputBase-input": {
    paddingTop: 4,
  },
});

export function CSInventoryItem() {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  let int = 0;

  async function putInventory(int: number, name: string, val: string) {
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
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

  async function EliminateInventoryItem(int: number) {
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["inventory", "items", int],
          value: {},
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

  const deleteInventoryItem = (int: any) => {
    characterDispatch({
      type: "delete_inventory_item",
      payload: {
        int,
      },
    });
    EliminateInventoryItem(int);
  };

  async function newInventory(int: number) {
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["inventory", "items", int],
          value: {
            name: "",
            weight: 0,
            quantity: 0,
            isEquipped: false,
          },
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  int = characterState.inventory.items.length;

  const addTalent = (int: any) => {
    characterDispatch({
      type: "add_inventory_item",
      payload: {
        int,
      },
    });
    newInventory(int);
  };

  return (
    <>
      {characterState.inventory.items.map(({}, index: any) => {
        return (
          <span key={index}>
            {characterState.inventory.items[index].quantity != null ? (
              <>
                <Grid
                  container
                  item
                  direction={"row"}
                  spacing={0.5}
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
                      value={characterState.inventory.items[index].quantity}
                      onChange={(e) => handleInventory(e, index)}
                      onBlur={() =>
                        putInventory(
                          index,
                          "quantity",
                          characterState.inventory.items[index].quantity
                        )
                      }
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    />
                  </Grid>
                  <Grid item xs={8} sm={7.2} md={7.4} lg={8.1} xl={8.2}>
                    <ItemField
                      id="inventory-item-name"
                      name="name"
                      variant={"filled"}
                      color="secondary"
                      placeholder="Varita Mágica..."
                      size="small"
                      value={characterState.inventory.items[index].name}
                      onChange={(e) => handleInventory(e, index)}
                      onBlur={() =>
                        putInventory(
                          index,
                          "name",
                          characterState.inventory.items[index].name
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
                      value={characterState.inventory.items[index].weight}
                      onChange={(e) => handleInventory(e, index)}
                      onBlur={() =>
                        putInventory(
                          index,
                          "weight",
                          characterState.inventory.items[index].weight
                        )
                      }
                    />
                  </Grid>
                  <Grid item xs={0} style={{ marginBottom: 1 }}>
                    <Checkbox
                      color="success"
                      name="isEquipped"
                      checked={characterState.inventory.items[index].isEquipped}
                      onChange={(e) => handleChecked(e, index)}
                    />
                  </Grid>
                  <Grid item>
                    <IconButton onClick={() => handleShowDesc(index)}>
                      <BusinessCenterIcon />
                    </IconButton>
                  </Grid>
                  {characterState.inventory.items[index].showDescription ? (
                    <>
                      <Grid item xs={11} style={{ padding: 10 }}>
                        <TextField
                          color="secondary"
                          variant="outlined"
                          label="Descripción"
                          placeholder="Esta bolsa de dormir es muy cómoda..."
                          minRows={2}
                          name="description"
                          value={
                            characterState.inventory.items[index].description
                          }
                          onChange={(e) => handleInventory(e, index)}
                          onBlur={() =>
                            putInventory(
                              index,
                              "description",
                              characterState.inventory.items[index].description
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
                      <Grid item xs={1} marginTop={7}>
                        {index > 0 ? (
                          <DeleteButton
                            clicHandler={() => {
                              deleteInventoryItem(index);
                            }}
                          />
                        ) : null}
                      </Grid>
                    </>
                  ) : null}
                </Grid>
              </>
            ) : null}
          </span>
        );
      })}
      <AddButton clicHandler={() => addTalent(int)} />
    </>
  );
}
