// import React from 'react';

// const Accessories = () => {
//   const promotions = [
//     {
//       title: 'New Arrival',
//       text: 'Explore our latest collection of stylish new arrivals, crafted with the finest materials and an eye for modern trends.',
//       image: 'access.jpg',
//       alt: 'New arrival fashion item',
//       alignment: 'center'
//     },
//     {
//       title: 'New Offer',
//       text: 'Discover limited-time offers and exclusive discounts on your favorite fashion pieces. Don’t miss out on these incredible deals!',
//       image: 'https://images.unsplash.com/photo-1549488346-6014e7a83556?q=80&w=1887&auto=format&fit=crop',
//       alt: 'New offer fashion item',
//       alignment: 'top'
//     },
//     {
//       title: 'New Fashion',
//       text: 'Stay ahead of the curve with our newest fashion drops. From chic everyday wear to statement pieces, we have it all.',
//       image: 'https://images.unsplash.com/photo-1594931215437-0836e4f3a9e3?q=80&w=1965&auto=format&fit=crop',
//       alt: 'New fashion item',
//       alignment: 'top'
//     }
//   ];

//   const getObjectPosition = (alignment) => {
//     switch (alignment) {
//       case 'top':
//         return 'object-top';
//       case 'center':
//       default:
//         return 'object-center';
//     }
//   };

//   return (
//     <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {promotions.map((promo, index) => (
//           <div
//             key={index}
//             className="bg-[#F8F5F1] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center p-6 md:p-8 transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl"
//           >
//             {/* Title */}
//             <h3 className="font-serif text-3xl font-bold text-[#8B6E58] mb-4 tracking-wide">{promo.title}</h3>

//             {/* Description */}
//             <p className="text-sm text-[#4A4A4A] mb-6 leading-relaxed">
//               {promo.text}
//             </p>

//             {/* Image Container */}
//             <div className={`w-full rounded-2xl overflow-hidden relative ${promo.alignment === 'top' ? 'h-[400px]' : 'h-[300px]'}`}>
//               <img
//                 src={promo.image}
//                 alt={promo.alt}
//                 className={`w-full h-full object-cover ${getObjectPosition(promo.alignment)}`}
//               />
//             </div>
            
//             {/* Website Link */}
//             <div className="w-full text-center mt-6">
//               <span className="text-sm font-semibold tracking-wider text-[#8B6E58] uppercase">
//                 Your Website Here
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Accessories;