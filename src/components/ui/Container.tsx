type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'header';
  id?: string;
};

export default function Container({
  children,
  className = '',
  as: Comp = 'div',
  id,
}: ContainerProps) {
  return (
    <Comp id={id} className={`mx-auto w-full max-w-5xl px-6 md:px-8 ${className}`}>
      {children}
    </Comp>
  );
}
