import type { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import tw, { type TwStyle } from 'twin.macro'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariant
}

const variantStyles: Record<ButtonVariant, TwStyle> = {
  primary: tw`bg-teal-700 text-white hover:bg-teal-800`,
  secondary: tw`border border-slate-300 bg-white text-slate-900 hover:bg-slate-100`,
}

const StyledButton = styled.button<{ $variant: ButtonVariant }>(
  ({ $variant }) => [
    tw`
      inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium
      transition-colors
      disabled:cursor-not-allowed disabled:opacity-60
      focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2
    `,
    variantStyles[$variant],
  ],
)

export function Button({
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  return <StyledButton $variant={variant} type={type} {...props} />
}
