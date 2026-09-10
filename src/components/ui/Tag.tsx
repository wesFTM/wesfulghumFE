type TagProps = {
  children: React.ReactNode;
  as?: 'li' | 'span';
};

export default function Tag({ children, as: Comp = 'span' }: TagProps) {
  return (
    <Comp className="rounded-full border border-border bg-bg-elevated px-2.5 py-1 text-xs font-medium text-fg-muted">
      {children}
    </Comp>
  );
}
