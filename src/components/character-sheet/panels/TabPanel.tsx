import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Magic from "./magic/magic";
import { CSBackgroundPersonalityControl } from "./pers-transf/CSBackgroundPersonalityControl";
import { TalentAndAttacksControl } from "./acc-talents/TalentAndAttacksControl";
import { CSInventoryControl } from "./inventory/CSInventoryControl";
import { MagicTablesControl } from "./magic/MagicTablesControl";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"} >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Panels() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
        padding: 1,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider",}}
        indicatorColor="primary"
        textColor="secondary"
      >
        <Tab
          label="Acciones y Talentos"
          {...a11yProps(0)}
        
        />
        <Tab label="Inventario" {...a11yProps(1)} />
        <Tab label="Magia" {...a11yProps(2)} />
        <Tab label="Personalidad y transfondo" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TalentAndAttacksControl />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CSInventoryControl />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MagicTablesControl />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CSBackgroundPersonalityControl />
      </TabPanel>
    </Box>
  );
}
