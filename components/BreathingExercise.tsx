// // // // // // "use client";
// // // // // // import { useState, useEffect } from "react";

// // // // // // const exercises = {
// // // // // //   box: { name: "Box Breathing", pattern: [4, 4, 4, 4], steps: ["Inhale", "Hold", "Exhale", "Hold"] },
// // // // // //   fourSevenEight: { name: "4-7-8 Breathing", pattern: [4, 7, 8], steps: ["Inhale", "Hold", "Exhale"] },
// // // // // //   alternate: { name: "Alternate Nostril Breathing", pattern: [4, 4, 4, 4], steps: ["Inhale (Left)", "Hold", "Exhale (Right)", "Hold"] },
// // // // // // };

// // // // // // export default function BreathingExercise() {
// // // // // //   const [selected, setSelected] = useState<keyof typeof exercises>("box");
// // // // // //   const [stepIndex, setStepIndex] = useState(0);
// // // // // //   const [timeLeft, setTimeLeft] = useState(exercises[selected].pattern[0]);

// // // // // //   useEffect(() => {
// // // // // //     const timer = setInterval(() => {
// // // // // //       if (timeLeft > 1) {
// // // // // //         setTimeLeft(timeLeft - 1);
// // // // // //       } else {
// // // // // //         const nextStep = (stepIndex + 1) % exercises[selected].steps.length;
// // // // // //         setStepIndex(nextStep);
// // // // // //         setTimeLeft(exercises[selected].pattern[nextStep]);
// // // // // //       }
// // // // // //     }, 1000);

// // // // // //     return () => clearInterval(timer);
// // // // // //   }, [timeLeft, stepIndex, selected]);

// // // // // //   return (
// // // // // //     <div className="flex flex-col items-center justify-center p-6">
// // // // // //       {/* Dropdown for selecting exercise */}
// // // // // //       <select
// // // // // //         value={selected}
// // // // // //         onChange={(e) => {
// // // // // //           const val = e.target.value as keyof typeof exercises;
// // // // // //           setSelected(val);
// // // // // //           setStepIndex(0);
// // // // // //           setTimeLeft(exercises[val].pattern[0]);
// // // // // //         }}
// // // // // //         className="mb-6 p-2 rounded-lg border bg-white text-black shadow"
// // // // // //       >
// // // // // //         {Object.keys(exercises).map((key) => (
// // // // // //           <option key={key} value={key}>
// // // // // //             {exercises[key as keyof typeof exercises].name}
// // // // // //           </option>
// // // // // //         ))}
// // // // // //       </select>

// // // // // //       {/* Breathing Circle */}
// // // // // //       <div
// // // // // //         className="w-40 h-40 rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition-all duration-1000 ease-in-out"
// // // // // //         style={{
// // // // // //           background: "rgba(255,255,255,0.2)",
// // // // // //           backdropFilter: "blur(8px)",
// // // // // //           transform: `scale(${1 + stepIndex * 0.2})`,
// // // // // //         }}
// // // // // //       >
// // // // // //         {exercises[selected].steps[stepIndex]}
// // // // // //       </div>

// // // // // //       {/* Timer */}
// // // // // //       <p className="mt-6 text-2xl font-semibold">{timeLeft}s</p>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // "use client";
// // // // // import { useState, useEffect } from "react";

// // // // // const exercises = {
// // // // //   box: { name: "Box Breathing", pattern: [4, 4, 4, 4], steps: ["Inhale", "Hold", "Exhale", "Hold"] },
// // // // //   fourSevenEight: { name: "4-7-8 Breathing", pattern: [4, 7, 8], steps: ["Inhale", "Hold", "Exhale"] },
// // // // //   alternate: { name: "Alternate Nostril", pattern: [4, 4, 4, 4], steps: ["Inhale (Left)", "Hold", "Exhale (Right)", "Hold"] },
// // // // // };

