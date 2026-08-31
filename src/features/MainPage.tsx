import type { IPage } from "../types";


function MainPageContent() {

  return (
    <div>
      首页
    </div>
  );
}

export const MainPage: IPage = {
  icon: <span>🏠</span>,
  title: '首页',
  description: '首页',
  order: 0,
  content: MainPageContent
}