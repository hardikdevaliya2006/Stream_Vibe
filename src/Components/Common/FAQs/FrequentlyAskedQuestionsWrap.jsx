import SecationHeader from "../Secation-Header/SecationHeader";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";

const FrequentlyAskedQuestionsWrap = () => {
  return (
    <section className="MoviesGenerWrap  my-10">
      <div className="HeaderTextAndNavigotr flex w-full flex-col md:flex-row md:justify-end md:items-center gap-4">
        <div className="HeaderText w-full lg:w-[75%]">
          <SecationHeader
            mainText={"Explore our wide variety of categories"}
            subText={
              "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new."
            }
          />
        </div>
        <div className="btn flex md:justify-end h-fit md:w-[25%]">
          <div className="actionBtn cursor-pointer flex justify-center items-center gap-2 text-white bg-red-45 w-fit px-3 py-2 rounded-md">
            <button className="font-semibold cursor-pointer">
              Ask a Question
            </button>
          </div>
        </div>
      </div>
      <div className="FrequentlyAskedQuestions mt-5">
        <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestionsWrap;
