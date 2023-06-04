import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const { name, price, recipe, category } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            recipe,
            category,
            image: imgUrl,
          };
          axiosSecure.post("/menu", newItem).then((data) => {
            if (data.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item Added Succesfully",
                showConfirmButton: false,
                timer: 1500,
              });
              reset()
            }
          });
        }
      });
  };

  console.log(errors);

  return (
    <div className="w-full">
      <SectionTitle subHeading={"What's New"} heading={"add an item"} />
      <div className="p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-5">
            <label className="label">
              <span className="label-text inter">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full  inter"
              {...register("name", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="flex my-5 gap-2">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text inter">Category*</span>
              </label>
              <select
                className="select select-bordered inter"
                {...register("category", { required: true })}
              >
                <option disabled selected>
                  Pick one
                </option>
                <option className="inter">Pizza</option>
                <option className="inter">Soup</option>
                <option className="inter">Salad</option>
                <option className="inter">Dessert</option>
                <option className="inter">Drinks</option>
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text inter">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered w-full  inter"
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div className="form-control my-5">
            <label className="label">
              <span className="label-text inter">Recipe Details*</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24 inter p-4"
              placeholder="Recipe Details"
              {...register("recipe", { required: true })}
            ></textarea>
          </div>
          <div className="form-control w-full max-w-xs my-5">
            <input
              type="file"
              className="file-input file-input-bordered w-full inter"
              {...register("image", { required: true })}
            />
          </div>
          <input
            type="submit"
            value={"Add Item"}
            className="btn btn-sm inter"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
