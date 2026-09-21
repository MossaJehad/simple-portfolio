import React, { useState, useEffect, useRef, useCallback } from 'react';

interface TerminalLine {
  text: string;
  color?: string;
}

interface CommandDef {
  command: string;
  output: TerminalLine[];
  holdMs?: number;
}

const COMMAND_SEQUENCE: CommandDef[] = [
  {
    command: 'whoami',
    output: [
      { text: 'mousa (software-engineer)', color: '#4ade80' },
      { text: 'uid=1000(mousa) gid=1000(42-school)', color: '#86efac' },
    ],
    holdMs: 2400,
  },
  {
    command: 'ls',
    output: [
      { text: 'projects/   skills/   hire_me.sh*   coffee.log', color: '#38bdf8' },
    ],
    holdMs: 2400,
  },
  {
    command: 'ping mossajehad.github.io',
    output: [
      { text: 'PING mossajehad.github.io: 56 data bytes', color: '#94a3b8' },
      { text: '64 bytes from github.io: seq=1 time=14.2 ms', color: '#4ade80' },
      { text: '64 bytes from github.io: seq=2 time=13.8 ms', color: '#4ade80' },
      { text: '2 packets transmitted, 0% packet loss', color: '#86efac' },
    ],
    holdMs: 2900,
  },
  {
    command: "echo 'hello visitor'",
    output: [
      { text: "hello visitor! 👋 welcome to mousa's terminal", color: '#4ade80' },
    ],
    holdMs: 2200,
  },
  {
    command: 'sudo rm -rf /',
    output: [
      { text: '[sudo] password for visitor: *********', color: '#94a3b8' },
      { text: 'sudo: nice try! Permission denied 🛑', color: '#f87171' },
    ],
    holdMs: 2600,
  },
  {
    command: 'sl',
    output: [
      { text: '    o O O___  Choo-choo! 🚂', color: '#facc15' },
      { text: '  _][\\_n_n__  (you typed ls backwards)', color: '#38bdf8' },
      { text: ' (___________)', color: '#94a3b8' },
    ],
    holdMs: 2800,
  },
  {
    command: 'cowsay "hire mousa"',
    output: [
      { text: ' < hire mousa! >', color: '#facc15' },
      { text: '        \\   ^__^', color: '#4ade80' },
      { text: '         \\  (oo)\\_______', color: '#4ade80' },
      { text: '            (__)\\       )\\/\\', color: '#4ade80' },
    ],
    holdMs: 3000,
  },
  {
    command: 'cat /dev/coffee',
    output: [
      { text: '☕ 429: Too many espresso shots!', color: '#fb923c' },
      { text: 'Refilling caffeine buffers... [OK]', color: '#4ade80' },
    ],
    holdMs: 2400,
  },
];

interface HistoryEntry {
  command: string;
  output: TerminalLine[];
}

