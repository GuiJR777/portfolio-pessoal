import { m, useScroll, useSpring, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

const steps = [
  ['home', 'BOOT'], ['impact', 'IMPACT'], ['build', 'MODULES'], ['cases', 'CASES'],
  ['projects', 'SHIPPED'], ['experience', 'HISTORY'], ['about', 'README'],
  ['contact', 'CONNECT'],
] as const;

export function BuildRail() {
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, { stiffness: 100, damping: 24, mass: 0.4 });
  const railScale = useTransform(spring, [0, 1], [0.02, 1]);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.35, 0.7] },
    );
    for (const [id] of steps) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="build-rail" aria-hidden="true">
      <div className="build-rail__track"><m.span style={{ scaleY: railScale }} /></div>
      <ol>
        {steps.map(([id, label], index) => {
          const activeIndex = steps.findIndex(([stepId]) => stepId === activeId);
          const state = index === activeIndex ? 'active' : index < activeIndex ? 'complete' : 'future';
          return <li key={id} data-state={state}><span>{String(index).padStart(2, '0')}</span><b>{label}</b></li>;
        })}
      </ol>
    </aside>
  );
}
