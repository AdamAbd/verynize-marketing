// Evidence: verynize-product/docs/implementation-status.md, updated 2026-10-29.
// Includes the accepted Code workspace, runtime, shell, and inspector updates.
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
          "Resize proportionally and control stacking, opacity, and clipping. Flip layers horizontally or vertically and rotate them in 90° steps.",
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
          "Create color, dimension, number, font-family, and font-weight variables with property bindings and CSS export. Import CSS color tokens; MCP token tools do not yet support the new variable types.",
      },
      {
        title: "Layer organization",
        status: "available",
        description:
          "Drag layers to reorder them or move them into and out of frames, including multiple selections. Locked layers are respected and each move is one undo step.",
      },
      {
        title: "Color, type, and artwork export",
        status: "available",
        description:
          "Pick colors with alpha, HEX, RGB, HSL, or OKLCH controls and an eyedropper. Choose installed or Fontsource fonts, then export artwork at 0.5×–4× or as PDF through a native save dialog.",
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
        title: "Design and Code workspaces",
        status: "available",
        description:
          "Switch from the canvas to a full-window Code workspace with repository chats, All/Changed file trees, a file editor, project memory, and a dev-server preview. The active project follows the selected chat.",
      },
      {
        title: "Review and commit changes",
        status: "partial",
        description:
          "Inspect file diffs, confirm discards, commit changes, and push without force from the Changes panel. Local Git workflows are tested; GitHub pull-request creation uses a test stub and is not live-verified.",
      },
      {
        title: "Design and code exchange",
        status: "partial",
        description:
          "Supported HTML and Tailwind-style JSX become editable nodes. An Implement selection in code prompt connects canvas context to an agent task. Full stylesheet fidelity and general source-code round trips remain gaps.",
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
          "Detect, start, and stop a project dev server with a saved command. Inspect its localhost app in responsive embedded viewports or a separate native window.",
      },
      {
        title: "Git worktrees",
        status: "available",
        description:
          "New chats in repositories with a commit get their own Git worktree and Verynize branch. Older chats and repositories without a commit can use the project root. Files, diffs, previews, and the agent follow the active chat.",
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
          "Real turns through both the Claude Agent SDK and Codex app-server have passed, including streaming, usage, and MCP tool discovery. Queue, stop, context, and access controls are implemented; live account flows and some conversation controls remain unverified.",
      },
      {
        title: "Live and headless MCP",
        status: "available",
        description:
          "The catalog contains 49 MCP tools, including 15 desktop-only shell tools. Design tools edit the live canvas with undo or saved files headlessly; screenshots and desktop shell actions require the running app.",
      },
      {
        title: "Desktop tools for your agents",
        status: "partial",
        description:
          "Fifteen desktop-only tools cover dev servers, preview interaction and capture, terminal commands, and editor actions. Execution respects approval and access controls; Codex main threads currently always request approval.",
      },
      {
        title: "Rewind and second opinions",
        status: "partial",
        description:
          "Rewind can fork a provider session at a kept turn, with a transcript fallback. A second opinion sends the latest answer and diff to the other provider read-only. Neither flow has been run live from inside the app.",
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
