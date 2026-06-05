const oppositePole = {
  E: "I",
  I: "E",
  S: "N",
  N: "S",
  T: "F",
  F: "T",
  J: "P",
  P: "J",
};

const groupAffinity = {
  logic: { logic: 8, passion: 12, natural: 6, steady: 10 },
  passion: { logic: 12, passion: 9, natural: 11, steady: 8 },
  natural: { logic: 6, passion: 11, natural: 9, steady: 10 },
  steady: { logic: 10, passion: 8, natural: 10, steady: 9 },
};

export function calculateKumaResultCode(answers, questions) {
  const scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  questions.forEach((question, index) => {
    const value = answers[index] ?? 0;
    if (value > 0) {
      scores[question.positive] += value;
    } else if (value < 0) {
      scores[oppositePole[question.positive]] += Math.abs(value);
    }
  });

  return [
    scores.E > scores.I ? "E" : "I",
    scores.S > scores.N ? "S" : "N",
    scores.T > scores.F ? "T" : "F",
    scores.J > scores.P ? "J" : "P",
  ].join("");
}

export function getKumaType(code, kumaTypes) {
  const normalized = code.toUpperCase();
  return kumaTypes.find((type) => type.code === normalized);
}

export function getPrimaryCompatibleTypes(type, kumaTypes) {
  return type.compatibility
    .map((code) => getKumaType(code, kumaTypes))
    .filter(Boolean);
}

export function getCompatibilityPair(meCode, youCode, kumaTypes) {
  const me = getKumaType(meCode, kumaTypes);
  const you = getKumaType(youCode, kumaTypes);
  if (!me || !you) return undefined;

  const directMatch =
    me.compatibility.includes(you.code) || you.compatibility.includes(me.code);
  const mutualMatch =
    me.compatibility.includes(you.code) && you.compatibility.includes(me.code);
  const sameGroup = me.group === you.group;
  const base = 62;
  const score = Math.min(
    96,
    base +
      (mutualMatch ? 22 : directMatch ? 16 : 0) +
      (sameGroup ? 8 : groupAffinity[me.group][you.group]),
  );

  const level =
    score >= 88 ? "最高に噛み合う相性" : score >= 78 ? "かなり心地いい相性" : "ゆっくり育つ相性";

  return {
    me,
    you,
    score,
    level,
    headline: `${me.name}と${you.name}は、${directMatch ? "自然に惹かれやすい" : "違いを楽しむほど深まる"}組み合わせです。`,
    goodPoints: [
      `${me.name}の${me.loveStyle}`,
      `${you.name}の${you.loveStyle}`,
      sameGroup
        ? "大切にしたい恋愛テンポが近く、安心感を作りやすいです。"
        : "違う得意分野があるので、役割が重なりすぎず補い合えます。",
    ],
    watchPoints: [
      `${me.name}は「${me.subtitle}」なので、急かされると本音が出にくいことがあります。`,
      `${you.name}は「${you.subtitle}」なので、愛情表現の期待値を先に共有すると安定します。`,
    ],
    advice: [
      "相手の反応を待つ時間を決めて、駆け引きより確認を増やす。",
      "好きなところを短い言葉で伝える。",
      "不安になったら結論を急がず、次に会う予定や話す時間を決める。",
    ],
  };
}
