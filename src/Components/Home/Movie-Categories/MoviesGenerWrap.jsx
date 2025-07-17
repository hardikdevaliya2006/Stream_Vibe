import SecationHeader from "../../Common/Secation-Header/SecationHeader";
import Navigator from "./Navigator";

export const MoviesGenerWrap = () => {
  return (
    <section className="MoviesGenerWrap my-10">
      <div className="HeaderTextAndNavigotr flex w-full">
        <div className="HeaderText w-full lg:w-[75%]">
          <SecationHeader
            mainText={"Explore our wide variety of categories"}
            subText={
              "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new."
            }
          ></SecationHeader>
        </div>
        <div className="Navigotr w-0 hidden lg:flex lg:w-[25%]">
          <Navigator></Navigator>
        </div>
      </div>
    </section>
  );
};
