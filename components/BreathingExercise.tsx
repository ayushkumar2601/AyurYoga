// // "use client";
// // import { useState, useEffect } from "react";

// // const exercises = {
// //   box: { name: "Box Breathing", pattern: [4, 4, 4, 4], steps: ["Inhale", "Hold", "Exhale", "Hold"] },
// //   fourSevenEight: { name: "4-7-8 Breathing", pattern: [4, 7, 8], steps: ["Inhale", "Hold", "Exhale"] },
// //   alternate: { name: "Alternate Nostril Breathing", pattern: [4, 4, 4, 4], steps: ["Inhale (Left)", "Hold", "Exhale (Right)", "Hold"] },
// // };

// // export default function BreathingExercise() {
// //   const [selected, setSelected] = useState<keyof typeof exercises>("box");
// //   const [stepIndex, setStepIndex] = useState(0);
// //   const [timeLeft, setTimeLeft] = useState(exercises[selected].pattern[0]);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       if (timeLeft > 1) {
// //         setTimeLeft(timeLeft - 1);
// //       } else {
// //         const nextStep = (stepIndex + 1) % exercises[selected].steps.length;
// //         setStepIndex(nextStep);
// //         setTimeLeft(exercises[selected].pattern[nextStep]);
// //       }
// //     }, 1000);

// //     return () => clearInterval(timer);
// //   }, [timeLeft, stepIndex, selected]);

// //   return (
// //     <div className="flex flex-col items-center justify-center p-6">
// //       {/* Dropdown for selecting exercise */}
// //       <select
// //         value={selected}
// //         onChange={(e) => {
// //           const val = e.target.value as keyof typeof exercises;
// //           setSelected(val);
// //           setStepIndex(0);
// //           setTimeLeft(exercises[val].pattern[0]);
// //         }}
// //         className="mb-6 p-2 rounded-lg border bg-white text-black shadow"
// //       >
// //         {Object.keys(exercises).map((key) => (
// //           <option key={key} value={key}>
// //             {exercises[key as keyof typeof exercises].name}
// //           </option>
// //         ))}
// //       </select>

// //       {/* Breathing Circle */}
// //       <div
// //         className="w-40 h-40 rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition-all duration-1000 ease-in-out"
// //         style={{
// //           background: "rgba(255,255,255,0.2)",
// //           backdropFilter: "blur(8px)",
// //           transform: `scale(${1 + stepIndex * 0.2})`,
// //         }}
// //       >
// //         {exercises[selected].steps[stepIndex]}
// //       </div>

// //       {/* Timer */}
// //       <p className="mt-6 text-2xl font-semibold">{timeLeft}s</p>
// //     </div>
// //   );
// // }
// "use client";
// import { useState, useEffect } from "react";

// const exercises = {
//   box: { name: "Box Breathing", pattern: [4, 4, 4, 4], steps: ["Inhale", "Hold", "Exhale", "Hold"] },
//   fourSevenEight: { name: "4-7-8 Breathing", pattern: [4, 7, 8], steps: ["Inhale", "Hold", "Exhale"] },
//   alternate: { name: "Alternate Nostril", pattern: [4, 4, 4, 4], steps: ["Inhale (Left)", "Hold", "Exhale (Right)", "Hold"] },
// };

// export default function BreathingExercise() {
//   const [selected, setSelected] = useState<keyof typeof exercises>("box");
//   const [stepIndex, setStepIndex] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(exercises[selected].pattern[0]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (timeLeft > 1) {
//         setTimeLeft(timeLeft - 1);
//       } else {
//         const nextStep = (stepIndex + 1) % exercises[selected].steps.length;
//         setStepIndex(nextStep);
//         setTimeLeft(exercises[selected].pattern[nextStep]);
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeLeft, stepIndex, selected]);

