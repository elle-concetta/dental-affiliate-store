import { ShieldCheck, Stethoscope, Leaf } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    label: "ADA Approved",
    sub: "American Dental Association certified",
  },
  {
    icon: Stethoscope,
    label: "Dentist-Tested",
    sub: "Reviewed & used by dental professionals",
  },
  {
    icon: Leaf,
    label: "BPA Free",
    sub: "Safe, non-toxic materials only",
  },
];

export default function TrustBadgePanel() {
  return (
    <div
      className="rounded-2xl flex flex-col justify-center gap-6 p-8 md:p-10 h-full"
      style={{
        background: "linear-gradient(135deg, hsl(174 45% 42%) 0%, hsl(174 40% 55%) 50%, hsl(160 38% 60%) 100%)",
      }}
    >
      <h3 className="font-serif text-2xl font-medium text-white leading-snug mb-2">
        Our Quality<br />Promise
      </h3>
      {badges.map(({ icon: Icon, label, sub }) => (
        <div key={label} className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-white tracking-wide">{label}</p>
            <p className="text-xs text-white/75 font-light leading-snug mt-0.5">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
