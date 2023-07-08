import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeDataRequest } from "../store/home/actions";
import { AiOutlineDelete } from "react-icons/ai";

const Home = () => {
  const dispatch = useDispatch();

  // const { isLoading, homePageData } = useSelector((store) => ({
  //   isLoading: store?.home?.loading,
  //   homePageData: store?.home?.homePageData,
  // }));

  const { isLoading, homePageData } = useSelector((store) => ({
    isLoading: store?.home?.loading,
    homePageData: store?.home?.homePageData,
  }));

  useEffect(() => {
    dispatch(getHomeDataRequest());
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <iframe
            src="https://giphy.com/embed/jAYUbVXgESSti"
            width="100%"
            height="100%"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="my-5">
            <h1 className="text-2xl font-medium text-center">Home</h1>

            <div className="mt-5">
              {homePageData?.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center justify-center"
                >
                  <p className="font-medium">{item?.id}.</p>
                  <p className="text-center">{item?.title}</p>
                  <AiOutlineDelete className="cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
