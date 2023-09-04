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
import { Box } from "@mui/material";

function App() {
  // const [data, getData] = useState(JSON);

  const jsonData = JSON.parse(
    localStorage.getItem("CharacterSheetInfo") || "{}"
  );

  const dataStorage = localStorage.getItem("CharacterSheetInfo");

  console.log("datos: " + dataStorage);

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
      path: "/characterSheet",
      element: (
        <>
          {jsonData ? (
            <>
              <ButtonAppBar />
              <CharacterSheet Datos={jsonData} />{" "}
            </>
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
