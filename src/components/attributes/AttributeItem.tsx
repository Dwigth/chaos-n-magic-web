import { Box, Button, ButtonGroup } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

export default function AttributeItem({ label, onSetPointsLeft, pointsLeft }: {
    label: string;
    onSetPointsLeft: Dispatch<SetStateAction<number>>;
    pointsLeft: number;
}) {
    const defaultValue = -3;
    const minValue = -4;
    const maxValue = 6;
    const [level, setLevel] = useState(defaultValue);

    function onIncreasePoints() {
        if (level < maxValue && pointsLeft > 0) {

            setLevel(value => value + 1);
            onSetPointsLeft(value => value - 1);
        }
    }
    function onDecreasePoints() {
        if (level > defaultValue) {
            setLevel(value => value - 1);
            onSetPointsLeft(value => value + 1);
        }
    }

    return (

        <Box sx={{
        }}>
            <p>{label}</p>
            <h1>{level}</h1>
            <Box>
                <ButtonGroup orientation="vertical" variant="contained" aria-label="text button group">
                    <Button onClick={onIncreasePoints}>+</Button>
                    <Button onClick={onDecreasePoints}>-</Button>
                </ButtonGroup>
            </Box>
        </Box>

    )
}