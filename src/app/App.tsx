import { ThemeProvider } from 'styled-components'

import { StoreProvider } from '@app/providers/store-provider'
import { GlobalStyle } from '@app/styles/global-style'
import { HomePage } from '@pages/home'
import { appTheme } from '@shared/config/theme'

export function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        <HomePage />
      </ThemeProvider>
    </StoreProvider>
  )
}
