import type { ComponentType, ReactNode } from "react";

export interface IPage {
  icon: ReactNode
  title: string,
  description: string,
  order: number,
  content: ComponentType
}