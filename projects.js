// Add / edit freely. Each project must include an `area`:
// "nvh", "controls", or "aero".
export const projects = [
  // --- NVH ---
  {
    title: "HVAC Psychoacoustics Toolkit",
    blurb: "1/3-octave analysis, A-weighting, Zwicker loudness; objective sound-quality scoring for HVAC noise.",
    tags: ["Acoustics","DSP","Sound Quality"],
    area: "nvh",
    featured: true,
    links: [{ label: "Write-up", href: "#" }]
  },
  {
    title: "Exhaust Resonator Study",
    blurb: "Helmholtz + expansion chamber tuning to suppress cabin boom; validation via mic array.",
    tags: ["NVH","Testing"],
    area: "nvh",
    links: [{ label: "Report", href: "#" }]
  },

  // --- Controls ---
  {
    title: "Lane-Keeping MPC (6-state vehicle model)",
    blurb: "Curvature preview, QP constraints, and Simulink integration for real-time lane keeping.",
    tags: ["MATLAB","MPC","Simulink"],
    area: "controls",
    featured: true,
    links: [
      { label: "Code", href: "https://github.com/<your-username>/<repo-or-demo>" },
      { label: "Demo", href: "#" }
    ]
  },
  {
    title: "Active Vibration Control (SISO → MIMO)",
    blurb: "Feedforward + adaptive control to reduce structure-borne noise across seats.",
    tags: ["Control","DSP"],
    area: "controls",
    links: [{ label: "Notes", href: "#" }]
  },

  // --- Aerodynamics ---
  {
    title: "FSAE Diffuser & Undertray Study",
    blurb: "Parametric CFD for downforce vs drag; ride-height sensitivity and stall margins.",
    tags: ["CFD","Optimization","FSAE"],
    area: "aero",
    featured: true,
    links: [{ label: "Report", href: "#" }]
  },
  {
    title: "Wheel-Wake & Mirror Vortex Reduction",
    blurb: "Local fairings and mirror stalk tweaks to trim Cd while preserving cooling flow.",
    tags: ["Aerodynamics","Experiment"],
    area: "aero",
    links: [{ label: "Slides", href: "#" }]
  }
];
