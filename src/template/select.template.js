export const getTemplate = (data = [], placeholder, selectedId) => {
  let text = placeholder ?? 'Default'

  const items = data.map(item => {
    let activeClass = ''
    if (item.id === selectedId) {
      text = item.value
      activeClass = 'selected'
    }

    return `
      <li class="select-list__item ${activeClass}" data-type="item" data-id="${item.id}">${item.value}</li>
    `
  })

  return `
        <div class="select-backdrop" data-type="backdrop"></div>
        <div class="select-input" data-type="input">
            <span data-type="value">${text}</span>
            <i class="fa fa-chevron-down" data-type="arrow"></i>
        </div>
        <div class="select-dropdown">
            <ul class="select-list">
               ${items.join('')}
            </ul>
        </div>
    `
}