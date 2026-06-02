// 노력맨 마스코트 이미지의 흰 배경을 자동으로 투명 처리(누끼)한다.
// 가장자리에서 연결된 "흰색"만 flood-fill 로 지우므로 눈·하이라이트 등
// 캐릭터 내부의 흰색은 보존된다. (배경이 평평한 흰색일 때 잘 동작)
//
// 실행: node scripts/cutout-mascots.mjs
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const G = (f) => join(ROOT, "public", "assets", "guidebook", f);

const SOURCES = {
  inline: G("page_18_image_7.png"),
  rope: G("page_21_image_10.png"),
  basket: G("page_23_image_13.png"),
  board: G("page_25_image_16.png"),
  play: G("page_27_image_19.png"),
  soccer: G("page_29_image_22.png"),
  bubble: G("page_35_image_26.png"),
};

const OUT_DIR = join(ROOT, "public", "assets", "mascots");
mkdirSync(OUT_DIR, { recursive: true });

const THRESHOLD = 236; // 이 값 이상(R,G,B 모두)이면 흰색으로 간주

for (const [name, src] of Object.entries(SOURCES)) {
  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info; // channels === 4
  const idx = (x, y) => (y * width + x) * channels;
  const isWhite = (i) =>
    data[i] >= THRESHOLD && data[i + 1] >= THRESHOLD && data[i + 2] >= THRESHOLD;

  const visited = new Uint8Array(width * height);
  const stack = [];
  const consider = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const p = y * width + x;
    if (visited[p]) return;
    visited[p] = 1;
    if (isWhite(idx(x, y))) stack.push(x, y);
  };

  // 네 변에서 시작
  for (let x = 0; x < width; x++) {
    consider(x, 0);
    consider(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    consider(0, y);
    consider(width - 1, y);
  }

  let cleared = 0;
  while (stack.length) {
    const y = stack.pop();
    const x = stack.pop();
    data[idx(x, y) + 3] = 0; // 투명
    cleared++;
    consider(x + 1, y);
    consider(x - 1, y);
    consider(x, y + 1);
    consider(x, y - 1);
  }

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(join(OUT_DIR, `${name}.png`));

  const pct = ((cleared / (width * height)) * 100).toFixed(1);
  console.log(`✓ ${name}  (${width}x${height}, 배경 ${pct}% 투명화)`);
}

console.log("\n완료: public/assets/mascots/*.png");
