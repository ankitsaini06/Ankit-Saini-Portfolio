import { useState } from 'react'

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackLabel = 'Image',
  imgClassName = '',
  loading = 'lazy',
}) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt || fallbackLabel}
        className={`flex items-center justify-center bg-gradient-to-br from-violet-soft to-cyan-soft ${className}`}
      >
        {fallbackLabel}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={`${className} ${imgClassName}`}
      onError={() => setFailed(true)}
    />
  )
}