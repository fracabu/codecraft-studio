'use client'

import Link from 'next/link'
import { forwardRef } from 'react'

const BaseButton = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  type = 'button',
  href,
  to,
  disabled = false,
  loading = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  role,
  ariaLabel,
  fullWidth = false,
  pushable = true,
  onClick,
  className = '',
  ...props
}, ref) => {
  // Size classes for icons
  const iconSizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  }[size]

  // Regular button classes (when pushable=false)
  const getButtonClasses = () => {
    const base = 'inline-flex items-center justify-center gap-2 flex-nowrap whitespace-nowrap font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'

    const variants = {
      primary: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 focus:ring-rose-400/50 shadow-lg hover:shadow-rose-500/25',
      secondary: 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 focus:ring-white/50',
      success: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 focus:ring-green-400/50 shadow-lg hover:shadow-green-500/25',
      warning: 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:from-yellow-600 hover:to-orange-700 focus:ring-yellow-400/50 shadow-lg hover:shadow-yellow-500/25',
      error: 'bg-gradient-to-r from-red-500 to-rose-600 text-white hover:from-red-600 hover:to-rose-700 focus:ring-red-400/50 shadow-lg hover:shadow-red-500/25',
      ghost: 'text-gray-300 hover:text-rose-400 hover:bg-white/5 focus:ring-rose-400/50',
      outline: 'border-2 border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white focus:ring-rose-400/50'
    }

    const sizes = {
      xs: 'px-2.5 py-1.5 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2.5 text-sm',
      lg: 'px-6 py-3 text-base',
      xl: 'px-8 py-4 text-lg'
    }

    const width = fullWidth ? 'w-full' : ''
    const interactive = !disabled && !loading ? 'transform hover:scale-105 active:scale-95' : ''

    return `${base} ${variants[variant]} ${sizes[size]} ${width} ${interactive} ${className}`
  }

  const handleClick = (event) => {
    if (!disabled && !loading && onClick) {
      onClick(event)
    }
  }

  // Button content
  const buttonContent = (
    <>
      {/* Loading spinner */}
      {loading && (
        <div className={`animate-spin rounded-full border-2 border-current border-t-transparent ${iconSizeClasses}`}></div>
      )}

      {/* Left icon */}
      {!loading && LeftIcon && <LeftIcon className={iconSizeClasses} />}

      {/* Children */}
      {children && (
        <span className={loading ? 'opacity-0' : ''}>
          {children}
        </span>
      )}

      {/* Right icon */}
      {!loading && RightIcon && <RightIcon className={iconSizeClasses} />}
    </>
  )

  // 3D Pushable button content
  const pushableContent = (
    <>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">
        {/* Loading spinner */}
        {loading && (
          <div className="animate-spin rounded-full border-2 border-current border-t-transparent w-5 h-5"></div>
        )}

        {/* Left icon */}
        {!loading && LeftIcon && <LeftIcon className={iconSizeClasses} />}

        {/* Children */}
        {!loading && children}

        {/* Right icon */}
        {!loading && RightIcon && <RightIcon className={iconSizeClasses} />}
      </span>
    </>
  )

  const commonProps = {
    ref,
    role,
    'aria-label': ariaLabel,
    'aria-disabled': disabled || loading,
    onClick: handleClick,
    ...props
  }

  // Render as Link (Next.js)
  if (to) {
    if (pushable) {
      return (
        <Link
          href={to}
          className={`pushable pushable-${variant} ${className}`}
          {...commonProps}
        >
          {pushableContent}
        </Link>
      )
    }
    return (
      <Link
        href={to}
        className={getButtonClasses()}
        {...commonProps}
      >
        {buttonContent}
      </Link>
    )
  }

  // Render as anchor
  if (href || as === 'a') {
    if (pushable) {
      return (
        <a
          href={href}
          className={`pushable pushable-${variant} ${className}`}
          {...commonProps}
        >
          {pushableContent}
        </a>
      )
    }
    return (
      <a
        href={href}
        className={getButtonClasses()}
        {...commonProps}
      >
        {buttonContent}
      </a>
    )
  }

  // Render as button (default)
  if (pushable) {
    return (
      <button
        type={type}
        disabled={disabled || loading}
        className={`pushable pushable-${variant} ${className}`}
        {...commonProps}
      >
        {pushableContent}
      </button>
    )
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={getButtonClasses()}
      {...commonProps}
    >
      {buttonContent}
    </button>
  )
})

BaseButton.displayName = 'BaseButton'

export default BaseButton
