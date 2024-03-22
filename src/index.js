import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import './index.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import i18next from 'i18next'
import { theme } from './utils/constants/theme'
import { store } from './store'
import { injectStore } from './config/axiosInstance'
import App from './App'
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'))

i18next.init({
   interpolation: { escapeValue: false },
})

i18next.init().then(() =>
   root.render(
      <StrictMode>
         <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterDayjs}>
            <Provider store={injectStore(store)}>
               <BrowserRouter>
                  <SnackbarProvider>
                     <ThemeProvider theme={theme}>
                        <App />
                     </ThemeProvider>
                  </SnackbarProvider>
               </BrowserRouter>
            </Provider>
         </LocalizationProvider>
      </StrictMode>
   )
)
