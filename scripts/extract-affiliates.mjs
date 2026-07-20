import fs from "fs";

const html = fs.readFileSync("legacy/cong-ty-lien-ket.html", "utf8");
const items = [];
const re =
  /data-name="([^"]+)"\s+data-region="([^"]+)"\s+data-field="([^"]+)"[\s\S]*?href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
let m;
while ((m = re.exec(html))) {
  items.push({
    name: m[5].replace(/\s+/g, " ").trim(),
    region: m[2],
    field: m[3],
    href: m[4],
  });
}
// Deduplicate (table + cards)
const seen = new Set();
const unique = items.filter((i) => {
  if (seen.has(i.name)) return false;
  seen.add(i.name);
  return true;
});
console.log("affiliates", unique.length);
fs.writeFileSync("tmp-extract/affiliates.json", JSON.stringify(unique, null, 2), "utf8");
