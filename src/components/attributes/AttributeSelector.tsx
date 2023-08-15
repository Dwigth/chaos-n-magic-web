import { Grid } from "@mui/material";
import AttributeItem from "./AttributeItem";
import { ATTRIBUTES } from "../../data/attributes";
import { useState } from "react";

export default function AttributeSelector() {
    //
    const [pointsLeft, setPointsLeft] = useState(25);
    return (
        <>
            <p>Points left: {pointsLeft}</p>
            <Grid container spacing={{ xs: 2 }} columns={{ xs: 8, }}>
                {Array.from(ATTRIBUTES.keys()).map((attribute, index) => (
                    <Grid item xs={1} key={index}>
                        <AttributeItem label={attribute} onSetPointsLeft={setPointsLeft} pointsLeft={pointsLeft} key={index} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}