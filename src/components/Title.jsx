function Title({ children, className }) {
  return (
    <h1
      className={`text-2xl sm:text-3xl lg:text-6xl font-onep uppercase ${className}`}
    >
      {children}
    </h1>
  );
}

export default Title;
