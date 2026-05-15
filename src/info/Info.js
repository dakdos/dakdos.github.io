import self from "../img/self.png"
import simrs from "../img/simrs.png"
import jualaku from "../img/jualaku.png"
import klikpasien from "../img/klikpasien.png"
import klikpasienDoctor from "../img/klikpasien_doctor.png"
import webMockup from "../img/web_mockup.png"
import mobileMockup from "../img/mobile_mockup.png"

export let colors = ["#0066FF", "#3385FF"];

export const info = {
    firstName: "Fahmi",
    lastName: "Dk",
    initials: "FD", 
    position: "Fullstack Web & Mobile Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🌎',
            text: 'Banda Aceh, Indonesia'
        },
        {
            emoji: "💼",
            text: "Fullstack Developer"
        },
        {
            emoji: "📧",
            text: "zulfahmii2005@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/dakdos20",
            icon: 'fa-brands fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/dakdos_",
            icon: 'fa-brands fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/dakdos",
            icon: "fa-brands fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/zul-fahmi-253b90175/",
            icon: "fa-brands fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Saya adalah seorang Fullstack Web Developer dan Mobile App Developer yang antusias untuk terus belajar dan mengembangkan keterampilan baru.\n\nDengan pengalaman yang luas dalam berbagai teknologi dan bahasa pemrograman, saya mampu mengelola proyek dari tahap perencanaan hingga implementasi dan release.",

    skills: [
        { 'proficientWith' : 'React.js' },
        { 'proficientWith' : 'Next.js' },
        { 'proficientWith' : 'Node.js' },
        { 'proficientWith' : 'Flutter' },
        { 'proficientWith' : 'Dart' },
        { 'proficientWith' : 'Laravel' },
        { 'proficientWith' : 'PHP' },
        { 'proficientWith' : 'JavaScript' },
        { 'proficientWith' : 'MySQL' },
        { 'proficientWith' : 'Firebase' },
        { 'proficientWith' : 'Git' }
    ],

    hobbies: [
        {
            label: 'Coffee',
            emoji: '☕'
        }, {
            label: 'Coding',
            emoji: '🧑‍💻' 
        }
    ],
    portfolio: [
        {
            id: "simrs-klikmedic",
            title: "SIMRS KLIKMEDIC",
            live: "#", 
            source: "#",
            image: simrs,
            images: [simrs, webMockup, webMockup],
            type: "web",
            techStack: ["React.js", "Node.js", "MySQL", "Satu Sehat API"],
            description: "Sistem Informasi Manajemen Rumah Sakit (SIMRS) komprehensif dan terintegrasi yang menghadirkan solusi end-to-end untuk fasilitas kesehatan. Dilengkapi dengan berbagai modul cerdas mulai dari Rawat Jalan, IGD, Laboratorium, hingga E-Klaim dan integrasi platform Satu Sehat Kemenkes, dirancang khusus untuk mempercepat alur kerja, meningkatkan keakuratan medis, serta mengoptimalkan operasional secara keseluruhan."
        },
        {
            id: "ecommerce-jualaku",
            title: "App E-Commerce Jualaku",
            live: "#", 
            source: "#",
            image: jualaku,
            images: [jualaku, mobileMockup, mobileMockup],
            type: "mobile",
            techStack: ["Flutter", "Riverpod", "Firebase", "Socket.io", "FCM", "Google Auth"],
            description: "Aplikasi e-commerce cerdas berbasis mobile yang dirancang menggunakan kerangka kerja Flutter. Performa luar biasa dengan state management Riverpod, terintegrasi mulus dengan backend Firebase. Menawarkan fitur autentikasi cepat dengan Google Sign-In, real-time chat interaktif bertenaga Socket.io, serta sistem notifikasi seketika (push notifications) menggunakan Firebase Cloud Messaging (FCM) untuk pengalaman berbelanja yang modern dan responsif."
        },
        {
            id: "aplikasi-klikpasien",
            title: "Aplikasi KlikPasien",
            live: "#", 
            source: "#",
            image: klikpasien,
            images: [klikpasien, mobileMockup, mobileMockup],
            type: "mobile",
            techStack: ["Flutter", "Riverpod", "Firebase", "Video Call API", "FCM"],
            description: "Aplikasi inovatif di bidang health-tech yang mempermudah masyarakat dalam melakukan transaksi medis dan layanan berobat dari mana saja. Dibangun menggunakan framework Flutter dan state management Riverpod untuk performa yang optimal. Dilengkapi dengan arsitektur backend Firebase, serta menonjolkan fitur premium seperti Live Chat dan Video Call konsultasi dokter secara real-time, yang terhubung dengan notifikasi cerdas melalui Firebase Cloud Messaging (FCM)."
        },
        {
            id: "klikpasien-doctors",
            title: "KlikPasien for Doctors",
            live: "#", 
            source: "#",
            image: klikpasienDoctor,
            images: [klikpasienDoctor, mobileMockup, mobileMockup],
            type: "mobile",
            techStack: ["Flutter", "Riverpod", "Firebase", "Real-time DB"],
            description: "Aplikasi companion KlikPasien yang dirancang secara eksklusif untuk tenaga medis profesional. Platform ini mengoptimalkan efisiensi praktik dokter dengan menyediakan dasbor pintar untuk memonitor kunjungan pasien, akses instan ke riwayat dan resume medis secara mendetail, serta manajemen jadwal yang terstruktur. Dibangun dengan fokus pada keamanan data kesehatan dan kemudahan penggunaan di tengah padatnya jadwal pelayanan medis."
        }
    ],
    experience: [
        {
            title: "Fullstack Web & Mobile Developer",
            company: "Freelance Developer",
            period: "Januari 2016 – Sekarang",
            location: "Remote",
            points: [
                "Menangani berbagai proyek freelance berbasis web dan mobile.",
                "Mengembangkan aplikasi mobile cross-platform menggunakan Flutter dan Dart.",
                "Membangun aplikasi web fullstack menggunakan CodeIgniter, React.js, Node.js, dan MySQL.",
                "Mendesain serta mengintegrasikan RESTful API dan layanan pihak ketiga.",
                "Mengimplementasikan state management modern seperti Provider, Riverpod, dan BLoC.",
                "Mengembangkan sistem autentikasi, manajemen hak akses, serta optimasi performa aplikasi dan database.",
                "Berpengalaman dalam deployment aplikasi, maintenance server, serta troubleshooting sistem produksi."
            ]
        },
        {
            title: "Fullstack Web & Mobile Developer",
            company: "Indodev Media Digital",
            period: "Februari 2024 – Agustus 2025",
            location: "Aceh, Indonesia",
            points: [
                "Mengembangkan aplikasi web fullstack menggunakan CodeIgniter, React.js, Node.js, dan MySQL.",
                "Mengoptimalkan performa query database dan meningkatkan response time API.",
                "Berpartisipasi dalam pengembangan fitur baru, maintenance sistem, serta deployment aplikasi.",
                "Menjaga kualitas kode melalui struktur modular dan penerapan best practice development."
            ]
        },
        {
            title: "Fullstack Web & Mobile Developer",
            company: "Klikdata Indonesia",
            period: "Januari 2018 – Januari 2025",
            location: "Aceh, Indonesia",
            points: [
                "Mengembangkan aplikasi mobile cross-platform menggunakan Flutter dan Dart.",
                "Membangun dan mengintegrasikan RESTful API serta layanan pihak ketiga untuk kebutuhan aplikasi dinamis.",
                "Mengimplementasikan state management seperti Provider, Riverpod, dan BLoC untuk arsitektur aplikasi yang scalable and maintainable.",
                "Mengoptimalkan performa aplikasi and waktu loading melalui penerapan clean code dan efisiensi proses.",
                "Mengembangkan dan memelihara aplikasi web berbasis fullstack untuk kebutuhan internal maupun klien.",
                "Berkolaborasi dengan tim UI/UX, backend, dan stakeholder dalam proses pengembangan produk.",
                "Melakukan troubleshooting, debugging, serta peningkatan stabilitas sistem secara berkelanjutan."
            ]
        }
    ]
}