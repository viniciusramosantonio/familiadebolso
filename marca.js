// Família de Bolso: ilustrações vetoriais (chibi) e logo.
// Uso: chibi({...}) e logo() retornam strings SVG.
const COR = {
  creme: "#FFF6EC", areia: "#F7E3CF", terracota: "#E2725B", terracotaEsc: "#C65A44",
  azul: "#2B2D42", amarelo: "#F6C453", rosa: "#F4A6A6", verde: "#7BAE7F"
};
const PELES = { clara: "#F5D0A9", media: "#E0AC7E", morena: "#C68642", negra: "#8D5524" };

function cabelo(estilo, cor) {
  switch (estilo) {
    case "coque": return {
      atras: `<circle cx="100" cy="22" r="24" fill="${cor}"/>`,
      frente: `<path d="M30 92 Q32 30 100 26 Q168 30 170 92 Q150 58 100 56 Q50 58 30 92Z" fill="${cor}"/>` };
    case "longo": return {
      atras: `<path d="M26 95 Q24 30 100 24 Q176 30 174 95 L178 190 Q150 200 140 170 L60 170 Q50 200 22 190Z" fill="${cor}"/>`,
      frente: `<path d="M30 96 Q34 28 100 26 Q166 28 170 96 Q140 50 104 52 Q112 70 70 74 Q46 78 30 96Z" fill="${cor}"/>` };
    case "curto": return {
      atras: "",
      frente: `<path d="M30 90 Q30 26 100 24 Q170 26 170 90 Q160 62 130 56 Q100 50 70 58 Q40 66 30 90Z" fill="${cor}"/>` };
    case "careca": return {
      atras: "",
      frente: `<path d="M30 110 Q28 84 40 72 L46 112Z M170 110 Q172 84 160 72 L154 112Z" fill="${cor}"/>` };
    case "cacheado": {
      let c = "";
      [[40,70],[58,44],[84,30],[116,30],[142,44],[160,70],[34,98],[166,98],[100,26]].forEach(([x,y]) => c += `<circle cx="${x}" cy="${y}" r="22" fill="${cor}"/>`);
      return { atras: c, frente: `<path d="M38 88 Q60 52 100 50 Q140 52 162 88 Q150 40 100 36 Q50 40 38 88Z" fill="${cor}"/>` };
    }
    default: return { atras: "", frente: "" };
  }
}

function chibi(o = {}) {
  const pele = o.pele || PELES.clara, roupa = o.roupa || COR.terracota;
  const h = cabelo(o.cabelo || "curto", o.corCabelo || "#4A3426");
  const olhos = o.olhosFechados
    ? `<path d="M64 108 Q74 98 84 108 M116 108 Q126 98 136 108" stroke="#2B2D42" stroke-width="5" fill="none" stroke-linecap="round"/>`
    : `<ellipse cx="74" cy="106" rx="7" ry="9" fill="#2B2D42"/><ellipse cx="126" cy="106" rx="7" ry="9" fill="#2B2D42"/><circle cx="77" cy="102" r="2.5" fill="#fff"/><circle cx="129" cy="102" r="2.5" fill="#fff"/>`;
  const oculos = o.oculos ? `<g fill="none" stroke="${o.corOculos || "#F7F2EA"}" stroke-width="5"><circle cx="74" cy="106" r="20"/><circle cx="126" cy="106" r="20"/><path d="M94 104 Q100 98 106 104"/></g>` : "";
  const barba = o.barba ? `<path d="M50 118 Q54 170 100 172 Q146 170 150 118 Q144 146 124 150 Q112 146 100 158 Q88 146 76 150 Q56 146 50 118Z" fill="${o.corBarba || o.corCabelo || "#4A3426"}"/>` : "";
  const boca = `<path d="M90 130 Q100 140 110 130" stroke="#7A3E2E" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  const extra = o.extra || "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 270" class="chibi">
    <ellipse cx="100" cy="258" rx="62" ry="10" fill="#00000018"/>
    <rect x="78" y="222" width="18" height="30" rx="8" fill="${o.calca || COR.azul}"/>
    <rect x="104" y="222" width="18" height="30" rx="8" fill="${o.calca || COR.azul}"/>
    <rect x="56" y="156" width="88" height="76" rx="26" fill="${roupa}"/>
    <path d="M86 158 L100 178 L114 158Z" fill="${o.gola || COR.creme}"/>
    <circle cx="56" cy="196" r="12" fill="${pele}"/><circle cx="144" cy="196" r="12" fill="${pele}"/>
    ${h.atras}
    <circle cx="100" cy="100" r="72" fill="${pele}"/>
    ${h.frente}
    <ellipse cx="60" cy="128" rx="11" ry="7" fill="${COR.rosa}" opacity=".7"/>
    <ellipse cx="140" cy="128" rx="11" ry="7" fill="${COR.rosa}" opacity=".7"/>
    ${olhos}${oculos}${barba}${boca}${extra}
  </svg>`;
}