export const RetroTerminal: React.FC = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [cmdIndex, setCmdIndex] = useState(0);
  const [typedChars, setTypedChars] = useState('');
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'reading'>('typing');
  const scrollRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentDef = COMMAND_SEQUENCE[cmdIndex];

  // Auto-scroll to bottom of CRT screen when content changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, typedChars]);

  // Main animation state machine
  useEffect(() => {
    if (phase === 'typing') {
      if (typedChars.length < currentDef.command.length) {
        // Organic keystroke jitter (35ms - 65ms)
        const delay = 35 + Math.random() * 30;
        timeoutRef.current = setTimeout(() => {
          setTypedChars(currentDef.command.slice(0, typedChars.length + 1));
        }, delay);
      } else {
        // Finished typing command, brief pause before executing (Return key)
        timeoutRef.current = setTimeout(() => {
          setPhase('waiting');
        }, 220);
      }
    } else if (phase === 'waiting') {
      // Execute command: add to history
      setHistory((prev) => {
        // Keep at most 2 previous commands so screen never gets overcrowded
        const next = [...prev, { command: currentDef.command, output: currentDef.output }];
        return next.length > 2 ? next.slice(next.length - 2) : next;
      });
      setTypedChars('');
      setPhase('reading');
    } else if (phase === 'reading') {
      // Pause so the visitor can read the result
      const holdTime = currentDef.holdMs || 2500;
      timeoutRef.current = setTimeout(() => {
        // Clear history periodically or wrap around
        setCmdIndex((prev) => {
          const nextIndex = (prev + 1) % COMMAND_SEQUENCE.length;
          // If we wrapped around or reached 3 entries, clear history
          if (nextIndex === 0 || (prev + 1) % 3 === 0) {
            setHistory([]);
          }
          return nextIndex;
        });
        setTypedChars('');
        setPhase('typing');
      }, holdTime);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phase, typedChars, cmdIndex, currentDef]);

  // User click / tap to instantly skip or trigger next command
  const handleUserClick = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (phase === 'typing') {
      // Complete typing immediately
      setTypedChars(currentDef.command);
      setPhase('waiting');
    } else {
      // Advance to next command immediately
      setCmdIndex((prev) => (prev + 1) % COMMAND_SEQUENCE.length);
      setTypedChars('');
      setPhase('typing');
    }
  }, [phase, currentDef]);

  return (
    <div
      onClick={handleUserClick}
      className="group relative w-full h-full bg-[#030704] rounded-[16px] overflow-hidden border border-emerald-950/70 cursor-pointer select-none flex flex-col justify-between"
      title="Click to skip command"
      style={{
        boxShadow:
          'inset 0 0 24px rgba(0,0,0,0.95), inset 0 0 8px rgba(34,197,94,0.3), 0 0 16px rgba(34,197,94,0.08)',
      }}
    >
      {/* 1. CRT Fisheye Optical Layers (Curved Glass, Barrel Vignette & Specular Glare) */}
      {/* 1a. Fish Eye Convex Vignette: darkens corners and curves the visual field */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            'radial-gradient(ellipse 95% 85% at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.95) 100%)',
        }}
      />

      {/* 1b. Overhead CRT Curved Glass Specular Highlight */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-70"
        style={{
          background:
            'radial-gradient(ellipse 130% 65% at 50% -12%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 45%, transparent 75%)',
        }}
      />

      {/* 1c. Retro CRT Horizontal Scanlines */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.7) 0px, rgba(0,0,0,0.7) 1px, transparent 1px, transparent 2.5px)',
        }}
      />

      {/* 2. Vintage CRT Bezel Top Bar */}
      <div className="relative z-10 px-2.5 pt-2 pb-1 flex items-center justify-between border-b border-emerald-950/50 bg-black/40 text-[9px] font-mono tracking-wider">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 inline-block" />
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-emerald-500/70 font-semibold ml-1 text-[8.5px]">
            TTY-1 // FISH-EYE
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-emerald-400/40 text-[8px] hidden sm:inline group-hover:text-emerald-400/90 transition-colors">
            CLICK TO SKIP
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
        </div>
      </div>

      {/* 3. CRT Terminal Viewport with Fisheye Barrel Distortion */}
      <div
        ref={scrollRef}
        className="relative z-10 flex-1 p-2.5 overflow-hidden font-mono text-[9.5px] sm:text-[10px] leading-[1.38] text-emerald-400 space-y-1.5"
        style={{
          // Authentic retro phosphor glow with subtle chromatic fringe
          textShadow:
            '-0.4px 0 rgba(255,0,0,0.35), 0.4px 0 rgba(0,255,255,0.35), 0 0 5px rgba(74,222,128,0.7), 0 0 10px rgba(74,222,128,0.25)',
          // Spherical barrel distortion perspective
          transform: 'perspective(360px) rotateX(1.5deg) scale(1.02)',
          transformOrigin: 'center center',
        }}
      >
        {/* Past History Commands & Outputs */}
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-0.5 opacity-80 transition-opacity duration-200">
            <div className="flex items-center gap-1 text-emerald-300/80 font-bold">
              <span className="text-emerald-500 select-none">$</span>
              <span>{entry.command}</span>
            </div>
            <div className="pl-2 space-y-0.5">
              {entry.output.map((line, lIdx) => (
                <div
                  key={lIdx}
                  className="whitespace-pre truncate"
                  style={{ color: line.color || '#4ade80' }}
                >
                  {line.text}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Currently Active Command Prompt */}
        <div className="space-y-0.5">
          <div className="flex items-center gap-1 font-bold text-emerald-300">
            <span className="text-emerald-500 select-none">$</span>
            <span>{typedChars}</span>
            {phase !== 'reading' && (
              <span className="w-1.5 h-3 bg-emerald-400 inline-block animate-pulse -ml-0.5 shadow-[0_0_6px_#34d399]" />
            )}
          </div>
        </div>
      </div>

      {/* 4. Bottom CRT Tube Reflection Rim */}
      <div className="relative z-10 px-2.5 py-0.5 bg-black/60 border-t border-emerald-950/40 flex items-center justify-between text-[7.5px] font-mono text-emerald-500/50">
        <span>ZSH 5.9</span>
        <span>BAUD: 9600</span>
      </div>
    </div>
  );
};
