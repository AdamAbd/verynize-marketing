import { createFileRoute } from "@tanstack/react-router";
import { useState, useSyncExternalStore } from "react";
const subscribe = () => () => {};
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
import {
  ArrowUpRight,
  ArrowRight,
  MousePointer2,
  Frame,
  Type,
  Square,
  Hand,
  Plus,
  Sparkles,
  Layers,
  Code2,
  FolderOpen,
  Command,
  Check,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
export const Route = createFileRoute("/")({ component: Home });
const modes = ["Canvas", "Agents", "Code"] as const;
function Workspace() {
  const hydrated = useHydrated();
  const [mode, setMode] = useState<(typeof modes)[number]>("Canvas");
  return (
    <div className="workspace" id="workspace">
      <div className="windowbar">
        <span className="traffic">
          <i />
          <i />
          <i />
        </span>
        <span>Studio / A little more possibility</span>
        <span className="saved">
          <span /> Saved locally
        </span>
      </div>
      <div className="editor">
        <aside className="layers">
          <div className="side-title">
            Your workspace <Plus size={13} />
          </div>
          <div className="page-name">
            <Frame size={13} /> Landing page
          </div>
          <p>LAYERS</p>
          {[
            "Navigation",
            "Hero section",
            "Headline",
            "Orbit artwork",
            "Call to action",
          ].map((item, i) => (
            <div className={i === 3 ? "layer selected" : "layer"} key={item}>
              <Layers size={12} />
              {item}
            </div>
          ))}
          <div className="local-note">
            <FolderOpen size={14} /> A home for your ideas.
          </div>
        </aside>
        <div className="artboard-area">
          <span className="artboard-label">Explorations / 01</span>
          <div className="artboard">
            <div className="sample-nav">
              forma<span>Objects with intention ↗</span>
            </div>
            <div className="sample-copy">
              <span className="eyebrow">LESS, BUT BETTER.</span>
              <h2>
                Make room
                <br />
                for the unusual.
              </h2>
              <p>
                Everyday objects.
                <br />A different perspective.
              </p>
              <span className="sample-cta">
                Explore the collection <ArrowUpRight size={13} />
              </span>
            </div>
            <div className="sculpture">
              <div className="ring ring-one" />
              <div className="ring ring-two" />
              <div className="ring ring-three" />
              <div className="selection">
                <i />
                <i />
                <i />
                <i />
              </div>
              <span className="cursor">
                <MousePointer2 size={16} fill="currentColor" /> You
              </span>
            </div>
            <span className="sample-bottom">DESIGNED TO FEEL DIFFERENT.</span>
          </div>
          <div className="tools">
            {[MousePointer2, Frame, Square, Type, Hand].map((Icon, i) => (
              <span className={i === 0 ? "active-tool" : ""} key={i}>
                <Icon size={17} />
              </span>
            ))}
            <span className="tool-divider" />
            <Sparkles size={17} />
          </div>
        </div>
        <aside className="agent">
          <div className="side-title">
            <Sparkles size={14} /> Design partner <span>↗</span>
          </div>
          <div className="agent-tag">
            {mode === "Code" ? "Shared document" : "Claude / Codex"}
          </div>
          <div className="user-message">
            {mode === "Canvas"
              ? "A little more playful. Keep the layout clean."
              : mode === "Agents"
                ? "Help me refine this selected frame."
                : "Keep the canvas and my tools on the same page."}
          </div>
          <div className="agent-message">
            <span className="spark-icon">✳</span>
            <p>
              {mode === "Code"
                ? "The desktop editor, CLI, and MCP tools use the same design document."
                : mode === "Agents"
                  ? "Bring your selection and project context into a task with your installed agent."
                  : "Explore the composition, adjust the details, and make it yours."}
            </p>
          </div>
          <div className="context-chip">
            <Frame size={12} /> Hero section <Check size={12} />
          </div>
          <div className="composer">
            Your next idea…
            <span>
              <Plus size={13} />
              <ArrowRight size={15} />
            </span>
          </div>
        </aside>
      </div>
      <div className="demo-caption">
        Illustrative workspace · Explore a perspective below
      </div>
      <div className="demo-tabs" aria-label="Workspace perspectives">
        {modes.map((item) => (
          <button
            disabled={!hydrated}
            key={item}
            aria-pressed={mode === item}
            onClick={() => setMode(item)}
          >
            {item === "Canvas" ? (
              <MousePointer2 size={14} />
            ) : item === "Agents" ? (
              <Sparkles size={14} />
            ) : (
              <Code2 size={14} />
            )}
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
function Home() {
  const hydrated = useHydrated();
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const command = "cd better-design-product\nnpm install\nnpm start";
  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="header">
        <a className="brand" href="/" aria-label="Better Design home">
          <span className="brand-mark">b.</span>better design
          <span className="alpha">LOCAL FIRST</span>
        </a>
        <button
          disabled={!hydrated}
          className="menu-toggle"
          aria-label={menu ? "Close navigation" : "Open navigation"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
        <nav className={menu ? "nav open" : "nav"} aria-label="Main navigation">
          <a href="#features" onClick={() => setMenu(false)}>
            Features
          </a>
          <a href="#questions" onClick={() => setMenu(false)}>
            Good to know
          </a>
          <a className="nav-cta" href="#start" onClick={() => setMenu(false)}>
            Start creating <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero">
          <div className="release">
            <span /> Always free. More room for your ideas.{" "}
            <ArrowRight size={13} />
          </div>
          <h1>
            Your canvas. Your agents.
            <br />
            <span>Your next great idea.</span>
          </h1>
          <p>
            A local design workspace where you shape the pixels
            <br className="desktop-break" /> and Claude or Codex helps you move
            the idea forward.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#start">
              Make something better <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#workspace">
              Explore the workspace <ArrowDown />
            </a>
          </div>
          <div className="platform">
            <Command size={12} /> Built for macOS <span>·</span> Your files.
            Your installed agents.
          </div>
          <Workspace />
        </section>
        <div className="belief">
          <span>LESS DISTANCE BETWEEN</span>
          <p>
            The idea in your head.<span>The thing on your canvas.</span>
          </p>
          <span className="asterisk">✳</span>
        </div>
        <section className="section" id="features">
          <div className="section-heading">
            <span className="eyebrow">A WORKSPACE THAT WORKS WITH YOU</span>
            <h2>Stay in the creative part.</h2>
            <p>
              Make the big moves. Sweat the small details.
              <br />
              Keep your tools close and your work your own.
            </p>
          </div>
          <div className="features">
            <article>
              <div className="feature-art canvas-art">
                <div className="mini-frame">
                  <span>
                    Make it
                    <br />
                    <em>your own.</em>
                  </span>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <span className="measure">320 × 200</span>
              </div>
              <span className="feature-number">01 / THE CANVAS</span>
              <h3>Room to find your direction.</h3>
              <p>
                Frames, typography, images, and flexible layouts. Shape your
                composition with snapping, alignment, and the freedom to undo.
              </p>
            </article>
            <article>
              <div className="feature-art agent-art">
                <div className="prompt">
                  <Sparkles size={18} />
                  <span>
                    A second pair of hands.
                    <br />
                    <strong>You keep the direction.</strong>
                  </span>
                </div>
                <div className="agent-pills">
                  <span>✳ Claude</span>
                  <span>⌘ Codex</span>
                </div>
              </div>
              <span className="feature-number">02 / YOUR AGENTS</span>
              <h3>A partner for the next move.</h3>
              <p>
                Bring your selected canvas and project files into explicit
                tasks. Work with your installed Claude or Codex, with controls
                to queue and stop.
              </p>
            </article>
            <article>
              <div className="feature-art file-art">
                <div className="file-card">
                  <Code2 size={26} />
                  <strong>something-great</strong>
                  <span>.better-design.json</span>
                  <div>
                    <span>Canvas</span>
                    <span>CLI</span>
                    <span>MCP</span>
                  </div>
                </div>
              </div>
              <span className="feature-number">03 / YOUR WORK</span>
              <h3>Good ideas deserve a home.</h3>
              <p>
                Save native documents locally. Edit the same format from the
                desktop, CLI, or MCP, and export your work as HTML, images, or
                PDF.
              </p>
            </article>
          </div>
        </section>
        <section className="detail-band">
          <span className="eyebrow">FROM FIRST FRAME TO FINER DETAILS</span>
          <h2>
            Small tools.
            <br />A lot of possibility.
          </h2>
          <div className="capabilities">
            {[
              [
                "Layouts that adapt",
                "Explore free, flex, grid, and block layouts with Fixed, Hug, and Fill sizing.",
              ],
              [
                "A little more dimension",
                "Add gradients, masks, shadows, and independently authored animated WebGL shaders.",
              ],
              [
                "Your running app, in view",
                "Preview localhost apps and capture supported visible content into editable canvas layers.",
              ],
              [
                "A bridge to your tools",
                "Use shared MCP tools to edit the live canvas with undo, or work on saved documents.",
              ],
            ].map(([title, text]) => (
              <article key={title}>
                <Plus size={18} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="section" id="always-free" aria-labelledby="free-heading">
          <div className="section-heading">
            <span className="eyebrow">CREATIVITY HAS NO SUBSCRIPTION</span>
            <h2 id="free-heading">The app is free. Always.</h2>
            <p>
              Better Design will always be free to use.
              <br />
              Any future paid offerings will be limited to optional cloud and AI services.
              <br />
              Deploy to your own cloud? Better Design is still free.
            </p>
            <p>Your hosting and AI providers may charge for their services.</p>
          </div>
        </section>
        <section className="section faq" id="questions">
          <div>
            <span className="eyebrow">GOOD TO KNOW</span>
            <h2>
              A clear picture.
              <br />
              Before you jump in.
            </h2>
            <p>
              Built locally. Still growing.
              <br />
              Here’s where things stand.
            </p>
          </div>
          <div>
            {[
              [
                "Will Better Design always be free?",
                "Yes. The Better Design app will always be free. Any future paid offerings will be limited to optional cloud and AI services. You will not need a paid Better Design plan to use the app.",
              ],
              [
                "Is self-hosting free too?",
                "Yes. Deploying Better Design to your own cloud remains free, with no Better Design license or subscription fee. You only cover any infrastructure or AI usage charged by your chosen providers. The collaboration service has been tested locally; no production-hosted service is available here yet.",
              ],
              [
                "Can I use Better Design today?",
                "You can run the macOS app from the product source. A locally signed app build has been tested, but there is no notarized public installer available here yet.",
              ],
              [
                "Do I need an AI subscription?",
                "Canvas editing works independently of an agent. Agent tasks use your installed Claude or Codex CLI and its existing account. Provider access and any usage charges are managed by that provider. The newer integrated chat runtime still awaits a real model-turn validation.",
              ],
              [
                "Can I collaborate or publish a website?",
                "Private rooms, cursor presence, conflict choices, and frozen read-only snapshots have been tested locally. The collaboration service has not been deployed to production. Publishing currently means a design snapshot, not a deployed application.",
              ],
              [
                "Can I bring in Figma or existing websites?",
                "Supported Figma REST imports are implemented, with live authenticated import still unverified. Local app capture supports a bounded set of visible content and styles. Full Figma fidelity and arbitrary website round trips are not supported.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <ChevronDown size={17} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="start" id="start">
          <div>
            <span className="eyebrow">YOUR NEXT IDEA STARTS HERE</span>
            <h2>
              Make space
              <br />
              for something better.
            </h2>
            <p>
              Have the Better Design workspace locally?
              <br />
              Open a terminal at its root and start creating.
            </p>
            <span className="platform">
              <Command size={13} /> macOS · Node.js 22.18+, 24.11+, or 26+
            </span>
          </div>
          <div className="terminal">
            <div>
              <span>Run the product locally</span>
              <button disabled={!hydrated} onClick={copy}>
                {copied ? "Copied!" : "Copy commands"}
              </button>
            </div>
            <pre>
              <code>{command}</code>
            </pre>
            <p role="status">
              {copied
                ? "Commands copied to clipboard."
                : "Requires the better-design-product source checkout."}
            </p>
          </div>
        </section>
      </main>
      <footer>
        <a className="brand" href="/">
          <span className="brand-mark">b.</span>better design
        </a>
        <span>A little more possibility.</span>
        <a href="#questions">
          Product status <ArrowUpRight size={13} />
        </a>
      </footer>
    </>
  );
}
function ArrowDown() {
  return <ArrowRight size={15} className="arrow-down" />;
}
