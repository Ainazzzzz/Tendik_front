import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from './store/auth/authSlice'
import { USER_KEY } from './utils/constants/constants'
import AppRoutes from './routes/AppRoutes'

function App() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      const USER_DATA = localStorage.getItem(USER_KEY)
      const parserData = JSON.parse(USER_DATA)
      if (parserData?.token) {
         dispatch(login({ data: parserData, navigate }))
      }
   }, [])

   return (
      <Suspense fallback="...Загрузка">
         <div className="App">
            <AppRoutes />
         </div>
      </Suspense>
   )
}
export default App

// function App() {
//    const { t, i18n } = useTranslation()
//    const dispatch = useDispatch()
//    const navigate = useNavigate()

//    const locales = {
//       ru: { title: 'РУ' },
//       ky: { title: 'КЫР' },
//    }

//    useEffect(() => {
//       const USER_DATA = localStorage.getItem(USER_KEY)
//       const parserData = JSON.parse(USER_DATA)
//       if (parserData?.token) {
//          dispatch(login({ data: parserData, navigate }))
//       }
//    }, [])

//    return (
//       <Suspense fallback="...loading">
//          <div className="App">
//             <ul>
//                {Object.keys(locales).map((locale) => (
//                   <li key={locale}>
//                      <button
//                         style={{
//                            fontWeight:
//                               i18n.resolvedLanguage === locale
//                                  ? 'bold'
//                                  : 'normal',
//                         }}
//                         type="submit"
//                         onClick={() => i18n.changeLanguage(locale)}
//                      >
//                         {locales[locale].title}
//                      </button>
//                   </li>
//                ))}
//             </ul>
//             <h1>{t('main.header')}</h1>
//          </div>
//       </Suspense>
//    )
// }
// export default App
