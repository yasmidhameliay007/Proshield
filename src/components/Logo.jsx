import { Shield } from "lucide-react";

export const Logo = ({ variant = "dark", className = "" }) => {
  const textColor = variant === "light" ? "text-primary-foreground" : "text-foreground";
  
  return (
    <a href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
        <Shield className="w-6 h-6 text-accent-foreground" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background" />
      </div>
      <span className={`text-xl font-bold font-display ${textColor}`}>
        Proshield<span className="text-accent">.</span>
      </span>
    </a>
  );
};
