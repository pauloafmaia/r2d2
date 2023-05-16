import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const response = await fetch("https://r10d10.onrender.com/movies", {
      body: data,
      method: "POST",
    });

    console.log(response);
  };

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
      <div className="p-3 w-full bg-dark-grey text-center text-white">
        <Link to={"https://www.disneyplus.com/pt-br/brand/star-wars"}>
          <h1 className="text-white text-xl uppercase">
            All of your star wars movies now streaming on disney +
          </h1>
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input id="name" {...register("name")} />

        <label htmlFor="year">Year:</label>
        <input type="number" id="year" {...register("year")} />

        <label htmlFor="sequential">Sequential</label>
        <input type="number" id="sequential" {...register("sequential")} />

        <label htmlFor="trilogy">Trilogy:</label>
        <select id="trilogy" {...register("trilogy")}>
          <option value="Classic">Classic</option>
          <option value="Prequel">Prequel</option>
          <option value="Sequel">Sequel</option>
          <option value="Spin-Off">Spin-Off</option>
        </select>

        <label htmlFor="image">Image URL:</label>
        <input id="image" {...register("image")} />

        <input type="submit" />
      </form>
      <div className="w-full bg-dark-grey text-center text-white">
        <footer>Star Wars API | R2D2 ©</footer>
      </div>
    </>
  );
}

export default Create;
