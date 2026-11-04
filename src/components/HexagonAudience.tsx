function Person() {
  return <svg viewBox="0 0 40 54" aria-hidden="true" className="nasa-audience-person"><circle cx="20" cy="11" r="8" fill="currentColor" /><path d="M7 46V33c0-8 5-12 13-12s13 4 13 12v13H7Z" fill="currentColor" /><path d="M14 44v7m12-7v7" stroke="currentColor" strokeWidth="6" strokeLinecap="round" /></svg>;
}

export function HexagonAudience() {
  return <figure className="nasa-audience-expansion" aria-label="The audience expands from one SME to young learners, advanced learners, and SMEs">
    <div className="nasa-audience-original"><Person /><strong>SMEs</strong><small>Original audience</small></div>
    <span className="nasa-audience-arrow" aria-hidden="true">→</span>
    <div className="nasa-audience-groups">
      {["Young learners", "Advanced learners", "SMEs"].map(label => <div className="nasa-audience-group" key={label}><div className="nasa-audience-people"><Person /><Person /><Person /></div><strong>{label}</strong></div>)}
    </div>
  </figure>;
}
