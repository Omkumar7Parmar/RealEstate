import PageHero from '@/components/PageHero';
import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      slug: 'first-time-home-buyer',
      title: 'Guide: First Time Home Buyer',
      excerpt: 'Everything you need to know before buying your first home',
      date: 'Jan 5, 2024',
    },
    {
      slug: 'real-estate-investment',
      title: 'Real Estate Investment Tips',
      excerpt: 'Smart strategies for growing your real estate portfolio',
      date: 'Jan 1, 2024',
    },
    {
      slug: 'market-trends-2024',
      title: '2024 Real Estate Market Trends',
      excerpt: 'What to expect in the property market this year',
      date: 'Dec 28, 2023',
    },
  ];

  return (
    <>
      <PageHero
        title="Real Estate Blog"
        subtitle="Learn, explore, and stay informed"
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-blue-600">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-2xl font-bold">{post.title}</h2>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <p className="text-gray-700">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
