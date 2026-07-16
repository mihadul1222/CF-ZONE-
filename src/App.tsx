import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  BookOpen, 
  Gift, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Youtube,
  Search
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'উপন্যাস ও বই', icon: <BookOpen className="w-6 h-6" />, desc: 'সেরা লেখকদের জনপ্রিয় সব বই' },
    { name: 'জুয়েলারি ও চুড়ি', icon: <Sparkles className="w-6 h-6" />, desc: 'এক্সক্লুসিভ রেশমি ও কাশ্মীরি চুড়ি' },
    { name: 'গিফট কালেকশন', icon: <Gift className="w-6 h-6" />, desc: 'প্রিয়জনের জন্য স্পেশাল গিফট বক্স' },
    { name: 'পারফিউম ও আতর', icon: <ShoppingBag className="w-6 h-6" />, desc: 'অ্যারাবিক এবং প্রিমিয়াম সুগন্ধি' },
  ];

  const products = [
    // Books
    { id: 1, name: 'পদ্মজা', category: 'উপন্যাস', tag: 'New' },
    { id: 2, name: 'প্রিয়তমা', category: 'উপন্যাস', tag: 'Best Seller' },
    { id: 3, name: 'প্রণয়িনী', category: 'রোমান্টিক', tag: 'Popular' },
    { id: 4, name: 'মেঘবালিকা', category: 'রোমান্টিক', tag: 'Trending' },
    { id: 5, name: 'অবন্তিকা', category: 'উপন্যাস', tag: 'New' },
    { id: 6, name: 'নীল অপরাজিতা', category: 'উপন্যাস', tag: 'Discount' },
    { id: 7, name: 'মায়াবিনী', category: 'রোমান্টিক', tag: 'Popular' },
    { id: 8, name: 'এক ফালি রোদ', category: 'উপন্যাস', tag: 'Best Seller' },
    { id: 9, name: 'শেষটা সুন্দর', category: 'রোমান্টিক', tag: 'New' },
    { id: 10, name: 'তুমি নামক প্রাপ্তি', category: 'রোমান্টিক', tag: 'Trending' },
    { id: 11, name: 'তুমি অন্য কারও সঙ্গে বেঁধো ঘর', category: 'রোমান্টিক', tag: 'New' },
    { id: 12, name: 'অপেক্ষা', category: 'উপন্যাস', tag: 'Popular' },
    { id: 13, name: 'অপূর্ণতা', category: 'রোমান্টিক', tag: 'Trending' },
    { id: 14, name: 'অনুরক্ত', category: 'রোমান্টিক', tag: 'New' },
    { id: 15, name: 'অর্ধাঙ্গিনী', category: 'রোমান্টিক', tag: 'Popular' },
    { id: 16, name: 'নীলকুঠি', category: 'থ্রিলার', tag: 'New' },
    { id: 17, name: 'কৃষ্ণপক্ষ - হুমায়ূন আহমেদ', category: 'ক্লাসিক', tag: 'Classic' },
    { id: 18, name: 'দেবী - হুমায়ূন আহমেদ', category: 'থ্রিলার', tag: 'Best Seller' },
    { id: 19, name: 'দারুচিনি দ্বীপ - হুমায়ূন আহমেদ', category: 'ক্লাসিক', tag: 'Popular' },
    { id: 20, name: 'শঙ্খনীল কারাগার - হুমায়ূন আহমেদ', category: 'ক্লাসিক', tag: 'Classic' },
    { id: 21, name: 'পারাপার', category: 'উপন্যাস', tag: 'New' },
    { id: 22, name: 'পারুল', category: 'উপন্যাস', tag: 'Trending' },
    { id: 23, name: 'কাজল', category: 'উপন্যাস', tag: 'Popular' },
    { id: 24, name: 'আয়নাঘর', category: 'থ্রিলার', tag: 'Trending' },
    { id: 25, name: 'বৃষ্টিবিলাস', category: 'উপন্যাস', tag: 'Popular' },
    { id: 26, name: 'প্রেমের শহর', category: 'রোমান্টিক', tag: 'New' },
    { id: 27, name: 'হৃদয়ের ঠিকানা', category: 'রোমান্টিক', tag: 'Best Seller' },
    { id: 28, name: 'ভালোবাসার অন্য নাম', category: 'রোমান্টিক', tag: 'Popular' },
    { id: 29, name: 'এক মুঠো ভালোবাসা', category: 'রোমান্টিক', tag: 'Trending' },
    // Other items
    { id: 30, name: 'প্রিমিয়াম কাশ্মীরি চুড়ি', category: 'জুয়েলারি', tag: 'New' },
    { id: 31, name: 'রঙিন রেশমি চুড়ি', category: 'জুয়েলারি', tag: 'Popular' },
    { id: 32, name: 'লাল চুড়ির সেট', category: 'জুয়েলারি', tag: 'Trending' },
    { id: 33, name: 'মেটাল কালারফুল চুড়ি', category: 'জুয়েলারি', tag: 'Discount' },
    { id: 34, name: 'কাস্টমাইজড গিফট বক্স', category: 'গিফট', tag: 'Premium' },
    { id: 35, name: 'অ্যারাবিক আতর কালেকশন', category: 'পারফিউম', tag: 'Best Seller' },
    { id: 36, name: 'লেদার ওয়ালেট', category: 'অ্যাক্সেসরিজ', tag: 'New' },
    { id: 37, name: 'নেকলেস ও মেটালিক লকেট', category: 'জুয়েলারি', tag: 'Popular' },
    { id: 38, name: 'কাপল ওয়াচ প্যাক', category: 'গিফট', tag: 'Premium' },
  ];

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-pink-200 selection:text-pink-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-slate-200 shadow-sm bg-white p-0.5">
                <img src="https://yt3.googleusercontent.com/0OJohbDCO2cQZjAWBNoScZ4hRQWZ7UeBasfNRW80SCsWMaiv0hPMJocVAhCtpcYouAmzxiXe_g=s900-c-k-c0x00ffffff-no-rj" alt="CF ZONE" className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-slate-900 hidden lg:block">CF ZONE</span>
            </div>
            <div className="flex flex-1 max-w-xl mx-3 sm:mx-8 relative group">
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-focus-within:text-pink-600 transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search for books or items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 sm:pl-11 pr-16 sm:pr-24 py-2 sm:py-3 rounded-full border border-slate-200 bg-slate-50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all text-sm sm:text-[15px] font-medium text-slate-900 placeholder:text-slate-500 shadow-sm"
              />
              <button className="absolute right-1 sm:right-1.5 top-1 sm:top-1.5 bottom-1 sm:bottom-1.5 px-3 sm:px-5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs sm:text-sm font-medium transition-colors shadow-sm">
                Search
              </button>
            </div>
            <div>
              <a href="https://wa.me/8801345507261" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 sm:gap-2 bg-slate-900 hover:bg-slate-800 text-white px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all shadow-md">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Order Now</span>
                <span className="sm:hidden">Order</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 border border-pink-200 text-pink-700 font-medium text-sm">
            <Sparkles className="w-4 h-4" />
            Premium Books & Exquisite Gifts
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900 tracking-tight">
            আপনার প্রিয়জনের জন্য <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500">সেরা উপহার</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            বাংলাদেশের জনপ্রিয় সব উপন্যাস, রেশমি চুড়ি, এবং এক্সক্লুসিভ গিফট আইটেমের দারুণ কালেকশন নিয়ে আমরা আছি আপনার পাশে। আজই অর্ডার করুন।
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a href="#products" className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-pink-500/30 transition-all">
              Our Collections <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm">
              Contact Us
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-8 pt-12 text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> বেস্ট কোয়ালিটি
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> ফাস্ট ডেলিভারি
            </div>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Our Categories</h2>
            <p className="text-slate-600 text-lg">Everything you love in one place</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-900/5 transition-all text-center group"
              >
                <div className="w-16 h-16 bg-white border border-slate-200 shadow-sm text-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{cat.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Our Collections</h2>
            <p className="text-slate-600 text-lg">Popular books and exclusive items</p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">Sorry, no items found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div 
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index % 4 * 0.1 }}
                  className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-pink-100 flex flex-col h-full group transition-all"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-xs text-pink-700 font-bold tracking-wider uppercase bg-pink-100 px-3 py-1 rounded-full">
                      {product.category}
                    </div>
                    {product.tag && (
                      <div className="text-xs text-slate-600 font-medium px-2 py-1 bg-slate-100 rounded-md">
                        {product.tag}
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-2xl text-slate-900 mb-8 flex-grow leading-snug group-hover:text-pink-600 transition-colors">{product.name}</h3>
                  
                  <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-slate-100">
                    <a 
                      href="https://wa.me/8801345507261" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full text-center bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-[#25D366] font-bold py-3 rounded-xl transition-colors"
                    >
                      <Phone className="w-5 h-5" /> Order on WhatsApp
                    </a>
                    <a 
                      href="https://www.facebook.com/share/17tbEumxdR/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full text-center bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/20 text-[#1877F2] font-bold py-3 rounded-xl transition-colors"
                    >
                      <Facebook className="w-5 h-5" /> Facebook Page
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section & Footer */}
      <footer id="contact" className="bg-slate-900 border-t border-slate-800 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-700 bg-white p-0.5">
                  <img src="https://yt3.googleusercontent.com/0OJohbDCO2cQZjAWBNoScZ4hRQWZ7UeBasfNRW80SCsWMaiv0hPMJocVAhCtpcYouAmzxiXe_g=s900-c-k-c0x00ffffff-no-rj" alt="CF ZONE" className="w-full h-full object-cover rounded-full" />
                </div>
                <span className="font-bold text-3xl tracking-tight text-white">CF ZONE</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                বাংলাদেশের জনপ্রিয় সব উপন্যাস, রেশমি চুড়ি এবং গিফট আইটেমের বিশ্বস্ত ঠিকানা। আজই আমাদের পেইজে মেসেজ দিন অথবা কল করুন।
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/17tbEumxdR/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-800 hover:bg-pink-600 rounded-2xl flex items-center justify-center transition-all text-white">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/cf_zone.shop" target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-800 hover:bg-pink-600 rounded-2xl flex items-center justify-center transition-all text-white">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@cfzone_shop?si=90DP9ff-BLgM-nZ-" target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-800 hover:bg-pink-600 rounded-2xl flex items-center justify-center transition-all text-white">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-bold mb-6 text-xl">Contact Us</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="p-3 bg-slate-800 rounded-xl">
                      <Phone className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-lg">+880 1345-507261</p>
                      <p className="text-sm text-slate-400">WhatsApp Available</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-3 bg-slate-800 rounded-xl">
                      <Mail className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-lg">cfzone.shop@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-3 bg-slate-800 rounded-xl">
                      <MapPin className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-lg">Dhanmondi, Dhaka</p>
                      <p className="text-sm text-slate-400">Bangladesh, 1209</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-6 text-xl">Important Links</h3>
                <ul className="space-y-4">
                  <li><a href="#home" className="text-slate-400 hover:text-pink-400 font-medium transition-colors">Home</a></li>
                  <li><a href="#categories" className="text-slate-400 hover:text-pink-400 font-medium transition-colors">Categories</a></li>
                  <li><a href="#products" className="text-slate-400 hover:text-pink-400 font-medium transition-colors">Collections</a></li>
                  <li><a href="https://youtube.com/@cfzone_shop?si=90DP9ff-BLgM-nZ-" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-400 font-medium transition-colors">YouTube Channel</a></li>
                  <li><a href="https://www.facebook.com/share/17tbEumxdR/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-400 font-medium transition-colors">Facebook Page</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 font-medium">
              © {new Date().getFullYear()} CF ZONE. All rights reserved.
            </p>
            <p className="text-sm text-slate-600 font-medium">
              Developed for CF ZONE
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

