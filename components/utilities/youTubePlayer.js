export default function YouTubePlayer({ htmlSrc }) {
  return (
    <iframe
      allowFullScreen
      width="560" height="315"
      src={htmlSrc} title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  )
}
