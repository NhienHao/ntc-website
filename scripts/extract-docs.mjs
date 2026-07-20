import fs from "fs";
import path from "path";

const dir = "legacy";

function extractDocs(file) {
  const html = fs.readFileSync(path.join(dir, file), "utf8");
  const years = [...html.matchAll(/<option value="(\d+)">/g)].map((m) => m[1]);
  const items = [];
  const re =
    /class="doc-item"[^>]*data-year="(\d+)"[\s\S]*?class="doc-title">([\s\S]*?)<\/div>[\s\S]*?class="doc-date"[^>]*>[\s\S]*?<\/i>\s*([^<]+)[\s\S]*?href="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) {
    items.push({
      year: m[1],
      title: m[2].replace(/\s+/g, " ").trim(),
      date: m[3].trim(),
      href: m[4].replace(/^assets\//, "/assets/"),
    });
  }
  return { years: [...new Set(years)], items };
}

const files = [
  "thong-bao-co-dong.html",
  "dai-hoi-co-dong.html",
  "bao-cao-tai-chinh.html",
  "dieu-le.html",
  "moi-truong.html",
  "dau-thau.html",
];

const out = {};
for (const f of files) {
  out[f] = extractDocs(f);
  console.log(f, out[f].items.length);
}

fs.mkdirSync("tmp-extract", { recursive: true });
fs.writeFileSync("tmp-extract/docs.json", JSON.stringify(out, null, 2), "utf8");
console.log("written tmp-extract/docs.json");
