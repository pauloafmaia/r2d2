import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await fetch("https://r10d10.onrender.com/movies", {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    if (response.status == 201) {
      navigate("/");
    } else {
      <div
        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium">Sorry! Cannot create this movie</span>
      </div>;
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="p-4 flex justify-start items-center flex-wrap w-full text-white">
        <Icon
          id="back"
          className="cursor-pointer w-[50px] h-[50px]"
          onClick={() => {
            navigate("/");
          }}
          icon="material-symbols:arrow-back"
        />
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
          className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex justify-center"
        >
          CREATE
        </button>
      </form>
    </>
  );
}

export default Create;
