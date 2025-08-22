// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Menu, X, Home, User, Brain, Heart, Compass } from "lucide-react"

// export function FloatingNavbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navItems = [
//     { href: "/", label: "Home", icon: Home },
//     { href: "/about-yoga", label: "Yoga", icon: Heart },
//     { href: "/about-ayurveda", label: "Ayurveda", icon: Compass },
//     { href: "/history-culture", label: "Culture", icon: Brain },
//     { href: "/wellness-dashboard", label: "Dashboard", icon: User },
//   ]

//   const getScaleForIndex = (index: number) => {
//     if (hoveredIndex === null) return 1
//     const distance = Math.abs(index - hoveredIndex)
//     if (distance === 0) return 1.4 // Hovered item
//     if (distance === 1) return 1.2 // Adjacent items
//     if (distance === 2) return 1.1 // Second-level adjacent
//     return 1 // Default scale
//   }

//   return (
//     <>
//       <nav
//         className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
//           isScrolled ? "glass-navbar-scrolled" : "glass-navbar"
//         }`}
//       >
//         <div className="flex items-center justify-between px-6 py-3">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2 navbar-bubble-hover">
//             <div className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 flex items-center justify-center">
//               <span className="text-white font-bold text-xs">AY</span>
//             </div>
//             <span className="font-serif text-lg font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
//               AyurYoga
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-end space-x-3 px-2 py-1" onMouseLeave={() => setHoveredIndex(null)}>
//             {navItems.map((item, index) => {
//               const Icon = item.icon
//               const isActive = pathname === item.href
//               const scale = getScaleForIndex(index)

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`flex flex-col items-center justify-end px-3 py-2 rounded-xl transition-all duration-300 ease-out origin-bottom ${
//                     isActive ? "bg-white/20 text-white shadow-lg" : "text-white/80 hover:text-white hover:bg-white/10"
//                   }`}
//                   style={{
//                     transform: `scale(${scale})`,
//                     transformOrigin: "bottom center",
//                   }}
//                   onMouseEnter={() => setHoveredIndex(index)}
//                 >
//                   <Icon size={18} className="mb-0.5" />
//                   <span className="text-xs font-medium whitespace-nowrap">{item.label}</span>
//                 </Link>
//               )
//             })}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-white/80 hover:text-white transition-colors navbar-bubble-hover p-2 rounded-full"
//           >
//             {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass-navbar rounded-2xl overflow-hidden">
//             <div className="flex flex-col py-2">
//               {navItems.map((item) => {
//                 const Icon = item.icon
//                 const isActive = pathname === item.href
//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className={`flex items-center space-x-3 px-6 py-3 transition-all duration-300 navbar-bubble-hover ${
//                       isActive ? "bg-white/20 text-white" : "text-white/80 hover:text-white hover:bg-white/10"
//                     }`}
//                   >
//                     <Icon size={18} />
//                     <span className="font-medium">{item.label}</span>
//                   </Link>
//                 )
//               })}
//             </div>
//           </div>
//         )}
//       </nav>

//       <div className="h-16" />
//     </>
//   )
// }

