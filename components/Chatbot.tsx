// // // "use client";
// // // import { useState } from "react";

// // // export default function Chatbot() {
// // //   const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
// // //   const [input, setInput] = useState("");

// // //   const API_KEY = "AIzaSyDV4mGANyeFZlNAr_vMFM6R4MBeGBIvmjs"; // Put your key directly here

// // //   const sendMessage = async () => {
// // //     if (!input.trim()) return;

// // //     const userMessage = { sender: "user", text: input };
// // //     setMessages((prev) => [...prev, userMessage]);
// // //     setInput("");

// // //     try {
// // //       const res = await fetch("https://api.openai.com/v1/chat/completions", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${API_KEY}`,
// // //         },
// // //         body: JSON.stringify({
// // //           model: "gpt-4o-mini", // you can use gpt-3.5-turbo if cheaper
// // //           messages: [
// // //             { role: "system", content: "You are AyurYoga's personalized assistant." },
// // //             ...messages.map((m) => ({ role: m.sender === "user" ? "user" : "assistant", content: m.text })),
// // //             { role: "user", content: input },
// // //           ],
// // //         }),
// // //       });

// // //       const data = await res.json();
// // //       const reply = data.choices[0].message.content;

// // //       setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
// // //     } catch (err) {
// // //       console.error(err);
// // //       setMessages((prev) => [...prev, { sender: "bot", text: "⚠️ Error: Could not connect." }]);
// // //     }
// // //   };

// // //   return (
// // //     <div className="fixed bottom-6 right-6 w-80 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg flex flex-col overflow-hidden border border-white/20">
// // //       <div className="p-3 bg-gradient-to-r from-teal-400 to-purple-500 text-white font-bold text-center">
// // //         AyurYoga Chatbot
// // //       </div>
// // //       <div className="flex-1 p-3 overflow-y-auto space-y-2 max-h-80">
// // //         {messages.map((msg, idx) => (
// // //           <div
// // //             key={idx}
// // //             className={`p-2 rounded-lg ${
// // //               msg.sender === "user"
// // //                 ? "bg-teal-500/80 text-white self-end ml-auto max-w-[75%]"
// // //                 : "bg-white/20 text-slate-200 max-w-[75%]"
// // //             }`}
// // //           >
// // //             {msg.text}
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <div className="p-3 flex gap-2">
// // //         <input
// // //           type="text"
// // //           value={input}
// // //           onChange={(e) => setInput(e.target.value)}
// // //           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
// // //           placeholder="Type your message..."
// // //           className="flex-1 px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
// // //         />
// // //         <button
// // //           onClick={sendMessage}
// // //           className="px-4 py-2 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-lg hover:opacity-90"
// // //         >
// // //           Send
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import { useState } from "react";

// // export default function Chatbot() {
// //   const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
// //   const [input, setInput] = useState("");

// //   // Put your Gemini API key directly here (⚠️ not safe for production)
// //   const GEMINI_API_KEY = "AIzaSyDV4mGANyeFZlNAr_vMFM6R4MBeGBIvmjs";

// //   const sendMessage = async () => {
// //     if (!input.trim()) return;

// //     const userMessage = { sender: "user", text: input };
// //     setMessages((prev) => [...prev, userMessage]);
// //     setInput("");

// //     try {
// //       const res = await fetch(
// //         `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             contents: [
// //               {
// //                 role: "user",
// //                 parts: [{ text: input }],
// //               },
// //             ],
// //           }),
// //         }
// //       );

// //       const data = await res.json();
// //       const reply =
// //         data.candidates?.[0]?.content?.parts?.[0]?.text ||
// //         "⚠️ No response from Gemini";

// //       setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
// //     } catch (err) {
// //       console.error(err);
// //       setMessages((prev) => [
// //         ...prev,
// //         { sender: "bot", text: "⚠️ Error: Could not connect." },
// //       ]);
// //     }
// //   };

