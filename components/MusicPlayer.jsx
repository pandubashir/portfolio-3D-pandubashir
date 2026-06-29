"use client";

import { useEffect, useRef, useState } from "react";

const TRACKS = [
  {
    name: "Bye Altare",
    sub: "Track 1",
    icon: "🌊",
    grad: "linear-gradient(135deg,#7c3aed,#3b82f6)",
    ytId: "agneRtEe-t8",
  },
  {
    name: "Lofi Chill Beats",
    sub: "Track 2",
    icon: "🌙",
    grad: "linear-gradient(135deg,#ec4899,#7c3aed)",
    ytId: "DXZPiatMqq8",
  },
];

export default function MusicPlayer() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playersRef = useRef([]);
  const apiReadyRef = useRef(false);
  const pendingPlayRef = useRef(false);
  const userInteractedRef = useRef(false);
  const currentTrackRef = useRef(0);

  useEffect(() => {
    currentTrackRef.current = currentTrack;
  }, [currentTrack]);

  function playTrack(idx) {
    const players = playersRef.current;
    const current = currentTrackRef.current;
    if (!players.length || !players[current]) return;

    if (players[current].stopVideo) players[current].stopVideo();
    currentTrackRef.current = idx;
    setCurrentTrack(idx);

    if (players[idx] && players[idx].playVideo) players[idx].playVideo();
    setIsPlaying(true);
  }

  function togglePlay() {
    const players = playersRef.current;
    const current = currentTrackRef.current;
    if (!players.length || !players[current]) return;

    if (isPlaying) {
      if (players[current].pauseVideo) players[current].pauseVideo();
      setIsPlaying(false);
    } else {
      if (players[current].playVideo) players[current].playVideo();
      setIsPlaying(true);
    }
  }

  useEffect(() => {
    window.onYouTubeIframeAPIReady = function () {
      TRACKS.forEach((t, i) => {
        playersRef.current[i] = new window.YT.Player(`yt-${i}`, {
          videoId: t.ytId,
          playerVars: { autoplay: 0, controls: 0 },
          events: {
            onStateChange: function (e) {
              if (e.data === window.YT.PlayerState.ENDED) {
                playTrack((i + 1) % TRACKS.length);
              }
            },
          },
        });
      });
      apiReadyRef.current = true;
      if (pendingPlayRef.current) {
        setTimeout(() => playTrack(currentTrackRef.current), 500);
        pendingPlayRef.current = false;
      }
    };

    const ytScript = document.createElement("script");
    ytScript.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(ytScript);

    function onFirstInteract() {
      if (userInteractedRef.current) return;
      userInteractedRef.current = true;
      document.removeEventListener("click", onFirstInteract);
      document.removeEventListener("touchstart", onFirstInteract);
      if (apiReadyRef.current) {
        setTimeout(() => playTrack(currentTrackRef.current), 300);
      } else {
        pendingPlayRef.current = true;
      }
    }

    document.addEventListener("click", onFirstInteract);
    document.addEventListener("touchstart", onFirstInteract);

    return () => {
      document.removeEventListener("click", onFirstInteract);
      document.removeEventListener("touchstart", onFirstInteract);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={`music-panel ${panelOpen ? "" : "hidden"}`}>
        <div className="music-panel-inner">
          <div className="music-header">
            <span className="music-header-title">🎵 STREAM</span>
            <button className="music-close" onClick={() => setPanelOpen(false)}>
              ✕
            </button>
          </div>
          <div className="now-playing">
            <div className={`disc ${isPlaying ? "spinning" : ""}`}>💿</div>
            <div>
              <div className="now-playing-label">NOW PLAYING</div>
              <div className="now-playing-title">{TRACKS[currentTrack].name}</div>
            </div>
          </div>
          <div className="track-list">
            {TRACKS.map((t, i) => (
              <div className="track-item" key={t.name} onClick={() => playTrack(i)}>
                <div className="track-thumb" style={{ background: t.grad }}>
                  {t.icon}
                </div>
                <div>
                  <div className="track-name">{t.name}</div>
                  <div className="track-sub">{t.sub}</div>
                </div>
                {currentTrack === i && isPlaying && <span className="track-active-ind">▶</span>}
              </div>
            ))}
          </div>
          <div className="music-controls">
            <button
              className="ctrl-btn"
              onClick={() => playTrack((currentTrack - 1 + TRACKS.length) % TRACKS.length)}
            >
              ⏮
            </button>
            <button className="ctrl-btn ctrl-play" onClick={togglePlay}>
              {isPlaying ? "⏸" : "▶"}
            </button>
            <button className="ctrl-btn" onClick={() => playTrack((currentTrack + 1) % TRACKS.length)}>
              ⏭
            </button>
          </div>
        </div>
      </div>
      <button className="music-btn" onClick={() => setPanelOpen((v) => !v)}>
        🎵
      </button>

      <div style={{ display: "none" }}>
        {TRACKS.map((_, i) => (
          <div id={`yt-${i}`} key={i} />
        ))}
      </div>
    </>
  );
}
