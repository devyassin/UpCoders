"use client";
import { useAppSelector } from "@/store/store";
import Image from "next/image";
import { hearthEmpty, etoile } from "@/public/assets";
const Home = () => {
  const gigs: any = useAppSelector((state) => state.gigs.data);
  const statusGetAllGigs: any = useAppSelector(
    (state) => state.gigs.statusGetAllGigs
  );

  if (statusGetAllGigs === "loading")
    return <div className="text-white text-5xl">loading ....</div>;
  console.log(gigs.gigs);
  if (statusGetAllGigs === "succeeded")
    return (
      <div className="text-white text-5xl grid grid-cols-3 max-lg:grid-cols-2 max-lg:mx-16 max-sm:grid-cols-1 max-sm:mx-20  gap-16 mt-8 mx-10">
        {gigs.gigs.map((gig: any) => {
          return (
            <div className="bg-blue-dark-4 rounded-[20px] border border-white pb-4">
              {/* container 1 */}
              <div className="relative">
                {/* image */}
                <Image
                  src={gig.picture.fileUrl}
                  alt={gig.picture.fileKey}
                  className="h-[20vh] w-full rounded-t-[20px] border-b border-white"
                  width={1000}
                  height={1000}
                  quality={100}
                />
                <Image
                  src={hearthEmpty}
                  alt="hearth empty"
                  className="absolute cursor-pointer top-4 right-4 "
                  width={20}
                  height={20}
                />
              </div>
              {/* container 2 */}
              <div>
                <div className="flex justify-between pt-4 px-2 items-center">
                  {/* gig owner icon profile */}
                  <div className="flex items-center space-x-2">
                    <Image
                      className="rounded-full border border-white h-[25px] w-[25px]"
                      src={gig.user_id.picture.fileUrl}
                      alt={gig.user_id.picture.fileKey}
                      width={200}
                      height={200}
                    />
                    <p className="font-tajwal text-[12px]">
                      {gig.user_id.firstName}
                    </p>
                  </div>
                  {/* gig category */}
                  <h3 className="text-[14px] text-shadow-green">
                    {gig.category}
                  </h3>
                </div>
                {/*  */}
                <div className="font-tajwal text-[16px] pt-4 px-2 tracking-wide leading-6">
                  {gig.title}
                </div>
                {/* gig rating */}
                <div className="flex px-2 font-tajwal pt-2 space-x-1 items-center">
                  <Image
                    className="h-[17px] w-[18px]"
                    src={etoile}
                    alt="etoile"
                    width={200}
                    height={200}
                  />
                  <p className="text-[16px] text-shadow-green">
                    {gig.rating}.0
                  </p>
                  <p className="text-[16px] text-darkentwo">(0)</p>
                </div>

                {/* gig price */}
                <h1 className="text-[17px] text-light-green font-bold tracking-wide font-tajwal pt-4 px-2">
                  <span>From </span>
                  {gig.user_id.country}${gig.price}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    );
};

export default Home;
