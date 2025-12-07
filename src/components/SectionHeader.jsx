import { Shield } from "lucide-react";
import { cn } from "@/lib/utils.js";

export const SectionHeader = ({
  subtitle,
  title,
  titleAccent,
  description,
  centered = false,
  light = false,
  className = "",
}) => {
  return (
    <div className={cn(centered && "text-center", className)}>
      <div
        className={cn(
          "section-subtitle",
          centered && "justify-center",
          light && "text-primary-foreground/70"
        )}
      >
        <Shield className="w-4 h-4 text-accent" />
        <span>{subtitle}</span>
      </div>
      <h2
        className={cn(
          "section-title mb-4",
          light && "text-primary-foreground"
        )}
      >
        {title}
        {titleAccent && (
          <>
            <br className="hidden sm:block" />{" "}
            <span className="text-accent">{titleAccent}</span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg max-w-2xl",
            centered && "mx-auto",
            light ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
