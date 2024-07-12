import Link from 'next/link';
import MetaData from '@/assets/data/metadata.json';
import MenuData from '@/assets/data/menu.json';
import Button from './Button';

const Header = () => {
  const metaData = MetaData;
  const menuData = MenuData;

  return (
    <header className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
        <h1 className="text-2xl font-bold">
          <Link href="/">
            <span>{metaData.service_name}</span>
          </Link>
        </h1>
        <nav>
          <ul className="flex items-center">
            {menuData.menu.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>
                  <Button style="none">{item.name}</Button>
                </Link>
              </li>
            ))}
            <a
              href="https://github.com/ktb6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button style="none">
                <img
                  src="/images/github-mark-white.svg"
                  alt="Github Icon"
                  className="w-6 h-6"
                />
              </Button>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