// // // // // export default function BreathingExercise() {
// // // // //   const [selected, setSelected] = useState<keyof typeof exercises>("box");
// // // // //   const [stepIndex, setStepIndex] = useState(0);
// // // // //   const [timeLeft, setTimeLeft] = useState(exercises[selected].pattern[0]);

// // // // //   useEffect(() => {
// // // // //     const timer = setInterval(() => {
// // // // //       if (timeLeft > 1) {
// // // // //         setTimeLeft(timeLeft - 1);
// // // // //       } else {
// // // // //         const nextStep = (stepIndex + 1) % exercises[selected].steps.length;
// // // // //         setStepIndex(nextStep);
// // // // //         setTimeLeft(exercises[selected].pattern[nextStep]);
// // // // //       }
// // // // //     }, 1000);

// // // // //     return () => clearInterval(timer);
// // // // //   }, [timeLeft, stepIndex, selected]);

// // // // //   return (
// // // // //     <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 w-64 flex flex-col items-center space-y-4">
// // // // //       {/* Dropdown */}
// // // // //       <select
// // // // //         value={selected}
// // // // //         onChange={(e) => {
// // // // //           const val = e.target.value as keyof typeof exercises;
// // // // //           setSelected(val);
// // // // //           setStepIndex(0);
// // // // //           setTimeLeft(exercises[val].pattern[0]);
// // // // //         }}
// // // // //         className="px-3 py-2 rounded-lg bg-gradient-to-r from-teal-400/30 to-purple-400/30 text-white text-sm font-semibold shadow-inner border border-white/20"
// // // // //       >
// // // // //         {Object.keys(exercises).map((key) => (
// // // // //           <option key={key} value={key} className="text-black">
// // // // //             {exercises[key as keyof typeof exercises].name}
// // // // //           </option>
// // // // //         ))}
// // // // //       </select>

// // // // //       {/* Breathing Circle */}
// // // // //       <div
// // // // //         className="w-24 h-24 rounded-full flex items-center justify-center text-base font-bold text-white shadow-lg transition-all duration-1000 ease-in-out bg-gradient-to-r from-teal-400/40 to-purple-400/40 backdrop-blur-md"
// // // // //         style={{
// // // // //           transform: `scale(${1 + (stepIndex % 2 === 0 ? 0.3 : 0)})`, // expand only on inhale/exhale
// // // // //         }}
// // // // //       >
// // // // //         {exercises[selected].steps[stepIndex]}
// // // // //       </div>

// // // // //       {/* Timer */}
// // // // //       <p className="text-lg font-semibold text-white drop-shadow">{timeLeft}s</p>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client";
// // // // import { useState, useEffect } from "react";

// // // // const exercises = {
// // // //   box: { name: "Box Breathing", pattern: [4, 4, 4, 4], steps: ["Inhale", "Hold", "Exhale", "Hold"] },
// // // //   fourSevenEight: { name: "4-7-8 Breathing", pattern: [4, 7, 8], steps: ["Inhale", "Hold", "Exhale"] },
// // // //   alternate: { name: "Alternate Nostril", pattern: [4, 4, 4, 4], steps: ["Inhale (Left)", "Hold", "Exhale (Right)", "Hold"] },
// // // // };

// // // // export default function BreathingExercise() {
// // // //   const [selected, setSelected] = useState<keyof typeof exercises>("box");
// // // //   const [stepIndex, setStepIndex] = useState(0);
// // // //   const [timeLeft, setTimeLeft] = useState(exercises[selected].pattern[0]);
// // // //   const [running, setRunning] = useState(false);

// // // //   useEffect(() => {
// // // //     if (!running) return;

// // // //     const timer = setInterval(() => {
// // // //       if (timeLeft > 1) {
// // // //         setTimeLeft(timeLeft - 1);
// // // //       } else {
// // // //         const nextStep = (stepIndex + 1) % exercises[selected].steps.length;
// // // //         setStepIndex(nextStep);
// // // //         setTimeLeft(exercises[selected].pattern[nextStep]);
// // // //       }
// // // //     }, 1000);

