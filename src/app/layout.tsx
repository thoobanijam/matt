// src/app/layout.tsx

import "./globals.css";
import Navbar from "./Components/Navbar";
import LastSection from "./Components/LastSection";
import FloatingBox from "./Components/FloatingBox";
import Message from "./Components/Message";


export const metadata = {
  title: "Matt Academy ",
  description: "Learn English with Matt",
  icons:{
    icon: "/img/logo.png", 
},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  
return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {/* Fixed Navbar */}
        <Navbar />
<FloatingBox/>
<Message/>
        {/* Main content with padding only once */}
        <main style={{ paddingTop: "130px" }}>
{children}
        </main>

        {/* Footer Section */}
        <LastSection />
      </body>
    </html>
  );
}
