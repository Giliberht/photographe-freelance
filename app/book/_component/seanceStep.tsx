import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import steps from "@/lib/data/seanceStepsData";
import { Badge } from "@/components/ui/badge";

const ProcessusSeance = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl flex flex-col items-center mx-auto px-4">
        <Badge variant="outline" className="mb-4">
          Processus steps
        </Badge>
        <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight">
          Comment se déroule une séance ?
        </h2>
        <hr className="w-[360px] max-sm:w-[320px]  mb-14" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col w-[275px] items-center p-6 bg-white shadow-md rounded-lg border border-black/10 hover:shadow-md"
            >
              <FontAwesomeIcon
                icon={step.icon}
                className="text-[#aa5949] text-4xl mb-4"
              />
              <h3 className="text-xl text-center font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessusSeance;