// // // //     return () => clearInterval(timer);
// // // //   }, [timeLeft, stepIndex, selected, running]);

// // // //   const progress =
// // // //     ((exercises[selected].pattern[stepIndex] - timeLeft) /
// // // //       exercises[selected].pattern[stepIndex]) *
// // // //     100;

// // // //   return (
// // // //     <div className="relative p-4 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 w-64 flex items-center space-x-4">
// // // //       {/* Left Content */}
// // // //       <div className="flex flex-col items-center space-y-3 flex-1">
// // // //         {/* Dropdown */}
// // // //         <select
// // // //           value={selected}
// // // //           onChange={(e) => {
// // // //             const val = e.target.value as keyof typeof exercises;
// // // //             setSelected(val);
// // // //             setStepIndex(0);
// // // //             setTimeLeft(exercises[val].pattern[0]);
// // // //           }}
// // // //           className="px-3 py-1 rounded-lg bg-gradient-to-r from-teal-400/30 to-purple-400/30 text-white text-xs font-semibold shadow-inner border border-white/20"
// // // //         >
// // // //           {Object.keys(exercises).map((key) => (
// // // //             <option key={key} value={key} className="text-black">
// // // //               {exercises[key as keyof typeof exercises].name}
// // // //             </option>
// // // //           ))}
// // // //         </select>

// // // //         {/* Breathing Circle */}
// // // //         <div
// // // //           className="w-20 h-20 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg transition-all duration-1000 ease-in-out bg-gradient-to-r from-teal-400/40 to-purple-400/40 backdrop-blur-md"
// // // //           style={{
// // // //             transform: `scale(${1 + (stepIndex % 2 === 0 ? 0.25 : 0)})`,
// // // //           }}
// // // //         >
// // // //           {exercises[selected].steps[stepIndex]}
// // // //         </div>

// // // //         {/* Timer */}
// // // //         <p className="text-sm font-semibold text-white drop-shadow">
// // // //           {timeLeft}s
// // // //         </p>

// // // //         {/* Start/Stop Button */}
// // // //         <button
// // // //           onClick={() => setRunning(!running)}
// // // //           className="px-3 py-1 rounded-lg bg-gradient-to-r from-green-400/30 to-red-400/30 text-white text-xs font-semibold border border-white/20 hover:scale-105 transition"
// // // //         >
// // // //           {running ? "Stop" : "Start"}
// // // //         </button>
// // // //       </div>

// // // //       {/* Progress Bar (Right Side) */}
// // // //       <div className="w-2 h-full rounded-full bg-white/20 overflow-hidden">
// // // //         <div
// // // //           className="h-full bg-gradient-to-b from-teal-400 to-purple-400 transition-all duration-1000"
// // // //           style={{ height: `${progress}%` }}
// // // //         ></div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";
// // // import { useState, useEffect } from "react";

// // // const exercises = {
// // //   box: { name: "Box Breathing", pattern: [4, 4, 4, 4], steps: ["Inhale", "Hold", "Exhale", "Hold"] },
// // //   fourSevenEight: { name: "4-7-8 Breathing", pattern: [4, 7, 8], steps: ["Inhale", "Hold", "Exhale"] },
// // //   alternate: { name: "Alternate Nostril", pattern: [4, 4, 4, 4], steps: ["Inhale (Left)", "Hold", "Exhale (Right)", "Hold"] },
// // // };

// // // export default function BreathingExercise() {
// // //   const [selected, setSelected] = useState<keyof typeof exercises>("box");
// // //   const [stepIndex, setStepIndex] = useState(0);
// // //   const [timeLeft, setTimeLeft] = useState(exercises[selected].pattern[0]);
// // //   const [running, setRunning] = useState(false);

// // //   useEffect(() => {
// // //     if (!running) return;

// // //     const timer = setInterval(() => {
// // //       if (timeLeft > 1) {
// // //         setTimeLeft(timeLeft - 1);
// // //       } else {
// // //         const nextStep = (stepIndex + 1) % exercises[selected].steps.length;
// // //         setStepIndex(nextStep);
// // //         setTimeLeft(exercises[selected].pattern[nextStep]);
// // //       }
// // //     }, 1000);

