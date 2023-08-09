
import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '../styles/login.module.scss'

const inter = Inter({ subsets: ['latin'] })

function Login() {
  return (
    <div
      className={`${styles.login__form} w-11/12 max-w-xl absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 border-2 border-slate-700 rounded-xl p-6`}
    >
        <div className={`${styles.login__input} mb-4`}>
            <label htmlFor="ID" className='block mb-2 text-slate-700 font-medium'>ID</label>
            <input type="text" id="form__id__input" placeholder="아이디를 입력해주세요." 
            className='block w-full p-2 bg-slate-950 border-2 border-slate-700 focus:outline focus:outline-slate-400 duration-300'
            />
        </div>

        <div className={`${styles.login__input} mb-4`}>
            <label htmlFor="PASSWORD" className='block mb-2 text-slate-700 font-medium'>PASSWORD</label>
            <input type="text" id="form__pw__input" placeholder="비밀번호를 입력해주세요." 
            className='block w-full p-2 bg-slate-950 border-2 border-slate-700 focus:outline focus:outline-slate-400 duration-300'
            />
        </div>

        <div className={`${styles.id__save} mb-6`}>
            <input type="checkbox" id="id__save__btn" className='hidden' />
            <label htmlFor="id__save__btn" className="text-slate-700 font-medium cursor-pointer relative pl-6 hover:text-slate-300 duration-300">아이디 저장</label>
        </div>

        <ul className={`${styles.member__btn__wrap} flex justify-center items-center mb-12`}>
          <li>
            <Link href="/join" className='relative text-slate-700 px-2 hover:text-slate-300'>
              회원가입
            </Link>
          </li>
          <li>
            <Link href="/find_id" className='relative text-slate-700 px-2 hover:text-slate-300'>
              아이디 찾기
            </Link>
          </li>
          <li>
            <Link href="/find_pw" className='relative text-slate-700 px-2 hover:text-slate-300'>
              비밀번호 찾기
            </Link>
          </li>
        </ul>

        <div className={`${styles.login__btn__wrap} `}>
            <span className={
              `${styles.login__btn} flex w-full h-14 justify-center items-center bg-slate-600 text-slate-950 text-2xl font-bold cursor-pointer duration-300 hover:bg-slate-300`
            }>LOGIN</span>
        </div>
      
    </div>
  )
}

export default Login
