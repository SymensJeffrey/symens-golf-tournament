import SectionTitle from "../Common/SectionTitle";

const Features = () => {

  const events = [
    { year: 2025, title: "????????????????", text: "Location: Mississippi National, Red Wing", bgColor: "bg-dark", textColor: "text-white", position: "right" },
    { year: 2024, title: "Steph Hill, Bryce Symens, Breanna Symens, Drew", text: "Location: Links at Northfork, Ramsey", bgColor: "bg-primary/[0.8]", textColor: "text-white", position: "left" },
    { year: 2023, title: "Steph Hill, Bryce Symens, Jacob Symens, Joshua Symens, Jenna Kelly", text: "Location: Bull Rush, Rush City", bgColor: "bg-dark", textColor: "text-white", position: "right" },
    { year: 2022, title: "Jeff Hill, Dean Symens, Julie, Bryce Symens", text: "Location: Bunker Hills, Coon Rapids", bgColor: "bg-primary/[0.8]", textColor: "text-white", position: "left" },
    { year: 2021, title: "Joshua Symens, Jenna Kelly, Ally Hill", text: "Location: The Preserve Golf Course,  Pequot Lakes", bgColor: "bg-dark", textColor: "text-white", position: "right" },
    { year: 2020, title: "Jeffrey Symens, Ally Hill, Breanna Symens, Dean Symens", text: "Location: The Preserve Golf Course,  Pequot Lakes", bgColor: "bg-primary/[0.8]", textColor: "text-white", position: "left" },
    { year: 2019, title: "Jacob Symens, Josh Kelly, Dean Symens", text: "Location: The Legand, Biwabik", bgColor: "bg-dark", textColor: "text-white", position: "right" },
    { year: 2018, title: "Steph Hill, Jeff Hill, Jeffrey Symens, Bryce Symens", text: "Location: Grand National, Hinckley ", bgColor: "bg-primary/[0.8]", textColor: "text-white", position: "left" },
    { year: 2017, title: "Ally Hill, Steph Hill, Jeffrey Symens", text: "Location: Cold Water Canyon, Wisconsin Dells", bgColor: "bg-dark", textColor: "text-white", position: "right" },
  ];

  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Past Champions"
            paragraph=""
            center
          />
          <div className="container mx-auto w-full h-full p-10">
            <div className="relative wrap overflow-hidden h-full">
              <div className="border-2 absolute border-opacity-20 h-full left-1/2 transform -translate-x-1/2"></div>

              {events.map((event) => (
                <div
                  key={event.year}
                  className={`mb-8 flex justify-between items-center w-full ${event.position === "left" ? "flex-row-reverse" : ""}`}
                >
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-white shadow-xl w-20 h-8 rounded-md">
                    <h1 className="mx-auto font-semibold text-lg text-dark">{event.year}</h1>
                  </div>
                  <div className={`order-1 ${event.bgColor} rounded-lg shadow-xl w-5/12 px-6 py-4`}>
                    <h3 className={`mb-3 font-bold ${event.textColor} text-xl`}>{event.title}</h3>
                    <p className={`text-sm leading-snug tracking-wide ${event.textColor}`}>{event.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
