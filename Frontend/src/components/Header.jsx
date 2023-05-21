import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-center items-center pt-6 pb-6">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
          alt=""
          className="m-auto w-[180px] h-[80px] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </>
  );
}

export default Header;
