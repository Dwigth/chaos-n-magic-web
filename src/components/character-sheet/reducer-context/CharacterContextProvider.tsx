import { FC, useReducer, createContext, useContext, useState } from "react";
import { characterReducer } from "./characterReducer";
import { defaultData } from "./defaultData";

interface data {
  children: any;
}

interface CurrentUserContextType {
  characterState: any;
  characterDispatch: any;
}

const CharacterContext = createContext<CurrentUserContextType>(
  {} as CurrentUserContextType
);

export const CharacterContextProvider: FC<data> = ({ children }) => {
  const [characterState, characterDispatch] = useReducer(
    characterReducer,
    defaultData
  );

  return (
    <CharacterContext.Provider value={{ characterState, characterDispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => {
  const { characterState, characterDispatch } = useContext(CharacterContext);

  if (!characterState && !characterDispatch) {
    throw new Error("Es necesario tener el <CharacterContext.Provider>");
  }

  return { characterState, characterDispatch };
};
