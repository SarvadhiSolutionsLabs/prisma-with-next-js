import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList, uploadFile } from "../store/empSlice";
import EmpList from "./component/empList";

export default function Emp() {
  const dispatch = useDispatch();
  const [formData, setFormData]: any = useState({
    name: "",
    country: "",
    gender: "",
    language: "",
    bio: "",
    profile: "",
  });
  const handelChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    const newFormData = { ...formData };

    if (name === "language") {
      if (newFormData.language) {
        let arraySplit = newFormData.language.split(", ");
        if (arraySplit.includes(value)) {
          arraySplit = arraySplit.filter((o: any) => o !== value);
        } else {
          arraySplit.push(value);
        }
        newFormData.language = arraySplit ? arraySplit.join(", ") : "";
      } else {
        newFormData.language = value;
      }
    } else if (name === "profile") {
      newFormData[name] = e.target.files[0];
    } else {
      newFormData[name] = e.target.value;
    }
    setFormData(newFormData);
  };
  const saveData = async (e: any) => {
    e.preventDefault();
    if (formData.profile) {
      uploadToServer();
    } else {
      addData();
    }
  };
  const uploadToServer = async () => {
    const body = new FormData();
    body.append("file", formData.profile);
    const response = await dispatch(uploadFile(body));
    if (response?.status === 201) {
      addData(response?.data?.file);
    }
  };
  const addData = (file: any = "") => {
    dispatch(
      addList({
        ...formData,
        profile: file,
      })
    );
    setFormData({
      name: "",
      country: "",
      gender: "",
      language: "",
      bio: "",
      profile: "",
    });
  };
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6 mt-5">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <fieldset>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter name"
                      onChange={handelChange}
                      value={formData.name}
                    />
                  </fieldset>
                  <fieldset>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={formData.country}
                      onChange={handelChange}
                    >
                      <option value="">Select country</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Mexico">Mexico</option>
                      <option value="India">India</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Japan">Japan</option>
                      <option value="Rasia">Rasia</option>
                    </select>
                  </fieldset>
                  <fieldset>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>

                    <div className="flex items-start">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="gender"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          value="Male"
                          onChange={handelChange}
                          checked={formData.gender === "Male"}
                        />
                        <label
                          htmlFor="push-everything"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Male
                        </label>
                      </div>
                      <div className="flex items-center ml-5">
                        <input
                          id="push-email"
                          name="gender"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          value="Female"
                          onChange={handelChange}
                          checked={formData.gender === "Female"}
                        />
                        <label
                          htmlFor="push-email"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      aria-hidden="true"
                    >
                      Language
                    </label>
                    <div className="flex items-start">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="react"
                            name="language"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            value="React Js"
                            onChange={handelChange}
                            checked={formData.language.includes("React Js")}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="react"
                            className="font-medium text-gray-700"
                          >
                            React JS
                          </label>
                        </div>
                      </div>
                      <div className="flex items-start ml-5">
                        <div className="flex items-center h-5">
                          <input
                            id="node"
                            name="language"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            value="Node Js"
                            onChange={handelChange}
                            checked={formData.language.includes("Node Js")}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="node"
                            className="font-medium text-gray-700"
                          >
                            Node Js
                          </label>
                        </div>
                      </div>
                      <div className="flex items-start ml-5">
                        <div className="flex items-center h-5">
                          <input
                            id="next"
                            name="language"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            value="Next Js"
                            onChange={handelChange}
                            checked={formData.language.includes("Next Js")}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="next"
                            className="font-medium text-gray-700"
                          >
                            Next Js
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <div>
                    <label
                      htmlFor="bio"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bio
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="bio"
                        name="bio"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="write short bio"
                        value={formData.bio}
                        onChange={handelChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cover photo
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="profile"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="profile"
                              name="profile"
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={handelChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    onClick={saveData}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="md:col-span-1">
            <EmpList />
          </div>
        </div>
      </div>
    </>
  );
}
