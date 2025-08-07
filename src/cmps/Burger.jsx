export function Burger({ menuOpen, setMenuOpen }) {
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className={`menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
      <div className="bars" id="bar1" />
      <div className="bars" id="bar2" />
      <div className="bars" id="bar3" />
    </div>
  );
}
