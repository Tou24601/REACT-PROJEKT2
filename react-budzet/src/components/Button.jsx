const Button = ({buttonValue, handleClick}) => {
  return (
    <div className="col-2">
      <button
        type="button"
        className="btn btn-primary mt-2 mt-lg-0 me-4 me-xl-0"
        onClick={handleClick}
      >
        {buttonValue}
      </button>
    </div>
  );
};

export default Button;
