import type { IPage } from "../types";


function InteropPageContent() {

  return (
    <div>
      集成
    </div>
  );
}

export const InteropPage: IPage = {
  icon: <div>#</div>,
  title: '集成',
  description: '集成',
  order: 4,
  content: InteropPageContent
}