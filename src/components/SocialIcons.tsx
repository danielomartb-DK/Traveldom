export function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.77.46 3.5 1.34 5.02L2 22l5.1-1.34a9.97 9.97 0 0 0 4.94 1.3h.01c5.53 0 10.02-4.49 10.02-10.02C22.07 6.49 17.58 2 12.04 2Zm5.82 14.17c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.14.11-1.84-.11-.43-.14-.98-.32-1.69-.63-2.98-1.29-4.92-4.3-5.07-4.5-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.59-.37.79-.37h.57c.18 0 .43-.07.67.51.24.59.84 2.05.91 2.2.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.3.77 1.27 1.65 2.05 1.14 1.01 2.1 1.33 2.4 1.48.3.15.47.13.65-.08.18-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.34.07.12.07.7-.17 1.38Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.52 1.54-1.52h1.64V4.6c-.28-.04-1.26-.12-2.4-.12-2.37 0-4 1.45-4 4.1v2.32H7.6V14h2.68v8h3.22Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V19.5h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 13.02c0-3.12-1.66-4.77-4.24-4.77-1.95 0-2.83 1.07-3.32 1.83V8.5H9.5c.04.95 0 11 0 11h3.38v-6.14c0-.33.02-.66.12-.89.26-.66.86-1.34 1.87-1.34 1.32 0 1.85 1.01 1.85 2.49V19.5h3.72v-6.48Z" />
    </svg>
  );
}

export function GmailIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Envelope body white so it pops cleanly on the red Gmail button */}
      <rect x="2" y="4.5" width="20" height="15" rx="2.2" fill="#ffffff" />
      {/* Classic Gmail M shape */}
      <path
        d="M4.5 17.5V7.5L12 13l7.5-5.5v10"
        stroke="#D93025"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function SocialBrandIcon({
  name,
  className = "h-4 w-4",
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "Instagram":
      return <InstagramIcon className={className} />;
    case "Facebook":
      return <FacebookIcon className={className} />;
    case "LinkedIn":
      return <LinkedInIcon className={className} />;
    default:
      return null;
  }
}
