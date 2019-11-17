# vue-vertical-timeline plugin 0.1.0

## Project setup
```
npm install
```

### Usage
1. Install plugin via npm
```npm install vue-vertical-timeline --save```
2. Register Vue plugin
```import VerticalTimeline from 'vue-vertical-timeline';```
```Vue.use(VerticalTimeline);```
3. Place plugin into your component
```<vertical-timeline :inputData="your-data-json" :reversed="false" />```

### Available props
* ```:inputData```
Prop type: Array
This is place, where you can pass your data in JSON format, recommended format is below README
* ```:reversed```
Prop type: Boolean
You can reverse timeline with this prop

## TODO:
* Make component for non global usage
* User defined color of timeline
* Add lint
* Make plugin testable

## Development notes

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Recommended json payload
It's better to use mock file from project in the mock directory

```
[
  {
    "_id": "5d820c33647310e4a4f9845c",
    "title": "Chang Miranda",
    "text": "Amet mollit ea ullamco magna nisi sint in nulla fugiat ullamco. Commodo et ex excepteur magna et officia sunt. Voluptate officia non anim nostrud in esse minim ex sint. Officia excepteur excepteur sint voluptate ea ea laborum eu reprehenderit. Nulla nisi aliquip sunt aliquip incididunt ea elit laborum ad id sunt ipsum consequat. Ex voluptate ex laboris aliquip.",
    "date": "Thursday, June 20, 2019 4:17 AM",
    "tags": [
      "commodo",
      "eiusmod"
    ]
  },
  {
    "_id": "5d820c335861d73a733a458f",
    "title": "Maureen Nieves",
    "text": "Dolore culpa sunt irure nostrud amet non eiusmod. Fugiat incididunt irure sunt ipsum cupidatat magna irure cupidatat. Elit ex culpa veniam commodo ut duis tempor.",
    "date": "Sunday, May 12, 2019 8:39 AM",
    "tags": [
      "quis",
      "aliqua"
    ]
  },
]
```

### There are no tests yet, :(
~~npm run test~~

### There are no lint yet, :'(
~~npm run lint~~
