const Option = ({ hobby, handelOnClick }) => {
  const { id, title, url } = hobby;
  return (
    <div className="option" data-id={id} onClick={handelOnClick}>
      <h2>{title}</h2>
      <img src={url} alt={title} />
    </div>
  );
};

export default Option;
