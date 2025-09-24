// src/app/page.tsx
"use client";

import MainContent from "./Components/MainContent";
import Slidebar from "./Components/Slidebar";
import ForConcept from "./Components/ForConcept";
import OurFeatured from "./Components/OurFeatured";
import WhatOurStudents from "./Components/WhatOurStudents";
import TopClass from "./Components/TopClass";
import OurInstaFeed from "./Components/OurInstaFeed";
import MattEng from "./Components/MattEng";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <MainContent />
      <Slidebar />
      <ForConcept />
      <OurFeatured />
      <WhatOurStudents />
      <TopClass />
      <OurInstaFeed />
      <MattEng />
    </div>
  );
}
