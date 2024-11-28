import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Post } from 'lib/sanity.queries'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>,
) {
  const { title, coverImage, date, author, slug } = props
  return (
    <div className="bg-accent-1 p-6 rounded-lg shadow-md">
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        {author && (
          <div className="flex items-center space-x-4">
            <Avatar name={author.name} picture={author.picture} />
            <span className="text-gray-700 text-sm font-medium">{author.name}</span>
          </div>
        )}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage
          title={title}
          image={coverImage}
          priority
          slug={slug}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          {author && (
            <div className="flex items-center space-x-4">
              <Avatar name={author.name} picture={author.picture} />
              <span className="text-gray-700 text-sm font-medium">{author.name}</span>
            </div>
          )}
        </div>
        <div className="mb-6 text-lg text-gray-700">
          <Date dateString={date} />
        </div>
      </div>
    </div>
  )
}