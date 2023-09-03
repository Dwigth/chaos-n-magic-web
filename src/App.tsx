import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ButtonAppBar from "./components/menu/MenuBar";
import { CharacterSheet } from "./components/character-sheet/CharacterSheet.tsx";
import { CharMainMenu } from "./components/CharacterMainMenu";
import { cnmMenu } from "./style/mainTheme.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import CreateCharacter from "./components/create-character/CreateCharacter.tsx";
import ErrorHandler from "./components/ErrorPages.tsx";

import { CharacterContextProvider } from "../src/components/character-sheet/reducer-context/CharacterContextProvider.tsx";

function App() {
  // const [data, getData] = useState(JSON);

  const jsonData = JSON.parse(
    localStorage.getItem("CharacterSheetInfo") || "{}"
  );

  // const dataStorage = localStorage.getItem("CharacterSheetInfo");

  const router = createBrowserRouter([
    {
      index: true,
      path: "/",
      element: (
        <>
          <ButtonAppBar />
          <CharMainMenu />
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
      path: "/characterSheet/:sheetId?",
      loader: async ({ params }) => {
        console.log({ params });
        return null;
      },
      element: (
        <>
          {jsonData ? (
            <CharacterContextProvider>
              <ButtonAppBar />
              <CharacterSheet />
            </CharacterContextProvider>
          ) : (
            <>
              <Navigate to={"/"} />
            </>
          )}
        </>
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
