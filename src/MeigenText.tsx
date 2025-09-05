import { useState, useEffect } from "react";
import "./MeigenText.css";
import { getMeigenData } from "./database/meigen-data";

export default function MeigenText() {
  const meigenData = getMeigenData();

  const [meigen, setMeigen] = useState<{ id: number; author: string; text: string } | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * meigenData.length);
    setMeigen(meigenData[randomIndex]);
  }, []);

  return (
    <div>
      {meigen && (
        <>
          <h1 className="meigen-text">{meigen.text}</h1>
          <p className="meigen-author">{meigen.author}</p>
        </>
      )}
    </div>
  );
}
