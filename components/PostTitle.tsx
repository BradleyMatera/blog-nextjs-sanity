export default function PostTitle({ children }) {
  return (
    <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl text-balance bg-[#AEE1E6] p-4 rounded-md">
      {children}
    </h1>
  )
}