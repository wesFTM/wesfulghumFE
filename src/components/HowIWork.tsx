import Container from '@/components/ui/Container';
import { howIWork } from '@/data/site';

export default function HowIWork() {
  return (
    <section aria-labelledby="how-heading" className="border-y border-border bg-bg-elevated py-16">
      <Container>
        <h2 id="how-heading" className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          How I work
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {howIWork.map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
