const Footer = () => {
  return (
    <footer className="pt-16 pb-6">
      <p className="mx-auto max-w-[30ch] text-center md:max-w-[unset]">
        Copyright &copy; {new Date().getFullYear()}{' '}
        <a
          className="font-bold underline"
          href="https://github.com/nathan22x3"
          rel="noopener noreferrer"
          target="_blank"
        >
          nathan22x3
        </a>
        . Built with ❤️ and ☕.
      </p>
    </footer>
  );
};

export default Footer;
