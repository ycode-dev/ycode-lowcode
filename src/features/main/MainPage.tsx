import type { ReactNode } from "react";
import type { IPage } from "../../types";
import styles from './MainPage.module.css';

interface ContentItem {
  id: string,
  icon: ReactNode,
  type: string,
  title: string,
  description?: string,
  author: string,
  updatedTime: string
}

function MainPageContent() {
  const username = "YCode";

  const recent: ContentItem[] = [
    {
      id: "1",
      icon: <span>📄</span>,
      type: '页面',
      title: '用户注册表单',
      description: '包含用户名、密码、邮箱字段',
      author: 'YCode',
      updatedTime: '2024-01-15 10:30'
    },
    {
      id: "2",
      icon: <span>🎨</span>,
      type: '设计器',
      title: '电商首页',
      description: '商品展示和购物车',
      author: 'YCode',
      updatedTime: '2024-01-14 15:20'
    },
    {
      id: "3",
      icon: <span>🤖</span>,
      type: 'AI 生成',
      title: '数据看板',
      author: 'YCode',
      updatedTime: '2024-01-13 09:00'
    },
    {
      id: "4",
      icon: <span>📊</span>,
      type: '报表',
      title: '销售报表',
      description: '月度销售数据统计',
      author: 'YCode',
      updatedTime: '2024-01-12 11:00'
    },
    {
      id: "5",
      icon: <span>🔧</span>,
      type: '设置',
      title: '系统配置',
      author: 'YCode',
      updatedTime: '2024-01-11 14:30'
    }
  ];

  return (
    <div className={styles.container}>
      {/* 标题区域 */}
      <div className={styles.welcome}>
        <h1>欢迎回来, {username} 👋</h1>
        <p>也许......下一个好点子, 就从这里开始。</p>
      </div>

      {/* 轮播图 */}

      {/* 最近 */}
      <div>
        <h3 className={styles.sectionTitle}>最近</h3>

        <div className={styles.grid}>
          {recent.map(item => (
            <div
              key={item.id}
              className={styles.card}
              title={item.description}
            >
              {/* 左侧图标 */}
              <div className={styles.cardIcon}>
                {item.icon}
              </div>

              {/* 右侧内容 */}
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <span className={styles.cardType}>{item.type}</span>
                </div>

                {item.description && (
                  <p className={styles.cardDescription}>{item.description}</p>
                )}

                <div className={styles.cardMeta}>
                  <span>{item.author}</span>
                  <span>·</span>
                  <span>{item.updatedTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 了解WhyCode */}
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