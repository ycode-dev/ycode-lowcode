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

function formatDate(dateString: string): string {
  const now = new Date();

  const past = new Date(dateString);

  const diffMs = now.getTime() - past.getTime();

  const diffSeconds = Math.floor(diffMs / 1000);

  if (diffSeconds < 60) {
    return `刚刚`;
  }

  const diffMinutes = Math.floor(diffSeconds / 60);

  if (diffMinutes < 60) {
    return `${diffMinutes} 分钟前`;
  }

  const diffHours = Math.floor(diffMinutes / 60);

  if (diffHours < 24) {
    return `${diffHours} 小时前`;
  }

  const diffDays = Math.floor(diffHours / 24);

  if (diffDays < 7) {
    return `${diffDays} 天前`;
  }

  const diffWeeks = Math.floor(diffDays / 7);

  if (diffWeeks < 4) {
    return `${diffWeeks} 周前`;
  }

  const diffMonths = Math.floor(diffDays / 30);

  if (diffMonths < 12) {
    return `${diffMonths} 个月前`;
  }

  return `${Math.floor(diffDays / 365)} 年前`;
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


  const whyCodeFeatures: ContentItem[] = [
    {
      id: "1",
      icon: <span>📄</span>,
      type: '快速开发',
      title: '工作流: 文本摘要器',
      description: '通过基础工作流，了解 AI 如何把长文本转成简短清晰的摘要。',
      author: 'YCode',
      updatedTime: '2024-01-10 09:00'
    },
    {
      id: "2",
      icon: <span>⚡</span>,
      type: '快速开发',
      title: 'Chatflow: AI 聊天机器人',
      description: '支持多轮对话的聊天机器人, 了解它在Dify中是如何搭建的。',
      author: 'YCode',
      updatedTime: '2024-01-10 09:00'
    }
  ];

  return (
    <div className={styles.container}>
      {/* 标题区域 */}
      <div className={styles.welcome}>
        <h3>欢迎回来, {username} 👋</h3>
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
              className={`${styles.card} ${styles.cardHorizontal}`}
              title={item.description}
            >
              {/* 左侧图标 */}
              <div className={styles.cardIcon}>
                {item.icon}
              </div>

              {/* 右侧内容 */}
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h6 className={styles.cardTitle}>{item.title}</h6>
                </div>

                <div className={styles.cardMeta}>
                  <span>{item.author}</span>
                  <span>·</span>

                  <span>{formatDate(item.updatedTime)}编辑</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 了解WhyCode */}
      <div className={styles.whyCode}>
        <h3 className={styles.sectionTitle}>了解 WhyCode</h3>
        <p className={styles.cardDescription}>按顺序学, 或直接跳到你想开始的那一步。</p>

        <div className={styles.grid}>
          {
            whyCodeFeatures.map((item) => (
              <div className={`${styles.card} ${styles.cardVertical}`}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <div>
                  <h6 className={styles.cardTitle}>{item.title}</h6>
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>


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