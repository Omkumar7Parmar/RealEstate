import Link from 'next/link';

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const articlesData: Record<string, any> = {
    'first-time-home-buyer': {
      title: 'Guide: First Time Home Buyer',
      author: 'Sarah Johnson',
      date: 'Jan 5, 2024',
      content: `
        <h2>Preparing to Buy Your First Home</h2>
        <p>Buying your first home is an exciting milestone. Here's everything you need to know to make the right decision.</p>
        
        <h3>1. Check Your Credit Score</h3>
        <p>Your credit score determines the mortgage rate you'll receive. A good score (700+) helps you get better rates.</p>
        
        <h3>2. Save for a Down Payment</h3>
        <p>Most lenders require 3-20% down. Start saving as early as possible.</p>
        
        <h3>3. Get Pre-Approved</h3>
        <p>Get a mortgage pre-approval letter to show sellers you're serious and know your budget.</p>
        
        <h3>4. Find the Right Property</h3>
        <p>Look for properties in your budget and desired locations. Consider future growth potential.</p>
        
        <h3>5. Make an Offer</h3>
        <p>When you find the right property, work with an agent to make a competitive offer.</p>
      `,
    },
    'real-estate-investment': {
      title: 'Real Estate Investment Tips',
      author: 'Michael Chen',
      date: 'Jan 1, 2024',
      content: `
        <h2>Building Wealth Through Real Estate</h2>
        <p>Real estate is one of the most reliable ways to build long-term wealth. Here are proven strategies.</p>
        
        <h3>Rental Properties</h3>
        <p>Invest in properties that generate monthly rental income. Look for areas with strong rental demand.</p>
        
        <h3>Fix and Flip</h3>
        <p>Buy undervalued properties, renovate them, and sell for profit.</p>
        
        <h3>REITs</h3>
        <p>Real Estate Investment Trusts offer exposure to real estate without direct property ownership.</p>
      `,
    },
    'market-trends-2024': {
      title: '2024 Real Estate Market Trends',
      author: 'Emily Rodriguez',
      date: 'Dec 28, 2023',
      content: `
        <h2>What to Expect in 2024</h2>
        <p>Here are the key trends shaping the real estate market in 2024.</p>
        
        <h3>Rising Interest Rates</h3>
        <p>Mortgage rates remain elevated, affecting buyer affordability.</p>
        
        <h3>Market Stabilization</h3>
        <p>After rapid appreciation, we're seeing more balanced markets across regions.</p>
        
        <h3>Tech Integration</h3>
        <p>Virtual tours, AI-powered recommendations, and blockchain transactions are becoming standard.</p>
      `,
    },
  };

  const article = articlesData[params.slug];

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Article not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/blog" className="text-blue-600 hover:underline mb-6 block">
        ← Back to blog
      </Link>

      <article className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="flex items-center text-gray-600 mb-8 border-b pb-4">
          <span>{article.author}</span>
          <span className="mx-4">•</span>
          <span>{article.date}</span>
        </div>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 pt-8 border-t">
          <h3 className="font-bold mb-4">Related Articles</h3>
          <div className="grid grid-cols-2 gap-4">
            <a href="/blog" className="text-blue-600 hover:underline">
              More Articles →
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
