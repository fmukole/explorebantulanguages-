export default function Flag({ src, name, size = 'h-10 w-10', ring = 'ring-2 ring-white' }) {
  return (
    <img
      src={src}
      alt={`Flag of ${name}`}
      title={name}
      width="40"
      height="40"
      loading="lazy"
      className={`${size} ${ring} rounded-full object-cover shadow-md bg-white`}
    />
  )
}
