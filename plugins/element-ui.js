/* eslint-disable no-unused-vars */
import Vue from 'vue'

import {
  Pagination,
  Input,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Button,
  Table,
  Card,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Icon,
  Row,
  Col,
  Timeline,
  TimelineItem,
  MessageBox,
  Message,
  tableColumn,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Loading

} from 'element-ui'

Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}

export default () => {
  Vue.use(Dropdown)
  Vue.use(DropdownItem)
  Vue.use(DropdownMenu)
  Vue.use(Message)
  Vue.use(Container)
  Vue.use(Header)
  Vue.use(Aside)
  Vue.use(Main)
  Vue.use(Footer)
  Vue.use(tableColumn)
  Vue.use(Pagination)
  Vue.use(Input)
  Vue.use(Button)
  Vue.use(Table)
  Vue.use(Card)
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Tabs)
  Vue.use(TabPane)
  Vue.use(Icon)
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Timeline)
  Vue.use(TimelineItem)
  Vue.use(Loading)
}
