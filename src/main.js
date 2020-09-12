import '@/css/main.css'
import '@/scss/main.scss'

import {Select} from '@/components/select'

// creating an object instance that will contain: selector and options
const select = new Select('#select', {
  placeholder: 'All Categories',
  selectedId: '1',
  data: [
    {id: '1', value: 'English'},
    {id: '2', value: '中文（简体'},
    {id: '3', value: 'Português'},
    {id: '4', value: 'Русский'}
  ]
})

window.s = select