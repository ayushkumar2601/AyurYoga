// // "use client"
// // // import { motion } from "framer-motion"
// // import { useEffect, useState } from "react"

// // export default function CustomCursor() {
// //   const [position, setPosition] = useState({ x: 0, y: 0 })
// //   const [isHovering, setIsHovering] = useState(false)

// //   // Track mouse movement
// //   useEffect(() => {
// //     const move = (e: MouseEvent) => {
// //       setPosition({ x: e.clientX, y: e.clientY })
// //     }
// //     window.addEventListener("mousemove", move)
// //     return () => window.removeEventListener("mousemove", move)
// //   }, [])

// //   // Handle hover enter / leave
// //   useEffect(() => {
// //     const addHover = () => setIsHovering(true)
// //     const removeHover = () => setIsHovering(false)

// //     // Any element with `data-cursor="true"` will trigger expand
// //     document.querySelectorAll("[data-cursor='true']").forEach((el) => {
// //       el.addEventListener("mouseenter", addHover)
// //       el.addEventListener("mouseleave", removeHover)
// //     })

// //     return () => {
// //       document.querySelectorAll("[data-cursor='true']").forEach((el) => {
// //         el.removeEventListener("mouseenter", addHover)
// //         el.removeEventListener("mouseleave", removeHover)
// //       })
// //     }
// //   }, [])

// //   return (
// //     <motion.div
// //       className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-pink-500 bg-pink-500/20"
// //       animate={{
// //         x: position.x - (isHovering ? 30 : 15), // center the circle
// //         y: position.y - (isHovering ? 30 : 15),
// //         width: isHovering ? 60 : 30,
// //         height: isHovering ? 60 : 30,
// //         opacity: 1,
// //       }}
// //       transition={{ type: "spring", stiffness: 200, damping: 20 }}
// //     />
// //   )
// // }
// "use client";
// import { useEffect, useState } from "react";

// export default function CustomCursor() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const [isHover, setIsHover] = useState(false);

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <div
//       className={`cursor ${isHover ? "cursor-hover" : ""}`}
//       style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
//     />
//   );
// }
// "use client";
// import { useEffect, useState } from "react";

// export default function CustomCursor({ isHover }: { isHover: boolean }) {
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <div
//       className={`cursor ${isHover ? "cursor-hover" : ""}`}
//       style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
//     />
//   );
// }
// "use client";
// import { useEffect, useState } from "react";

// export default function CustomCursor({ isHover }: { isHover: boolean }) {
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setPos({ x: e.clientX, y: e.clientY });

//       const cursor = document.querySelector<HTMLElement>(".cursor");
//       if (cursor) {
//         // Adjust background position for magnifying effect
//         cursor.style.backgroundPosition = `-${e.clientX * 2 - 40}px -${e.clientY * 2 - 40}px`;
//       }
//     };

//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <div
//       className={`cursor ${isHover ? "cursor-hover" : ""}`}
//       style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
//     />
//   );
// }
// "use client";
// import { useEffect, useState } from "react";

// export default function CustomCursor({ isHover }: { isHover: boolean }) {
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <div
//       className={`cursor ${isHover ? "cursor-hover" : ""}`}
//       style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
//     />
//   );
// }

"use client";
import { useEffect, useState } from "react";

export default function CustomCursor({ isHover }: { isHover: boolean }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className={`cursor ${isHover ? "cursor-hover" : ""}`}
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
    />
  );
}
