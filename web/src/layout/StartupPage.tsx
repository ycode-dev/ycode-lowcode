import { useState } from "react";
import { usePanelRegistry } from "../hooks/usePanelRegistry";
import { defaultPanels } from "../features";
import styles from './StartupPage.module.css';

function StartupPage() {
  const title = "WhyCode";
  const { panels, activePanel, activatePanel } = usePanelRegistry(defaultPanels);
  const ActiveContent = activePanel?.content;

  return (
    <div className={styles.container}>
      {/* 左侧边栏 */}
      <aside className={styles.sidebar}>
        {/* 头部 */}
        <div className={styles.sidebarHeader}>
          <h1 className={styles.title}>{title}</h1>
        </div>

        {/* 功能导航 */}
        <nav className={styles.nav}>
          {panels.map(panel => (
            <div
              key={panel.title}
              onClick={() => activatePanel(panel.title)}
              className={`${styles.navItem} ${activePanel?.title === panel.title ? styles.navItemActive : ''}`}
            >
              <span className={styles.icon}>{panel.icon}</span>

              <div className={styles.navContent}>
                <div className={styles.navTitle}>{panel.title}</div>
              </div>

              {activePanel?.title === panel.title && (
                <span className={styles.activeIndicator} />
              )}
            </div>
          ))}
        </nav>

        {/* Projects - 可以在这里添加 */}

        {/* Personal - 可以在这里添加 */}
      </aside>

      {/* 右侧主内容区 */}
      <main className={styles.main}>
        {ActiveContent ? (
          <ActiveContent />
        ) : (
          <div className={styles.emptyState}>
            选择一个功能开始
          </div>
        )}
      </main>
    </div>
  );
}

export default StartupPage;