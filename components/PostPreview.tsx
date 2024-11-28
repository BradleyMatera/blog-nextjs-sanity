import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div className="bg-accent-1 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
          className="rounded-md shadow-lg"
        />
      </div>
      <h3 className="mb-3 text-3xl font-semibold leading-snug text-balance text-accent-7">
        <Link
          href={`/posts/${slug}`}
          className="hover:underline text-blue-500 hover:text-blue-600"
        >
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg text-gray-700">
        <Date dateString={date} />
      </div>
      {excerpt && (
        <p className="mb-4 text-lg leading-relaxed text-gray-800 bg-yellow-100 p-4 rounded-md shadow-sm">
          {excerpt}
        </p>
      )}
      {author && (
        <div className="mt-4 flex items-center">
          <Avatar name={author.name} picture={author.picture} />
          <span className="ml-4 text-sm font-medium text-gray-600">
            {author.name}
          </span>
        </div>
      )}
    </div>
  )
}