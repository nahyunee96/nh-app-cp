
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/login.module.scss'

const inter = Inter({ subsets: ['latin'] })

function Login() {
  return (
    <div
      className={`${styles.login__form}`}
    >
        <div className={`${styles.login__input}`}>
            <input type="text" id="form__id__input" placeholder="아이디를 입력해주세요." />
        </div>

        <div className={`${styles.login__input}`}>
            <input type="text" id="form__pw__input" placeholder="아이디를 입력해주세요." />
        </div>

        <div className={`${styles.id__save}`}>
            <input type="checkbox" id="id__save__btn" />
            <label htmlFor="id__save__btn">아이디 저장</label>
        </div>

        <div className={`${styles.btn__wrap}`}>
            <span className={`${styles.login__btn}`}>로그인</span>
        </div>
      
    </div>
  )
}

export default Login
