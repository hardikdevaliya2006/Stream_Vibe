import SecationHeader from '../Secation-Header/SecationHeader'
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions'

const FrequentlyAskedQuestionsWrap = () => {
  return (
    <section className="FrequentlyAskedQuestionsWrap pb-4 my-10">
      <div className="flex w-full">
        <div className="HeaderText w-full">
          <SecationHeader
            mainText={
              "Frequently Asked Questions"
            }
            subText={
              "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
            }
          />
        </div>
      </div>
      <div className="FrequentlyAskedQuestions mt-5">
        <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
      </div>
    </section>
  )
}

export default FrequentlyAskedQuestionsWrap