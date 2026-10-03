/**
 * soilTypes.js
 *
 * Authoritative soil-name lookup catalogue.
 *
 * IMPORTANT:
 * This module resolves soil NAMES and diagnostic text.
 * It does NOT replace formal field/laboratory classification using
 * USDA Soil Taxonomy, WRB, or a national soil classification system.
 *
 * Primary standards:
 * USDA Keys to Soil Taxonomy, 13th ed. (2022)
 * https://www.nrcs.usda.gov/resources/guides-and-instructions/keys-to-soil-taxonomy
 *
 * World Reference Base for Soil Resources, 4th ed. (2022),
 * corrected 2024
 * https://wrb.isric.org/documents.html
 * https://wrb.isric.org/files/WRB_fourth_edition_2022-12-18_errata_correction_2024-09-24.pdf
 *
 * FAO WRB portal:
 * https://www.fao.org/soils-portal/data-hub/soil-classification/world-reference-base/en/
 */

export const soilTypes = {
  mollisol: {
    canonicalKey: "mollisol",
    displayName: "Mollisol",
    classificationSystem: "USDA Soil Taxonomy",
    level: "Order",
    family: "USDA Soil Taxonomy — Order",
    shortDescription:
      "Base-rich mineral soil typically having a dark surface horizon relatively high in organic matter; nearly all Mollisols have a mollic epipedon.",
    aliases: ["mollisol", "mollisols"],
    regionalNames: [],
    diagnosticKeywords: [
      "dark colored surface horizon",
      "mollic epipedon",
      "base rich",
      "high organic matter"
    ],
    sourceUrls: [
      "https://www.nrcs.usda.gov/conservation-basics/soil/mollisols",
      "https://www.nrcs.usda.gov/resources/guides-and-instructions/keys-to-soil-taxonomy"
    ]
  },

  alfisol: {
    canonicalKey: "alfisol",
    displayName: "Alfisol",
    classificationSystem: "USDA Soil Taxonomy",
    level: "Order",
    family: "USDA Soil Taxonomy — Order",
    shortDescription:
      "Soil with an argillic, kandic, or natric horizon and base saturation of 35 percent or greater under USDA criteria.",
    aliases: ["alfisol", "alfisols"],
    regionalNames: [],
    diagnosticKeywords: [
      "argillic horizon",
      "kandic horizon",
      "natric horizon",
      "base saturation 35 percent or greater"
    ],
    sourceUrls: [
      "https://www.nrcs.usda.gov/conservation-basics/soil/alfisols",
      "https://www.nrcs.usda.gov/resources/guides-and-instructions/keys-to-soil-taxonomy"
    ]
  },

  ultisol: {
    canonicalKey: "ultisol",
    displayName: "Ultisol",
    classificationSystem: "USDA Soil Taxonomy",
    level: "Order",
    family: "USDA Soil Taxonomy — Order",
    shortDescription:
      "Strongly weathered and leached soil with an argillic or kandic horizon and base saturation below 35 percent.",
    aliases: ["ultisol", "ultisols"],
    regionalNames: [],
    diagnosticKeywords: [
      "argillic horizon",
      "kandic horizon",
      "base saturation less than 35 percent",
      "intense weathering",
      "leaching"
    ],
    sourceUrls: [
      "https://www.nrcs.usda.gov/conservation-basics/soil/ultisols",
      "https://www.nrcs.usda.gov/resources/guides-and-instructions/keys-to-soil-taxonomy"
    ]
  },

  oxisol: {
    canonicalKey: "oxisol",
    displayName: "Oxisol",
    classificationSystem: "USDA Soil Taxonomy",
    level: "Order",
    family: "USDA Soil Taxonomy — Order",
    shortDescription:
      "Highly weathered tropical or subtropical soil dominated by low-activity minerals such as quartz, kaolinite, and iron oxides.",
    aliases: ["oxisol", "oxisols"],
    regionalNames: [],
    diagnosticKeywords: [
      "highly weathered",
      "low activity minerals",
      "kaolinite",
      "iron oxides",
      "tropical subtropical"
    ],
    sourceUrls: [
      "https://www.nrcs.usda.gov/conservation-basics/soil/oxisols",
      "https://www.nrcs.usda.gov/resources/guides-and-instructions/keys-to-soil-taxonomy"
    ]
  },

  histosol: {
    canonicalKey: "histosol",
    displayName: "Histosol",
    classificationSystem: "USDA Soil Taxonomy",
    level: "Order",
    family: "USDA Soil Taxonomy — Order",
    shortDescription:
      "Dominantly organic soil without permafrost.",
    aliases: ["histosol", "histosols"],
    regionalNames: [
      "bog",
      "moor",
      "peat",
      "muck"
    ],
    diagnosticKeywords: [
      "dominated by organic soil materials",
      "dominantly organic",
      "high organic matter",
      "no permafrost"
    ],
    sourceUrls: [
      "https://www.nrcs.usda.gov/conservation-basics/soil/histosols",
      "https://www.nrcs.usda.gov/resources/guides-and-instructions/keys-to-soil-taxonomy"
    ]
  },

  andisol: {
    canonicalKey: "andisol",
    displayName: "Andisol",
    classificationSystem: "USDA Soil Taxonomy",
    level: "Order",
    family: "USDA Soil Taxonomy — Order",
    shortDescription:
      "Soil dominated by short-range-order minerals and qualifying andic soil properties; volcanic glass may be an important component.",
    aliases: ["andisol", "andisols"],
    regionalNames: [],
    diagnosticKeywords: [
      "short range order minerals",
      "volcanic glass",
      "andic soil properties",
      "volcanic ejecta"
    ],
    sourceUrls: [
      "https://www.nrcs.usda.gov/conservation-basics/soil/andisols",
      "https://www.nrcs.usda.gov/resources/guides-and-instructions/keys-to-soil-taxonomy"
    ]
  },

  aridisol: {
    canonicalKey: "aridisol",
    displayName: "Aridisol",
    classificationSystem: "USDA Soil Taxonomy",
    level: "Order",
    family: "USDA Soil Taxonomy — Order",
    shortDescription:
      "Dry-region soil meeting USDA aridic-moisture and diagnostic-horizon criteria.",
    aliases: ["aridisol", "aridisols"],
    regionalNames: [],
    diagnosticKeywords: [
      "aridic moisture regime",
      "ochric epipedon",
      "calcic horizon",
      "gypsic horizon",
      "salic horizon",
      "duripan"
    ],
    sourceUrls: [
      "https://www.nrcs.usda.gov/conservation-basics/soil/aridisols",
      "https://www.nrcs.usda.gov/resources/guides-and-instructions/keys-to-soil-taxonomy"
    ]
  },

  vertisol: {
    canonicalKey: "vertisol",
    displayName: "Vertisol",
    classificationSystem: "USDA Soil Taxonomy",
    level: "Order",
    family: "USDA Soil Taxonomy — Order",
    shortDescription:
      "Clay-rich soil with expanding clay minerals, pronounced shrink-swell behavior, and deep wide cracks during part of the year.",
    aliases: ["vertisol", "vertisols"],
    regionalNames: [
      "black cotton soil (documented regional usage in Laikipia, Kenya; not an exact global synonym)"
    ],
    diagnosticKeywords: [
      "expanding clay",
      "deep wide cracks",
      "shrink swell",
      "shrinks when dry",
      "swells when wet"
    ],
    sourceUrls: [
      "https://www.nrcs.usda.gov/conservation-basics/soil/vertisols",
      "https://tpyoung.ucdavis.edu/introduction-black-cotton-ecosystem-and-exclosure-plots"
    ]
  },

  spodosol: {
    canonicalKey: "spodosol",
    displayName: "Spodosol",
    classificationSystem: "USDA Soil Taxonomy",
    level: "Order",
    family: "USDA Soil Taxonomy — Order",
    shortDescription:
      "Soil characterized by subsurface accumulation of amorphous organic matter and aluminum, with or without iron.",
    aliases: ["spodosol", "spodosols"],
    regionalNames: [],
    diagnosticKeywords: [
      "organic matter and aluminum",
      "aluminum with or without iron",
      "eluvial horizon",
      "light gray horizon",
      "spodic"
    ],
    sourceUrls: [
      "https://www.nrcs.usda.gov/conservation-basics/soil/spodosols",
      "https://www.nrcs.usda.gov/resources/guides-and-instructions/keys-to-soil-taxonomy"
    ]
  },

  entisol: {
    canonicalKey: "entisol",
    displayName: "Entisol",
    classificationSystem: "USDA Soil Taxonomy",
    level: "Order",
    family: "USDA Soil Taxonomy — Order",
    shortDescription:
      "Soil showing little or no evidence of pedogenic horizon development.",
    aliases: ["entisol", "entisols"],
    regionalNames: [],
    diagnosticKeywords: [
      "little or no pedogenic horizon development",
      "recent sediments",
      "very shallow",
      "sandy"
    ],
    sourceUrls: [
      "https://www.nrcs.usda.gov/conservation-basics/soil/entisols",
      "https://www.nrcs.usda.gov/resources/guides-and-instructions/keys-to-soil-taxonomy"
    ]
  },

  gelisol: {
    canonicalKey: "gelisol",
    displayName: "Gelisol",
    classificationSystem: "USDA Soil Taxonomy",
    level: "Order",
    family: "USDA Soil Taxonomy — Order",
    shortDescription:
      "Cold-region soil defined by near-surface permafrost and/or gelic materials associated with cryoturbation or ice segregation.",
    aliases: ["gelisol", "gelisols"],
    regionalNames: [],
    diagnosticKeywords: [
      "permafrost within 100 cm",
      "gelic materials",
      "cryoturbation",
      "frost churning",
      "ice segregation"
    ],
    sourceUrls: [
      "https://www.nrcs.usda.gov/conservation-basics/soil/gelisols",
      "https://www.nrcs.usda.gov/resources/guides-and-instructions/keys-to-soil-taxonomy"
    ]
  },

  inceptisol: {
    canonicalKey: "inceptisol",
    displayName: "Inceptisol",
    classificationSystem: "USDA Soil Taxonomy",
    level: "Order",
    family: "USDA Soil Taxonomy — Order",
    shortDescription:
      "Moderately developed soil with altered horizons but without several more strongly diagnostic horizons used to define other orders.",
    aliases: ["inceptisol", "inceptisols"],
    regionalNames: [],
    diagnosticKeywords: [
      "moderate soil development",
      "altered horizons",
      "weatherable minerals",
      "no argillic horizon",
      "no spodic horizon",
      "no oxic horizon"
    ],
    sourceUrls: [
      "https://www.nrcs.usda.gov/conservation-basics/soil/inceptisols",
      "https://www.nrcs.usda.gov/resources/guides-and-instructions/keys-to-soil-taxonomy"
    ]
  },

  chernozem: {
    canonicalKey: "chernozem",
    displayName: "Chernozem",
    classificationSystem: "World Reference Base for Soil Resources (WRB)",
    level: "Reference Soil Group",
    family: "WRB — Reference Soil Group",
    shortDescription:
      "WRB soil with a very dark mollic horizon and secondary-carbonate occurrence meeting defined depth criteria.",
    aliases: ["chernozem", "chernozems"],
    regionalNames: [],
    diagnosticKeywords: [
      "very dark mollic horizon",
      "secondary carbonates",
      "high base saturation",
      "long grass steppe"
    ],
    sourceUrls: [
      "https://isric.org/all-about-soil/chernozems/",
      "https://wrb.isric.org/documents.html",
      "https://wrb.isric.org/files/WRB_fourth_edition_2022-12-18_errata_correction_2024-09-24.pdf"
    ]
  },

  gleysol: {
    canonicalKey: "gleysol",
    displayName: "Gleysol",
    classificationSystem: "World Reference Base for Soil Resources (WRB)",
    level: "Reference Soil Group",
    family: "WRB — Reference Soil Group",
    shortDescription:
      "WRB soil having gleyic properties associated with prolonged wetness within 50 cm of the surface.",
    aliases: ["gleysol", "gleysols"],
    regionalNames: [],
    diagnosticKeywords: [
      "gleyic properties",
      "prolonged wetness",
      "within 50 cm",
      "groundwater",
      "reduction"
    ],
    sourceUrls: [
      "https://isric.org/all-about-soil/gleysols/",
      "https://wrb.isric.org/documents.html",
      "https://wrb.isric.org/files/WRB_fourth_edition_2022-12-18_errata_correction_2024-09-24.pdf"
    ]
  },

  podzol: {
    canonicalKey: "podzol",
    displayName: "Podzol",
    classificationSystem: "World Reference Base for Soil Resources (WRB)",
    level: "Reference Soil Group",
    family: "WRB — Reference Soil Group",
    shortDescription:
      "WRB soil with a spodic horizon within 200 cm, commonly beneath an albic, histic, umbric, or ochric horizon.",
    aliases: ["podzol", "podzols"],
    regionalNames: [],
    diagnosticKeywords: [
      "spodic horizon",
      "illuvial alumino organic substances",
      "within 200 cm",
      "albic horizon",
      "white eluvial horizon"
    ],
    sourceUrls: [
      "https://isric.org/all-about-soil/podzols/",
      "https://wrb.isric.org/documents.html",
      "https://wrb.isric.org/files/WRB_fourth_edition_2022-12-18_errata_correction_2024-09-24.pdf"
    ]
  },

  andosol: {
    canonicalKey: "andosol",
    displayName: "Andosol",
    classificationSystem: "World Reference Base for Soil Resources (WRB)",
    level: "Reference Soil Group",
    family: "WRB — Reference Soil Group",
    shortDescription:
      "WRB soil with a vitric or andic horizon beginning within 25 cm of the surface, commonly associated with pyroclastic material.",
    aliases: ["andosol", "andosols"],
    regionalNames: [],
    diagnosticKeywords: [
      "vitric horizon",
      "andic horizon",
      "pyroclastic deposits",
      "allophane",
      "imogolite"
    ],
    sourceUrls: [
      "https://isric.org/all-about-soil/andosols/",
      "https://wrb.isric.org/documents.html",
      "https://wrb.isric.org/files/WRB_fourth_edition_2022-12-18_errata_correction_2024-09-24.pdf"
    ]
  },

  phaeozem: {
    canonicalKey: "phaeozem",
    displayName: "Phaeozem",
    classificationSystem: "World Reference Base for Soil Resources (WRB)",
    level: "Reference Soil Group",
    family: "WRB — Reference Soil Group",
    shortDescription:
      "WRB dark, base-rich soil with a mollic horizon, specified base saturation, and a calcium-carbonate-free matrix to the required depth.",
    aliases: ["phaeozem", "phaeozems"],
    regionalNames: [],
    diagnosticKeywords: [
      "mollic horizon",
      "base saturation 50 percent or more",
      "calcium carbonate free",
      "moist steppe"
    ],
    sourceUrls: [
      "https://isric.org/all-about-soil/phaeozems/",
      "https://wrb.isric.org/documents.html",
      "https://wrb.isric.org/files/WRB_fourth_edition_2022-12-18_errata_correction_2024-09-24.pdf"
    ]
  },

  kastanozem: {
    canonicalKey: "kastanozem",
    displayName: "Kastanozem",
    classificationSystem: "World Reference Base for Soil Resources (WRB)",
    level: "Reference Soil Group",
    family: "WRB — Reference Soil Group",
    shortDescription:
      "WRB soil with a mollic horizon and accumulation of secondary calcium carbonate within 100 cm.",
    aliases: ["kastanozem", "kastanozems"],
    regionalNames: [],
    diagnosticKeywords: [
      "mollic horizon",
      "secondary calcium carbonate within 100 cm",
      "calcium carbonate accumulation",
      "dry steppe"
    ],
    sourceUrls: [
      "https://isric.org/all-about-soil/kastanozems/",
      "https://wrb.isric.org/documents.html",
      "https://wrb.isric.org/files/WRB_fourth_edition_2022-12-18_errata_correction_2024-09-24.pdf"
    ]
  },

  chernozemic_canada: {
    canonicalKey: "chernozemic_canada",
    displayName: "Chernozemic",
    classificationSystem: "Canadian System of Soil Classification",
    level: "Order",
    family: "Canadian System of Soil Classification — Order",
    shortDescription:
      "Canadian order of mainly grassland and grassland-forest soils having a diagnostic Chernozemic A horizon.",
    aliases: [
      "chernozemic",
      "chernozemic soil",
      "chernozemic soils",
      "brown chernozem",
      "dark brown chernozem",
      "black chernozem",
      "dark gray chernozem"
    ],
    regionalNames: [
      "Brown Chernozem",
      "Dark Brown Chernozem",
      "Black Chernozem",
      "Dark Gray Chernozem"
    ],
    diagnosticKeywords: [
      "chernozemic a horizon",
      "base saturation more than 80 percent",
      "calcium dominant",
      "grassland",
      "brown chernozem",
      "dark brown chernozem",
      "black chernozem",
      "dark gray chernozem"
    ],
    sourceUrls: [
      "https://sis.agr.gc.ca/cansis/taxa/cssc3/chpt05.html"
    ]
  },

  unknown: {
    canonicalKey: "unknown",
    displayName: "Unknown / Ambiguous Soil Type",
    classificationSystem: null,
    level: null,
    family: "Unresolved",
    shortDescription:
      "The supplied name or description does not uniquely identify one supported taxonomic category.",
    aliases: [],
    regionalNames: [],
    diagnosticKeywords: [],
    sourceUrls: []
  }
};

