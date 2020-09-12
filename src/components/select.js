import {getTemplate} from '@/template/select.template'

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.options = options
    this.selectedId = options.selectedId

    this.render()
    this.setup()
  }

  render() {
    const {data, placeholder} = this.options
    this.$el.classList.add('select')
    this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId)
  }

  setup() {
    this.handleClick = this.handleClick.bind(this)
    this.$el.addEventListener('click', this.handleClick)
    this.$arrow = this.$el.querySelector('[data-type="arrow"]')
    this.$value = this.$el.querySelector('[data-type="value"]')
  }

  handleClick(evt) {
    const {type} = evt.target.dataset

    if (type === 'input' || type === 'value' || type === 'arrow') {
      this.toggle()
    } else if (type === 'item') {
      const id = evt.target.dataset.id
      this.select(id)
    } else if (type === 'backdrop') {
      this.close()
    }
  }

  get isOpen() {
    return this.$el.classList.contains('open')
  }

  get current() {
    return this.options.data.find(item => item.id === this.selectId)
  }

  select(id) {
    this.selectId = id
    this.$value.textContent = this.current.value

    this.$el.querySelectorAll('[data-type="item"]').forEach(el => {
      el.classList.remove('selected')
    })
    this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')

    this.close()
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    this.$el.classList.add('open')
    this.$arrow.classList.remove('fa-chevron-down')
    this.$arrow.classList.add('fa-chevron-up')
  }

  close() {
    this.$el.classList.remove('open')
    this.$arrow.classList.add('fa-chevron-down')
    this.$arrow.classList.remove('fa-chevron-up')
  }

  destroy() {
    this.$el.removeEventListener('click', this.handleClick)
    this.$el.innerHTML = ''
  }
}