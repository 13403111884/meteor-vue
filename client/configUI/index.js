import {
  QLayout,
  QHeader,
  QFooter,
  QDrawer,
  QToolbar,
  QToolbarTitle,
  QTabs,
  QRadio,
  QRouteTab,
  QBtn,
  QIcon,
  QItem,
  QItemLabel,
  QItemSection,
  QList,
  QPageContainer,
  QSeparator
} from 'quasar'

export default {
  install (Vue, options) {
    Vue.component('QLayout', QLayout)
    Vue.component('QHeader', QHeader)
    Vue.component('QFooter', QFooter)
    Vue.component('QDrawer', QDrawer)
    Vue.component('QToolbar', QToolbar)
    Vue.component('QToolbar', QToolbar)
    Vue.component('QToolbarTitle', QToolbarTitle)
    Vue.component('QTabs', QTabs)
    Vue.component('QRadio', QRadio)
    Vue.component('QRouteTab', QRouteTab)
    Vue.component('QBtn', QBtn)
    Vue.component('QIcon', QIcon)
    Vue.component('QItem', QItem)
    Vue.component('QItemLabel', QItemLabel)
    Vue.component('QItemSection', QItemSection)
    Vue.component('QList', QList)
    Vue.component('QPageContainer', QPageContainer)
    Vue.component('QSeparator', QSeparator)
  }
}
