import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-gradient-to-r from-amber-600 to-amber-500 text-white hover:from-amber-700 hover:to-amber-600 shadow-warm hover:shadow-warm-lg active:scale-[0.98]':
              variant === 'primary',
            'bg-white text-stone-700 border border-stone-200 hover:border-amber-300 hover:bg-amber-50 shadow-warm':
              variant === 'secondary',
            'text-stone-600 hover:text-amber-700 hover:bg-amber-50':
              variant === 'ghost',
            'border-2 border-amber-500 text-amber-700 hover:bg-amber-50':
              variant === 'outline',
          },
          {
            'text-sm px-3.5 py-2 gap-1.5': size === 'sm',
            'text-sm px-5 py-2.5 gap-2': size === 'md',
            'text-base px-7 py-3.5 gap-2.5': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
