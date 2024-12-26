/*
interface WizardProps {
  onOpenForm: () => void;
  memory: string;
  data: { co2e: number; liters: number; hours: number };
  icons: { src: string; label: string }[];
}

const Wizard = ({ onOpenForm, memory, data, icons }: WizardProps) => {
  return (
    <div className="w-72 border-2 border-green-500 rounded-lg overflow-hidden shadow-md bg-white">
      <div
        className="h-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/forest.jpg')" }}
      ></div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg text-gray-800 mb-2">Make a Difference!</h3>
        <p className="text-sm text-gray-700 mb-2">
          When buying this {memory} phone you save{" "}
          <span className="text-red-500 font-bold">{data.co2e}</span> <b>kg</b> of CO₂e.
        </p>
        <p className="font-semibold text-gray-800 mb-2">It is same than use of:</p>
        <div className="flex justify-center gap-6 mb-4">
          {icons.map((icon, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={icon.src} alt={`${icon.label} icon`} className="w-8 h-8 mb-1" />
              <span className="text-red-500 font-bold text-sm">
                {icon.label === "Km"
                  ? data.liters
                  : icon.label === "Hours"
                  ? data.hours
                  : "N/A"}              
              </span>
              <span className="text-xs text-gray-600">{icon.label}</span>
            </div>
          ))}
        </div>
        <button
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-sm hover:bg-green-600 whitespace-nowrap text-sm"
          onClick={onOpenForm}
        >
          Give EMAIL to receive CO₂ CREDITS
        </button>
      </div>
    </div>
  );
};

export default Wizard;
*/
interface WizardProps {
  onOpenForm: () => void;
  memory: string;
  data: { co2e: number; liters: number; hours: number };
  icons: { src: string; label: string }[];
}

const Wizard = ({ onOpenForm, memory, data, icons }: WizardProps) => {
  return (
    <div className="w-72 border-2 border-green-500 rounded-lg overflow-hidden shadow-md bg-white">
      <div
        className="h-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/forest.jpg')" }}
      ></div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg text-gray-800 mb-2">Make a Difference!</h3>
        <p className="text-sm text-gray-700 mb-2">
          When buying this {memory} phone you save {" "}
          <span className="text-red-500 font-bold">{data.co2e}</span> <b>kg</b> of CO₂e.
        </p>
        <p className="font-semibold text-gray-800 mb-2">It is same than use of:</p>
        <div className="flex justify-center gap-6 mb-4">
          {icons.map((icon, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={icon.src}
                alt={`${icon.label} icon`}
                className="w-8 h-8 mb-1"
              />
              <span className="text-red-500 font-bold text-sm">
                {
                  icon.label === "Km"
                    ? data.liters
                    : icon.label === "Hours"
                    ? data.hours
                    : "N/A" // Fallback for unexpected labels
                }
              </span>
              <span className="text-xs text-gray-600">{icon.label}</span>
            </div>
          ))}
        </div>
        <button
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-sm hover:bg-green-600 whitespace-nowrap text-sm"
          onClick={onOpenForm}
        >
          Give EMAIL to receive CO₂ CREDITS
        </button>
      </div>
    </div>
  );
};

export default Wizard;