import type { IPage } from "../types";

function AgentPanelContent() {

  return (<div> Agent</div>);
}

export const AgentPanel: IPage = {
  icon: <span>🤖</span>,
  title: 'Agents',
  description: 'agents',
  order: 2,
  content: AgentPanelContent
}