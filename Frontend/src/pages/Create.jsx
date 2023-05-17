import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

function Create() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, id) => {
    if (id) {
      const response = await fetch(`https://r10d10.onrender.com/movies/${id}`, {
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        method: "PUT",
      });
      if (response.status == 200) navigate("/");
    } else {
      const response = await fetch("https://r10d10.onrender.com/movies", {
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      if (response.status == 201) navigate("/");
    }
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
      <div className="p-3 w-full bg-dark-grey text-center text-white text-[15px] uppercase">
        <Link to={"https://www.disneyplus.com/pt-br/brand/star-wars"}>
          <h1>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</h1>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-auto relative flex-col justify-center items-center gap-4 max-w-screen-sm m-auto p-10"
      >
        <input
          placeholder="Name"
          className={`rounded-lg p-2 w-full ${
            errors.name && "outline outline-2 outline-red-600"
          }`}
          id="name"
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && (
          <span className="text-red-600">{errors.name.message}</span>
        )}
        <input
          className={`rounded-lg p-2 w-full ${
            errors.year && "outline outline-2 outline-red-600"
          }`}
          placeholder="Year"
          type="number"
          id="year"
          {...register("year", {
            valueAsNumber: true,
            required: "Year is required",
            min: 1900,
            max: 2100,
          })}
        />
        {errors.name && (
          <span className="text-red-600">{errors.year.message}</span>
        )}
        <input
          className={`rounded-lg p-2 w-full ${
            errors.sequential && "outline outline-2 outline-red-600"
          }`}
          placeholder="Sequential"
          id="sequential"
          {...register("sequential", { required: "Sequential is required" })}
        />
        {errors.sequential && (
          <span className="text-red-600">{errors.sequential.message}</span>
        )}
        <select
          className={`rounded-lg p-2 w-full ${
            errors.trilogy && "outline outline-2 outline-red-600"
          }`}
          placeholder="Trilogy"
          id="trilogy"
          {...register("trilogy", { required: "Trilogy is required" })}
        >
          <option value="Classic">Classic</option>
          <option value="Prequel">Prequel</option>
          <option value="Sequel">Sequel</option>
          <option value="Spin-Off">Spin-Off</option>
        </select>
        {errors.trilogy && (
          <span className="text-red-600">{errors.trilogy.message}</span>
        )}
        <input
          className={`rounded-lg p-2 w-full ${
            errors.image && "outline outline-2 outline-red-600"
          }`}
          placeholder="Image URL"
          id="image"
          {...register("image", { required: "Image URL is required" })}
        />
        {errors.image && (
          <span className="text-red-600">{errors.image.message}</span>
        )}
        <input
          className={`rounded-lg p-2 w-full ${
            errors.image2 && "outline outline-2 outline-red-600"
          }`}
          placeholder="Image 2 URL"
          id="image2"
          {...register("image2", { required: "Image 2 URL is required" })}
        />
        {errors.image2 && (
          <span className="text-red-600">{errors.image2.message}</span>
        )}
        <input
          className={`rounded-lg p-2 w-full ${
            errors.synopsis && "outline outline-2 outline-red-600"
          }`}
          placeholder="Synopsis"
          type="text"
          id="synopsis"
          {...register("synopsis", { required: "Synopsis is required" })}
        />
        {errors.synopsis && (
          <span className="text-red-600">{errors.synopsis.message}</span>
        )}
        <input
          className={`rounded-lg p-2 w-full ${
            errors.trailer && "outline outline-2 outline-red-600"
          }`}
          placeholder="Trailer"
          id="trailer"
          {...register("trailer", { required: "Trailer is required" })}
        />
        {errors.trailer && (
          <span className="text-red-600">{errors.trailer.message}</span>
        )}
        <button
          type="submit"
          className="bg-black text-white w-full rounded border-solid border-2
        border-white p-2 hover:bg-zinc-800 cursor-pointer mt-10 mb-10"
        >
          {id ? "UPDATE" : "CREATE"}
        </button>
      </form>

      <div className="w-full bg-dark-grey text-center text-white cursor-pointer">
        <footer>Star Wars API | R2D2 ©</footer>
      </div>
    </>
  );
}

export default Create;
