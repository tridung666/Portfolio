interface BrandIconProps {
  className?: string;
  size?: number;
}

export function GitHubIcon({ className, size = 18 }: BrandIconProps): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      className={className}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.29 9.29 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function LinkedInIcon({ className, size = 18 }: BrandIconProps): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      className={className}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.65H9.37V9h3.4v1.56h.05c.47-.89 1.63-1.84 3.36-1.84 3.6 0 4.27 2.37 4.27 5.46v6.27ZM5.36 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.58V9h3.56v11.45ZM22.23 0H1.76C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.76 24h20.47c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

export function GmailIcon({ className, size = 18 }: BrandIconProps): React.ReactElement {
  return (
    <svg aria-hidden="true" className={className} height={size} viewBox="0 0 24 24" width={size}>
      <path fill="#EA4335" d="M3.5 6.5 12 13l8.5-6.5V18a2 2 0 0 1-2 2H17V9.8l-5 3.82-5-3.82V20H5.5a2 2 0 0 1-2-2V6.5Z" />
      <path fill="#FBBC04" d="M20.5 6.5 17 9.8V5.35l1.19-.91c.95-.73 2.31-.05 2.31 1.15v.91Z" />
      <path fill="#34A853" d="M7 9.8 3.5 6.5v-.91c0-1.2 1.36-1.88 2.31-1.15L7 5.35V9.8Z" />
      <path fill="#4285F4" d="M17 20H7V9.8l5 3.82 5-3.82V20Z" opacity="0.12" />
      <path fill="#C5221F" d="M3.5 6.5 7 9.8V20H5.5a2 2 0 0 1-2-2V6.5Z" />
      <path fill="#EA4335" d="M17 9.8 20.5 6.5V18a2 2 0 0 1-2 2H17V9.8Z" />
    </svg>
  );
}
