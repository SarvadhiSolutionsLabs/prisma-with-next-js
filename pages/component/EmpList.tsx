import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchList, removeList } from "../../store/empSlice";
import ImageWithFallback from "./ImageWithFallback";

const EmpList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state: any) => ({
    list: state.emp.data,
  }));

  useEffect(() => {
    fetchRecord();
  }, []);

  const fetchRecord = async () => {
    dispatch(fetchList());
  };
  const deleteRecord = async (id: string) => {
    dispatch(removeList(id));
  };

  return (
    <div className="flex justify-center ">
      <div className="flex flex-col container max-w-md mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
        <ul className="flex flex-col divide-y w-full">
          {list.map((elem: any, index: number) => {
            return (
              <li className="flex flex-row" key={index}>
                <div className="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4">
                  <div className="flex flex-col w-15 h-15 items-center mr-4">
                    <a href="#" className="block relative">
                      <ImageWithFallback img={elem.profile} />
                      {/* <Image
                        src={`${process.env.PUBLIC_URL}static/images/${
                          elem.profile ? elem.profile : "noUser.png"
                        }`}
                        alt="me"
                        width={50}
                        height={50}
                        className="mx-auto object-cover rounded-full h-10 w-10"
                        loading="lazy"
                        loader={myLoader}
                        
                      /> */}
                    </a>
                  </div>
                  <div className="flex-1 pl-1">
                    <div className="font-medium dark:text-white">
                      {elem.name}
                    </div>
                    <div className="text-gray-600 dark:text-gray-200 text-xs">
                      {elem.language}
                    </div>
                  </div>
                  <div className="flex flex-row justify-center">
                    <div className="text-gray-600 dark:text-gray-200 text-xs"></div>
                    <button
                      className="w-10 text-right flex justify-end"
                      onClick={() => {
                        deleteRecord(elem.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default EmpList;