// // //     return () => clearInterval(timer);
// // //   }, [timeLeft, stepIndex, selected, running]);

// // //   const progress =
// // //     ((exercises[selected].pattern[stepIndex] - timeLeft) /
// // //       exercises[selected].pattern[stepIndex]) *
// // //     100;

// // //   return (
// // //     <div className="relative p-4 rounded-2xl bg-orange-50/80 backdrop-blur-md shadow-lg border border-orange-200/50 w-64 flex items-center space-x-4">
// // //       {/* Left Content */}
// // //       <div className="flex flex-col items-center space-y-3 flex-1">
// // //         {/* Dropdown */}
// // //         <select
// // //           value={selected}
// // //           onChange={(e) => {
// // //             const val = e.target.value as keyof typeof exercises;
// // //             setSelected(val);
// // //             setStepIndex(0);
// // //             setTimeLeft(exercises[val].pattern[0]);
// // //           }}
// // //           className="px-3 py-1 rounded-lg bg-gradient-to-r from-pink-300/70 to-orange-300/70 text-gray-800 text-xs font-semibold shadow-inner border border-orange-200"
// // //         >
// // //           {Object.keys(exercises).map((key) => (
// // //             <option key={key} value={key} className="text-gray-800">
// // //               {exercises[key as keyof typeof exercises].name}
// // //             </option>
// // //           ))}
// // //         </select>

// // //         {/* Breathing Circle */}
// // //         <div
// // //           className="w-20 h-20 rounded-full flex items-center justify-center text-sm font-bold text-gray-800 shadow-lg transition-all duration-1000 ease-in-out bg-gradient-to-r from-pink-300/60 to-orange-300/60 backdrop-blur-md"
// // //           style={{
// // //             transform: `scale(${1 + (stepIndex % 2 === 0 ? 0.25 : 0)})`,
// // //           }}
// // //         >
// // //           {exercises[selected].steps[stepIndex]}
// // //         </div>

// // //         {/* Timer */}
// // //         <p className="text-sm font-semibold text-gray-800 drop-shadow">
// // //           {timeLeft}s
// // //         </p>

// // //         {/* Start/Stop Button */}
// // //         <button
// // //           onClick={() => setRunning(!running)}
// // //           className="px-3 py-1 rounded-lg bg-gradient-to-r from-pink-400/70 to-orange-400/70 text-gray-800 text-xs font-semibold border border-orange-200 hover:scale-105 transition"
// // //         >
// // //           {running ? "Stop" : "Start"}
// // //         </button>
// // //       </div>

// // //       {/* Progress Bar (Right Side) */}
// // //       <div className="w-2 h-full rounded-full bg-orange-100/50 overflow-hidden">
// // //         <div
// // //           className="h-full bg-gradient-to-b from-pink-400 to-orange-400 transition-all duration-1000"
// // //           style={{ height: `${progress}%` }}
// // //         ></div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import { useState, useEffect } from "react";

// // const exercises = {
// //   box: { name: "Box Breathing", pattern: [4, 4, 4, 4], steps: ["Inhale", "Hold", "Exhale", "Hold"] },
// //   fourSevenEight: { name: "4-7-8 Breathing", pattern: [4, 7, 8], steps: ["Inhale", "Hold", "Exhale"] },
// //   alternate: { name: "Alternate Nostril", pattern: [4, 4, 4, 4], steps: ["Inhale (Left)", "Hold", "Exhale (Right)", "Hold"] },
// // };

// // export default function BreathingExercise() {
// //   const [selected, setSelected] = useState<keyof typeof exercises>("box");
// //   const [stepIndex, setStepIndex] = useState(0);
// //   const [timeLeft, setTimeLeft] = useState(exercises[selected].pattern[0]);
// //   const [running, setRunning] = useState(false);

