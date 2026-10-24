import { salon } from "./site";

const icons = {
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.4" /><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.4" /><circle cx="17.4" cy="6.6" r="1" fill="currentColor" /></svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H7.9v3h2.6V21" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
  ),
};

export const socials = () =>
  [
    ["Instagram", salon.instagram],
    ["Facebook", salon.facebook],
  ].filter(([, url]) => url);

// Instagram and Facebook links. `labels` shows the network name beside each icon.
export default function Social({ labels = false, className = "" }) {
  return (
    <span className={`social ${labels ? "labelled" : ""} ${className}`}>
      {socials().map(([name, url]) => (
        <a key={name} href={url} target="_blank" rel="noopener" aria-label={`${salon.name} on ${name}`}>
          {icons[name]}
          {labels && <span>{name}</span>}
        </a>
      ))}
    </span>
  );
}
