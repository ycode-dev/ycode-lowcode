import type { IPage } from "../types";


function MainPanelContent() {

  return (
    <div>
      首页
    </div>
  );
}

export const MainPanel: IPage = {
  icon: <span>🏠</span>,
  title: '首页',
  description: '首页',
  order: 0,
  content: MainPanelContent
}