// //   useEffect(() => {
// //     if (!running) return;

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
// //   }, [timeLeft, stepIndex, selected, running]);

// //   const progress =
// //     ((exercises[selected].pattern[stepIndex] - timeLeft) /
// //       exercises[selected].pattern[stepIndex]) *
// //     100;

// //   return (
// //     <div className="relative p-6 rounded-3xl bg-pink-50/90 backdrop-blur-lg shadow-xl border border-pink-100/50 w-80 flex flex-col items-center space-y-6">
// //       {/* Title */}
// //       <h2 className="text-xl font-semibold text-gray-900 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
// //         {exercises[selected].name}
// //       </h2>

// //       {/* Breathing Circle */}
// //       <div
// //         className="w-24 h-24 rounded-full flex items-center justify-center text-base font-bold text-gray-900 shadow-lg transition-all duration-1000 ease-in-out bg-gradient-to-r from-pink-200/70 to-orange-200/70 backdrop-blur-md"
// //         style={{
// //           transform: `scale(${1 + (stepIndex % 2 === 0 ? 0.3 : 0)})`,
// //         }}
// //       >
// //         {exercises[selected].steps[stepIndex]}
// //       </div>

// //       {/* Timer */}
// //       <p className="text-lg font-semibold text-gray-900 drop-shadow-sm">
// //         {timeLeft}s
// //       </p>

// //       {/* Dropdown */}
// //       <select
// //         value={selected}
// //         onChange={(e) => {
// //           const val = e.target.value as keyof typeof exercises;
// //           setSelected(val);
// //           setStepIndex(0);
// //           setTimeLeft(exercises[val].pattern[0]);
// //         }}
// //         className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-pink-200/60 to-orange-200/60 text-gray-900 text-sm font-semibold shadow-inner border border-pink-100/50 focus:outline-none focus:ring-2 focus:ring-pink-300/50"
// //       >
// //         {Object.keys(exercises).map((key) => (
// //           <option key={key} value={key} className="text-gray-900">
// //             {exercises[key as keyof typeof exercises].name}
// //           </option>
// //         ))}
// //       </select>

// //       {/* Start/Stop Button */}
// //       <button
// //         onClick={() => setRunning(!running)}
// //         className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-pink-400/80 to-orange-400/80 text-gray-900 text-sm font-semibold border border-pink-100/50 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
// //       >
// //         {running ? "Pause" : "Start"}
// //       </button>

// //       {/* Progress Bar */}
// //       <div className="w-full h-2 rounded-full bg-pink-100/50 overflow-hidden">
// //         <div
// //           className="h-full bg-gradient-to-r from-pink-400 to-orange-400 transition-all duration-1000 ease-in-out"
// //           style={{ width: `${progress}%` }}
// //         ></div>
// //       </div>
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
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     if (!running) return;

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
//   }, [timeLeft, stepIndex, selected, running]);

//   const progress =
//     ((exercises[selected].pattern[stepIndex] - timeLeft) /
//       exercises[selected].pattern[stepIndex]) *
//     100;

//   return (
//     <div className="relative p-8 rounded-3xl bg-gradient-to-br from-pink-50/80 to-orange-50/80 backdrop-blur-xl shadow-2xl border border-pink-100/30 w-96 flex flex-col items-center justify-center space-y-6">
//       {/* Title */}
//       <h2 className="text-xl font-semibold text-gray-900 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
//         {exercises[selected].name}
//       </h2>

//       {/* Breathing Circle */}
//       <div
//         className="w-28 h-28 rounded-full flex items-center justify-center text-base font-bold text-gray-900 transition-all duration-1000 ease-in-out bg-gradient-to-r from-pink-200/50 to-orange-200/50 backdrop-blur-md shadow-lg border border-pink-100/20"
//         style={{
//           transform: `scale(${1 + (stepIndex % 2 === 0 ? 0.3 : 0)})`,
//         }}
//       >
//         {exercises[selected].steps[stepIndex]}
//       </div>