// export default FloatingNavbar
/*
"use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Menu, X, Home, User, Brain, Heart, Compass } from "lucide-react"
// import CustomCursor from "@/components/CustomCursor"

// export function FloatingNavbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navItems = [
//     { href: "/", label: "Home", icon: Home },
//     { href: "/about-yoga", label: "Yoga", icon: Heart },
//     { href: "/about-ayurveda/", label: "Ayurveda", icon: Compass },
//     { href: "/history-culture", label: "Culture", icon: Brain },
//     { href: "/wellness-dashboard", label: "Dashboard", icon: User },
//   ]

//   const getScaleForIndex = (index: number) => {
//     if (hoveredIndex === null) return 1
//     const distance = Math.abs(index - hoveredIndex)
//     if (distance === 0) return 1.4
//     if (distance === 1) return 1.2
//     if (distance === 2) return 1.1
//     return 1
//   }

//   function setHover(arg0: boolean): void {
//     throw new Error("Function not implemented.")
//   }

//   return (
//     <>
//     <CustomCursor isHover={false}/>
//       <nav 
//         className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 
//           ${isScrolled ? "glass-navbar-scrolled" : "glass-navbar"} 
//           w-[90%] max-w-5xl rounded-3xl shadow-lg`}
//       >
//         <div className="flex items-center justify-between px-8 py-4 " >
//           //Logo 
//           <Link
//   href="/"
//   className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 rounded-full px-2 py-1 transition-all duration-300 transform hover:scale-110"
// >
//             <div className="w-7 h-7 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 flex items-center justify-center" >
//               <span className="text-white font-bold text-xs">AY</span>
//             </div>
//             <span className="rounded-4xl font-serif text-lg font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent" onMouseEnter={() => setHover(true)}
//                        onMouseLeave={() => setHover(false)}>
//               AyurYoga
//             </span>
//           </Link>

//           //Desktop Navigation 
//           <div
//             className="hidden md:flex items-end space-x-3 px-2 py-1"
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             {navItems.map((item, index) => {
//               const Icon = item.icon
//               const isActive = pathname === item.href
//               const scale = getScaleForIndex(index)

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`flex flex-col items-center justify-end px-3 py-2 rounded-xl transition-all duration-300 ease-out origin-bottom 
//                     ${isActive ? "bg-white/20 text-white shadow-lg" : "text-white/80 hover:text-white hover:bg-white/10"}`}
//                   style={{
//                     transform: `scale(${scale})`,
//                     transformOrigin: "bottom center",
//                   }}
//                   onMouseEnter={() => setHoveredIndex(index)}
//                 >
//                   <Icon size={18} className="mb-0.5" />
//                   <span className="text-xs font-medium whitespace-nowrap">{item.label}</span>
//                 </Link>
//               )
//             })}
//           </div>

//           // Mobile Menu Button 
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-white/80 hover:text-white transition-colors navbar-bubble-hover p-2 rounded-full"
//           >
//             {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>

//         //Mobile Menu 
//         {isMobileMenuOpen && (
//           <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass-navbar rounded-2xl overflow-hidden">
//             <div className="flex flex-col py-2">
//               {navItems.map((item) => {
//                 const Icon = item.icon
//                 const isActive = pathname === item.href
//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className={`flex items-center space-x-3 px-6 py-3 transition-all duration-300 navbar-bubble-hover 
//                       ${isActive ? "bg-white/20 text-white" : "text-white/80 hover:text-white hover:bg-white/10"}`}
//                   >
//                     <Icon size={18} />
//                     <span className="font-medium">{item.label}</span>
//                   </Link>
//                 )
//               })}
//             </div>
//           </div>
//         )}
//       </nav>

//       <div className="h-20" />
//     </>
//   )
// }

// export default FloatingNavbar

// */
// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Menu, X, Home, User, Brain, Heart, Compass } from "lucide-react"
// import CustomCursor from "@/components/CustomCursor"

