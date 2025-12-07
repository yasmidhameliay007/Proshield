import { useEffect, useState } from "react";
import { Shield } from "lucide-react";

export const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary transition-opacity duration-500">
      <div className="relative flex flex-col items-center">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-accent/20" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Shield className="w-8 h-8 text-accent" />
          </div>
        </div>
        <div className="mt-6 text-primary-foreground font-display text-xl font-semibold">
          Proshield<span className="text-accent">.</span>
        </div>
      </div>
    </div>
  );
};
