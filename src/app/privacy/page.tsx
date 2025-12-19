'use client';

import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/logo.png"
                alt="CV SEROJA NUSANTARA Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl text-gray-900">CV SEROJA NUSANTARA</span>
            </Link>
            
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-lg text-gray-600">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
            <p className="text-gray-600 leading-relaxed">
              CV SEROJA NUSANTARA ("kami", "perusahaan") berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi 
              pribadi yang Anda berikan kepada kami melalui website resmi kami.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Pengumpulan Data</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Data yang Kami Kumpulkan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Nama lengkap dan informasi identitas</li>
                  <li>Alamat email dan nomor telepon</li>
                  <li>Alamat perusahaan atau rumah</li>
                  <li>Informasi tentang proyek atau kebutuhan konstruksi</li>
                  <li>Data teknis seperti alamat IP dan browser information</li>
                  <li>Informasi penggunaan website</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cara Pengumpulan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Formulir kontak dan permintaan layanan</li>
                  <li>Komunikasi langsung melalui email atau telepon</li>
                  <li>Analytics website dan cookies</li>
                  <li>Feedback dan survei pelanggan</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Usage */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Penggunaan Data</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              Kami menggunakan data pribadi Anda untuk:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Merpons permintaan layanan dan penawaran proyek</li>
              <li>Memberikan informasi tentang layanan konstruksi kami</li>
              <li>Mengelola hubungan bisnis dan proyek</li>
              <li>Mengirimkan update penting terkait proyek</li>
              <li>Memproses pembayaran dan administrasi</li>
              <li>Meningkatkan kualitas layanan kami</li>
              <li>Mematuhi kewajiban hukum dan peraturan</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Perlindungan Data</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              Kami melindungi data pribadi Anda dengan:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Enkripsi data saat transmisi dan penyimpanan</li>
              <li>Akses terbatas untuk authorized personnel</li>
              <li>Security measures yang sesuai dengan standar industri</li>
              <li>Regular security audits dan updates</li>
              <li>Backup data yang aman</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembagian Data</h2>
            <p className="text-gray-600 mb-4">
              Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, 
              kecuali dalam kondisi berikut:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Dengan persetujuan eksplisit dari Anda</li>
              <li>Untuk memenuhi kebutuhan proyek dan layanan yang diminta</li>
              <li>Kepada partner bisnis terpercaya untuk tujuan operasional</li>
              <li>Jika diwajibkan oleh hukum atau peraturan yang berlaku</li>
              <li>Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
            </ul>
          </section>

          {/* User Rights */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Hak Anda</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              Sebagai pemilik data, Anda memiliki hak untuk:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Mengakses data pribadi yang kami simpan tentang Anda</li>
              <li>Memperbaiki data yang tidak akurat</li>
              <li>Menghapus data pribadi Anda (dengan batasan tertentu)</li>
              <li>Menolak pemrosesan data tertentu</li>
              <li>Meminta portabilitas data</li>
              <li>Menarik persetujuan yang telah diberikan</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kebijakan Cookies</h2>
            <p className="text-gray-600 mb-4">
              Website kami menggunakan cookies untuk:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Meningkatkan pengalaman pengguna</li>
              <li>Analisis traffic dan penggunaan website</li>
              <li>Remembering preferences Anda</li>
              <li>Personalizing content</li>
            </ul>
            
            <p className="text-gray-600 mt-4">
              Anda dapat mengatur browser untuk menolak cookies atau memberi tahu saat cookies dikirim.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-gray-600 mb-4">
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin melaksanakan hak Anda, 
              silakan hubungi kami:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">CV SEROJA NUSANTARA</p>
              <p className="text-gray-600 mb-1">Email: privacy@cvsrojanusantara.co.id</p>
              <p className="text-gray-600 mb-1">Telepon: 0852-8570-4297</p>
              <p className="text-gray-600">
                Alamat: Jalan Pahlawan, No. 03, Desa/Kelurahan Timbau, Kec. Tenggarong, 
                Kab. Kutai Kartanegara, Provinsi Kalimantan Timur
              </p>
            </div>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Perubahan Kebijakan</h2>
            <p className="text-gray-600">
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diposting di halaman ini 
              dengan tanggal pembaruan terbaru. Kami menyarankan Anda untuk secara berkala meninjau kebijakan ini.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            © 2024 CV SEROJA NUSANTARA. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/terms" className="text-orange-600 hover:text-orange-700 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/" className="text-orange-600 hover:text-orange-700 transition-colors">
              Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}