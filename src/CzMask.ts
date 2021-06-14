interface CzMaskOptions {
  el?: any
  mask?: string
  keyData?: {
    code: any
    isDel: boolean
    isSup: boolean
  }
}

const CzMask = (opt: CzMaskOptions = { mask: '' }) => {
  if (!opt.el) return []
  if (!opt.mask || !opt.mask.length) return []

  const _infoKey = (event: KeyboardEvent): boolean => {
    if (!event) return false
    opt.keyData = {
      code: event.key || event.keyCode || event.which,
      isDel: false,
      isSup: false,
    }
    if (opt.keyData.code === 8 || opt.keyData.code === 'Backspace') {
      opt.keyData.isDel = true
    }
    if (opt.keyData.code === 46 || opt.keyData.code === 'Delete') {
      opt.keyData.isSup = true
    }

    return true
  }

  const _czmask = (event: KeyboardEvent) => {
    if (!event) return false
    event.preventDefault()

    const target = event.target
    if (!target) return []
    if (target instanceof HTMLButtonElement) return []

    const mask = opt.mask || (target as HTMLInputElement).dataset.mask

    if (mask && target instanceof HTMLInputElement) {
      const cursor = target.selectionStart as number
      const varChar = ['_']
      const value = target.value.split('')
      let arrMask = mask.split('')
      let positionCursor = 0

      positionCursor = cursor - 1

      const fixedChars = Object.keys(
        arrMask.reduce((result: any, item: string) => {
          result[item] = item
          return result
        }, {})
      )

      varChar.forEach(char => fixedChars.splice(fixedChars.indexOf(char), 1))

      if (!opt.keyData) return []

      if (opt.keyData.isDel) {
        // captura borrar tecla delete
        if (fixedChars.indexOf(arrMask[cursor]) >= 0) {
          let initPositionDel = positionCursor
          while (fixedChars.indexOf(arrMask[positionCursor]) >= 0) {
            positionCursor--
          }
          positionCursor = value[positionCursor]
            ? positionCursor
            : ++initPositionDel
          value.splice(positionCursor--, 0, '_')
        } else value.splice(cursor, 0, '_')
      } else if (opt.keyData.isSup) {
        // captura borrar tecla suprimir
        value.splice(cursor, 0, '_')
        let initCursorSup = cursor
        while (value[initCursorSup]) {
          if (fixedChars.indexOf(arrMask[initCursorSup]) === -1) {
            let nextElement = initCursorSup + 1
            let cnt = 2
            while (fixedChars.indexOf(arrMask[nextElement]) >= 0) {
              nextElement = initCursorSup + cnt++
            }
            value.splice(initCursorSup, 0, value[nextElement])
            if (fixedChars.indexOf(arrMask[nextElement]) === -1) {
              value.splice(nextElement, 1)
            }
          }
          initCursorSup++
        }
      } else {
        // captura teclas
        // busca una posición para el nuevo caracter
        const initPosition = positionCursor
        while (fixedChars.indexOf(arrMask[positionCursor]) >= 0) {
          positionCursor++
        }
        value[positionCursor] = value[initPosition]
        value.splice(positionCursor + 1, 1)
      }

      // remplaza los valores existentes y nuevos en la mascara
      arrMask = arrMask.map((char, ix) => {
        if (fixedChars.indexOf(char) >= 0) return char
        else return value[ix] || char
      })

      // carga el nuevo valor
      target.value = arrMask.join('')

      // mueve el cursor
      target.setSelectionRange(positionCursor + 1, positionCursor + 1)
    }
  }

  // eventos
  opt.el.removeEventListener('keydown', _infoKey)
  opt.el.removeEventListener('input', _czmask)
  opt.el.addEventListener('keydown', _infoKey)
  opt.el.addEventListener('input', _czmask)
}

export default CzMask
