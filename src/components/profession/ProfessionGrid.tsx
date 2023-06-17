import { Dispatch, SetStateAction } from 'react'
import { Box, Button, Grid } from "@mui/material";
import { PROFESSIONS } from '../../data/professions';
import { SelectedProfession } from '../../data/types/profression.type';
import { SelectedItems } from '../../data/enum/selected-items.enum';

export default function ProfessionGrid({ onProfessionSelect }: {
    onProfessionSelect: Dispatch<SetStateAction<SelectedProfession>>
}) {

    function handleSelectProfession(profession: string) {
        localStorage.setItem(SelectedItems.SELECTED_PROFESSION, profession);
        const professionElem = PROFESSIONS.get(profession);

        if (!professionElem) {
            throw new Error("Specie not found");
        }

        onProfessionSelect({
            professionName: profession,
            profession: professionElem,
        });
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(PROFESSIONS.keys()).map((profession, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Button variant="outlined" color="secondary" onClick={_evt => handleSelectProfession(profession)} style={{ textAlign: 'center' }}>{profession}</Button>
                    </Grid>
                ))}

            </Grid>
        </Box>
    );
}