// export function FloatingNavbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
//   const [hover, setHover] = useState(false)   // ✅ added state for cursor
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navItems = [
//     { href: "/", label: "Home", icon: Home },
//     { href: "/about-yoga", label: "Yoga", icon: Heart },
//     { href: "/about-ayurveda/", label: "Ayurveda", icon: Compass },
//     { href: "/history-culture", label: "Culture", icon: Brain },
//     { href: "/wellness-dashboard", label: "Dashboard", icon: User },
//   ]

//   const getScaleForIndex = (index: number) => {
//     if (hoveredIndex === null) return 1
//     const distance = Math.abs(index - hoveredIndex)
//     if (distance === 0) return 1.4
//     if (distance === 1) return 1.2
//     if (distance === 2) return 1.1
//     return 1
//   }

//   return (
//     <>
//       {/* ✅ Custom Cursor controlled by hover state */}
//       <CustomCursor isHover={hover} />

//       <nav 
//         className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 
//           ${isScrolled ? "glass-navbar-scrolled" : "glass-navbar"} 
//           w-[90%] max-w-5xl rounded-3xl shadow-lg`}
//       >
//         <div className="flex items-center justify-between px-8 py-4">
          
//           {/* Logo */}
//           {/* <Link
//             href="/"
//             className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 rounded-full px-2 py-1 transition-all duration-300 transform hover:scale-110"
//             onMouseEnter={() => setHover(true)}
//             onMouseLeave={() => setHover(false)}
//           >
//             <div className="w-7 h-7 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 flex items-center justify-center overflow-hidden">
//   <img 
//     src="/logo.png" 
//     alt="Logo" 
//     className="w-full h-full object-cover"
//   />
// </div>
//             <span className="rounded-4xl font-serif text-lg font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
//               AyurYoga
//             </span>
//           </Link> */}
//           <Link
//   href="/"
//   className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 transition-all duration-300 transform hover:scale-110"
//   onMouseEnter={() => setHover(true)}
//   onMouseLeave={() => setHover(false)}
// >
//   <div className="w-9 h-9 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 flex items-center justify-center overflow-hidden">
//     <img 
//       src="/logo.png" 
//       alt="Logo" 
//       className="w-full h-full object-cover scale-225"
//     />
//   </div>
//   <span className="rounded-4xl font-serif text-xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
//     AyurYog
//   </span>
// </Link>

//           {/* Desktop Navigation */}
//           <div
//             className="hidden md:flex items-end space-x-3 px-2 py-1"
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             {navItems.map((item, index) => {
//               const Icon = item.icon
//               const isActive = pathname === item.href
//               const scale = getScaleForIndex(index)

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`flex flex-col items-center justify-end px-3 py-2 rounded-xl transition-all duration-300 ease-out origin-bottom 
//                     ${isActive ? "bg-white/20 text-white shadow-lg" : "text-white/80 hover:text-white hover:bg-white/10"}`}
//                   style={{
//                     transform: `scale(${scale})`,
//                     transformOrigin: "bottom center",
//                   }}
//                   onMouseEnter={() => {
//                     setHoveredIndex(index)
//                     setHover(true) // ✅ glow when hovering nav items
//                   }}
//                   onMouseLeave={() => setHover(false)}
//                 >
//                   <Icon size={18} className="mb-0.5" />
//                   <span className="text-xs font-medium whitespace-nowrap">{item.label}</span>
//                 </Link>
//               )
//             })}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-white/80 hover:text-white transition-colors navbar-bubble-hover p-2 rounded-full"
//             onMouseEnter={() => setHover(true)}
//             onMouseLeave={() => setHover(false)}
//           >
//             {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass-navbar rounded-2xl overflow-hidden">
//             <div className="flex flex-col py-2">
//               {navItems.map((item) => {
//                 const Icon = item.icon
//                 const isActive = pathname === item.href
//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     onMouseEnter={() => setHover(true)}
//                     onMouseLeave={() => setHover(false)}
//                     className={`flex items-center space-x-3 px-6 py-3 transition-all duration-300 navbar-bubble-hover 
//                       ${isActive ? "bg-white/20 text-white" : "text-white/80 hover:text-white hover:bg-white/10"}`}
//                   >
//                     <Icon size={18} />
//                     <span className="font-medium">{item.label}</span>
//                   </Link>
//                 )
//               })}
//             </div>
//           </div>
//         )}
//       </nav>

//       <div className="h-20" />
//     </>
//   )
// }

// export default FloatingNavbar
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, User, Brain, Heart, Compass } from "lucide-react"
import CustomCursor from "@/components/CustomCursor"

export function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hover, setHover] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about-yoga", label: "Yoga", icon: Heart },
    { href: "/about-ayurveda/", label: "Ayurveda", icon: Compass },
    { href: "/history-culture", label: "Culture", icon: Brain },
    { href: "/wellness-dashboard", label: "Dashboard", icon: User },
  ]

  const getScaleForIndex = (index: number) => {
    if (hoveredIndex === null) return 1
    const distance = Math.abs(index - hoveredIndex)
    if (distance === 0) return 1.4
    if (distance === 1) return 1.2
    if (distance === 2) return 1.1
    return 1
  }

  return (
    <>
      <CustomCursor isHover={hover} />

      <nav
  className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500
    ${isScrolled 
      ? "bg-white/80 backdrop-blur-lg shadow-md" 
      : "bg-white/60 backdrop-blur-md shadow-lg/40"}
    w-[90%] max-w-5xl rounded-3xl`}
>
        <div className="flex items-center justify-between px-8 py-4">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 bg-pink-100/40 hover:bg-pink-200/50 rounded-full px-3 py-1.5 transition-all duration-300 transform hover:scale-110"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-400 to-amber-200 flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-cover scale-125"
              />
            </div>
            <span className="rounded-4xl font-serif text-xl font-bold bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent">
              AyurYog
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-end space-x-3 px-2 py-1"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              const scale = getScaleForIndex(index)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center justify-end px-3 py-2 rounded-xl transition-all duration-300 ease-out origin-bottom 
                    ${isActive
                      ? "bg-gradient-to-r from-pink-400 to-amber-200 text-white shadow-md"
                      : "text-gray-700 hover:text-pink-600 hover:bg-pink-100/50"}`}
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "bottom center",
                  }}
                  onMouseEnter={() => {
                    setHoveredIndex(index)
                    setHover(true)
                  }}
                  onMouseLeave={() => setHover(false)}
                >
                  <Icon size={18} className="mb-0.5" />
                  <span className="text-xs font-medium whitespace-nowrap">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-pink-600 transition-colors navbar-bubble-hover p-2 rounded-full"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-lg rounded-2xl overflow-hidden shadow-md">
            <div className="flex flex-col py-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className={`flex items-center space-x-3 px-6 py-3 transition-all duration-300 
                      ${isActive
                        ? "bg-gradient-to-r from-pink-400 to-amber-200 text-white"
                        : "text-gray-700 hover:text-pink-600 hover:bg-pink-100/50"}`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      <div className="h-20" />
    </>
  )
}

export default FloatingNavbar
