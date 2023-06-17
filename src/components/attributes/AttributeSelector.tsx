import { Grid } from "@mui/material";
import AttributeItem from "./AttributeItem";
import { ATTRIBUTES } from "../../data/attributes";

export default function AttributeSelector() {
    //
    return (
        <Grid container spacing={{ xs: 2 }} columns={{ xs: 8, }}>
            {Array.from(ATTRIBUTES.keys()).map((attribute, index) => (
                <Grid item xs={1}  key={index}>
                    <AttributeItem label={attribute} />
                </Grid>
            ))}
        </Grid>

    )
}