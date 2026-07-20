import fs from "fs";

const docs = JSON.parse(fs.readFileSync("tmp-extract/docs.json", "utf8"));
const news = JSON.parse(fs.readFileSync("tmp-extract/news.json", "utf8"));
const affiliates = JSON.parse(fs.readFileSync("tmp-extract/affiliates.json", "utf8"));

const map = {
  "thong-bao-co-dong.html": "shareholderNotices",
  "dai-hoi-co-dong.html": "agmDocs",
  "bao-cao-tai-chinh.html": "financialReports",
  "dieu-le.html": "charters",
  "moi-truong.html": "environmentDocs",
  "dau-thau.html": "biddingDocs",
};

const docsTs = Object.entries(map)
  .map(([file, key]) => {
    const data = docs[file];
    return `export const ${key} = ${JSON.stringify(data, null, 2)} as const;`;
  })
  .join("\n\n");

fs.mkdirSync("src/content", { recursive: true });
fs.writeFileSync(
  "src/content/documents.ts",
  `export type DocItem = {\n  year: string;\n  title: string;\n  date: string;\n  href: string;\n};\n\n${docsTs}\n`,
  "utf8",
);

fs.writeFileSync(
  "src/content/media.ts",
  `export type MediaItem = {\n  href: string;\n  image: string;\n  title: string;\n  date: string;\n};\n\nexport const newsItems = ${JSON.stringify(news.news, null, 2)} as const;\n\nexport const videoItems = ${JSON.stringify(news.videos, null, 2)} as const;\n\nexport const jobItems = ${JSON.stringify(news.jobs, null, 2)} as const;\n`,
  "utf8",
);

fs.writeFileSync(
  "src/content/affiliates.ts",
  `export type Affiliate = {\n  name: string;\n  region: string;\n  field: string;\n  href: string;\n};\n\nexport const affiliates: Affiliate[] = ${JSON.stringify(affiliates, null, 2)};\n`,
  "utf8",
);

console.log("generated src/content/{documents,media,affiliates}.ts");
