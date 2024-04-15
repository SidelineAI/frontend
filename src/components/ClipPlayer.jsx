import styles from "../styles/clipplayer.module.scss";
import { useRef, useEffect, useState } from 'react'; 

export default function ClipPlayer({ videos }) {
  const playerContainerRef = useRef(null);
  const [clips, setClips] = useState([]);

  useEffect(() => {
    // Sort clips initially and on every update from the parent
    setClips([...videos.clips].sort((a, b) => a.time_range.start - b.time_range.start));
  }, [videos]);

  useEffect(() => {
    if (!window.Vimeo || clips.length === 0) {
      console.error('Vimeo Player script not loaded or no clips available');
      return;
    }

    const player = new window.Vimeo.Player(playerContainerRef.current, {
      id: clips[0].videoID,
      start_time: clips[0].time_range.start,
      end_time: clips[0].time_range.end,
      width: 1000,
      autoplay: true,
      loop: true,
      byline: false,
      portrait: false,
      title: false,
      controls: true,
      color: 'ffffff',
    });

    player.on('play', () => {
      console.log('Played the main video');
    });

    return () => player.destroy();
  }, [clips]); // This ensures the player is reinitialized when clips are reordered

  const handleClipClick = (index) => {
    if (index === 0) return; // Click on the main clip does nothing
    const newClips = [...clips];
    const selectedClip = newClips.splice(index, 1)[0]; // Remove the clicked clip from its position
    newClips.unshift(selectedClip); // Move the clicked clip to the front (main position)
    setClips(newClips); // Set the newly ordered clips
  };

  return (
    <div className={styles.container}>
      <div className={styles.highlightClip}>
        <div ref={playerContainerRef} id="toDisplay"></div>
      </div>
      <div className={styles.otherClips}>
        {clips.map((clip, index) => (
          <div key={clip.videoID} className={styles.clip} onClick={() => handleClipClick(index)}>
            {/* Video container might include a thumbnail or overlay for better UX */}
            <div className={styles.videoContainer}>
              {index > 0 && <div className={styles.overlay}></div>}
            </div>
            <div ref={el => initializePlayer(el, clip.videoID, clip.time_range.start, clip.time_range.end, index === 0)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function initializePlayer(element, videoID, start, end, hasControls) {
  if (!element || !window.Vimeo) return;

  new window.Vimeo.Player(element, {
    id: videoID,
    start_time: start,
    end_time: end,
    width: 250,
    loop: true,
    byline: false,
    portrait: false,
    title: false,
    color: 'ffffff',
    controls: hasControls, // Main clip gets controls, side clips do not
    background: true
  });
}
