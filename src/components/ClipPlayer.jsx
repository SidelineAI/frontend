import styles from "../styles/clipplayer.module.scss";
import Clip from "../components/Clip";
import Vimeo from '@u-wave/react-vimeo';

export default function ClipPlayer({ videos }) {
  return (
    <div className={styles.container}>
      <div className={styles.highlightClip}>
        <Vimeo
          video={videos.clips[0].videoID}
          start={videos.clips[0].time_range.start}
          end={videos.clips[0].time_range.end}
        />
      </div>
      {/* <div className={styles.otherClips}>
        {videos.clips.map(
          (clip, index) => index > 0 && <Vimeo clip={clip} key={index} />
        )}
      </div> */}
    </div>
  );
}
