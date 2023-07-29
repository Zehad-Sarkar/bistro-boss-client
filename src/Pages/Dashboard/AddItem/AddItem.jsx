import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosInterceptor/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const AddItem = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url;
          const { recipeName, category, price, details } = data;
          const newItem = {
            recipeName,
            category,
            price: parseFloat(price),
            image: imgURL,
            details,
          };
          axiosSecure.post("/addNewItem", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your item has been added",
                showConfirmButton: false,
                timer: 1000,
              });
            }
          });
          // console.log(newItem);
        }
      });
  };

  return (
    <div className="w-full">
      <SectionTitle subHeading="What's New" heading="Add A Item" />
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <div className=" form-control">
          <label htmlFor="name">Recipe Name</label>
          <input
            type="text"
            {...register("recipeName", { required: true })}
            placeholder="recipe name"
            className="px-3 py-1 border"
          />
        </div>
        <div className="grid items-center justify-center grid-cols-2 gap-6 mt-2">
          <div className=" form-control">
            <label htmlFor="category">Recipe Category</label>
            <select
              {...register("category")}
              defaultValue="Pick One"
              className="px-3 py-1 border"
            >
              <option defaultValue="Pick One" disabled>
                select one
              </option>
              <option>salad</option>
              <option>pizza</option>
              <option>soup</option>
              <option>drink</option>
              <option>dessert</option>
            </select>
          </div>
          <div className="mt-2 form-control">
            <label htmlFor="price">Recipe Price</label>
            <input
              type="number"
              {...register("price")}
              placeholder="recipe price"
              className="px-3 py-1 border"
            />
          </div>
        </div>
        <div className="mt-2 form-control">
          <label htmlFor="price">Recipe Details</label>
          <textarea
            type="text"
            {...register("details")}
            placeholder="recipe details"
            cols="20"
            rows="5"
            className="px-3 py-1 border resize-none"
          />
        </div>
        <div className="mt-2 form-control">
          <label htmlFor="price">Recipe Photo</label>
          <input
            type="file"
            {...register("image")}
            className="px-3 py-1 border resize-none"
          />
        </div>
        <input
          className="mt-2 btn btn-sm btn-primary"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
