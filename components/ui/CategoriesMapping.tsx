import { Categorys } from "@/constants/domaineExpertisme";

type Props = {
  sliderRef: React.MutableRefObject<HTMLDivElement | null>;
};

const CategoriesMapping = ({ sliderRef }: Props) => {
  return (
    <div
      ref={sliderRef}
      className="w-[75vw] max-xl:w-[85vw] space-x-14 max-sm:text-[12px] text-[16px] max-sm:w-[100vw]  font-tapestry scrollbar-hide  h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
    >
      {Categorys.map((category, i) => {
        return (
          <h2 className="inline-block px-4 pb-2 text-[#CAD7E9]" key={i}>
            {category}
          </h2>
        );
      })}
    </div>
  );
};

export default CategoriesMapping;
