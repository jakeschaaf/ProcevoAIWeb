'use client';

import { useEffect, useState } from 'react';

type Node = {
  id: string;
  x: number;
  y: number;
  label: string;
  icon: 'trigger' | 'code' | 'data' | 'output' | 'ai';
  delay: number;
};

type Connection = {
  from: string;
  to: string;
  delay: number;
};

const nodes: Node[] = [
  { id: 'trigger', x: 50, y: 120, label: 'Webhook', icon: 'trigger', delay: 0 },
  { id: 'parse', x: 180, y: 60, label: 'Extract Data', icon: 'code', delay: 0.3 },
  { id: 'validate', x: 180, y: 180, label: 'Validate', icon: 'data', delay: 0.4 },
  { id: 'ai', x: 310, y: 120, label: 'LLM Agent', icon: 'ai', delay: 0.7 },
  { id: 'output', x: 440, y: 120, label: 'Send Result', icon: 'output', delay: 1.0 },
];

const connections: Connection[] = [
  { from: 'trigger', to: 'parse', delay: 0.2 },
  { from: 'trigger', to: 'validate', delay: 0.3 },
  { from: 'parse', to: 'ai', delay: 0.6 },
  { from: 'validate', to: 'ai', delay: 0.6 },
  { from: 'ai', to: 'output', delay: 0.9 },
];

const codeLines = [
  'const data = await webhook.receive();',
  'const context = await vectorDB.query(data);',
  'const result = await llm.analyze(context);',
  'await slack.notify(result.summary);',
];

function NodeIcon({ type }: { type: Node['icon'] }) {
  const iconClass = "w-4 h-4";

  switch (type) {
    case 'trigger':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      );
    case 'code':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      );
    case 'data':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      );
    case 'ai':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      );
    case 'output':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      );
  }
}

function getNodePosition(id: string): { x: number; y: number } {
  const node = nodes.find(n => n.id === id);
  return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
}

