type HazardStripeProps = {
  className?: string;
};

// The site's signature: a diagonal yellow-and-black hazard stripe used as a divider and accent.
export default function HazardStripe({ className = "h-3" }: HazardStripeProps) {
  return <div aria-hidden="true" className={`hazard ${className}`} />;
}
