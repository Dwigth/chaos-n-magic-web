import { Accordion, AccordionDetails, TextField, styled } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MuiAccordionSummary, {
    AccordionSummaryProps,
  } from "@mui/material/AccordionSummary";
import { MagicSpellDescription } from "./MagicSpellDescription";

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={<MenuBookIcon sx={{ fontSize: "0.9rem", marginRight: 3 }} />}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiAccordionSummary-content": {
      paddingBottom: 0,
      marginBottom: 0,
      marginTop: -5,
      padding: 1,
    },
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      color: '#6bd0c9',
      transform: 'rotate(0deg)',
    }
  }));

export function MagicSpellComponent(){
    return(
        <Accordion elevation={3} sx={{width: '100%', height: '100%', paddingBottom: 1}}>
            <AccordionSummary expandIcon={<MenuBookIcon />}>
            <TextField color="secondary" variant="standard" label="Nombre" />
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: "#0a1006"}}>
                <MagicSpellDescription />
            </AccordionDetails>
        </Accordion>
    )
}