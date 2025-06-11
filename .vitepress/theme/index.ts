// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Confetti from '../components/Confetti.vue'
import "./style/index.css"; //引入自定义的样式
import "./style/pricing.css"; //引入自定义的样式

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Confetti', Confetti)
  }
}