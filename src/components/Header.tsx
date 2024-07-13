import Link from 'next/link';
import Button from './Button';

type Props = {
  menu: MenuDataType;
  metadata: MetaDataType;
};
const Header = ({ menu, metadata }: Props) => {
  return (
    <header className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
        <h1 className="text-2xl font-bold">
          <Link href="/">
            <span>{metadata.service_name}</span>
          </Link>
        </h1>
        <nav>
          <ul className="flex items-center">
            {menu.data.map((item, index) => (
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
                  src="/images/icons/github-mark-white.svg"
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
