# Product evidence for marketing

Reviewed 2026-10-29 against Verynize product **0.8.0**, commit
`404c83bc9476665b6c88f9cd7405d6cbd8101276`.

This is a source and documentation audit, not a fresh run of the product test suite.
The marketing build and browser tests validate the website, not product capabilities.

## Sources and precedence

- [Implementation acceptance status](../../verynize-product/docs/implementation-status.md), updated 2026-10-29: primary record of exercised behavior and remaining gaps.
- [Product README](../../verynize-product/README.md): setup, workflows, and distribution boundaries.
- [Product version](../../verynize-product/package.json): current source version; do not confuse it with the older packaged-app smoke-test version in acceptance notes.
- Latest product commits: `404c83b` (page backgrounds, v0.8.0), `da0b4c5` (Code workspace, v0.7.0), and `8cd8980` (code loop, shell tools, canvas, inspector, agents).
- [Original parity ledger](../../verynize-product/docs/wonder-roadmap.md): reference coverage only; vendor declarations do not establish Verynize capability or parity.

When documentation conflicts, use current implementation plus the newer acceptance notes and retain any unverified boundaries. Do not silently treat test source as proof that a test was run in this marketing update.

## Claims and boundaries

| Area | Supported message | Evidence and qualification |
| --- | --- | --- |
| Design and Code workspaces | Switch between canvas work and repository chats, files, changes, and preview controls. | Acceptance status; `tests/code-workspace.cjs`, `tests/repositories.cjs`. Repository chats use individual worktrees where the repository has a commit. Older chats and repositories without a commit can run at the repository root. |
| Local agents | Claude SDK and Codex app-server each completed a real smoke-test turn with events, usage, and MCP tool discovery. | Acceptance status; `tests/agent-runtime-live.cjs`. This is bounded runtime validation, not proof of arbitrary design/code task quality. |
| Rewind and second opinion | Provider-session rewind/fork and a read-only second opinion are implemented. | Acceptance status; `desktop/agent-runtime.cjs`. Neither flow has been run live from inside the app. Rewind does not revert project files. |
| MCP | 49 registered tools, including 15 shell tools that require the running desktop app. | `integrations/design-tools.mjs` exports `TOOL_NAMES`; `integrations/shell-tools.mjs`. Count checked by importing `TOOL_NAMES` during this audit. The 15 shell tools are included in 49, not additional. Screenshots and shell operations are not available in standalone headless mode. |
| Dev server and shell | Agents can operate a local preview, inspect it, run bounded terminal commands, and invoke editor actions. | Acceptance status; `tests/dev-server.cjs`, `tests/mcp-shell.cjs`. Execution follows access/approval rules; Codex main threads still fall back to approval dialogs. Avoid promises of unrestricted or unattended automation. |
| Design-to-code review | A Changes panel supports diffs, confirmed discard, commit, non-force push, and GitHub PR actions. | Acceptance status; `tests/git-changes.cjs`, `tests/changes-panel.cjs`. Tests use real local Git repositories, but `gh` is stubbed: real GitHub PR creation is unverified. |
| Canvas and inspector | Layer drag/reparent, ellipses, flips, quarter-turn rotation, eyedropper, typed variables, font picking, and scaled/PDF artwork export. | Acceptance status; `tests/canvas-layers-dnd.cjs`, `tests/inspector-parity.cjs`, `integrations/variables.test.mjs`. MCP token tools do not support the newer variable types yet. SVG artwork export uses `foreignObject`, not universal pure-vector output. |
| Page backgrounds | New pages start empty; page color can be set/reset; unselected frames have no permanent outline. | Commit `404c83b`; `web/app.js`, `web/src/islands/inspector/properties.tsx`, `tests/canvas-page.cjs`. Newer than the coverage described in the acceptance notes; implementation and regression-test source were inspected, not executed in this audit. |
| Import and capture | Supported Figma REST import and bounded localhost capture are implemented. | Acceptance status. Live authenticated Figma import remains unverified. No native Figma clipboard/OAuth/full fidelity or arbitrary remote-webpage recovery is claimed. |
| Collaboration and publishing | Private rooms, presence, explicit conflict choice, and frozen snapshots were exercised locally. | Acceptance status; local workerd/two-Electron-client tests. No production deployment, identity-based permission system, semantic merging, or hosted running-app publishing is established. |
| Distribution | Users can run the macOS product from source. | Product README and acceptance status. The recorded app package is ad-hoc signed and not notarized; no public installer is advertised by this site. |
| Free app and self-hosting | The app will always be free; optional paid offerings are limited to cloud and AI. Self-hosting has no Verynize license/subscription fee. | Explicit product-owner commitment in this conversation. Provider infrastructure and AI usage fees remain separate. This is a policy, not evidence that hosted services have launched. |

## Known stale documentation

The product README still says full rewind/resumption is not implemented and describes manual `design/name` worktrees. Current acceptance notes and implementation include provider rewind/fork and repository-chat `verynize/<name>` branches. Keep the unverified live-rewind boundary while updating marketing language.

The shell-access section of `docs/agent-workflows.md` still says the runtime does not send access headers or restrict mutating helper tools. Current `desktop/agent-settings.cjs` supplies Claude access headers, and `desktop/agent-runtime.cjs` blocks mutating helper shell tools. The newer acceptance notes distinguish the remaining Codex main-thread limitation.

## Maintenance

Update the source SHA, version, and evidence date whenever product claims change. Keep roadmap status granular: a tested local capability does not make its broader hosted or compatibility story complete. The website’s workspace illustration is original and illustrative, not a screenshot or test result.