export function HeroAnimation() {
  const [visibleNodes, setVisibleNodes] = useState<Set<string>>(new Set());
  const [visibleConnections, setVisibleConnections] = useState<Set<string>>(new Set());
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [dataPackets, setDataPackets] = useState<{ id: number; progress: number; connection: Connection }[]>([]);

  useEffect(() => {
    // Animate nodes appearing
    nodes.forEach(node => {
      setTimeout(() => {
        setVisibleNodes(prev => new Set([...prev, node.id]));
      }, node.delay * 1000);
    });

    // Animate connections appearing
    connections.forEach(conn => {
      setTimeout(() => {
        setVisibleConnections(prev => new Set([...prev, `${conn.from}-${conn.to}`]));
      }, conn.delay * 1000);
    });

    // Reset animation every 8 seconds
    const resetInterval = setInterval(() => {
      setVisibleNodes(new Set());
      setVisibleConnections(new Set());
      setCurrentCodeLine(0);
      setTypedChars(0);

      // Re-run animations
      nodes.forEach(node => {
        setTimeout(() => {
          setVisibleNodes(prev => new Set([...prev, node.id]));
        }, node.delay * 1000);
      });

      connections.forEach(conn => {
        setTimeout(() => {
          setVisibleConnections(prev => new Set([...prev, `${conn.from}-${conn.to}`]));
        }, conn.delay * 1000);
      });
    }, 8000);

    return () => clearInterval(resetInterval);
  }, []);

  // Typing animation for code
  useEffect(() => {
    if (currentCodeLine >= codeLines.length) return;

    const currentLine = codeLines[currentCodeLine];
    if (typedChars < currentLine.length) {
      const timeout = setTimeout(() => {
        setTypedChars(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentCodeLine(prev => prev + 1);
        setTypedChars(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentCodeLine, typedChars]);

  // Data packets flowing through connections
  useEffect(() => {
    const interval = setInterval(() => {
      const randomConn = connections[Math.floor(Math.random() * connections.length)];
      const connKey = `${randomConn.from}-${randomConn.to}`;

      if (visibleConnections.has(connKey)) {
        setDataPackets(prev => [
          ...prev.slice(-5),
          { id: Date.now(), progress: 0, connection: randomConn }
        ]);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [visibleConnections]);

  // Animate data packets
  useEffect(() => {
    const interval = setInterval(() => {
      setDataPackets(prev =>
        prev
          .map(p => ({ ...p, progress: p.progress + 0.05 }))
          .filter(p => p.progress <= 1)
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Workflow visualization */}
      <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 overflow-hidden h-[280px]">
        {/* Grid background */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* SVG for connections */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="oklch(68% 0.15 50 / 0.3)" />
              <stop offset="50%" stopColor="oklch(68% 0.15 50 / 0.8)" />
              <stop offset="100%" stopColor="oklch(68% 0.15 50 / 0.3)" />
            </linearGradient>
          </defs>

          {connections.map(conn => {
            const from = getNodePosition(conn.from);
            const to = getNodePosition(conn.to);
            const key = `${conn.from}-${conn.to}`;
            const isVisible = visibleConnections.has(key);

            // Calculate control points for curved line
            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2;
            const dx = to.x - from.x;
            const dy = to.y - from.y;
            const controlX = midX - dy * 0.2;
            const controlY = midY + dx * 0.2;

            return (
              <g key={key}>
                <path
                  d={`M ${from.x + 40} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`}
                  fill="none"
                  stroke="oklch(68% 0.15 50 / 0.3)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Animated flow line */}
                {isVisible && (
                  <path
                    d={`M ${from.x + 40} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`}
                    fill="none"
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    strokeDasharray="20 80"
                    className="animate-flow"
                  />
                )}
              </g>
            );
          })}

          {/* Data packets */}
          {dataPackets.map(packet => {
            const from = getNodePosition(packet.connection.from);
            const to = getNodePosition(packet.connection.to);
            const x = from.x + 40 + (to.x - from.x - 40) * packet.progress;
            const y = from.y + (to.y - from.y) * packet.progress;

            return (
              <circle
                key={packet.id}
                cx={x}
                cy={y}
                r="4"
                fill="oklch(68% 0.15 50)"
                className="animate-pulse"
              />
            );
          })}
        </svg>

        {/* Nodes */}
        <div className="relative h-full">
          {nodes.map(node => {
            const isVisible = visibleNodes.has(node.id);
            const isAI = node.icon === 'ai';

            return (
              <div
                key={node.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ left: node.x, top: node.y }}
              >
                {/* Glow effect for AI node */}
                {isAI && isVisible && (
                  <div className="absolute inset-0 -m-2 bg-accent-500/20 rounded-xl blur-xl animate-pulse" />
                )}
                <div className={`relative bg-slate-800 border rounded-lg p-3 shadow-lg shadow-black/20 transition-colors group ${
                  isAI
                    ? 'border-accent-500/50 shadow-accent-500/20'
                    : 'border-slate-600 hover:border-accent-500/50'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                      isAI
                        ? 'bg-accent-500/20 border border-accent-500/40 text-accent-400'
                        : 'bg-accent-500/10 border border-accent-500/20 text-accent-500 group-hover:bg-accent-500/20'
                    }`}>
                      <NodeIcon type={node.icon} />
                    </div>
                    <span className={`text-xs font-medium whitespace-nowrap ${
                      isAI ? 'text-accent-400' : 'text-slate-300'
                    }`}>
                      {node.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Code panel */}
      <div className="mt-4 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-700/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-slate-700" />
            <div className="w-3 h-3 rounded-full bg-slate-700" />
            <div className="w-3 h-3 rounded-full bg-slate-700" />
          </div>
          <span className="text-xs text-slate-500 ml-2">automation.ts</span>
        </div>
        <div className="p-4 font-mono text-sm h-[120px]">
          {codeLines.map((line, index) => {
            if (index > currentCodeLine) return null;

            const displayText = index === currentCodeLine
              ? line.slice(0, typedChars)
              : line;

            return (
              <div key={index} className="flex">
                <span className="text-slate-600 w-6 text-right mr-4 select-none">
                  {index + 1}
                </span>
                <span className="text-slate-300">
                  {displayText.split(/(\b(?:const|await|async|function)\b|[{}()[\];,.])/g).map((part, i) => {
                    if (['const', 'await', 'async', 'function'].includes(part)) {
                      return <span key={i} className="text-accent-400">{part}</span>;
                    }
                    if (/^[{}()[\];,.]$/.test(part)) {
                      return <span key={i} className="text-slate-500">{part}</span>;
                    }
                    return <span key={i}>{part}</span>;
                  })}
                  {index === currentCodeLine && (
                    <span className="inline-block w-2 h-4 bg-accent-500 ml-0.5 animate-blink" />
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes flow {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-flow {
          animation: flow 2s linear infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
}
