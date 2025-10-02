"use client";

import React, {
  FC,
  createContext,
  PropsWithChildren,
  useState,
  useMemo,
} from "react";

type ProjectContextValue = {
  isSmallMenu: boolean;
  changeIsSmallMenu: (state: boolean) => void;
};

const DEFAULT_VALUE: ProjectContextValue = {
  isSmallMenu: false,
  changeIsSmallMenu: (state: boolean) => {},
};

export const ProjectConsumer = createContext(DEFAULT_VALUE);

const ProjectContext: FC<PropsWithChildren> = ({ children }) => {
  const [isSmallMenu, setIsSmallMenu] = useState<boolean>(false);
  const changeIsSmallMenu = (newState: boolean) => setIsSmallMenu(newState);
  const value = useMemo(
    () => ({ isSmallMenu, changeIsSmallMenu }),
    [isSmallMenu]
  );

  return (
    <ProjectConsumer.Provider value={value}>
      {children}
    </ProjectConsumer.Provider>
  );
};

export default ProjectContext;
