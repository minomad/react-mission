import Navigation from './Navigation';

function Header() {
  return (
    <header className="bg-navColor px-5 py-2">
      <h1 className="text-center text-xl text-primary font-black">News Site</h1>
      <Navigation />
    </header>
  );
}

export default Header;
