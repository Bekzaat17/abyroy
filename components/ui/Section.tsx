import { cn } from "@/lib/utils";

/**
 * Единая обёртка секции: один вертикальный ритм и один контейнер на весь сайт.
 * До этого у секций были вразнобой py-24 / py-16 md:py-24 / pt-8 pb-16 и разные
 * контейнеры — из-за чего блоки выглядели то огромными, то приплюснутыми.
 */
export function Section({
  id,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-16 md:py-24", className)}>
      <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

/**
 * Заголовок секции: надзаголовок + H2 + подзаголовок с единой типографикой.
 * `invert` — вариант для тёмного фона.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]",
            invert ? "text-rehab-gold" : "text-rehab-gold",
          )}
        >
          <span className="h-px w-6 bg-rehab-gold/60" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-balance text-2xl font-bold leading-tight sm:text-3xl md:text-4xl",
          invert ? "text-white" : "text-rehab-dark",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-pretty text-sm leading-relaxed sm:text-base",
            invert ? "text-white/60" : "text-gray-500",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
