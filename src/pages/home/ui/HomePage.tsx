import tw from 'twin.macro'

import { PageShell } from '@widgets/page-shell'
import { Button } from '@shared/ui/button'
import { Container } from '@shared/ui/container'

const EmptyState = tw.section`
  flex min-h-[60vh] flex-col items-start justify-center gap-6
`

const Copy = tw.div`space-y-3`
const Title = tw.h1`text-3xl font-semibold text-slate-950 sm:text-5xl`
const Subtitle = tw.p`max-w-2xl text-base leading-7 text-slate-600`

export function HomePage() {
  return (
    <PageShell>
      <Container>
        <EmptyState>
          <Copy>
            <Title>Online Shop</Title>
            <Subtitle>Frontend v2</Subtitle>
          </Copy>
          <Button type="button" disabled>
            Starter
          </Button>
        </EmptyState>
      </Container>
    </PageShell>
  )
}
