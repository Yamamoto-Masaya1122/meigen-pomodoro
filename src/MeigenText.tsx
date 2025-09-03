import { useState, useEffect } from "react";
import "./MeigenText.css";

export default function MeigenText() {
  const meigenTexts = [
    {
      id: 1,
      author: "スティーブ・ジョブス",
      text: "もし今日が人生最後の日だとしたら、今やろうとしていることは 本当にやりたいことだろうか。",
    },
    {
      id: 2,
      author: "レディ・ガガ",
      text: "自分自身を愛していなければ、 結局幸せにはなれないのよ。",
    },
    {
      id: 3,
      author: "本田圭佑",
      text: "俺の人生は挫折の連続なんです。 でもそこから這い上がろうとして、 未知の世界を知ることもある。",
    },
    {
      id: 4,
      author: "光浦靖子",
      text: "頑張っても頑張っても直せないもの、 それが個性。",
    },
    {
      id: 5,
      author: "若林正恭",
      text: "ネガティブを潰すのは ポジティブではない。没頭だ。",
    },
    {
      id: 6,
      author: "ローランド（元ホスト、実業家）",
      text: "下を向くのは、 出勤時に靴をはくときだけさ。",
    },
    {
      id: 7,
      author: "トーマス・エジソン",
      text: "私は失敗したことがない。ただ、一万通りのうまく行かない方法を見つけただけだ。",
    },
    {
      id: 8,
      author: "北野武",
      text: "勉強するから、何をしたいか分かる。勉強しないから、何をしたいか分からない。",
    },
  ];

  const [meigen, setMeigen] = useState<{ id: number; author: string; text: string } | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * meigenTexts.length);
    setMeigen(meigenTexts[randomIndex]);
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
