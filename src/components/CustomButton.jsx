const CustomButton = ({ title, select }) => {
  return (
    <button className="btn-ghost" onClick={select}>
      {title}
    </button>
  );
};

export default CustomButton;
