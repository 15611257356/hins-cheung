const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const bvLink = (bv) => `https://www.bilibili.com/video/${bv}/`;

const routes = [
  {
    no: "01",
    mood: "只听一首",
    title: "樱花树下",
    text: "2018 年 Hinsideout 的 4K 现场。唱到后来眼眶是红的。第一次看他，从这里开始。",
    href: "#sakura",
  },
  {
    no: "02",
    mood: "想一个人听",
    title: "春秋",
    text: "粉丝常说的那句，是“至少要见面上万次”。适合夜里，不适合当背景音。",
    href: "#chunqiu",
  },
  {
    no: "03",
    mood: "想跟全场一起唱",
    title: "只是太爱你",
    text: "旋律一出来，场子会自己接。成名曲《断点》和《My Way》在下面的现场合集里，按分集翻。",
    href: "#love",
  },
  {
    no: "04",
    mood: "想认识这个人",
    title: "口水多过浪花",
    text: "商台访谈，从 2012 聊到 2023。唱歌很稳，开口说话是另一个密度。",
    href: "#do",
  },
];

const videos = [
  {
    id: "sakura",
    kind: "live",
    tone: "sakura",
    title: "樱花树下",
    meta: "2018 · Hinsideout · 4K",
    bv: "BV1CT4y1N7PW",
    text: "真情流露的一场。第一次看他的现场，从这里开始。",
    wide: true,
  },
  {
    id: "chunqiu",
    kind: "live",
    tone: "ink",
    title: "春秋",
    meta: "4K 现场",
    bv: "BV1xA411x7J5",
    text: "想被一首歌留住的话，听这首，不要切走。",
  },
  {
    id: "pair",
    kind: "live",
    tone: "ink",
    title: "春秋 · 酷爱",
    meta: "2014 演唱会",
    bv: "BV1Rt4y127oS",
    text: "两首连着唱。想核对“现场像录音”这句话，听这一段。",
  },
  {
    id: "love",
    kind: "live",
    tone: "rose",
    title: "只是太爱你",
    meta: "现场 · 4K 修复",
    bv: "BV1ZP4y1K7Wf",
    text: "适合想跟唱、不想先做功课的晚上。",
  },
  {
    id: "book",
    kind: "live",
    tone: "rose",
    title: "笑忘书",
    meta: "2017 · 与王菀之",
    bv: "BV1554y1r7AA",
    text: "The Magical Teeter Totter。他唱别人的歌，语气还是自己的。",
  },
  {
    id: "way",
    kind: "live",
    tone: "gold",
    title: "On My Way",
    meta: "The Next 20 · 4K",
    bv: "BV1Q16nBCExo",
    text: "二十周年演唱会主题曲的现场。老歌听完，可以看这几年的他。和早期的《My Way》不是同一首。",
  },
  {
    id: "set",
    kind: "live",
    tone: "gold",
    title: "单曲现场合集",
    meta: "断点 · My Way · 骚灵情歌",
    bv: "BV1hU4y147H8",
    text: "一份很长的分集目录。《断点》《My Way》《青春常驻》都在里面，当片库翻。",
  },
  {
    id: "tours",
    kind: "live",
    tone: "gold",
    title: "演唱会修复系列",
    meta: "按年份补 live",
    bv: "BV1zu411b7NV",
    text: "从早期个人演唱会到 The Next 20。分集很多，适合已经决定入坑的人。",
  },
  {
    id: "do",
    kind: "talk",
    tone: "talk",
    title: "口水多过浪花",
    meta: "2012–2023 · 商台访谈",
    bv: "BV16j411F7uY",
    text: "聊新歌、聊猫、聊低潮。想认识唱歌以外的张敬轩，先看这个。",
  },
  {
    id: "story",
    kind: "talk",
    tone: "talk",
    title: "歌背后的故事",
    meta: "创作访谈",
    bv: "BV1jG411U7ML",
    by: "应该系除非唔系h",
    text: "从《20170201》讲到《培正东4号》。他自己说创作从哪来。",
  },
  {
    id: "stage-talk",
    kind: "talk",
    tone: "talk",
    title: "台上的话",
    meta: "演唱会谈话合集",
    bv: "BV1zW4y1o7VF",
    text: "正经和搞笑来回切。会接礼物，会损人，也会突然认真。",
  },
];

