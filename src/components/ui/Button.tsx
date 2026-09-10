import Link from 'next/link';

const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-hover focus-visible:outline-accent',
  secondary:
    'border border-border bg-bg-elevated text-fg hover:border-fg focus-visible:outline-accent',
  ghost:
    'text-fg hover:text-accent underline-offset-4 hover:underline focus-visible:outline-accent',
} as const;

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  type?: 'button' | 'submit';
  external?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  external = false,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
}
