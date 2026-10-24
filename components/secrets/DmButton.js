import { salon } from "./site";

// "DM to book" - opens an Instagram message to the salon.
export default function DmButton({ className = "", children = "DM to book" }) {
  return (
    <a href={salon.instagramDm} target="_blank" rel="noopener" className={`dm-btn ${className}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="ig"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" /><circle cx="17.4" cy="6.6" r="1" fill="currentColor" /></svg>
      <span>{children}</span>
    </a>
  );
}
