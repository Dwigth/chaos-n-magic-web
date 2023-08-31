import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ButtonAppBar from "./components/menu/MenuBar";
import { CharacterSheet } from "./components/character-sheet/CharacterSheet.tsx";
import { CharMainMenu } from "./components/CharacterMainMenu";
import { cnmMenu } from "./style/mainTheme.tsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateCharacter from "./components/create-character/CreateCharacter.tsx";
import ErrorHandler from "./components/ErrorPages.tsx";
import { useState } from "react";
// import cors from "cors";

function App() {
  const [data, getData] = useState(JSON);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CharMainMenu Datos={(d) => getData(d)} />,
      errorElement: <ErrorHandler />,
    },
    {
      path: "/createCharacter",
      element: <CreateCharacter />,
      errorElement: <ErrorHandler />,
    },
    {
      path: "/characterSheet",
      element: <CharacterSheet Datos={data} />,
      errorElement: <ErrorHandler />,
    },
  ]);

  return (
    <ThemeProvider theme={cnmMenu}>
      <CssBaseline />
      <ButtonAppBar />
      <BrowserRouter></BrowserRouter>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
