# 其他

<!-- This page demonstrates some of the built-in markdown extensions provided by VitePress. -->

## WEB UI配置

# Web UI 配置文件说明 (`config.json`)

路径: `workstation\www\config\config.json`

该配置文件用于自定义 Web UI 的系统行为以及外观样式（包括暗黑模式与明亮模式的磨砂效果、壁纸等）。

---

## 1. 系统通用设置 (`system`)

用于控制 Web UI 的全局交互行为和组件加载状态。

| 参数名 | 类型 | 默认值 | 作用描述 |
| :--- | :--- | :--- | :--- |
| `CLICK_OUTSIDE_MENU_CLOSE` | Boolean | `true` | **点击菜单外部自动关闭**：当菜单处于打开状态时，点击菜单以外的区域是否自动收起菜单。 |
| `SHOW_DONUT_CHART_ON_LOAD` | Boolean | `true` | **加载时显示环形图**：页面或组件刚加载时，是否默认展示环形图表（Donut Chart）。 |

---

## 2. 皮肤与主题设置 (`skin`)

支持对暗黑模式 (`dark`) 和明亮模式 (`light`) 进行独立微调。以下参数通过 CSS 变量映射到前端样式中。

### 🎨 样式参数详解

| 参数名 | 示例值 | 作用描述 |
| :--- | :--- | :--- |
| `--load-blur` | `3px` | **加载遮罩模糊度**：页面或组件加载（Loading）时，背景的毛玻璃/磨砂模糊半径。 |
| `--load-alpha` | `0.5` / `0.3` | **加载遮罩不透明度**：加载背景的透明度（0 为完全透明，1 为完全不透明）。 |
| `--card-alpha` | `0.55` | **卡片不透明度**：UI 中各个卡片组件（Card）背景的透明度，用于配合磨砂展现半透明效果。 |
| `--card-blur` | `4px` / `3px` | **卡片磨砂模糊度**：卡片背景的毛玻璃效果（`backdrop-filter: blur(...)`）的模糊半径。 |
| `--wallpaper-blur` | `none` | **壁纸模糊度**：背景大壁纸本身的模糊程度（`none` 表示清晰显示不模糊）。 |
| `--card-bg-rgb` | `30, 41, 59` | **卡片背景基色 (RGB)**：卡片的底色，不包含透明度。例如暗黑模式下为深蓝灰色，明亮模式下为纯白（`255, 255, 255`）。 |
| `--sb-track-bg` | `rgba(...)` | **滚动条轨道背景**：浏览器或容器滚动条（Scrollbar Track）底条的颜色与透明度。 |
| `--sb-thumb-bg` | `#3b82f6` | **滚动条滑块颜色**：滚动条中可以拖动的滑块（Scrollbar Thumb）的颜色。 |
| `--fallback-bg` | `rgba(...)` | **回退背景色**：当壁纸图片加载失败或浏览器不支持某些高级特效时，系统使用的保底纯色背景。 |
| `--logo` | `url(...)` | **Logo 图标路径**：Web UI 左上角或登录页的 Logo 图片相对路径。 |
| `--wallpaper` | `url(...)` | **壁纸图片路径**：Web UI 的大背景壁纸图片相对路径。 |

> 💡 **提示：**
> * 想要磨砂感更强，可以适当调大 `--card-blur` 的像素值（如 `8px` 或 `12px`）。
> * 如果更换了壁纸或 Logo，请确保图片存放在 `workstation\www\webui\` 目录下，或者修改 `url()` 内的相对路径。

### 注：如果想完全使用自己制作的前端，可以启用WEB控制台调试模式：在配置文件中修改 `MONITOR_DEBUG=1` 并把自制的前端放在配置文件中参数 `MONITOR_WEB_PATH` 所指定的路径(默认为./www/)文件夹中。

### 默认配置文件：workstation\www\config\config.json

```json
{
  "system": {
    "CLICK_OUTSIDE_MENU_CLOSE": true,
    "SHOW_DONUT_CHART_ON_LOAD": true
  },
  "skin": {
    "dark": {
      "--load-blur": "3px",
      "--load-alpha": "0.5",
      "--card-alpha": "0.55",
      "--card-blur": "4px",
      "--wallpaper-blur": "none",
      "--card-bg-rgb": "30, 41, 59",
      "--sb-track-bg": "rgba(15, 23, 42, 0.85)",
      "--sb-thumb-bg": "#3b82f6",
      "--fallback-bg": "rgba(30, 41, 59, 1)",
      "--logo": "url('../webui/logo.svg')",
      "--wallpaper": "url('../webui/wallpaper.jpg')"
    },
    "light": {
      "--load-blur": "3px",
      "--load-alpha": "0.3",
      "--card-alpha": "0.55",
      "--card-blur": "3px",
      "--wallpaper-blur": "none",
      "--card-bg-rgb": "255, 255, 255",
      "--sb-track-bg": "rgba(241, 245, 249, 0.7)",
      "--sb-thumb-bg": "#3b82f6",
      "--fallback-bg": "rgba(255, 255, 255, 1)",
      "--logo": "url('../webui/logo.svg')",
      "--wallpaper": "url('../webui/wallpaper.jpg')"
    }
  }
}

```