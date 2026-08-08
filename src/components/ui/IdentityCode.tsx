interface IdentityCodeProps {
  compact?: boolean;
}

export function IdentityCode({ compact = false }: IdentityCodeProps) {
  return (
    <code className="identity-code">
      <span>
        <span className="syntax-keyword">class</span>{' '}
        <span className="syntax-class">GuilhermeRamires</span>
        <span>(</span>
        <span className="syntax-class">SoftwareEngineer</span>
        <span>):</span>
      </span>
      {!compact && (
        <>
          <span>
            {'    '}<span className="syntax-attribute">focus</span> = (
            <span className="syntax-value">&quot;Full-Stack&quot;</span>,{' '}
            <span className="syntax-value">&quot;AI&quot;</span>)
          </span>
          <span>
            {'    '}<span className="syntax-attribute">experience</span> ={' '}
            <span className="syntax-value">&quot;5+ years&quot;</span>
          </span>
          <span>
            {'    '}<span className="syntax-attribute">remote</span> ={' '}
            <span className="syntax-value">True</span>
          </span>
        </>
      )}
    </code>
  );
}