function pet(o = {}) {
  const c = o.cor || "#C99A6B", orelha = o.orelha || "#8A6240";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 270" class="chibi">
    <ellipse cx="100" cy="258" rx="58" ry="10" fill="#00000018"/>
    <ellipse cx="100" cy="222" rx="50" ry="36" fill="${c}"/>
    <rect x="70" y="232" width="16" height="22" rx="8" fill="${c}"/><rect x="114" y="232" width="16" height="22" rx="8" fill="${c}"/>
    <ellipse cx="44" cy="120" rx="22" ry="44" fill="${orelha}" transform="rotate(18 44 120)"/>
    <ellipse cx="156" cy="120" rx="22" ry="44" fill="${orelha}" transform="rotate(-18 156 120)"/>
    <circle cx="100" cy="128" r="64" fill="${c}"/>
    <ellipse cx="100" cy="150" rx="30" ry="22" fill="#F3E2CF"/>
    <ellipse cx="100" cy="140" rx="10" ry="7" fill="#2B2D42"/>
    <path d="M92 156 Q100 164 108 156" stroke="#7A3E2E" stroke-width="4" fill="none" stroke-linecap="round"/>
    <ellipse cx="76" cy="116" rx="7" ry="9" fill="#2B2D42"/><ellipse cx="124" cy="116" rx="7" ry="9" fill="#2B2D42"/>
    <circle cx="79" cy="112" r="2.5" fill="#fff"/><circle cx="127" cy="112" r="2.5" fill="#fff"/>
    <rect x="70" y="182" width="60" height="10" rx="5" fill="${COR.terracota}"/>
  </svg>`;
}

// Personagens prontos da "família"
const FAMILIA = {
  vo:   () => chibi({ pele: PELES.negra, cabelo: "coque", corCabelo: "#D9D4CC", oculos: true, olhosFechados: true, roupa: COR.amarelo, gola: "#fff" }),
  vovo: () => chibi({ pele: PELES.clara, cabelo: "careca", corCabelo: "#E5E1DA", oculos: true, corOculos: "#2B2D42", barba: true, corBarba: "#E5E1DA", roupa: COR.verde }),
  mae:  () => chibi({ pele: PELES.media, cabelo: "longo", corCabelo: "#3A2418", roupa: "#4FA3A5" }),
  pai:  () => chibi({ pele: PELES.morena, cabelo: "curto", corCabelo: "#1E1A18", barba: true, corBarba: "#1E1A18", roupa: COR.azul, calca: "#4C5372" }),
  filha:() => chibi({ pele: PELES.morena, cabelo: "cacheado", corCabelo: "#2A1A12", roupa: "#9B8BD8", olhosFechados: true }),
  dog:  () => pet({})
};

function logo(o = {}) {
  const pele = o.pele || PELES.media;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" class="logo-svg">
    <circle cx="120" cy="96" r="54" fill="${pele}"/>
    <path d="M70 92 Q72 40 120 38 Q168 40 170 92 Q150 66 120 64 Q90 66 70 92Z" fill="#3A2418"/>
    <path d="M96 92 Q104 82 112 92" stroke="#2B2D42" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M128 92 Q136 82 144 92" stroke="#2B2D42" stroke-width="6" fill="none" stroke-linecap="round"/>
    <ellipse cx="92" cy="104" rx="9" ry="6" fill="${COR.rosa}"/><ellipse cx="148" cy="104" rx="9" ry="6" fill="${COR.rosa}"/>
    <path d="M40 118 H200 V170 Q200 214 120 222 Q40 214 40 170Z" fill="${COR.terracota}"/>
    <path d="M52 130 H188 V168 Q188 202 120 210 Q52 202 52 168Z" fill="none" stroke="${COR.creme}" stroke-width="4" stroke-dasharray="9 7"/>
    <rect x="34" y="112" width="172" height="16" rx="8" fill="${COR.terracotaEsc}"/>
    <ellipse cx="86" cy="113" rx="13" ry="10" fill="${pele}"/><ellipse cx="154" cy="113" rx="13" ry="10" fill="${pele}"/>
    <path d="M120 150 c-10 -14 -30 -4 -18 12 l18 16 l18 -16 c12 -16 -8 -26 -18 -12Z" fill="${COR.amarelo}"/>
  </svg>`;
}
