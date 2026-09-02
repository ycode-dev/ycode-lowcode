import type { IPage } from "../../types";

function AgentPageContent() {

  return (<div> Agent</div>);
}

export const AgentPage: IPage = {
  icon: <span>🤖</span>,
  title: 'Agents',
  description: 'agents',
  order: 2,
  content: AgentPageContent
}