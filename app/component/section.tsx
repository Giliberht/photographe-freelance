import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("max-w-8xl mx-auto leading-7", props.className)}>
      {props.children}
    </section>
  );
};
