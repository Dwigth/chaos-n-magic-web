import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Box, Button, Grid } from "@mui/material";
import { SPECIES } from '../../data/species';
import { SelectedSpecie } from '../../data/types/specie.type';
import { SelectedItems } from '../../data/enum/selected-items.enum';

export default function SpecieGrid({ onSpecie }: {
    onSpecie: Dispatch<SetStateAction<SelectedSpecie>>
}) {

    const [selected, select] = useState<number>();

    function handleSelectSpecie(specie: string, index: number) {
        localStorage.setItem(SelectedItems.SELECTED_SPECIE, specie);
        const specieElem = SPECIES.get(specie);

        if (!specieElem) {
            throw new Error("Specie not found");
        }
        select(index);
        onSpecie({
            specieName: specie,
            specie: specieElem,
        });
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    Array.from(SPECIES.keys()).map((specie, index) => (selected === index) ? (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Button variant="outlined" color="secondary" onClick={_evt => handleSelectSpecie(specie, index)} style={{ textAlign: 'center' }}>{specie}</Button>
                        </Grid>
                    ) : (
                        <>
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Button variant="text" color="primary" onClick={_evt => handleSelectSpecie(specie, index)} style={{ textAlign: 'center' }}>{specie}</Button>
                        </Grid>
                        </>
                    ))
                }
            </Grid>
        </Box>
    );
}