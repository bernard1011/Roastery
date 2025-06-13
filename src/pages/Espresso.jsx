import Card from "../components/Card.jsx"

const Espresso = () => {
    return (
      <>
        <div className="bg-[url(../background.webp)] h-screen bg-size-[400%]">
          <header className="flex justify-center">
            <article
              className="bg-gray-700/20 backdrop-blur-xl backdrop-filter border border-gray-500 text-white  
                p-2 mt-3 rounded-xl shadow-xl text-md text-center"
            >
              Lots updated on 21.03.25
            </article>
          </header>
          <main>
            <Card/>
          </main>
        </div>
      </>
    );
}

export default Espresso