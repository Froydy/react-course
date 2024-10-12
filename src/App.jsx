import { useState } from "react";
import FeedBackSection from "./components/FeedBackSection";
import Header from "./components/Header";
import TabsSection from "./components/TabsSection";
import Teacginh from "./components/Teaching";
import Differences from "./components/differences";
import IntroSection from "./introSection";

export default function App() {
  const [tab, setTab] = useState("feedback");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <Teacginh />
            <Differences />
          </>
        )}

        {tab === "feedback" && <FeedBackSection />}
      </main>
    </>
  );
}
