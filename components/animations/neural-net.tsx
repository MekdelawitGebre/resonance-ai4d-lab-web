"use client";

import { useEffect, useRef } from "react";

// ── Brand palette ────────────────────────────────────────────────────────────
const C = {
  wire:   "28,  74, 46",   // #1c4a2e  — resting wire / body
  node:   "45, 122, 69",   // #2d7a45  — node fill
  signal: "90, 175, 120",  // #5aaf78  — travelling pulse
};

// ── Network topology: neurons per layer ──────────────────────────────────────
const LAYERS = [3, 5, 7, 5, 3];
const SIGNAL_INTERVAL = 2.2;   // seconds between wave fronts
const EDGE_SKIP_CHANCE = 0.22; // fraction of connections pruned for clarity

interface NetNode {
  x: number;
  y: number;
  layer: number;
  r: number;       // radius
  glowAt: number;  // timestamp of last activation
}

interface NetEdge {
  a: number;      // index of source node
  b: number;      // index of target node
  t: number;      // signal position 0→1, -1 = idle
  speed: number;
  fireAt: number; // scheduled start time, -1 = not queued
}

export function NeuralNetAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    let time = 0;
    let lastWave = -SIGNAL_INTERVAL; // fire immediately on first frame

    const nodes: NetNode[] = [];
    const edges: NetEdge[] = [];

    // ── Build network geometry ──────────────────────────────────────────────
    const build = () => {
      nodes.length = 0;
      edges.length = 0;

      const hPad  = W * 0.11;
      const vPad  = H * 0.14;
      const hStep = (W - hPad * 2) / (LAYERS.length - 1);
      const layerStart: number[] = [];
      let idx = 0;

      LAYERS.forEach((count, li) => {
        layerStart.push(idx);
        const x     = hPad + li * hStep;
        const vStep = (H - vPad * 2) / (count + 1);

        for (let k = 0; k < count; k++) {
          nodes.push({
            x:      x      + (Math.random() - 0.5) * 18,
            y:      vPad   + (k + 1) * vStep + (Math.random() - 0.5) * 14,
            layer:  li,
            r:      3.5    + Math.random() * 1.5,
            glowAt: -20,
          });
          idx++;
        }
      });

      // Connect every adjacent layer pair, pruning some edges
      for (let li = 0; li < LAYERS.length - 1; li++) {
        for (let fi = 0; fi < LAYERS[li]; fi++) {
          for (let ti = 0; ti < LAYERS[li + 1]; ti++) {
            if (Math.random() < EDGE_SKIP_CHANCE) continue;
            edges.push({
              a:      layerStart[li]     + fi,
              b:      layerStart[li + 1] + ti,
              t:      -1,
              speed:  0.005 + Math.random() * 0.005,
              fireAt: -1,
            });
          }
        }
      }
    };

    // ── Resize handler ──────────────────────────────────────────────────────
    const resize = () => {
      const dpr  = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
      build();
    };

    resize();
    window.addEventListener("resize", resize);

    // ── Activate a node and schedule outgoing signals ───────────────────────
    const activate = (nodeIdx: number, delay = 0) => {
      nodes[nodeIdx].glowAt = time;
      edges.forEach(e => {
        if (e.a === nodeIdx && e.t < 0 && e.fireAt < 0) {
          e.fireAt = time + delay + Math.random() * 0.12;
        }
      });
    };

    // ── Launch a fresh propagation wave from the input layer ────────────────
    const launchWave = () => {
      nodes.forEach((n, i) => {
        if (n.layer === 0) activate(i, Math.random() * 0.25);
      });
    };

    // ── Main render loop ────────────────────────────────────────────────────
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      time += 0.016;

      if (time - lastWave > SIGNAL_INTERVAL) {
        launchWave();
        lastWave = time;
      }

      // Unlock queued edges whose timer has elapsed
      edges.forEach(e => {
        if (e.fireAt > 0 && time >= e.fireAt && e.t < 0) {
          e.t      = 0;
          e.fireAt = -1;
        }
      });

      // ── Draw edges ──────────────────────────────────────────────────────
      edges.forEach(e => {
        const A = nodes[e.a];
        const B = nodes[e.b];

        // Static wire
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.strokeStyle = `rgba(${C.wire}, 0.14)`;
        ctx.lineWidth   = 0.8;
        ctx.stroke();

        // Travelling signal
        if (e.t >= 0) {
          const sx = A.x + (B.x - A.x) * e.t;
          const sy = A.y + (B.y - A.y) * e.t;

          // Radial glow halo around the pulse
          const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, 13);
          glow.addColorStop(0,   `rgba(${C.signal}, 0.70)`);
          glow.addColorStop(0.5, `rgba(${C.node},   0.18)`);
          glow.addColorStop(1,   `rgba(${C.wire},   0)`);
          ctx.beginPath();
          ctx.arc(sx, sy, 13, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();

          // Solid pulse dot
          ctx.beginPath();
          ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${C.signal}, 1)`;
          ctx.fill();

          e.t += e.speed;

          if (e.t >= 1) {
            e.t = -1;
            activate(e.b, 0.04);
          }
        }
      });

      // ── Draw nodes ──────────────────────────────────────────────────────
      nodes.forEach(n => {
        const age  = time - n.glowAt;
        const glow = Math.max(0, 1 - age * 1.4);

        // Activation halo
        if (glow > 0.02) {
          const h = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
          h.addColorStop(0, `rgba(${C.node},   ${glow * 0.42})`);
          h.addColorStop(1, `rgba(${C.wire},   0)`);
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2);
          ctx.fillStyle = h;
          ctx.fill();
        }

        // Node body
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle   = `rgba(${C.node},   ${0.22 + glow * 0.68})`;
        ctx.strokeStyle = `rgba(${C.signal}, ${0.30 + glow * 0.60})`;
        ctx.lineWidth   = 1;
        ctx.fill();
        ctx.stroke();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
