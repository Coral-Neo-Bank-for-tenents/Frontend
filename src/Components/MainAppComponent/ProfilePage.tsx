// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import React, { useRef, useEffect, } from "react";
// import { motion } from "framer-motion";
// import { useMouseMove } from "../../customHooks/useMouseMove";




// const ProfilePage = () => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const { mouseX, mouseY } = useMouseMove(cardRef);

//   useEffect(() => {
//     const cardElement = cardRef.current;
//     if (cardElement) {
//       const cardRect = cardElement.getBoundingClientRect();
//       const cardCenterX = cardRect.left + cardRect.width / 2;
//       const cardCenterY = cardRect.top + cardRect.height / 2;

//       const rotateX = (cardCenterY - mouseY) / 30;
//       const rotateY = (cardCenterX - mouseX) / 30;

//       cardElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//     }
//   }, [mouseX, mouseY]);

//   const gradientDegree = (mouseX + mouseY) / 4;

//   return (
//     // <div className="bg-greenTheme h-screen h-30p">
//     // <div className="flex items-center justify-center max-h-fit ">
//     // <div className="max-w-md mr-9 bg-greenTheme border border-black p-16 rounded-lg">

//     <div className='bg-greenTheme h-[100vh]'>
      

//     <motion.div
//       ref={cardRef}
//       // className="relative w-180 h-full p-6 bg-white rounded-lg shadow-lg" // Increase width of the card to w-120
//       className="relative max-w-[400px] w-full mx-auto h-[100%] mb-40 p-6 bg-white rounded-lg shadow-lg"
      
//       style={{
//         background: `linear-gradient(${gradientDegree}deg, #b6ffce, #e5ffee, #e7e7e7)`,
//       }}
//     >
//       <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className="text-greenThemeDark text-2xl mb-6 pt-4 hover:cursor-pointer -mt-8" /></Link> 

//       {/* Card Image */}
//       <div className="relative w-full h-56">
//         <img
//           src="https://picsum.photos/200"
//           alt="Profile"
//           className="absolute top-0 left-0 object-cover w-full h-full rounded-lg"
//         />
//       </div>
//       {/* Card Title */}
//       <h1 className="text-2xl font-semibold text-greenThemeDark mt-8">Arpit Dhamija</h1>
//       {/* Card Divider */}
//       <div className="bg-blue-900 h-px w-16 my-4"></div>
//       {/* Card Subtitle */}
//       <h2 className="text-black text-sm font-medium">Personal Data</h2>
//       {/* Card Text */}
//       <p className="text-gray-400 mt-2">
//        <p> 47 Tycos, Toronto, Ontario, ZipCode - M5T 1T4</p>
//        <p>arpitdhamija@gmail.com</p>
//        <div>
//         <span>Rent : </span>
//         <span>$3000/month</span>
//        </div>
//        <div>
//         <span>Coral Points : </span>
//         <span className='text-yellow-500'>820</span>
//        </div>
//       </p>
//       <div className="flex items-center mt-4">
//         <img
//           src="https://picsum.photos/30"
//           alt="Avatar"
//           className="w-10 h-10 rounded-full object-cover"
//         />
//         <span className="text-gray-400 text-sm font-medium ml-2">Paying rent to</span>
//         <span className="text-gray-500 text-sm font-medium ml-1">Jane Smith</span>
//       </div>
//     </motion.div>


//     </div>
//     // </div>
//     // </div>
//   );
// };

// export default ProfilePage;