import AuthorAvatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function HeroPost(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
  >,
) {
  const { title, coverImage, date, excerpt, author, slug } = props
  return (
    <section className="bg-accent-2 rounded-lg p-6 shadow-md">
      <div className="mb-8 md:mb-16">
        <CoverImage 
          slug={slug} 
          title={title} 
          image={coverImage} 
          priority 
          className="rounded-lg shadow-lg" 
        />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl font-extrabold leading-tight lg:text-6xl text-balance text-accent-7">
            <Link 
              href={`/posts/${slug}`} 
              className="hover:underline text-blue-500 hover:text-blue-600 transition-colors"
            >
              {title || 'Untitled'}
            </Link>
          </h3>
          <div className="mb-4 text-lg font-medium text-accent-7 md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          {excerpt && (
            <p className="mb-4 text-lg leading-relaxed text-gray-800 bg-accent-1 p-4 rounded-md shadow-sm">
              {excerpt}
            </p>
          )}
          {author && (
            <AuthorAvatar 
              name={author.name} 
              picture={author.picture} 
              className="mt-6"
            />
          )}
        </div>
      </div>
    </section>
  )
}