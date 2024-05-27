import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;  // question mark means the prop is optional 
}

const layout = ({children, showHero= false}: Props) => {       //react node so the children is going to contain all the components that are nested inside the layout tags 
   
    return (
        <div className="flex flex-col min-h-screen">     
        <Header />
        {showHero &&  <Hero /> }
       
        <div className="container mx-auto flex-1 py-10">{children} </div>
        <Footer />   
        </div>
    );
};

export default layout;