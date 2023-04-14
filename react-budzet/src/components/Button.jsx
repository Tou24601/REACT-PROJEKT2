const Button = ({buttonValue, handleClick, buttonId}) => {
  return (
    <div className="col-2">
      <button
        type="button"
        className="btn btn-primary mt-2 mt-lg-0 me-4 me-xl-0"
        onClick={handleClick}
        id={buttonId}
      >
        {buttonValue}
      </button>
    </div>
  );
};

export default Button;
