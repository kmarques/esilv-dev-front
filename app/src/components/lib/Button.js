function Button({ variant = "squared", style = {}, title, onClick, img }) {
  //if (!props.style) props.style = {};
  // <=> props.style = props.style ? props.style : {}
  // <=> props.style = props.style ?? {}
  // <=> props.style ??= {};

  switch (variant) {
    case "rounded":
      style.borderRadius = 5;
      break;
    case "round":
      style.borderRadius = "50%";
      style.height = 30;
      style.width = 30;
      style.overflow = "hidden";
      break;
    case "squared":
      style.borderRadius = 0;
      break;
  }

  return (
    <button onClick={onClick} style={style}>
      {title}
      {variant === "round" && img && <img src={img} />}
    </button>
  );
}

export default Button;
