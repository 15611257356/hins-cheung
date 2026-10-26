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
    src: "images/hins-concert-2022-portrait.jpg",
    alt: "张敬轩穿蓝色珠绣外套唱歌，一只手举起",
    cap: "The Next 20 · 2022.05.27",
    credit: "Kobe Leung · CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:%E5%BC%B5%E6%95%AC%E8%BB%92%E6%BC%94%E5%94%B1%E6%9C%83_Hins_Cheung_Live_Concert_2022_(cropped).jpg",
    cls: "tall",
  },
  {
    src: "images/hins-concert-2022-b.jpg",
    alt: "张敬轩在演唱会上微笑挥手",
    cap: "The Next 20 · 挥手",
    credit: "Kobe Leung · CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/Category:Hins_Cheung_in_2022",
    cls: "tall",
  },
  {
    src: "images/hd/wall-stage.jpg",
    alt: "张敬轩站在圆形升降台上，台下是红色灯海",
    cap: "360 互动环节 · 6000 像素原图",
    credit: "Kobe Leung · CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:%E5%BC%B5%E6%95%AC%E8%BB%92%E6%BC%94%E5%94%B1%E6%9C%83_Hins_Cheung_Concert_27_5_2022_(52105216918).jpg",
    cls: "wide",
  },
  {
    src: "images/hins-2008.jpg",
    alt: "2008 年张敬轩穿花纹西装在演唱会唱歌",
    cap: "2008 · 演唱会",
    credit: "Fcfhkmelb · 公有领域",
    href: "https://commons.wikimedia.org/wiki/File:HinsCheungConcert2008.jpg",
    cls: "mid",
  },
  {
    src: "images/hins-2014.jpg",
    alt: "2014 年张敬轩穿黑西装，在台上抱着花束微笑",
    cap: "2014 · 顾嘉煇中大音乐会",
    credit: "Will629 · CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Joseph_Koo_CUHK_Concert_20141130_(cropped)_(2).jpg",
    cls: "mid",
  },
  {
    src: "images/hins-concert-2022-e.jpg",
    alt: "张敬轩在红色灯光前把麦克风贴近嘴边",
    cap: "The Next 20 · 近景",
    credit: "Kobe Leung · CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:%E5%BC%B5%E6%95%AC%E8%BB%92%E6%BC%94%E5%94%B1%E6%9C%83_Hins_Cheung_Concert_27_5_2022_(52105675705).jpg",
    cls: "tall",
  },
  {
    src: "images/hins-20221113.jpg",
    alt: "张敬轩穿浅色牛仔外套，双手握着麦克风",
    cap: "2022.11",
    credit: "Tombus20032000 · CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Hins_Cheung_20221113.jpg",
    cls: "mid",
  },
  {
    src: "images/hins-concert-2022-a.jpg",
    alt: "张敬轩唱歌时一只手按在胸口",
    cap: "The Next 20 · 2022.05.27",
    credit: "Kobe Leung · CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:%E5%BC%B5%E6%95%AC%E8%BB%92%E6%BC%94%E5%94%B1%E6%9C%83_Hins_Cheung_Concert_27_5_2022_(52104151982).jpg",
    cls: "tall",
  },
  {
    src: "images/hins-2007.jpg",
    alt: "年轻的张敬轩在舞台上笑着挥手",
    cap: "2007",
    credit: "Virusmike · CC BY-SA 2.0",
    href: "https://commons.wikimedia.org/wiki/File:HinsCheung2007.jpg",
    cls: "mid",
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
      <button type="button" aria-label="查看大图：${esc(p.cap)}" data-zoom="${esc(p.src)}" data-cap="${esc(p.cap)}" data-credit="${esc(p.credit)}" data-href="${esc(p.href)}">
        <img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy" />
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
    box.querySelector(".lb-cap").innerHTML = `${esc(zoom.dataset.cap)} · ${esc(zoom.dataset.credit)} · <a href="${zoom.dataset.href}" target="_blank" rel="noopener">Wikimedia</a>`;
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

const wallSlides = [
  { src: "images/hd/wall-stage-close.jpg", pos: "center 30%", credit: "流动壁纸 · 红馆 · Kobe Leung" },
  { src: "images/hd/wall-sing-close.jpg", pos: "center 28%", credit: "流动壁纸 · 开口的那一下 · Kobe Leung" },
  { src: "images/hins-concert-2022-portrait.jpg", pos: "center 18%", credit: "流动壁纸 · 近景 · Kobe Leung" },
  { src: "images/hd/wall-denim-close.jpg", pos: "center 22%", credit: "流动壁纸 · 2022.11 · Tombus20032000" },
  { src: "images/hd/wall-stage.jpg", pos: "center 40%", credit: "流动壁纸 · 灯海 · Kobe Leung" },
  { src: "images/hins-concert-2022-e.jpg", pos: "center 22%", credit: "流动壁纸 · 红灯 · Kobe Leung" },
];

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
