import type { PropsWithChildren } from 'react'
import tw from 'twin.macro'

const Shell = tw.main`min-h-screen bg-slate-50 text-slate-950`
const Header = tw.header`border-b border-slate-200 bg-white`
const HeaderInner = tw.div`
  mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6
`
const Brand = tw.div`text-sm font-semibold uppercase tracking-normal text-slate-900`
const Content = tw.div`w-full`

export function PageShell({ children }: PropsWithChildren) {
  return (
    <Shell>
      <Header>
        <HeaderInner>
          <Brand>Online Shop</Brand>
        </HeaderInner>
      </Header>
      <Content>{children}</Content>
    </Shell>
  )
}
