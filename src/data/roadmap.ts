// Evidence: product/docs/implementation-status.md, updated 2026-10-28.
// Exploring means a parity direction, not an approved delivery schedule.
export const statuses = {
  available: {
    label: "Available locally",
    description: "Implemented and exercised within the scope described.",
  },
  partial: {
    label: "Partial",
    description:
      "A working foundation with important limits or validation still pending.",
  },
  exploring: {
    label: "Exploring",
    description:
      "A parity direction. Not available, scheduled, or promised for a release.",
  },
} as const;
export type RoadmapStatus = keyof typeof statuses;
interface RoadmapItem {
  title: string;
  status: RoadmapStatus;
  description: string;
}
interface RoadmapGroup {
  id: string;
  title: string;
  intro: string;
  items: RoadmapItem[];
}
export const roadmap: RoadmapGroup[] = [
  {
    id: "canvas",
    title: "More ways to shape an idea.",
    intro: "A precise canvas, with space for experimentation.",
    items: [
      {
        title: "Flexible layouts",
        status: "available",
        description:
          "Arrange frames with free, flex, grid, block, and inline layouts, plus Fixed, Hug, and Fill sizing.",
      },
      {
        title: "Text with character",
        status: "available",
        description:
          "Style typography and individual text ranges inside a layer.",
      },
      {
        title: "Gradients and masks",
        status: "available",
        description:
          "Build layered color treatments with editable gradients and gradient masks.",
      },
      {
        title: "Animated shader backgrounds",
        status: "available",
        description:
          "Six independently authored WebGL presets with color, speed, and intensity controls. Shader export is tested; compatibility with Wonder’s shader library is not claimed.",
      },
      {
        title: "Scale and stacking",
        status: "available",
        description:
          "Resize proportionally and control layer order, rotation, opacity, and clipping.",
      },
      {
        title: "Guides and measurements",
        status: "available",
        description:
          "Position layers with smart guides, equal-gap snapping, alignment, and distance indicators.",
      },
      {
        title: "Design variables",
        status: "available",
        description:
          "Create color variables and import CSS color tokens into your document.",
      },
      {
        title: "Figma imports",
        status: "partial",
        description:
          "A token-based REST adapter converts supported layers and styles. Live authenticated import is unverified; clipboard conversion, OAuth, and full fidelity remain gaps.",
      },
      {
        title: "Illustrations and bitmap tracing",
        status: "partial",
        description:
          "Agent-authored SVG generation and quantized bitmap-to-path tracing are tested. Photographic image providers and smooth curve tracing are not implemented.",
      },
      {
        title: "Point and curve editing",
        status: "exploring",
        description:
          "Direct manipulation of vector points and Bézier handles is not currently available.",
      },
    ],
  },
  {
    id: "code",
    title: "Keep the real project close.",
    intro: "Move between the canvas, your files, and a running app.",
    items: [
      {
        title: "Design and code exchange",
        status: "partial",
        description:
          "Supported HTML and Tailwind-style JSX can become editable nodes. Full stylesheet fidelity and general source-code round trips remain gaps.",
      },
      {
        title: "Capture into editable layers",
        status: "partial",
        description:
          "Capture supported content from an embedded localhost app without reloading it. Arbitrary remote pages, custom fonts, interactive region selection, and source mapping are not supported.",
      },
      {
        title: "Local app preview",
        status: "available",
        description:
          "Inspect a running localhost app in responsive embedded viewports or a separate native window.",
      },
      {
        title: "Git worktrees",
        status: "available",
        description:
          "Create a real Git worktree from an existing repository to keep an experiment separate.",
      },
      {
        title: "Icons on the canvas",
        status: "partial",
        description:
          "Authored canvas icons and icon tools are available. A complete library for organizing, swapping, and reusing icon collections is not established.",
      },
      {
        title: "Live code components",
        status: "exploring",
        description:
          "Using arbitrary application components directly as live canvas elements is a future direction.",
      },
    ],
  },
  {
    id: "together",
    title: "Bring your tools. Keep your context.",
    intro: "Connect agents and people while keeping control of your work.",
    items: [
      {
        title: "Claude and Codex alongside your work",
        status: "partial",
        description:
          "Installed CLI tasks, selection context, streaming, queues, and stop controls are implemented. The newer integrated chat runtime still needs a real model turn; account flows and comprehensive history controls have remaining gaps.",
      },
      {
        title: "Live and headless MCP",
        status: "available",
        description:
          "Shared tools read and edit the open canvas with undo, or work on saved documents when the desktop app is closed.",
      },
      {
        title: "Shared rooms and presence",
        status: "partial",
        description:
          "Two local Electron clients have exercised persisted rooms, cursors, reconnect, and explicit conflict choices. No production service or semantic merging is available.",
      },
      {
        title: "Share a running preview",
        status: "exploring",
        description:
          "Hosted live application links and build/deployment automation are not implemented. Current publishing creates a frozen design snapshot.",
      },
      {
        title: "Agents in the cloud",
        status: "exploring",
        description:
          "Agents continuing remotely after your computer goes offline are a future direction, not an available service.",
      },
      {
        title: "Creator profiles",
        status: "exploring",
        description:
          "Public creator identities and hosted profile pages are not implemented.",
      },
      {
        title: "Private files and public snapshots",
        status: "partial",
        description:
          "Publication-aware library filters, frozen read-only snapshots, and revocation are tested locally. Public profile publishing and hosted accounts are not available.",
      },
      {
        title: "Granular sharing permissions",
        status: "exploring",
        description:
          "Private capability rooms provide a foundation. Identity-based roles and finer file permissions, token recovery, and rotation remain gaps.",
      },
      {
        title: "Feedback on the canvas",
        status: "exploring",
        description:
          "Pinned comments and feedback threads are not implemented.",
      },
      {
        title: "Find designs by describing them",
        status: "exploring",
        description:
          "Local file, page, and layer search exists today. Semantic design search and global project source search are future directions.",
      },
      {
        title: "A community of starting points",
        status: "exploring",
        description:
          "Three original editable templates are available locally. A public marketplace and a broader creator library are not implemented.",
      },
    ],
  },
];
