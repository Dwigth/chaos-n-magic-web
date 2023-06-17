import { Box } from "@mui/material";
import { useState } from "react";

export default function AttributeItem({ label }: {
    label: string;
}) {
    const [level, setLevel] = useState(-3);

    function onLevelChange(changedValue: number) {
        setLevel(changedValue);
    }

    return (
        <>
            <Box sx={{
                border: 'dotted'
            }}>
                <p>{label}</p>
                <input onChange={(input) => onLevelChange(+input.target.value)} type="number" min={-4} max={6} />
                <small>{level}</small>
            </Box>
        </>
    )
}