/**
 * Generic common names that are too broad to classify safely
 * without additional geographic/profile information.
 */
const ambiguousCommonNames = new Set([
  "black soil",
  "black earth",
  "dark soil",
  "desert soil",
  "volcanic soil",
  "volcanic ash soil",
  "peat soil",
  "wet soil",
  "clay soil",
  "sandy soil"
]);

function normalizeSoilText(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[_/()-]+/g, " ")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Resolve a soil name or diagnostic description.
 *
 * Matching order:
 * 1. Reject deliberately ambiguous generic names.
 * 2. Match canonical key, display name, or authoritative exact alias.
 * 3. Score diagnostic keyword matches.
 * 4. Return a result only when there is a unique best score with
 *    at least two diagnostic keyword matches.
 * 5. Otherwise return soilTypes.unknown rather than guessing.
 */
export function getSoilType(name) {
  const text = normalizeSoilText(name);

  if (!text) {
    return soilTypes.unknown;
  }

  if (ambiguousCommonNames.has(text)) {
    return soilTypes.unknown;
  }

  const entries = Object.values(soilTypes).filter(
    (soil) => soil.canonicalKey !== "unknown"
  );

  // First: exact, taxonomically defensible name matching.
  for (const soil of entries) {
    const exactNames = [
      soil.canonicalKey,
      soil.displayName,
      ...(soil.aliases ?? [])
    ].map(normalizeSoilText);

    if (exactNames.includes(text)) {
      return soil;
    }
  }

  // Second: diagnostic-text matching.
  const scores = entries
    .map((soil) => {
      const matchedKeywords = soil.diagnosticKeywords.filter((keyword) =>
        text.includes(normalizeSoilText(keyword))
      );

      return {
        soil,
        score: matchedKeywords.length
      };
    })
    .sort((a, b) => b.score - a.score);

  const best = scores[0];
  const secondBest = scores[1];

  // Require multiple clues and reject ties.
  if (
    best &&
    best.score >= 2 &&
    best.score > (secondBest?.score ?? 0)
  ) {
    return best.soil;
  }

  return soilTypes.unknown;
}

export default soilTypes;
