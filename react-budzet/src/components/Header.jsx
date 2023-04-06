import Image from "../assets/icons8-us-dollar-circled-100.png"


const Header = () => {
  return (
    <header className="text-center m-4">
      <img
        src={Image}
        alt="Dollar sign"
        className="img-thumbnail m-2"
      />
      <h1 className="m-4" id="balance">
        Wprowadź dane
      </h1>
    </header>
  );
};

export default Header;
