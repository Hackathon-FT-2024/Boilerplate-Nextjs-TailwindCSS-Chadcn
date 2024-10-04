import TopNav from "./topNav";

import CarouselHomePage from "./carouselHomePage";

export default function Home() {
  return (
    <>
      <TopNav />
      <div className="w-auto h-screen">
        <div className="mx-auto h-72 mt-12 w-1/2">
          <h1 className="text-center font-semibold text-8xl pb-4">
            Text text text
          </h1>{" "}
          <h1 className="text-center text-xl">
            Une mitochondrie est un organite, possédant toutes les
            caractéristiques d'un organisme procaryote, entourée d'une double
            membrane composée chacune d'une double couche phospholipidique, et
            retrouvée chez la plupart des cellules eucaryotes.
          </h1>
        </div>
        <div className="container mx-auto">
          {" "}
          <CarouselHomePage />
        </div>
      </div>
    </>
  );
}
