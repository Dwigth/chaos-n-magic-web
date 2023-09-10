import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ButtonAppBar from "./components/menu/MenuBar";
import { CharacterSheet } from "./components/character-sheet/CharacterSheet.tsx";
import { CharMainMenu } from "./components/CharacterMainMenu";
import { cnmMenu } from "./style/mainTheme.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateCharacter from "./components/create-character/CreateCharacter.tsx";
import ErrorHandler from "./components/ErrorPages.tsx";
import { Box } from "@mui/material";

import { CharacterContextProvider } from "../src/components/character-sheet/reducer-context/CharacterContextProvider.tsx";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      path: "/",
      element: (
        <>
          <ButtonAppBar />
          <Box sx={{ paddingTop: "10%" }}>
            <CharMainMenu />
          </Box>
        </>
      ),
      errorElement: <ErrorHandler />,
    },
    {
      path: "/createCharacter",
      element: (
        <>
          <ButtonAppBar />
          <CreateCharacter />
        </>
      ),
      errorElement: <ErrorHandler />,
    },
    {
      path: "/character-sheet/:sheetId?",
      loader: async ({ params }) => {
        console.log({ params });
        return null;
      },
      element: (
        <CharacterContextProvider>
          <ButtonAppBar />
          <CharacterSheet />
        </CharacterContextProvider>
      ),
      errorElement: <ErrorHandler />,
    },
  ]);

  return (
    <ThemeProvider theme={cnmMenu}>
      <CssBaseline />

      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
