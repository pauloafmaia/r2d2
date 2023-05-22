import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams([]);

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://r10d10.onrender.com/movies/${id}`).then((response) => {
      response.json().then((json) => setMovie(json));
    });
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await fetch(`https://r10d10.onrender.com/movies/${id}`, {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: "PUT",
    });
    if (response.status == 200) {
      navigate("/");
    } else {
      <div
        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium">Sorry! Cannot update this movie</span>
      </div>;
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-auto relative flex-col justify-center items-center gap-4 max-w-screen-sm m-auto p-10"
      >
        <input
          defaultValue={movie.name}
          className={`rounded-lg p-2 w-full ${
            errors.name && "outline outline-2 outline-red-600"
          }`}
          id="name"
          {...register("name", {
            required: "Name is required",
          })}
        />
        <input
          className={`rounded-lg p-2 w-full ${
            errors.year && "outline outline-2 outline-red-600"
          }`}
          defaultValue={movie.year}
          type="number"
          id="year"
          {...register("year", {
            valueAsNumber: true,
            required: "Year is required",
            min: 1900,
            max: 2100,
          })}
        />
        <input
          className={`rounded-lg p-2 w-full ${
            errors.sequential && "outline outline-2 outline-red-600"
          }`}
          defaultValue={movie.sequential}
          id="sequential"
          {...register("sequential", { required: "Sequential is required" })}
        />
        <select
          className={`rounded-lg p-2 w-full ${
            errors.trilogy && "outline outline-2 outline-red-600"
          }`}
          defaultValue={movie.trilogy}
          id="trilogy"
          {...register("trilogy", { required: "Trilogy is required" })}
        >
          <option value="Classic">Classic</option>
          <option value="Prequel">Prequel</option>
          <option value="Sequel">Sequel</option>
          <option value="Spin-Off">Spin-Off</option>
        </select>
        <input
          className={`rounded-lg p-2 w-full ${
            errors.image && "outline outline-2 outline-red-600"
          }`}
          defaultValue={movie.image}
          id="image"
          {...register("image", { required: "Image URL is required" })}
        />
        <input
          className={`rounded-lg p-2 w-full ${
            errors.image2 && "outline outline-2 outline-red-600"
          }`}
          defaultValue={movie.image2}
          id="image2"
          {...register("image2", { required: "Image 2 URL is required" })}
        />
        <input
          className={`rounded-lg p-2 w-full ${
            errors.synopsis && "outline outline-2 outline-red-600"
          }`}
          defaultValue={movie.synopsis}
          type="text"
          id="synopsis"
          {...register("synopsis", { required: "Synopsis is required" })}
        />
        <input
          className={`rounded-lg p-2 w-full ${
            errors.trailer && "outline outline-2 outline-red-600"
          }`}
          defaultValue={movie.trailer}
          id="trailer"
          {...register("trailer", { required: "Trailer is required" })}
        />
        <button
          type="submit"
          className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex justify-center"
        >
          UPDATE
        </button>
      </form>
    </>
  );
}

export default Update;
