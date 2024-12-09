

import Image from 'next/image';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      date: "10 February 2022",
      imageUrl: "/burger.png", 
    },
    {
      id: 2,
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
      date: "10 February 2022",
      imageUrl: "/pizza.png", 
    },
    {
      id: 3,
      title: "Curabitur rutrum velit ac congue malesuada",
      date: "10 February 2022",
      imageUrl: "/sandwitch.png", }
  ];

  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          <span className="text-orange-500">Latest</span> News & Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-56">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500">{post.date}</p>
                <h3 className="text-lg font-bold text-gray-900 my-2">
                  {post.title}
                </h3>
                <a
                  href="#"
                  className="text-orange-500 font-semibold hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;