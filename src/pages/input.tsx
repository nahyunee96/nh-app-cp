import { useState, useEffect, ReactElement, ChangeEvent, useRef } from 'react'

interface InputProps {
  type: 'text' | 'password'
  placeholder: string
  maxlength?: number
  id: string
  phrase: string
  regType?: RegExp
  onEmpty: string
  onFailed?: string
  onSuccess: string
  key: string
  value: string
  onChange: ({ key, value }: { key: string, value: string }) => void
  validate: ({ key, value }: { key: string, value: boolean }) => void
}

const Input = ({ type, placeholder, maxlength = 524_288, id, phrase, onChange, regType, onEmpty, onFailed, onSuccess, key, value, validate }: InputProps): ReactElement => {
  const [inputValue, setInputValue] = useState<string>(value)

  const phraseRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    onChange({ key, value: inputValue })
    
    if (phraseRef.current) {
      const phraseTarget = phraseRef.current

      if (inputValue === '') {
        phraseTarget.innerText = onEmpty
        validate({ key, value: false })
        return
      }

      if (regType && onFailed && !inputValue.match(regType)) {
        if (typeof onFailed === 'string') phraseTarget.innerText = onFailed
        validate({ key, value: false })
        return
      }

      phraseTarget.innerText = onSuccess
      validate({ key, value: true })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue])

  return (
    <div className='mb-4'>
      <label htmlFor={id} className='block mb-2 text-slate-700 font-medium'>{id}</label>
      <input type={type} id="form__pw__join" placeholder={placeholder} 
      className='block w-full p-2 bg-slate-950 border-2 text-slate-300 border-slate-700 focus:outline focus:outline-slate-400 duration-300'
      maxLength={maxlength} value={inputValue} onInput={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} />
      <p className='text-slate-300 mt-2' ref={phraseRef}>&bull; {phrase}</p>
    </div>
  )
}

export default Input