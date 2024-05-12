import Header from "@/components/Header";
import React from "react";

type Props = {
  children: React.ReactNode;
}

const layout = ({children}: Props) => {       //react node so the children is going to contain all the components that are nested inside the layout tags 
   
    return (
        <div className="flex flex-col min-h-screen">     
        <Header />

        <div className="container mx-auto flex-1 py-10">{children} </div>      
            

        </div> 
        
       
    );
};

export default layout;