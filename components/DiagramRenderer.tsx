"use client";

import { useEffect, useRef, useState } from "react";
import { Copy, Check, Download, AlertTriangle } from "lucide-react";

interface DiagramRendererProps {
  code: string;
}

export default function DiagramRenderer({ code }: DiagramRendererProps) {
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const elementId = useRef(`mermaid-${Math.floor(Math.random() * 1000000)}`);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    
    const renderDiagram = async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          securityLevel: "loose",
          themeVariables: {
            fontFamily: "Inter, var(--font-sans), ui-sans-serif, system-ui",
            primaryColor: "#4f46e5",
            primaryTextColor: "#ffffff",
            primaryBorderColor: "#4f46e5",
            lineColor: "#e4e4e7",
            secondaryColor: "#0ea5e9",
            tertiaryColor: "#8b5cf6",
          }
        });

        // Clean up code block tags if they got included
        let cleanCode = code.trim();
        if (cleanCode.startsWith("```mermaid")) {
          cleanCode = cleanCode.replace(/^```mermaid\n/, "").replace(/\n```$/, "");
        } else if (cleanCode.startsWith("```")) {
          cleanCode = cleanCode.replace(/^```\n/, "").replace(/\n```$/, "");
        }
        
        // Remove markdown wrappers if any
        cleanCode = cleanCode.replace(/`{3}/g, "");

        const { svg: renderedSvg } = await mermaid.render(elementId.current, cleanCode);
        
        if (isMounted) {
          setSvg(renderedSvg);
          setError(null);
        }
      } catch (err: any) {
        console.error("Mermaid render error:", err);
        if (isMounted) {
          setError("Failed to render diagram visually. Please see the raw diagram code below.");
        }
      }
    };

    renderDiagram();
    
    return () => {
      isMounted = false;
    };
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!svg) return;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `siva-architecture-diagram.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="my-4 border border-border/40 rounded-xl overflow-hidden bg-muted/20 backdrop-blur-md w-full">
      {/* Top Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border/20 bg-muted/40 text-xs text-muted-foreground font-semibold">
        <span className="truncate max-w-[120px] sm:max-w-none">System Architecture Diagram</span>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 hover:text-primary transition-colors p-1 rounded hover:bg-muted cursor-pointer"
            title="Copy Diagram Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied" : "Copy Code"}
          </button>
          {svg && (
            <button
              onClick={handleDownload}
              className="flex items-center gap-1 hover:text-primary transition-colors p-1 rounded hover:bg-muted cursor-pointer"
              title="Download as SVG"
            >
              <Download className="w-3.5 h-3.5" />
              SVG
            </button>
          )}
        </div>
      </div>

      {/* Render Area */}
      <div className="p-4 flex justify-center items-center overflow-x-auto min-h-[150px] scrollbar-none w-full">
        {error ? (
          <div className="flex flex-col items-center gap-2 text-center max-w-md p-4 text-xs text-destructive">
            <AlertTriangle className="w-5 h-5" />
            <p>{error}</p>
            <pre className="mt-2 text-left bg-muted/40 p-3 rounded font-mono text-[10px] text-foreground/80 max-w-full overflow-x-auto border border-border/20 w-full">
              {code}
            </pre>
          </div>
        ) : svg ? (
          <div 
            className="w-full flex justify-center max-w-full [&>svg]:max-w-full [&>svg]:h-auto"
            dangerouslySetInnerHTML={{ __html: svg }} 
          />
        ) : (
          <div className="flex items-center gap-2 text-muted-foreground text-xs font-semibold">
            <span className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            Generating visual model...
          </div>
        )}
      </div>
    </div>
  );
}
