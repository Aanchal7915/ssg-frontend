import React from 'react';


const testimonials = [
  {
    id: 1,
    name: 'Juliana Silva',
    rating: 5,
    comment: 'I love this product! The quality is incredible. The seller is excellent at communicating with you and answering questions. I will definitely buy from here again!',
    image: 'https://placehold.co/100x100/A0D2A6/white?text=JS',
  },
  {
    id: 2,
    name: 'Donna Stroupe',
    rating: 4,
    comment: 'I am absolutely thrilled with this product! The quality is outstanding, and the seller excels in communication and answering queries. I will certainly make another purchase from here in the future!',
    image: 'https://placehold.co/100x100/F0C79A/white?text=DS',
  },
  {
    id: 3,
    name: 'Olivia Wilson',
    rating: 5,
    comment: 'This product is amazing! The quality is exceptional, and the seller excels at communication and addressing queries. I will certainly make another purchase from this seller in the future!',
    image: 'https://placehold.co/100x100/C8B7D2/white?text=OW',
  },
];

const Testimonial = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center font-inter"
      style={{
        backgroundImage: 'url("https://placehold.co/1920x1080/E8F5E9/B2DFDB?text=Wholesale+Products")',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm"></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 md:p-16">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-light text-white mb-10 tracking-widest">[ TESTIMONIAL ]</h1>

        {/* Testimonial Cards Container */}
        <div className="w-full max-w-4xl flex flex-col items-center space-y-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white bg-opacity-90 rounded-3xl p-6 sm:p-8 w-full max-w-2xl shadow-xl transition-transform duration-300 hover:scale-105 backdrop-blur-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">{testimonial.name}</h2>
                  <div className="flex mb-3">{renderStars(testimonial.rating)}</div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {testimonial.comment}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile`}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Website URL */}
        <div className="absolute bottom-10 left-10 text-white text-lg font-light">
          www.yourwebsitename.com
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
