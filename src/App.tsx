import "./App.css";
// import CreateCharacterStepper from "./components/create-character/CreateCharacterStepper";
// import ProfessionSelector from "./components/create-character/profession/ProfessionSelector";
// import SpecieSelector from "./components/create-character/specie/SpecieSelector";
// import AttributeSelector from "./components/create-character/attributes/AttributeSelector";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ButtonAppBar from "./components/menu/MenuBar";
import CharacterSheet from "./components/character-sheet/character-sheet";
import HomePage from "./components/home-page/home-page";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ButtonAppBar />
      {/* <CharacterSheet /> */}
      <HomePage />
      {/* <CreateCharacterStepper steps={[
        {
          label: 'Select Specie',
          element: <SpecieSelector />,
        },
        {
          label: 'Select profession',
          element: <ProfessionSelector />
        },
        {
          label: 'Select attributes',
          element: <AttributeSelector />
        }
      ]} /> */}
    </ThemeProvider>
  );
}

export default App;
