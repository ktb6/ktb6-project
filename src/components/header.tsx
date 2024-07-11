import Link from 'next/link';
import MetaData from '@/assets/data/metadata.json';
import MenuData from '@/assets/data/menu.json';

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
          <ul className="flex space-x-4">
            {/* <ThemeSwitch /> */}
            {menuData.menu.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
