import type { ComponentPropsWithoutRef } from 'react'
import tw from 'twin.macro'

type ContainerProps = ComponentPropsWithoutRef<'div'>

const StyledContainer = tw.div`mx-auto w-full max-w-6xl px-4 sm:px-6`

export function Container(props: ContainerProps) {
  return <StyledContainer {...props} />
}