//       {/* Timer */}
//       <p className="text-lg font-semibold text-gray-900 drop-shadow-sm">
//         {timeLeft}s
//       </p>

//       {/* Dropdown */}
//       <select
//         value={selected}
//         onChange={(e) => {
//           const val = e.target.value as keyof typeof exercises;
//           setSelected(val);
//           setStepIndex(0);
//           setTimeLeft(exercises[val].pattern[0]);
//         }}
//         className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-pink-200/40 to-orange-200/40 backdrop-blur-md text-gray-900 text-sm font-semibold shadow-inner border border-pink-100/20 focus:outline-none focus:ring-2 focus:ring-pink-300/30"
//       >
//         {Object.keys(exercises).map((key) => (
//           <option key={key} value={key} className="text-gray-900 bg-pink-50/80">
//             {exercises[key as keyof typeof exercises].name}
//           </option>
//         ))}
//       </select>

//       {/* Start/Stop Button */}
//       <button
//         onClick={() => setRunning(!running)}
//         className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-pink-400/70 to-orange-400/70 backdrop-blur-md text-gray-900 text-sm font-semibold border border-pink-100/20 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
//       >
//         {running ? "Pause" : "Start"}
//       </button>

//       {/* Progress Bar */}
//       <div className="w-full h-3 rounded-full bg-pink-100/30 backdrop-blur-sm overflow-hidden border border-pink-100/20">
//         <div
//           className="h-full bg-gradient-to-r from-pink-400 to-orange-400 transition-all duration-1000 ease-in-out"
//           style={{ width: `${progress}%` }}
//         ></div>
//       </div>
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
    <div className="relative p-6 rounded-3xl bg-gradient-to-br from-pink-50/80 to-orange-50/80 backdrop-blur-xl shadow-2xl border border-pink-100/30 w-80 flex flex-col items-center justify-center space-y-4 self-start">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
        Breathing Exercise
      </h2>

      {/* Exercise Name */}
      <h3 className="text-xl font-bold text-gray-900 bg-gradient-to-r from-pink-400/80 to-orange-400/80 bg-clip-text text-transparent">
        {exercises[selected].name}
      </h3>

      {/* Breathing Circle */}
      <div
        className="w-32 h-32 rounded-full flex items-center justify-center text-lg font-bold text-gray-900 transition-all duration-1000 ease-in-out bg-gradient-to-r from-pink-200/50 to-orange-200/50 backdrop-blur-md shadow-lg border border-pink-100/20"
        style={{
          transform: `scale(${1 + (stepIndex % 2 === 0 ? 0.2 : 0)})`,
        }}
      >
        {exercises[selected].steps[stepIndex]}
      </div>

      {/* Timer */}
      <p className="text-lg font-semibold text-gray-900 drop-shadow-sm">
        {timeLeft}s
      </p>

      {/* Dropdown */}
      <select
        value={selected}
        onChange={(e) => {
          const val = e.target.value as keyof typeof exercises;
          setSelected(val);
          setStepIndex(0);
          setTimeLeft(exercises[val].pattern[0]);
        }}
        className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-pink-200/40 to-orange-200/40 backdrop-blur-md text-gray-900 text-sm font-medium shadow-inner border border-pink-100/20 focus:outline-none focus:ring-2 focus:ring-pink-300/30"
      >
        {Object.keys(exercises).map((key) => (
          <option key={key} value={key} className="text-gray-900 bg-pink-50/80">
            {exercises[key as keyof typeof exercises].name}
          </option>
        ))}
      </select>

      {/* Start/Stop Button */}
      <button
        onClick={() => setRunning(!running)}
        className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-pink-400/80 to-orange-400/80 backdrop-blur-md text-gray-900 text-sm font-semibold border border-pink-100/20 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        {running ? "Pause" : "Start"}
      </button>

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full bg-pink-100/30 backdrop-blur-sm overflow-hidden border border-pink-100/20">
        <div
          className="h-full bg-gradient-to-r from-pink-400 to-orange-400 transition-all duration-1000 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}