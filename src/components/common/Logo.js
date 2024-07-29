const Logo = () => {
  return (
    <>
      <img
        className="uk-visible dark:uk-hidden w-[80px]"
        src="/images/logo.png"
        alt="Nerko"
        loading="lazy"
        style={{ width: 110 }}
      />
      <img
        className="uk-hidden dark:uk-visible"
        src="/images/logo.png"
        alt="Nerko"
        loading="lazy"
        style={{ width: 110 }}
      />
    </>
  );
};

export default Logo;
