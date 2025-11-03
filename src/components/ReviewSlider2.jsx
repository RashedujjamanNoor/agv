import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "সুমাইয়া ইসলাম",
    channel: "",
    text: "অল্প সময়ের মধ্যে দুর্দান্ত কাজ দিয়েছে। আমার ফেসবুক অ্যাডের রিচ আগের চেয়ে অনেক বেড়ে গেছে!",
  },
  {
    name: "সাবরিনা খান",
    channel: "",
    text: "একদম সময়মতো ডেলিভারি আর কোয়ালিটি অসাধারণ। মার্কেটিং বোঝে এমন এডিটর পাওয়া দুষ্কর।",
  },
  {
    name: "আবির রহমান",
    channel: "",
    text: "আমার ই-কমার্স প্রোডাক্ট অ্যাডগুলোকে ওরা নতুন লুক দিয়েছে। গল্প বলার মতোভাবে ভিডিও বানিয়েছে — রেজাল্টও দারুণ! CTR প্রায় ৪০% বেড়েছে।",
  },
  {
    name: "নাজমুল হাসান",
    channel: "",
    text: "এই এজেন্সির সাথে কাজ করে আমার ব্র্যান্ডের বিজ্ঞাপনে পুরো পরিবর্তন এসেছে। ওরা আগের ভিডিওগুলো বিশ্লেষণ করে নতুন কনসেপ্ট দিয়েছে। ২.১x থেকে ৪.৫x ROAS — সত্যি অবিশ্বাস্য উন্নতি। ওদের কাজ শুধু সুন্দর না, ফলাফলমুখী।",
  },
  {
    name: "মো. ইমরান হোসেন",
    channel: "",
    text: "আমি এলোমেলো কয়েকটা ক্লিপ পাঠিয়েছিলাম, ওরা সেগুলো থেকে একাধিক দুর্দান্ত অ্যাড বানিয়েছে। হুক, সাবটাইটেল, CTA — সব কিছু একদম নিখুঁত। তারা এমনকি বলেছে পরের শুটে কীভাবে ক্লিপ নিতে হবে! এক কথায় পারফেকশন।",
  },
];

const ReviewCard = ({ text, name, channel }) => (
  <div className="min-w-[320px] md:min-w-[400px] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-red-900/30 rounded-2xl p-6 shadow-lg mx-4 hover:scale-[1.03] transition-all duration-300 backdrop-blur-md">
    <p
      className="text-gray-200 italic text-base leading-relaxed line-clamp-3 overflow-hidden"
      title={text}
    >
      “{text}”
    </p>
    <div className="mt-5 text-sm text-gray-400 border-t border-white/10 pt-3">
      <p className=" text-white">{name}</p>
      <p className="text-red-400 text-sm">{channel}</p>
    </div>
  </div>
);

const ReviewSlider2 = () => {
  return (
    <section
      id="review"
      className="relative bg-black text-white py-20 overflow-hidden"
    >
      {/* Background glow */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black pointer-events-none" /> */}
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-red-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-2xl" />

      {/* Title */}
      <div className="max-w-[1240px] mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 ">
          <span className="text-white">
            What Our <span className="text-red-500">Clients</span> Say
          </span>
        </h2>
        <p className="text-gray-400 text-lg">
          Real Ads. Real stories. Real growth.
        </p>
      </div>

      {/* Row 1 */}
      <motion.div
        className="flex items-center whitespace-wrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...reviews, ...reviews].map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div
        className="flex items-center whitespace-wrap mt-10 "
        animate={{ x: ["-100%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
      >
        {[...reviews, ...reviews].map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </motion.div>
    </section>
  );
};

export default ReviewSlider2;
