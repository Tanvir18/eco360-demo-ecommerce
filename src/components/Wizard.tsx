// interface WizardProps {
//     onOpenForm: () => void;
//   }
  
//   const Wizard = ({ onOpenForm }: WizardProps) => {
//     return (
//       <div className="w-72 border-2 border-green-500 rounded-lg overflow-hidden shadow-md bg-white">
//         <div
//           className="h-32 bg-cover bg-center"
//           style={{ backgroundImage: "url('/img/forest.jpg')" }}
//         ></div>
//         <div className="p-4 text-center">
//           <h3 className="font-bold text-lg text-gray-800 mb-2">Make a Difference!</h3>
//           <p className="text-sm text-gray-700 mb-2">
//             When buying this renewed phone you save{" "}
//             <span className="text-red-500 font-bold">30</span> <b>kg</b> of CO₂e.
//           </p>
//           <p className="font-semibold text-gray-800 mb-2">It is same than use of:</p>
//           <div className="flex justify-center gap-6 mb-4">
//             <div className="flex flex-col items-center">
//               <img src="/img/fire.png" alt="Fire icon" className="w-8 h-8 mb-1" />
//               <span className="text-red-500 font-bold text-sm">13</span>
//               <span className="text-xs text-gray-600">Liters</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <img src="/img/time.png" alt="Clock icon" className="w-8 h-8 mb-1" />
//               <span className="text-red-500 font-bold text-sm">65</span>
//               <span className="text-xs text-gray-600">Hours</span>
//             </div>
//           </div>
//           <button
//             className="w-full bg-green-500 text-white font-semibold py-2 rounded-sm hover:bg-green-600 whitespace-nowrap text-sm"
//             onClick={onOpenForm}
//           >
//             Give EMAIL to receive CO₂ CREDITS
//           </button>
//         </div>
//       </div>
//     );
//   };
  
//   export default Wizard;
  

interface WizardProps {
  onOpenForm: () => void;
  memory: string;
  data: { co2e: number; liters: number; hours: number };
}

const Wizard = ({ onOpenForm, memory, data }: WizardProps) => {
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
          <div className="flex flex-col items-center">
            <img src="/img/fire.png" alt="Fire icon" className="w-8 h-8 mb-1" />
            <span className="text-red-500 font-bold text-sm">{data.liters}</span>
            <span className="text-xs text-gray-600">Liters</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/img/time.png" alt="Clock icon" className="w-8 h-8 mb-1" />
            <span className="text-red-500 font-bold text-sm">{data.hours}</span>
            <span className="text-xs text-gray-600">Hours</span>
          </div>
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
