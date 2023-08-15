import { Container, Grid } from "@mui/material";
import SpecieGrid from "./SpecieGrid";
import SpecieDetails from "./SpecieDetails";
import { useState } from "react";
import { SelectedSpecie } from "../../../data/types/specie.type";

export default function SpecieSelector() {
    const [specie, setSpecie] = useState({} as SelectedSpecie);

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <SpecieGrid onSpecie={setSpecie}/>
                </Grid>
                <Grid item xs={6}>
                    <SpecieDetails specie={specie}/>
                </Grid>
            </Grid>
        </Container>
    );
}