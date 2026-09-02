import type { IPage } from "../types";
import { AgentPage } from "./agents/AgentPage";
import { InteropPage } from "./interop/InteropPage";
import { MainPage } from "./main/MainPage";
import { WorkspacePage } from "./workspace/WorkspacePage";

export const defaultPanels: IPage[] = [
  MainPage,
  WorkspacePage,
  AgentPage,
  InteropPage
]