// //   return (
// //     <div className="fixed bottom-6 right-6 w-80 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg flex flex-col overflow-hidden border border-white/20 z-[9999]">
// //       <div className="p-3 bg-gradient-to-r from-teal-400 to-purple-500 text-white font-bold text-center">
// //         AyurYoga Chatbot
// //       </div>
// //       <div className="flex-1 p-3 overflow-y-auto space-y-2 max-h-80">
// //         {messages.map((msg, idx) => (
// //           <div
// //             key={idx}
// //             className={`p-2 rounded-lg ${
// //               msg.sender === "user"
// //                 ? "bg-teal-500/80 text-white self-end ml-auto max-w-[75%]"
// //                 : "bg-white/20 text-slate-200 max-w-[75%]"
// //             }`}
// //           >
// //             {msg.text}
// //           </div>
// //         ))}
// //       </div>
// //       <div className="p-3 flex gap-2">
// //         <input
// //           type="text"
// //           value={input}
// //           onChange={(e) => setInput(e.target.value)}
// //           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
// //           placeholder="Type your message..."
// //           className="flex-1 px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
// //         />
// //         <button
// //           onClick={sendMessage}
// //           className="px-4 py-2 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-lg hover:opacity-90"
// //         >
// //           Send
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import { useState } from "react";
// import { Minus, MessageCircle } from "lucide-react"; // icons (lucide-react)
// import CustomCursor from "@/components/CustomCursor"

// export default function Chatbot() {
//     const [hover, setHover] = useState(false);//this one added
//   const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(true); // toggle state

//   const GEMINI_API_KEY = "AIzaSyDV4mGANyeFZlNAr_vMFM6R4MBeGBIvmjs";

//   const WEBSITE_DESCRIPTION = `
//   You are AyurYoga's personalized assistant.
//   The website is about Ayurvedic healing, Yoga practices, wellness,
//   meditation, natural remedies, and holistic lifestyle guidance.
//   Always answer in a friendly, helpful, and knowledgeable tone.
//   If users ask unrelated questions, politely bring the conversation back to AyurYoga.
//   `;

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     try {
//       const res = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             contents: [
//               { role: "user", parts: [{ text: WEBSITE_DESCRIPTION }] },
//               { role: "user", parts: [{ text: input }] },
//             ],
//           }),
//         }
//       );

//       const data = await res.json();
//       const reply =
//         data.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "⚠️ No response from Gemini";

//       setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
//     } catch (err) {
//       console.error(err);
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "⚠️ Error: Could not connect." },
//       ]);
//     }
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-[100]">
//       {isOpen ? (
//         <div className="w-80 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg flex flex-col overflow-hidden border border-white/20">
//           {/* Header with minimize button */}
//           <div className="flex items-center justify-between p-3 bg-gradient-to-r from-teal-400 to-purple-500 text-white font-bold">
//             AyurYoga Chatbot
//             <button onClick={() => setIsOpen(false)} className="p-1 hover:opacity-80">
//               <Minus size={18} />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-3 overflow-y-auto space-y-2 max-h-80">
//             {messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`p-2 rounded-lg ${
//                   msg.sender === "user"
//                     ? "bg-teal-500/80 text-white self-end ml-auto max-w-[75%]"
//                     : "bg-white/20 text-slate-200 max-w-[75%]"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           {/* Input */}
//           <div className="p-3 flex gap-2">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               placeholder="Type your message..."
//               className="flex-1 px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
//             />
//             <button
//               onClick={sendMessage}
//               className="px-4 py-2 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-lg hover:opacity-90"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       ) : (
//         // Minimized button
//         <button
//           onClick={() => setIsOpen(true)}
//           className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
//         >
//           <MessageCircle size={24} className="text-white" />
//         </button>
//       )}
//     </div>
//   );
// }







// "use client";
// import { useState, useEffect, useRef } from "react";
// import { Minus, MessageCircle } from "lucide-react"; // icons (lucide-react)
// import CustomCursor from "@/components/CustomCursor"

// export default function Chatbot() {
//     const [hover, setHover] = useState(false);//this one added
//   const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false); // toggle state
//   const messagesEndRef = useRef<HTMLDivElement | null>(null);

//   const GEMINI_API_KEY = "AIzaSyDV4mGANyeFZlNAr_vMFM6R4MBeGBIvmjs";

