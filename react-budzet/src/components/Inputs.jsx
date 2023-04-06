import Button from "./Button";

const Inputs = ({
  nameInputId,
  nameInputPlaceholder,
  numberInputId,
  numberInputPlaceholder,
  buttonId
}) => {
  return (
    <div className="row">
      <div className="col-12 col-lg-6">
        <input
          className="form-control form-control-lg"
          id={nameInputId}
          type="text"
          placeholder={nameInputPlaceholder}
        />
      </div>
      <div className="col-4">
        <input
          className="form-control form-control-lg mt-2 mt-lg-0"
          id={numberInputId}
          type="number"
          placeholder={numberInputPlaceholder}
        />
      </div>
      <div className="col-2">
        <Button buttonId={buttonId} buttonValue="Dodaj" />
      </div>
    </div>
  );
};

export default Inputs;
