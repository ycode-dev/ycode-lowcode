import type { IPage } from "../types";
import { AgentPage } from "./AgentPage";
import { InteropPage } from "./InteropPage";
import { MainPage } from "./MainPage";
import { WorkspacePage } from "./WorkspacePage";

export const defaultPanels: IPage[] = [
  MainPage,
  WorkspacePage,
  AgentPage,
  InteropPage
]