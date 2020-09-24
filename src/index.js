import CzMask from './CzMask'

document.querySelectorAll('input[data-mask]').forEach(tag => {
  CzMask({ el: tag })
})
