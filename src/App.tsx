import './App.css';
import CreateCharacterStepper from './components/CreateCharacterStepper';
import ProfessionSelector from './components/profession/ProfessionSelector';
import SpecieSelector from './components/specie/SpecieSelector';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ButtonAppBar from './components/menu/MenuBar';
import AttributeSelector from './components/attributes/AttributeSelector';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ButtonAppBar />
      <CreateCharacterStepper steps={[
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
      ]} />
    </ ThemeProvider>
  )
}

export default App
