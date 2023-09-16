function App() {
  return (
    <>
      <main className={"min-h-screen grid place-items-center bg-bg-gray"}>
        <div className={"max-w-sm mx-auto font-Karla lg:grid lg:grid-cols-2 lg:min-w-[39.625rem]"}>
          <section className={"bg-white mx-[2.25rem] px-6 rounded-t-lg py-[1.7rem] lg:col-span-full shadow-2xl lg:mx-0 lg:px-10 lg:py-[2.46rem] lg:leading-none lg:space-y-0"}>
            <h1 className={"text-[1.24rem] text-cyan font-semibold lg:text-[1.48rem] lg:pt-1 pb-[1.30rem] lg:pb-0"}>Join our community</h1>
            <h3 className={"text-[0.938rem] text-bright-yellow font-medium leading-[1.3rem] lg:text-[18px] lg:pt-7 pb-[1.1rem] lg:pb-0"}>30-day, hassle-free money back guarantee</h3>
            <p className={"text-gray-400 text-[0.875rem] font-light leading-[1.6rem] lg:text-[16px] lg:pt-[.6rem]"}>
              Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.
            </p>
          </section>
          <section className={"bg-cyan mx-[2.25rem] px-6 py-5 lg:mx-0 lg:px-10 lg:py-[2.12rem] lg:rounded-bl-lg"}>
            <h2 className={"text-white/90  pb-2 text-[1.13rem] font-medium pt-1"}>Monthly Subscription</h2>

            <div className={"flex items-center lg:pt-[.1rem]"}>
              <span className={"text-white/90 font-medium text-[2rem]"}>$29</span>
              <span className={"pl-3 text-white/50 font-thin"}>per month</span>
            </div>

            <p className={"text-white/90 font-thin text-[1.02rem]"}>Full access for less than $1 a day</p>
            <button className={"mt-7 bg-bright-yellow w-full py-3 text-white rounded-md mb-1 shadow-xl"}>Sign Up</button>
          </section>
          <section className={"bg-light-cyan mx-[2.25rem] px-6 py-5 rounded-b-lg lg:mx-0 lg:px-10 lg:py-[2.12rem] lg:rounded-none lg:rounded-br-lg"}>
            <h2 className={"text-white/90 text-[1.13rem] lg:font-medium pt-1"}>Why Us</h2>
            <ul className={"pt-4 text-[0.875rem] text-white/60 font-light leading-5"}>
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
