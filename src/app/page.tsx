'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Building2, Users, Award, Shield, ChevronRight, Menu, X } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png"
                alt="CV SEROJA NUSANTARA Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl text-gray-900">CV SEROJA NUSANTARA</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-orange-600 transition-colors">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-orange-600 transition-colors">Tentang</a>
              <a href="#layanan" className="text-gray-700 hover:text-orange-600 transition-colors">Layanan</a>
              <a href="#kontak" className="text-gray-700 hover:text-orange-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-orange-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-orange-600 transition-colors">Terms</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              <a href="#beranda" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Beranda</a>
              <a href="#tentang" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Tentang</a>
              <a href="#layanan" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Layanan</a>
              <a href="#kontak" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <img 
                src="/logo.png"
                alt="CV SEROJA NUSANTARA Logo"
                className="w-24 h-24 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              CV <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">SEROJA NUSANTARA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Konstruksi Bangunan Sipil Jalan Profesional dan Terpercaya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Hubungi Kami
              </button>
              <button 
                onClick={() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-orange-600 transition-colors"
              >
                Lihat Layanan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tentang Perusahaan</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mitra Terpercaya untuk Konstruksi Infrastruktur
              </h3>
              <p className="text-gray-600 mb-6">
                CV SEROJA NUSANTARA adalah perusahaan konstruksi yang berfokus pada pembangunan 
                infrastruktur jalan dan bangunan sipil. Dengan pengalaman dan dedikasi tinggi, 
                kami berkomitmen untuk memberikan hasil kerja berkualitas tinggi yang memenuhi 
                standar industri konstruksi Indonesia.
              </p>
              <p className="text-gray-600 mb-6">
                Kami mengutamakan keselamatan, kualitas, dan ketepatan waktu dalam setiap proyek 
                yang kami kerjakan. Tim profesional kami siap mewujudkan infrastruktur yang kokoh 
                dan berkelanjutan untuk kemajuan bangsa.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Berkualitas</h4>
                <p className="text-gray-600 text-sm">Standar kualitas tertinggi dalam setiap proyek</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Terpercaya</h4>
                <p className="text-gray-600 text-sm">Reputasi terpercaya di industri konstruksi</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Profesional</h4>
                <p className="text-gray-600 text-sm">Tim ahli yang berpengalaman dan profesional</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Kokoh</h4>
                <p className="text-gray-600 text-sm">Struktur bangunan yang kuat dan tahan lama</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Konstruksi Jalan</h3>
              <p className="text-gray-600 mb-4">
                Pembangunan jalan raya, jalan tol, dan infrastruktur jalan lainnya dengan 
                standar kualitas tinggi dan teknologi terkini.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-orange-600 mr-2" />
                  Jalan Raya
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-orange-600 mr-2" />
                  Jalan Tol
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-orange-600 mr-2" />
                  Jalan Desa
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bangunan Sipil</h3>
              <p className="text-gray-600 mb-4">
                Konstruksi berbagai jenis bangunan sipil termasuk jembatan, bendungan, 
                dan struktur infrastruktur lainnya.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                  Jembatan
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                  Bendungan
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                  Struktur Beton
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pemeliharaan</h3>
              <p className="text-gray-600 mb-4">
                Layanan pemeliharaan dan perbaikan infrastruktur jalan serta bangunan sipil 
                untuk memastikan keamanan dan kenyamanan pengguna.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  Perbaikan Jalan
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  Pemeliharaan Rutin
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                  Rehabilitasi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Nama Perusahaan</h4>
                    <p className="text-gray-600">CV SEROJA NUSANTARA</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                    <p className="text-gray-600">
                      Jalan Pahlawan, No. 03<br />
                      Desa/Kelurahan Timbau<br />
                      Kec. Tenggarong<br />
                      Kab. Kutai Kartanegara<br />
                      Provinsi Kalimantan Timur
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                    <p className="text-gray-600">0852-8570-4297</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@cvsrojanusantara.co.id</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitMessage && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    {submitMessage}
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Subjek pesan"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo.png"
                  alt="CV SEROJA NUSANTARA Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="font-bold text-lg">CV SEROJA NUSANTARA</span>
              </div>
              <p className="text-gray-400">
                Konstruksi Bangunan Sipil Jalan Profesional dan Terpercaya
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Konstruksi Jalan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bangunan Sipil</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pemeliharaan</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>0852-8570-4297</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@cvsrojanusantara.co.id</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span className="text-sm">Tenggarong, Kutai Kartanegara</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV SEROJA NUSANTARA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}