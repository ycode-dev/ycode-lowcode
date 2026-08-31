import type { IPage } from "../types";
import { AgentPanel } from "./AgentPage";
import { MainPanel } from "./MainPage";
import { WorkspacePanel } from "./WorkspacePage";

export const defaultPanels: IPage[] = [
  MainPanel,
  WorkspacePanel,
  AgentPanel
]