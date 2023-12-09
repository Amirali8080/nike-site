function Button({
  children,
  icon,
  backgroundColor,
  textColor,
  borderColor,
  fullwidth,
}) {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border-[1px] ${
        backgroundColor ? backgroundColor : "bg-coral-red"
      } px-5 py-3 ${borderColor ? borderColor : ""} ${fullwidth && fullwidth}`}
    >
      <span
        className={`font-montserrat text-base leading-3 ${
          textColor ? textColor : "text-white-400"
        }  lg:text-lg`}
      >
        {children}
      </span>
      {icon && <img width={21} height={21} src={icon} />}
    </button>
  );
}

export default Button;
