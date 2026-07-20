import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

type HubItem = {
  href: string;
  label: string;
  image: string;
};

export function HubGrid({ items }: { items: readonly HubItem[] }) {
  return (
    <div className="wrap grid gap-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <Reveal key={item.href} delay={i * 0.06}>
          <Link
            href={item.href}
            className="group relative block overflow-hidden rounded-2xl shadow-[var(--shadow)]"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.label}
                width={640}
                height={480}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,72,32,0.88)] via-[rgba(6,72,32,0.25)] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <span className="section-title text-sm uppercase tracking-wide text-white md:text-base">
                {item.label}
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