const photos = [
  {
    src: "images/set/01-coat.jpg",
    alt: "张敬轩穿黑色长外套，侧脸对着麦克风",
    cap: "黑白 · 长外套",
    credit: "Manna",
    cls: "tall",
    pos: "center 28%",
  },
  {
    src: "images/set/02-white-stand.jpg",
    alt: "张敬轩穿白衬衫黑裤子站在台上唱歌",
    cap: "白衬衫 · 站着唱",
    credit: "momonlash",
    cls: "tall",
    pos: "center 22%",
  },
  {
    src: "images/set/03-white-sit.jpg",
    alt: "张敬轩坐在台上，侧脸拿着麦克风",
    cap: "白衬衫 · 坐着",
    credit: "momonlash",
    cls: "tall",
    pos: "center 18%",
  },
  {
    src: "images/set/04-white-front.jpg",
    alt: "张敬轩坐在台上面向前方唱歌，鞋底是红色的",
    cap: "白衬衫 · 正面",
    credit: "momonlash",
    cls: "tall",
    pos: "center 16%",
  },
  {
    src: "images/set/05-jacket.jpg",
    alt: "张敬轩穿米白色外套，对着镜头",
    cap: "米白外套",
    credit: "y.g",
    cls: "tall",
    pos: "center 20%",
  },
  {
    src: "images/set/06-close.jpg",
    alt: "张敬轩近景，双手握着麦克风",
    cap: "近景",
    credit: "Xuxing",
    cls: "tall",
    pos: "center 30%",
  },
  {
    src: "images/set/07-leather.jpg",
    alt: "张敬轩穿皮衣低头看向舞台一侧",
    cap: "皮衣",
    credit: "Xuxing",
    cls: "tall",
    pos: "center 18%",
  },
  {
    src: "images/set/08-keys.jpg",
    alt: "张敬轩在键盘前抬头唱歌",
    cap: "键盘前",
    credit: "现场",
    cls: "tall",
    pos: "center 24%",
  },
  {
    src: "images/set/09-hoodie.jpg",
    alt: "张敬轩穿灰色连帽衫，侧脸看向舞台灯光",
    cap: "灰色连帽衫",
    credit: "lovemyhins",
    cls: "tall",
    pos: "center 22%",
  },
  {
    src: "images/set/10-bomber.jpg",
    alt: "张敬轩穿墨绿色飞行夹克，仰头笑",
    cap: "飞行夹克",
    credit: "现场",
    cls: "tall",
    pos: "center 20%",
  },
  {
    src: "images/set/11-lean.jpg",
    alt: "张敬轩低头靠近镜头，暖色灯光",
    cap: "近景 · 暖光",
    credit: "现场",
    cls: "tall",
    pos: "center 30%",
  },
  {
    src: "images/set/12-candle.jpg",
    alt: "张敬轩在烛光前看着镜头",
    cap: "烛光",
    credit: "现场",
    cls: "tall",
    pos: "center 24%",
  },
  {
    src: "images/set/13-plaid.jpg",
    alt: "张敬轩穿格子衬衫站在键盘前微笑",
    cap: "格子衬衫",
    credit: "Manna",
    cls: "tall",
    pos: "center 28%",
  },
  {
    src: "images/set/14-red-point.jpg",
    alt: "张敬轩穿红色套装站在台上，一只手指向上方",
    cap: "红装 · 全身",
    credit: "ihins",
    cls: "tall",
    pos: "center 36%",
  },
  {
    src: "images/set/15-red-up.jpg",
    alt: "张敬轩穿红色套装仰头唱歌",
    cap: "红装 · 仰头",
    credit: "ihins",
    cls: "tall",
    pos: "center 28%",
  },
  {
    src: "images/set/16-petals.jpg",
    alt: "张敬轩在粉色花瓣背景前举起麦克风",
    cap: "花瓣",
    credit: "ihins",
    cls: "wide",
    pos: "72% 42%",
  },
  {
    src: "images/set/17-blue.jpg",
    alt: "张敬轩穿深蓝色亮片长裙，侧身对着麦克风",
    cap: "蓝裙",
    credit: "ihins",
    cls: "tall",
    pos: "center 32%",
  },
  {
    src: "images/set/18-young.jpg",
    alt: "年轻的张敬轩侧脸，暖黄色的背景",
    cap: "侧脸",
    credit: "现场",
    cls: "tall",
    pos: "center 40%",
  },
  {
    src: "images/set/19-purple.jpg",
    alt: "张敬轩穿黑色大衣，在紫色灯光里闭眼唱歌",
    cap: "紫灯",
    credit: "英皇娱乐",
    cls: "tall",
    pos: "center 30%",
  },
  {
    src: "images/set/20-mint.jpg",
    alt: "张敬轩穿浅绿色高领毛衣，抬头看向上方",
    cap: "浅绿高领",
    credit: "Cecilia",
    cls: "tall",
    pos: "center 22%",
  },
];

