import type { IPage } from "../types";

function WorkspacePanelContent() {

  return (<div>工作空间</div>);
}

export const WorkspacePanel: IPage = {
  icon: <span>🎨</span>,
  title: '工作空间',
  description: '工作空间',
  order: 1,
  content: WorkspacePanelContent
}