//   return (
//     <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 w-64 flex flex-col items-center space-y-4">
//       {/* Dropdown */}
//       <select
//         value={selected}
//         onChange={(e) => {
//           const val = e.target.value as keyof typeof exercises;
//           setSelected(val);
//           setStepIndex(0);
//           setTimeLeft(exercises[val].pattern[0]);
//         }}
//         className="px-3 py-2 rounded-lg bg-gradient-to-r from-teal-400/30 to-purple-400/30 text-white text-sm font-semibold shadow-inner border border-white/20"
//       >
//         {Object.keys(exercises).map((key) => (
//           <option key={key} value={key} className="text-black">
//             {exercises[key as keyof typeof exercises].name}
//           </option>
//         ))}
//       </select>

//       {/* Breathing Circle */}
//       <div
//         className="w-24 h-24 rounded-full flex items-center justify-center text-base font-bold text-white shadow-lg transition-all duration-1000 ease-in-out bg-gradient-to-r from-teal-400/40 to-purple-400/40 backdrop-blur-md"
//         style={{
//           transform: `scale(${1 + (stepIndex % 2 === 0 ? 0.3 : 0)})`, // expand only on inhale/exhale
//         }}
//       >
//         {exercises[selected].steps[stepIndex]}
//       </div>

//       {/* Timer */}
//       <p className="text-lg font-semibold text-white drop-shadow">{timeLeft}s</p>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";

const exercises = {
  box: { name: "Box Breathing", pattern: [4, 4, 4, 4], steps: ["Inhale", "Hold", "Exhale", "Hold"] },
  fourSevenEight: { name: "4-7-8 Breathing", pattern: [4, 7, 8], steps: ["Inhale", "Hold", "Exhale"] },
  alternate: { name: "Alternate Nostril", pattern: [4, 4, 4, 4], steps: ["Inhale (Left)", "Hold", "Exhale (Right)", "Hold"] },
};

export default function BreathingExercise() {
  const [selected, setSelected] = useState<keyof typeof exercises>("box");
  const [stepIndex, setStepIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(exercises[selected].pattern[0]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      if (timeLeft > 1) {
        setTimeLeft(timeLeft - 1);
      } else {
        const nextStep = (stepIndex + 1) % exercises[selected].steps.length;
        setStepIndex(nextStep);
        setTimeLeft(exercises[selected].pattern[nextStep]);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, stepIndex, selected, running]);

  const progress =
    ((exercises[selected].pattern[stepIndex] - timeLeft) /
      exercises[selected].pattern[stepIndex]) *
    100;

  return (
    <div className="relative p-4 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 w-64 flex items-center space-x-4">
      {/* Left Content */}
      <div className="flex flex-col items-center space-y-3 flex-1">
        {/* Dropdown */}
        <select
          value={selected}
          onChange={(e) => {
            const val = e.target.value as keyof typeof exercises;
            setSelected(val);
            setStepIndex(0);
            setTimeLeft(exercises[val].pattern[0]);
          }}
          className="px-3 py-1 rounded-lg bg-gradient-to-r from-teal-400/30 to-purple-400/30 text-white text-xs font-semibold shadow-inner border border-white/20"
        >
          {Object.keys(exercises).map((key) => (
            <option key={key} value={key} className="text-black">
              {exercises[key as keyof typeof exercises].name}
            </option>
          ))}
        </select>

        {/* Breathing Circle */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg transition-all duration-1000 ease-in-out bg-gradient-to-r from-teal-400/40 to-purple-400/40 backdrop-blur-md"
          style={{
            transform: `scale(${1 + (stepIndex % 2 === 0 ? 0.25 : 0)})`,
          }}
        >
          {exercises[selected].steps[stepIndex]}
        </div>

        {/* Timer */}
        <p className="text-sm font-semibold text-white drop-shadow">
          {timeLeft}s
        </p>

        {/* Start/Stop Button */}
        <button
          onClick={() => setRunning(!running)}
          className="px-3 py-1 rounded-lg bg-gradient-to-r from-green-400/30 to-red-400/30 text-white text-xs font-semibold border border-white/20 hover:scale-105 transition"
        >
          {running ? "Stop" : "Start"}
        </button>
      </div>

      {/* Progress Bar (Right Side) */}
      <div className="w-2 h-full rounded-full bg-white/20 overflow-hidden">
        <div
          className="h-full bg-gradient-to-b from-teal-400 to-purple-400 transition-all duration-1000"
          style={{ height: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
