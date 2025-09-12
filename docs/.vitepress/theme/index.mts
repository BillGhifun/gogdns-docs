// import Theme from 'vitepress/theme'
// import './style/var.css'

// export default {
//   ...Theme
// }

import DefaultTheme from "vitepress/theme";
import "./style/index.css"; //引入自定义的样式

export default {
  extends: DefaultTheme,
  // ...DefaultTheme, //或者这样写也可
};
