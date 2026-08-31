
import { useState } from "react";
import { usePanelRegistry } from "../hooks/usePanelRegistry";
import { defaultPanels } from "../features";
import '../index.css';

function StartupPage() {

  let title = "WhyCode";

  const { panels, activePanel, activatePanel } = usePanelRegistry(defaultPanels)

  const ActiveContent = activePanel?.content;

  return (
    <div className="flex h-screen">

      <aside className="w-1/5 min-w-[200px] bg-gray-50 border-r flex flex-col">
        <div className="p-4 border-b bg-white">
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        </div>

        {/* Functions */}

        <nav className="flex-1 p-3 space-y-1">

          {panels.map(panel => (
            <div key={panel.title} onClick={() => activatePanel(panel.title)} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors 
            
          ${activePanel?.title === panel.title
                ? 'bg-blue-50 text-blue-600'
                : 'hover:bg-gray-100 text-gray-700'}`}>
              <span className="text-lg">{panel.icon}</span>

              <div className="flex-1">
                <div className="text-sm font-medium">{panel.title}</div>
              </div>

              {activePanel?.title === panel.title && (
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              )}

            </div>

          ))}
        </nav>

        {/* Projects */}

        {/* Personal */}
      </aside>

      <main className="flex-1 bg-white overflow-auto">
        {ActiveContent
          ? (<ActiveContent />)
          : (
            <div className="flex items-center justify-center h-full text-gray-400">
              选择一个功能开始
            </div>
          )}
      </main>
    </div>
  );
}


export default StartupPage;