const notes = [
  "出生日期、出道年份见 Wikimedia Commons 人物分类中的公开资料。",
  "2008 年红馆《酷爱张敬轩演唱会》为他首次个人红馆个唱，见当时的演出报道。",
  "The Next 20 为出道二十周年红馆演唱会，2021 年底至 2022 年演出。",
  "《樱花树下》词林若宁、曲伍卓贤，收录于 2008 年专辑《Urban Emotions》。页面没有引用歌词。",
  "《On My Way》是 The Next 20 主题曲，与早期作品《My Way》不是同一首歌。",
];

const $ = (id) => document.getElementById(id);

function card(v) {
  const by = v.by ? `<span class="by">${esc(v.by)}</span>` : "";
  return `
    <article class="card ${v.wide ? "wide" : ""}" id="${esc(v.id)}" data-kind="${esc(v.kind)}">
      <div class="player" data-tone="${esc(v.tone)}">
        <button type="button" data-bv="${esc(v.bv)}" aria-label="播放${esc(v.title)}">
          <span class="play">播放</span>
          <span class="poster-kicker">${v.kind === "talk" ? "访谈" : "现场"}</span>
          <strong>${esc(v.title)}</strong>
          <em>${esc(v.meta)}</em>
        </button>
      </div>
      <div class="card-body">
        <h3>${esc(v.title)}</h3>
        <p>${esc(v.text)}</p>
        <p class="src">${by}<a href="${bvLink(v.bv)}" target="_blank" rel="noopener">在 B 站打开</a></p>
      </div>
    </article>`;
}

$("routes").innerHTML = routes
  .map(
    (r) => `
    <a class="route" href="${r.href}">
      <span class="no">${r.no}</span>
      <span class="mood">${esc(r.mood)}</span>
      <strong>${esc(r.title)}</strong>
      <p>${esc(r.text)}</p>
      <span class="go">去看这场</span>
    </a>`
  )
  .join("");

$("library").innerHTML = videos.map(card).join("");

$("gallery-grid").innerHTML = photos
  .map(
    (p) => `
    <figure class="${p.cls}">
      <button type="button" aria-label="查看大图：${esc(p.cap)}" data-zoom="${esc(p.src)}" data-cap="${esc(p.cap)}" data-credit="${esc(p.credit)}" data-href="${esc(p.href || "")}">
        <img src="${esc(p.src)}" alt="${esc(p.alt)}" style="object-position:${esc(p.pos)}" loading="lazy" />
      </button>
      <figcaption>${esc(p.cap)}</figcaption>
    </figure>`
  )
  .join("");

$("note-list").innerHTML = notes.map((n) => `<li>${esc(n)}</li>`).join("");

