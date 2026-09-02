import { useCallback, useMemo, useState } from "react";
import type { IPage } from "../types";

export function usePanelRegistry(inits: IPage[] = []) {

  const [panels, setPanels] = useState<IPage[]>(inits)

  const [activePanel, setActivePanel] = useState<IPage | null>(inits[0] || null)

  const registerPanel = useCallback((panel: IPage) => {

    setPanels(prev => {

      const exists = prev.some(p => p.title === panel.title);

      if (exists) {

        console.warn(`Panel "${panel.title} already registered"`);

        return prev;
      }

      return [...prev, panel];
    })

  }, []);

  const registerPanels = useCallback((newPanels: IPage[]) => {

    setPanels(prev => {
      const merged = [...prev];

      newPanels.forEach(panel => {
        if (!merged.some(p => p.title === panel.title)) {
          merged.push(panel)
        }
      });

      return merged;
    });
  }, []);

  const unregisterPanel = useCallback((title: string) => {

    setPanels(prev => prev.filter(p => p.title !== title));

    setActivePanel(prev => {
      if (prev?.title === title) {
        return panels[0] || null;
      }

      return prev;
    })

  }, []);

  const activatePanel = useCallback((title: string) => {
    setActivePanel(prev => {
      const panel = panels.find(p => p.title === title);

      return panel || prev
    })
  }, [panels]);

  const sortedPanels = useMemo(() => {
    return [...panels.sort((a, b) => a.order - b.order)]
  }, [panels]);


  return {
    panels: sortedPanels,
    activePanel,
    registerPanel,
    registerPanels,
    unregisterPanel,
    activatePanel
  }
}