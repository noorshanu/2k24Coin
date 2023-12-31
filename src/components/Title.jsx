function Title({ children, className }) {
  return (
    <h1
      className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-onep uppercase ${className}`}
    >
      {children}
    </h1>
  );
}

export default Title;
