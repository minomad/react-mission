function Button({ children, color, type = 'button' }) {
  let backgroundColor = '';

  if (color === 'primary') {
    backgroundColor = 'bg-primary';
  } else if (color === 'secondary') {
    backgroundColor = 'bg-secondary';
  } else if (color === 'disabled') {
    backgroundColor = 'bg-disabledColor';
  }

  const buttonStyle = `w-[200px] h-10 ${backgroundColor} text-white font-bold rounded-lg`;

  return (
    <button type={type} className={buttonStyle}>
      {children}
    </button>
  );
}

export default Button;
