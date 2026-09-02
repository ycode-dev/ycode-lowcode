// src/vite-env.d.ts
/// <reference types="vite/client" />

// 添加 CSS 模块声明
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

// 如果需要其他资源类型
declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}