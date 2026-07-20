import fs from "fs";
import path from "path";

function extractNewsCards(file) {
  const html = fs.readFileSync(path.join("legacy", file), "utf8");
  const items = [];
  const blocks = html.split('<article class="news-card">').slice(1);
  for (const block of blocks) {
    const href = block.match(/href="([^"]+)"/)?.[1] ?? "";
    const image = (block.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? "").replace(
      /^assets\//,
      "/assets/",
    );
    const date = block.match(/<time[^>]*>([^<]*)<\/time>/)?.[1]?.trim() ?? "";
    const title = (block.match(/class="news-card-title">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/)?.[1] ?? "")
      .replace(/&amp;/g, "&")
      .replace(/\s+/g, " ")
      .trim();
    if (title) items.push({ href, image, title, date });
  }
  return items;
}

const out = {
  news: extractNewsCards("tin-tuc.html"),
  videos: extractNewsCards("tin-video.html"),
  jobs: extractNewsCards("tuyen-dung.html"),
};

for (const [k, v] of Object.entries(out)) console.log(k, v.length);
fs.writeFileSync("tmp-extract/news.json", JSON.stringify(out, null, 2), "utf8");