//   const WEBSITE_DESCRIPTION = `
//   You are AyurYoga's personalized assistant.
//   The website is about Ayurvedic healing, Yoga practices, wellness,
//   meditation, natural remedies, and holistic lifestyle guidance.
//   Always answer in a friendly, helpful, and knowledgeable tone.
//   If users ask unrelated questions, politely bring the conversation back to AyurYoga.
//   `;

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     try {
//       const res = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             contents: [
//               { role: "user", parts: [{ text: WEBSITE_DESCRIPTION }] },
//               { role: "user", parts: [{ text: input }] },
//             ],
//           }),
//         }
//       );

//       const data = await res.json();
//       const reply =
//         data.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "⚠️ No response from Gemini";

//       setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
//     } catch (err) {
//       console.error(err);
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "⚠️ Error: Could not connect." },
//       ]);
//     }
//   };

//   // 🔹 Auto-scroll effect
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="fixed bottom-6 right-6 z-[100]">
//         <CustomCursor isHover={hover}/>
//       {isOpen ? (
//         <div className="w-80 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg flex flex-col overflow-hidden border border-white/20">
//           {/* Header with minimize button */}
//           <div className="flex items-center justify-between p-3 bg-gradient-to-r from-teal-400 to-purple-500 text-white font-bold">
//             AyurYoga Chatbot
//             <button onClick={() => setIsOpen(false)} className="p-1 hover:opacity-80" onMouseEnter={() => setHover(true)}
//                        onMouseLeave={() => setHover(false)}>
//               <Minus size={18} />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-3 overflow-y-auto space-y-2 max-h-80">
//             {messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`p-2 rounded-lg ${
//                   msg.sender === "user"
//                     ? "bg-teal-500/80 text-white self-end ml-auto max-w-[75%]"
//                     : "bg-white/20 text-slate-200 max-w-[75%]"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//             {/* Invisible div to scroll into view */}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input */}
//           <div className="p-3 flex gap-2">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               placeholder="Type your message..."
//               className="flex-1 px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
//             />
//             <button
//               onClick={sendMessage}
//               className="px-4 py-2 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-lg hover:opacity-90" onMouseEnter={() => setHover(true)}
//                        onMouseLeave={() => setHover(false)}
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       ) : (
//         // Minimized button
//         <button
//           onClick={() => setIsOpen(true)}
//           className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
//         >
//           <MessageCircle size={24} className="text-white" />
//         </button>
//       )}
//     </div>
//   );
// }
"use client";
import { useState, useEffect, useRef } from "react";
import { Minus, MessageCircle } from "lucide-react"; // icons (lucide-react)
import CustomCursor from "@/components/CustomCursor"

export default function Chatbot() {
  const [hover, setHover] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // 🔹 default minimized
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const GEMINI_API_KEY = "AIzaSyDV4mGANyeFZlNAr_vMFM6R4MBeGBIvmjs";

  const WEBSITE_DESCRIPTION = `
  You are AyurYoga's personalized assistant.
  The website is about Ayurvedic healing, Yoga practices, wellness,
  meditation, natural remedies, and holistic lifestyle guidance.
  Always answer in a friendly, helpful, and knowledgeable tone.
  If users ask unrelated questions, politely bring the conversation back to AyurYoga.
  `;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              { role: "user", parts: [{ text: WEBSITE_DESCRIPTION }] },
              { role: "user", parts: [{ text: input }] },
            ],
          }),
        }
      );

      const data = await res.json();
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ No response from Gemini";

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error: Could not connect." },
      ]);
    }
  };

  // 🔹 Auto-scroll effect
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-[100]" 
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}>
      <CustomCursor isHover={hover} />
      {isOpen ? (
        <div className="w-[28rem] bg-white/10 backdrop-blur-md rounded-2xl shadow-lg flex flex-col overflow-hidden border border-white/20">
          {/* Header with minimize button */}
          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-teal-400 to-purple-500 text-white font-bold">
            AyurYoga Chatbot
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:opacity-80"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Minus size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 max-h-96">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-teal-500/80 text-white self-end ml-auto max-w-[75%]"
                    : "bg-white/20 text-slate-200 max-w-[75%]"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-lg hover:opacity-90"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        
        // Minimized button
        <button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
          <MessageCircle size={24} className="text-white" />
        </button>
      )}
    </div>
  );
}
