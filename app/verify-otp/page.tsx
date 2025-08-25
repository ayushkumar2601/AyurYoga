// "use client"

// import { useState, useEffect } from "react"
// import { useRouter, useSearchParams } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/card"
// import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import FloatingNavbar from "@/components/floating-navbar"
// import { Footer } from "@/components/footer"
// import { AnimatedBackground } from "@/components/animated-background"
// import { ScrollReveal } from "@/components/scroll-reveal"
// import { GradientText } from "@/components/gradient-text"
// import { SpiritualCard } from "@/components/spiritual-card"
// import { Mail, RefreshCw, CheckCircle, AlertCircle } from "lucide-react"
// import CustomCursor from "@/components/CustomCursor"
// import { toast } from "sonner"

// export default function VerifyOTPPage() {
//   const [hover, setHover] = useState(false)
//   const [otp, setOtp] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [isResending, setIsResending] = useState(false)
//   const [resendCooldown, setResendCooldown] = useState(0)
//   const [error, setError] = useState("")
//   const [success, setSuccess] = useState("")
  
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const email = searchParams.get("email")

//   useEffect(() => {
//     if (!email) {
//       router.push("/signup")
//       return
//     }

//     // Start resend cooldown timer
//     const timer = setInterval(() => {
//       setResendCooldown((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer)
//           return 0
//         }
//         return prev - 1
//       })
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [email, router])

//   const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value.replace(/\D/g, "").slice(0, 6)
//     setOtp(value)
//     setError("")
//   }

//   const handleVerifyOTP = async () => {
//     if (!email || otp.length !== 6) {
//       setError("Please enter a valid 6-digit OTP")
//       return
//     }

//     setIsLoading(true)
//     setError("")

//     try {
//       const response = await fetch("/api/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, otp }),
//       })

//       const data = await response.json()

//       if (response.ok) {
//         setSuccess("Email verified successfully! Redirecting to quiz...")
//         toast.success("Email verified successfully!")
        
//         // Store user data in localStorage for client-side access
//         localStorage.setItem("user", JSON.stringify(data.user))
        
//         // Redirect to quiz page after 2 seconds
//         setTimeout(() => {
//           router.push("/dosha-quiz")
//         }, 2000)
//       } else {
//         setError(data.error || "Verification failed. Please try again.")
//         toast.error(data.error || "Verification failed")
//       }
//     } catch (error) {
//       setError("Network error. Please check your connection and try again.")
//       toast.error("Network error. Please try again.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleResendOTP = async () => {
//     if (!email || resendCooldown > 0) return

//     setIsResending(true)
//     setError("")

//     try {
//       const response = await fetch("/api/resend-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       })

//       const data = await response.json()

//       if (response.ok) {
//         toast.success("New OTP sent successfully!")
//         setResendCooldown(30) // Start 30-second cooldown
//       } else {
//         setError(data.error || "Failed to resend OTP")
//         toast.error(data.error || "Failed to resend OTP")
//       }
//     } catch (error) {
//       setError("Network error. Please try again.")
//       toast.error("Network error. Please try again.")
//     } finally {
//       setIsResending(false)
//     }
//   }

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       handleVerifyOTP()
//     }
//   }

//   if (!email) {
//     return null
//   }

//   return (
//     <div className="min-h-screen bg-background relative">
//       <AnimatedBackground />
//       <FloatingNavbar />
//       <CustomCursor isHover={hover} />
//       <main className="pt-24 pb-12">
//         <div className="container mx-auto px-4">
//           <div className="max-w-2xl mx-auto">
//             <ScrollReveal>
//               <SpiritualCard glowing className="p-8">
//                 <CardHeader className="text-center space-y-4 pb-8">
//                   <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
//                     <Mail className="w-10 h-10 text-primary" />
//                   </div>
//                   <CardTitle className="text-3xl font-serif">
//                     <GradientText>Verify Your Email</GradientText>
//                   </CardTitle>
//                   <CardDescription className="text-lg">
//                     We've sent a 6-digit verification code to
//                   </CardDescription>
//                   <div className="text-lg font-medium text-primary">{email}</div>
//                 </CardHeader>

//                 <CardContent className="space-y-6">
//                   {/* Success Message */}
//                   {success && (
//                     <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg">
//                       <CheckCircle className="w-5 h-5 text-green-600" />
//                       <span className="text-green-800">{success}</span>
//                     </div>
//                   )}

//                   {/* Error Message */}
//                   {error && (
//                     <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg">
//                       <AlertCircle className="w-5 h-5 text-red-600" />
//                       <span className="text-red-800">{error}</span>
//                     </div>
//                   )}

//                   {/* OTP Input */}
//                   <div className="space-y-2">
//                     <Label htmlFor="otp" className="text-sm font-medium">
//                       Enter Verification Code
//                     </Label>
//                     <Input
//                       id="otp"
//                       type="text"
//                       placeholder="000000"
//                       value={otp}
//                       onChange={handleOTPChange}
//                       onKeyPress={handleKeyPress}
//                       className="text-center text-2xl font-mono tracking-widest glow-input"
//                       maxLength={6}
//                       disabled={isLoading}
//                     />
//                     <p className="text-sm text-muted-foreground text-center">
//                       Enter the 6-digit code from your email
//                     </p>
//                   </div>

//                   {/* Verify Button */}
//                   <Button
//                     onClick={handleVerifyOTP}
//                     className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-3 text-lg"
//                     disabled={isLoading || otp.length !== 6}
//                   >
//                     {isLoading ? "Verifying..." : "Verify Email"}
//                   </Button>

//                   {/* Resend OTP Section */}
//                   <div className="text-center space-y-4">
//                     <div className="text-sm text-muted-foreground">
//                       Didn't receive the code?
//                     </div>
//                     <Button
//                       variant="outline"
//                       onClick={handleResendOTP}
//                       disabled={isResending || resendCooldown > 0}
//                       className="flex items-center space-x-2"
//                     >
//                       {isResending ? (
//                         <RefreshCw className="w-4 h-4 animate-spin" />
//                       ) : (
//                         <RefreshCw className="w-4 h-4" />
//                       )}
//                       <span>
//                         {resendCooldown > 0
//                           ? `Resend in ${resendCooldown}s`
//                           : "Resend Code"}
//                       </span>
//                     </Button>
//                   </div>

//                   {/* Security Notice */}
//                   <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
//                     <div className="flex items-start space-x-2">
//                       <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
//                       <div className="text-sm text-blue-800">
//                         <strong>Security Notice:</strong> Never share this code with anyone. 
//                         AyurYog will never ask for your verification code via phone, email, or text message.
//                       </div>
//                     </div>
//                   </div>

//                   {/* Back to Signup */}
//                   <div className="text-center">
//                     <Button
//                       variant="ghost"
//                       onClick={() => router.push("/signup")}
//                       className="text-muted-foreground hover:text-foreground"
//                     >
//                       ← Back to Signup
//                     </Button>
//                   </div>
//                 </CardContent>
//               </SpiritualCard>
//             </ScrollReveal>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   )
// }

