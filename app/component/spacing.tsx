import { cn } from "@/lib/utils";

export type SpacingProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};

export const Spacing = ({ size = "md" }: SpacingProps) => {
  return (
    <div
      className={cn({
        "h-1 LG:h-2": size === "xs",
        "h-4 LG:h-8": size === "sm",
        "h-8 LG:h-16": size === "md",
        "h-16 LG:h-24": size === "lg",
        "h-24 LG:h-32": size === "xl",
        "h-40 LG:h-40": size === "2xl",
      })}
    />
  );
};
