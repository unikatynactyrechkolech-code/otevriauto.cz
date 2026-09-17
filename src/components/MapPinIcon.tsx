type MapPinIconProps = {
  className?: string;
};

export default function MapPinIcon({ className = "h-4 w-4" }: MapPinIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.1 6.1 12.1 6.4 12.4a.8.8 0 0 0 1.2 0C12.9 21.1 19 14.1 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}
