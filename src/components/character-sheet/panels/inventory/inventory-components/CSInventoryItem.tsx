import {
  Accordion,
  AccordionDetails,
  Checkbox,
  Grid,
  TextField,
  styled,
} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";

const ItemField = styled(TextField)({
  "& .MuiInputBase-input": {
    paddingTop: 4,
  },
});

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<BusinessCenterIcon sx={{ fontSize: "0.9rem", marginRight: 3 }} />}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-content": {
    padding: 0.1,
    marginBottom: -5,
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    color: '#6bd0c9',
    transform: 'rotate(0deg)',
  }
}));

export function CSInventoryItem() {
  return (
    <Accordion elevation={0}>
      <AccordionSummary sx={{padding:0.1}}>
        <Grid container direction={"row"} spacing={0.1}>
          <Grid item xs={1}>
            <ItemField
              id="inventory-item-quantity"
              name="inventory-item-quantity"
              variant="filled"
              color="secondary"
              placeholder="1"
              size="small"
              inputMode="numeric"
              type="number"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
          </Grid>
          <Grid item xs={8}>
            <ItemField
              id="inventory-item-name"
              name="inventory-item-name"
              variant={"filled"}
              color="secondary"
              placeholder="Varita Mágica..."
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <ItemField
              id="inventory-item-weigth"
              name="inventory-item-weight"
              variant="filled"
              color="secondary"
              placeholder="1 p"
              size="small"
            />
          </Grid>
          <Grid item xs={1}>
            <Checkbox color="success" />
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <TextField
          color="secondary"
          variant="outlined"
          label="Descripción"
          placeholder="Esta bolsa de dormir es muy cómoda..."
          minRows={2}
          inputProps={{
            style: {
              fontSize: "12px",
            },
          }}
          multiline
          fullWidth
        />
      </AccordionDetails>
    </Accordion>
  );
}
