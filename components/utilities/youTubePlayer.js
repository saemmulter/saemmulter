export default function YouTubePlayer({ htmlSrc }) {
  return (
    <iframe
      allowFullScreen={true}
      width='560' height='315'
      src={`https://www.youtube.com/embed/${htmlSrc}?autoplay=true&cc_load_policy=0&controls=1&disablekb=0&fs=1&iv_load_policy=1&modestbranding=0&playsinline=0&rel=1&showinfo=1&enablejsapi=1&origin=https%3A%2F%2Fu-wave.net&widgetid=1`}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    />
  )
}
