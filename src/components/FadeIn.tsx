import { useInView } from 'react-intersection-observer';

export const FadeIn = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    rootMargin: '-50px',
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${
        inView ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1000 ease-in-out`}
    >
      {children}
    </div>
  );
};