document.addEventListener("click", (e) => {
  const filter = e.target.closest("#filters button");
  if (filter) {
    document.querySelectorAll("#filters button").forEach((b) => b.classList.toggle("on", b === filter));
    const kind = filter.dataset.filter;
    document.querySelectorAll(".card").forEach((card) => {
      card.hidden = kind !== "all" && card.dataset.kind !== kind;
    });
    return;
  }

  const play = e.target.closest(".player button");
  if (play) {
    const frame = document.createElement("iframe");
    frame.src = `https://player.bilibili.com/player.html?isOutside=true&bvid=${play.dataset.bv}&p=1&high_quality=1&danmaku=0&autoplay=1`;
    frame.allow = "autoplay; fullscreen";
    frame.allowFullscreen = true;
    frame.title = play.getAttribute("aria-label") || "Bilibili 播放器";
    play.replaceWith(frame);
    return;
  }

  const zoom = e.target.closest("[data-zoom]");
  if (zoom) {
    const box = $("lightbox");
    const img = box.querySelector("img");
    img.src = zoom.dataset.zoom;
    img.alt = zoom.querySelector("img")?.alt || "";
    const source = zoom.dataset.href
      ? ` · <a href="${zoom.dataset.href}" target="_blank" rel="noopener">出处</a>`
      : "";
    box.querySelector(".lb-cap").innerHTML = `${esc(zoom.dataset.cap)} · ${esc(zoom.dataset.credit)}${source}`;
    box.hidden = false;
    box.querySelector(".lb-close").focus();
  }
});

const box = $("lightbox");
const closeBox = () => {
  box.hidden = true;
  box.querySelector("img").src = "";
};
box.querySelector(".lb-close").addEventListener("click", closeBox);
box.addEventListener("click", (e) => {
  if (e.target === box) closeBox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !box.hidden) closeBox();
});

const wallSlides = photos.map((p) => ({
  src: p.src,
  pos: p.pos,
  credit: `流动壁纸 · ${p.cap} · ${p.credit}`,
}));

const wall = $("wall-photos");
const credit = $("hero-credit");
wall.innerHTML = wallSlides
  .map(
    (s, i) =>
      `<img src="${esc(s.src)}" alt="" style="object-position:${esc(s.pos)}" ${i === 0 ? 'class="on"' : ""} />`
  )
  .join("");
if (credit) credit.textContent = wallSlides[0].credit;

const motionOK = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (motionOK && wallSlides.length > 1) {
  let current = 0;
  const frames = [...wall.querySelectorAll("img")];
  setInterval(() => {
    frames[current].classList.remove("on");
    current = (current + 1) % frames.length;
    frames[current].classList.add("on");
    if (credit) credit.textContent = wallSlides[current].credit;
  }, 7000);
}

const flow = $("flow");
if (flow && motionOK) {
  const ctx = flow.getContext("2d");
  let w = 0;
  let h = 0;
  let tick = 0;
  const resizeFlow = () => {
    w = flow.width = Math.floor(window.innerWidth);
    h = flow.height = Math.floor(window.innerHeight);
  };
  resizeFlow();
  window.addEventListener("resize", resizeFlow);
  const orb = (x, y, r, color) => {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, color);
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  };
  const draw = () => {
    tick += 0.0045;
    ctx.clearRect(0, 0, w, h);
    orb(w * (0.18 + Math.sin(tick) * 0.06), h * (0.28 + Math.cos(tick * 0.7) * 0.05), w * 0.34, "rgba(215,181,106,0.22)");
    orb(w * (0.78 + Math.cos(tick * 0.55) * 0.05), h * (0.62 + Math.sin(tick * 0.45) * 0.06), w * 0.4, "rgba(176,36,58,0.2)");
    orb(w * (0.48 + Math.sin(tick * 0.35) * 0.08), h * (0.84 + Math.cos(tick * 0.3) * 0.04), w * 0.28, "rgba(90,130,210,0.14)");
    ctx.strokeStyle = "rgba(240,221,176,0.14)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = 0; x <= w; x += 8) {
      const y = h * 0.22 + Math.sin(x * 0.004 + tick * 1.4) * 18 + Math.sin(tick * 0.6) * 10;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    requestAnimationFrame(draw);
  };
  draw();
}

const nav = $("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
onScroll();
document.addEventListener("scroll", onScroll, { passive: true });
