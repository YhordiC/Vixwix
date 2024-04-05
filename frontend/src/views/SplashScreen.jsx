import AppLogo from "@/components/AppLogo";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

AppLogo
export  default function SplashScreen({  
delay,
destination
}) {
  
  const navigateTo = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigateTo(destination);
    }, delay); 

    return () => clearTimeout(timeout);
  }
  , [delay, navigateTo, destination]);

    return (
        <section className={
            `flex flex-col items-center justify-center h-dvh gap-8 bg-primary animate-fade-in
            
          `}>
            <div className="animate-bounce-twice-and-fade "> 
            <AppLogo className="shadow-xl drop-shadow-md" />

            </div>
          </section>
  )
}
