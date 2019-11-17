import VerticalTimeline from './VerticalTimeline.vue'

const VerticalTimelinePlugin = {
  install(Vue, options) {
    Vue.component('vertical-timeline', VerticalTimeline)
  }
}

export default VerticalTimelinePlugin
