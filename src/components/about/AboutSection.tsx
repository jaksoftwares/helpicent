// // frontend/src/components/AboutSection.tsx
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// interface AboutSectionProps {
//   title: string;
//   text: string;
//   imageSrc: string;
//   imageLeft?: boolean;
// }

// export default function AboutSection({ title, text, imageSrc, imageLeft = false }: AboutSectionProps) {
//   return (
//     <div className={`flex flex-col md:flex-row ${imageLeft ? 'md:flex-row-reverse' : ''} items-center`}>
//       {/* Text Content */}
//       <motion.div 
//         className="md:w-1/2 text-center md:text-left p-6"
//         initial={{ opacity: 0, x: imageLeft ? 50 : -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
//         <p className="mt-4 text-gray-600">{text}</p>
//       </motion.div>

//       {/* Image */}
//       <motion.div 
//         className="md:w-1/2 p-6"
//         initial={{ opacity: 0, x: imageLeft ? -50 : 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <Image
//           src={imageSrc}
//           alt={title}
//           width={500}
//           height={300}
//           className="rounded-lg shadow-lg object-cover"
//         />
//       </motion.div>
//     </div>
//   );
// }
