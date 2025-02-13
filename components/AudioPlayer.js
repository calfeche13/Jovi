// components/AudioPlayer.js
const AudioPlayer = () => {
    return (
      <audio controls>
        <source src="/audio/audio.mp3" type="audio/mpeg" />
      </audio>
    );
  };
  
  export default AudioPlayer;