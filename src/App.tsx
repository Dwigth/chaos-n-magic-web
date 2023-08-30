import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ButtonAppBar from "./components/menu/MenuBar";
import CharacterSheet from "./components/character-sheet/CharacterSheet.tsx";
import CharMainMenu from "./components/CharacterMainMenu";
import { cnmMenu } from "./style/mainTheme.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateCharacter from "./components/create-character/CreateCharacter.tsx";
import ErrorHandler from "./components/ErrorPages.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CharMainMenu />,
    errorElement: <ErrorHandler />,
  },
  {
    path: "/createCharacter",
    element: <CreateCharacter />,
    errorElement: <ErrorHandler />,
  },
  {
    path: "/characterSheet",
    element: <CharacterSheet />,
    errorElement: <ErrorHandler />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={cnmMenu}>
      <CssBaseline />
      <ButtonAppBar />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
