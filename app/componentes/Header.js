
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <Image src="/img/Logo.jpg" alt="Logo" width={100} height={50} />
        </Link>
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
