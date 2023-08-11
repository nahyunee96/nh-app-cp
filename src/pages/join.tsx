import React, { Component, useEffect } from 'react'
import { Inter } from 'next/font/google'
import styles from '../styles/join.module.scss'

const inter = Inter({ subsets: ['latin'] })

function Join () {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const joinBtn = document.getElementById('form__join__btn') as HTMLSpanElement
      const JoinFormIdInput = document.getElementById('form__id__join') as HTMLInputElement
      const JoinFormPwInput = document.getElementById('form__pw__join') as HTMLInputElement
      const JoinFormPwCfInput = document.getElementById('form__pw__cf__join') as HTMLInputElement
      let JoinPwInputV = JoinFormPwInput.value
      let JoinPwCfInputV = JoinFormPwCfInput.value
      const JoinFormMailInput = document.getElementById('form__mail__join') as HTMLInputElement
      const JoinFormNameInput = document.getElementById('form__name__join') as HTMLInputElement

      const RegType = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/
      const RegTypeMail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

      joinBtn.addEventListener('click', ()=>{
          console.log('시나모롤 귀여워')
      //id
      if (JoinFormIdInput.value === ''){
        alert('아이디를 입력해주세요.')
        JoinFormIdInput.focus()
        return
      }

      if (!RegType.test(JoinFormIdInput.value)) {
        alert('사용할 수 없는 아이디를 입력하셨습니다. 조건에 맞게 입력해주세요.')
        JoinFormIdInput.focus()
        return
      }

      //pw
      if (JoinFormPwInput.value === '') {
        alert('비밀번호를 입력해주세요.')
        JoinFormPwInput.focus()
        return
      }
      if (!RegType.test(JoinFormPwInput.value)) {
        alert('사용할 수 없는 비밀번호를 입력하셨습니다. 조건에 맞게 입력해주세요.')
        JoinFormPwInput.focus()
        return
      }
      if (JoinFormPwCfInput.value === '') {
        alert('비밀번호를 한번 더 입력해주세요.')
        JoinFormPwCfInput.focus()
        return
      } 
      
      if (JoinPwInputV !== JoinPwCfInputV) {
        alert('비밀번호 확인이 일치하지 않습니다. 다시 입력해 주세요.')
        return
      }

      //name
      if (JoinFormNameInput.value === '') {
        alert('성명을 입력해주세요.')
        JoinFormNameInput.focus()
        return
      }

      //email
      if (JoinFormMailInput.value === '') {
        alert('이메일을 입력해주세요.')
        JoinFormMailInput.focus()
        return
      }

      if (!RegTypeMail.test(JoinFormMailInput.value)) {
        alert('올바른 이메일 형식이 아닙니다. 확인 후 다시 입력해주세요.')
        JoinFormMailInput.focus()
        return
      }

      else {
          
      }

      })

      //oninput
      JoinFormIdInput.oninput = () => {
        const JoinIdText = document.getElementById('id__text__join') as HTMLInputElement
        if (JoinFormIdInput.value == '') {
            JoinIdText.innerText=`• 아이디는 4~12자리로 영문 + 숫자 조합으로 생성 바랍니다.`
        } else if (!RegType.test(JoinFormIdInput.value)) {
            console.log('응 아니야~ 이 아이디 못써')
            JoinIdText.innerText='사용할 수 없는 아이디입니다.'
        } 
        else {
            JoinIdText.innerText='사용 가능한 아이디입니다.'
        }
      }

      JoinFormPwInput.oninput = () => {
        const JoinPwText = document.getElementById('pw__text__join') as HTMLElement
        if (JoinFormPwInput.value == '') {
            JoinPwText.innerText=`• 비밀번호는 4~12자리로 영문 + 숫자 조합으로 생성 바랍니다.`
            return
        }
        if (!RegType.test(JoinFormPwInput.value)) {
            console.log('응 아니야~ 이 비번 못써')
            JoinPwText.innerText='사용할 수 없는 비밀번호입니다.'
            return
        } 
        else {
            JoinPwText.innerText='사용 가능한 비밀번호입니다.'
        }
      }

      JoinFormPwCfInput.oninput = () => {
          

        const JoinPwCfText = document.getElementById('pw__cf__text__join') as HTMLElement

        if (JoinPwInputV !== JoinPwCfInputV) {
            JoinPwCfText.innerText='비밀번호가 일치하지 않습니다. 다시 확인해 주세요.'
        } else {
            JoinPwCfText.innerText='비밀번호가 일치합니다.'
        }
      }

      JoinFormMailInput.oninput = () => {
        const JoinMailText = document.getElementById('mail__text__join') as HTMLElement
        if (JoinFormMailInput.value == '') {
            JoinMailText.innerText='• 비밀번호를 찾을 때 사용됩니다.'
            return
        } 
        if (!RegTypeMail.test(JoinFormMailInput.value)) {
            JoinMailText.innerText='올바른 메일 형식이 아닙니다. 확인 후 다시 입력해 주세요.'
            return
        } 
        else {
            JoinMailText.innerText='사용할 수 있는 이메일입니다.'
        }
      }
  }
  }, [])

  return (
    <div className='
    w-11/12 max-w-xl absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 border-2 border-slate-700 rounded-xl p-6
    '>
      <div className={`mb-4`}>
        <label htmlFor="ID" className='block mb-2 text-slate-700 font-medium'>ID</label>
        <input type="text" id="form__id__join" placeholder="사용하실 아이디를 입력해주세요." 
        className='block w-full p-2 bg-slate-950 border-2 text-slate-300 border-slate-700 focus:outline focus:outline-slate-400 duration-300'
        maxLength={12} />
        <p className='text-slate-300 mt-2' id="id__text__join">&bull; 아이디는 4~12자리로 영문 + 숫자 조합으로 생성 바랍니다.</p>
      </div>

      <div className={`mb-4`}>
        <label htmlFor="PW" className='block mb-2 text-slate-700 font-medium'>PW</label>
        <input type="password" id="form__pw__join" placeholder="사용하실 비밀번호를 입력해주세요." 
        className='block w-full p-2 bg-slate-950 border-2 text-slate-300 border-slate-700 focus:outline focus:outline-slate-400 duration-300'
        maxLength={12}/>
        <p className='text-slate-300 mt-2' id="pw__text__join">&bull; 비밀번호는 4~12자리로 영문 + 숫자 조합으로 생성 바랍니다.</p>
      </div>

      <div className={`mb-4`}>
        <label htmlFor="PW_CONFIRM" className='block mb-2 text-slate-700 font-medium'>PW CONFIRM</label>
        <input type="password" id="form__pw__cf__join" placeholder="비밀번호를 한번 더 입력해주세요." 
        className='block w-full p-2 bg-slate-950 border-2 text-slate-300 border-slate-700 focus:outline focus:outline-slate-400 duration-300'
        maxLength={12}/>
        <p className='text-slate-300 mt-2' id="pw__cf__text__join">&bull; 비밀번호를 확인을 위해 한번 더 입력해주세요.</p>
      </div>

      <div className={`mb-4`}>
        <label htmlFor="NAME" className='block mb-2 text-slate-700 font-medium'>NAME</label>
        <input type="text" id="form__name__join" placeholder="성명을 입력해주세요." 
        className='block w-full p-2 bg-slate-950 border-2 text-slate-300 border-slate-700 focus:outline focus:outline-slate-400 duration-300'
        />
      </div>
      <div className={`mb-4`}>
        <label htmlFor="EMAIL" className='block mb-2 text-slate-700 font-medium'>E-MAIL</label>
        <input type="text" id="form__mail__join" placeholder="이메일을 입력해주세요." 
        className='block w-full p-2 bg-slate-950 border-2 text-slate-300 border-slate-700 focus:outline focus:outline-slate-400 duration-300'
        />
        <p className='text-slate-300 mt-2' id="mail__text__join">&bull; 비밀번호를 찾을 때 사용됩니다.</p>
      </div>
      <div className={`mb-16 flex justify-between`}>
        <div className={`${styles.agree__chk}`}>
            <input type="checkbox" id="id__save__btn" className='hidden' />
            <label htmlFor="id__save__btn" className="text-slate-700 font-medium cursor-pointer relative pl-6 hover:text-slate-300 duration-300">개인정보 처리방침 동의</label>
        </div>
        <div className="">
            <button type="button" id="popupDom" className='text-slate-700 cursor-pointer underline hover:text-slate-300 duration-300'>개인정보 처리방침 보기</button>
            
        </div>
      </div>
      <div>
          <span className={
          `flex w-full h-14 justify-center items-center bg-slate-600 text-slate-950 text-2xl font-bold cursor-pointer duration-300 hover:bg-slate-300`
          } id="form__join__btn">Join</span>
      </div>

    </div>
  )
}

export default Join