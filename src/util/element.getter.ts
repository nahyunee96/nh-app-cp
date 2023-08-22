export const elementGetter = <ElementType = Element>(querySelector: string): ElementType => {
  if (typeof document === 'undefined') throw new Error('document not loaded')

  const firstChar = querySelector.charAt(0)
  if (firstChar !== '.' && firstChar !== '#') throw new Error('bad query selector')

  const element = document.querySelector(querySelector) as unknown as ElementType

  if (element === null) throw new Error('element not found')
  if (!(element instanceof Element)) throw new Error('is not a Element')
  
  return element as ElementType
}