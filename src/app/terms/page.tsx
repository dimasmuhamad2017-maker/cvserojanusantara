'use client';

import { ArrowLeft, FileText, AlertCircle, CheckCircle, Gavel, Scale } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
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
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Syarat & Ketentuan
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
              Selamat datang di website CV SEROJA NUSANTARA. Syarat dan Ketentuan ini mengatur penggunaan website 
              dan layanan yang kami sediakan. Dengan mengakses atau menggunakan website kami, Anda setuju untuk 
              mematuhi syarat dan ketentuan ini.
            </p>
          </section>

          {/* Company Information */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Informasi Perusahaan</h2>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">CV SEROJA NUSANTARA</p>
              <p className="text-gray-600 mb-1">• Bidang Usaha: Konstruksi Bangunan Sipil Jalan</p>
              <p className="text-gray-600 mb-1">• Alamat: Jalan Pahlawan, No. 03, Desa/Kelurahan Timbau, Kec. Tenggarong, Kab. Kutai Kartanegara, Provinsi Kalimantan Timur</p>
              <p className="text-gray-600 mb-1">• Telepon: 0852-8570-4297</p>
              <p className="text-gray-600">• Email: info@cvsrojanusantara.co.id</p>
            </div>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-gray-600 mb-4">
              CV SEROJA NUSANTARA menyediakan layanan:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Konstruksi jalan raya dan jalan tol</li>
              <li>Bangunan sipil (jembatan, bendungan, struktur beton)</li>
              <li>Pemeliharaan dan perbaikan infrastruktur jalan</li>
              <li>Konsultasi teknik dan perencanaan proyek</li>
              <li>Manajemen proyek konstruksi</li>
            </ul>
          </section>

          {/* User Obligations */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Kewajiban Pengguna</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              Sebagai pengguna website, Anda setuju untuk:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Memberikan informasi yang akurat dan lengkap</li>
              <li>Tidak menggunakan website untuk kegiatan ilegal atau tidak sah</li>
              <li>Tidak mengirimkan materi yang melanggar hak kekayaan intelektual</li>
              <li>Memperlakukan konten website dengan baik dan tidak menyalahgunakannya</li>
              <li>Mematuhi semua peraturan yang berlaku</li>
            </ul>
          </section>

          {/* Project Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Syarat Proyek</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Perjanjian Kontrak:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Semua proyek harus didasarkan pada perjanjian kontrak tertulis</li>
                  <li>Spesifikasi teknis dan lingkup pekerjaan harus disepakati bersama</li>
                  <li>Jadwal dan timeline proyek akan ditetapkan dalam kontrak</li>
                  <li>Pembayaran dilakukan sesuai dengan termin yang disepakati</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Standar Kualitas:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Semua pekerjaan memenuhi standar konstruksi Indonesia</li>
                  <li>Menggunakan material berkualitas sesuai spesifikasi</li>
                  <li>Dilaksanakan oleh tenaga ahli yang berpengalaman</li>
                  <li>Mematuhi peraturan keselamatan kerja</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Syarat Pembayaran</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Uang muka minimal 30% dari total nilai kontrak</li>
              <li>Pembayaran termin sesuai progress pekerjaan</li>
              <li>Pembayaran akhir setelah pekerjaan selesai dan diserahkan</li>
              <li>Retensi 5% dari total nilai kontrak selama masa pemeliharaan</li>
              <li>Pembayaran dilakukan melalui transfer ke rekening perusahaan</li>
            </ul>
          </section>

          {/* Warranty */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Garansi & Pemeliharaan</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Garansi konstruksi selama 6 bulan selesai pekerjaan</li>
              <li>Masa pemeliharaan sesuai kesepakatan dalam kontrak</li>
              <li>Perbaikan cacat material dan pelaksanaan selama masa garansi</li>
              <li>Garansi tidak berlaku untuk kerusakan akibat bencana alam atau penyalahgunaan</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Hak Kekayaan Intelektual</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              Seluruh konten website termasuk desain, logo, teks, gambar, dan materi lainnya 
              dilindungi oleh hak kekayaan intelektual CV SEROJA NUSANTARA.
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Tidak diperbolehkan menyalin, mendistribusikan, atau memodifikasi konten tanpa izin</li>
              <li>Logo dan merek dagang adalah milik CV SEROJA NUSANTARA</li>
              <li>Dokumen proyek dan desain teknis dilindungi kerahasiaannya</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Batasan Tanggung Jawab</h2>
            <p className="text-gray-600 mb-4">
              CV SEROJA NUSANTARA tidak bertanggung jawab atas:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
              <li>Keterlambatan akibat force majeure (bencana alam, kerusuhan, dll)</li>
              <li>Kerusakan akibat kesalahan pihak ketiga atau pemberi kerja</li>
              <li>Keterlambatan perizinan dari pemerintah</li>
              <li>Kenaikan harga material diluar kendali kami</li>
            </ul>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Penyelesaian Sengketa</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Sengketa akan diselesaikan secara musyawarah terlebih dahulu</li>
              <li>Jika tidak mencapai kesepakatan, diselesaikan melalui mediasi</li>
              <li>Yurisdiksi hukum adalah Pengadilan Negeri Tenggarong</li>
              <li>Hukum yang berlaku adalah hukum Republik Indonesia</li>
            </ul>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengakhiran Kontrak</h2>
            <p className="text-gray-600 mb-4">
              Kontrak dapat diakhiri jika:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Salah satu pihak melanggar syarat kontrak dan tidak memperbaikinya dalam waktu 30 hari</li>
              <li>Terjadi force majeure yang menghentikan pelaksanaan proyek</li>
              <li>Kesepakatan bersama antara kedua belah pihak</li>
              <li>Pailit atau likuidasi salah satu pihak</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-gray-600 mb-4">
              Untuk pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">CV SEROJA NUSANTARA</p>
              <p className="text-gray-600 mb-1">Email: legal@cvsrojanusantara.co.id</p>
              <p className="text-gray-600 mb-1">Telepon: 0852-8570-4297</p>
              <p className="text-gray-600">
                Alamat: Jalan Pahlawan, No. 03, Desa/Kelurahan Timbau, Kec. Tenggarong, 
                Kab. Kutai Kartanegara, Provinsi Kalimantan Timur
              </p>
            </div>
          </section>

          {/* Agreement */}
          <section className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
            <h3 className="font-bold text-gray-900 mb-3">Persetujuan</h3>
            <p className="text-gray-600">
              Dengan menggunakan website ini atau menghubungi kami untuk layanan konstruksi, 
              Anda menyatakan telah membaca, memahami, dan menyetujui Syarat & Ketentuan ini. 
              Jika Anda tidak setuju dengan syarat ini, harap tidak menggunakan website atau layanan kami.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            © 2024 CV SEROJA NUSANTARA. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/privacy" className="text-orange-600 hover:text-orange-700 transition-colors">
              Privacy Policy
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