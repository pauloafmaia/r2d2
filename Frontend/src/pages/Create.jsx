import { useForm } from "react-hook-form";

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

  return (
    <>
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
      <footer className="rounded-lg shadow dark:bg-black m-4 text-center text-white">
        Star Wars API
      </footer>
    </>
  );
}

export default Create;
