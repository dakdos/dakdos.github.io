import self from "../assets/images/self.png"

const importAll = (r) => {
    return r.keys()
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
        .map((key) => {
            const module = r(key);
            return module.default || module;
        });
};

const simrsImages = importAll(require.context('../assets/images/simrs', false, /\.(png|jpe?g|svg)$/));
const jualakuImages = importAll(require.context('../assets/images/jualaku', false, /\.(png|jpe?g|svg)$/));
const klikpasienImages = importAll(require.context('../assets/images/klikpasien', false, /\.(png|jpe?g|svg)$/));
const klikpasienDoctorImages = importAll(require.context('../assets/images/klikpasien_doctor', false, /\.(png|jpe?g|svg)$/));
const simonaImages = importAll(require.context('../assets/images/simona', false, /\.(png|jpe?g|svg)$/));
const webProfilRsImages = importAll(require.context('../assets/images/web-profil-rs', false, /\.(png|jpe?g|svg)$/));

export let colors = ["#DE3E3E", "#E95B5B"];

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
            link: "https://www.facebook.com/dakdos20/",
            icon: 'fa fa-facebook',
            label: 'Facebook'
        },
        {
            link: "https://www.linkedin.com/in/zul-fahmi-253b90175/",
            icon: "fa fa-linkedin",
            label: 'LinkedIn'
        },
        {
            link: "https://github.com/dakdos",
            icon: "fa fa-github",
            label: 'GitHub'
        },
        {
            link: "https://www.instagram.com/dakdos_/",
            icon: 'fa fa-instagram',
            label: 'Instagram'
        }
    ],
    bio: "Saya adalah seorang Fullstack Web Developer dan Mobile App Developer yang antusias untuk terus belajar dan mengembangkan keterampilan baru.\n\nDengan pengalaman yang luas dalam berbagai teknologi dan bahasa pemrograman, saya mampu mengelola proyek dari tahap perencanaan hingga implementasi dan release.",

    skills: [
        { name: 'React.js', icon: 'devicon-react-original' },
        { name: 'Next.js', icon: 'devicon-nextjs-plain' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain' },
        { name: 'Flutter', icon: 'devicon-flutter-plain' },
        { name: 'Dart', icon: 'devicon-dart-plain' },
        { name: 'Laravel', icon: 'devicon-laravel-plain' },
        { name: 'PHP', icon: 'devicon-php-plain' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain' },
        { name: 'MySQL', icon: 'devicon-mysql-plain' },
        { name: 'Firebase', icon: 'devicon-firebase-plain' },
        { name: 'Git', icon: 'devicon-git-plain' }
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
            image: simrsImages[0],
            images: simrsImages,
            type: "web",
            techStack: [
                { name: "Codeigniter 3", icon: "devicon-codeigniter-plain" },
                { name: "Lumen", icon: "devicon-laravel-plain" },
                { name: "Javascript", icon: "devicon-javascript-plain" },
                { name: "Jquery", icon: "devicon-jquery-plain" },
                { name: "Socket.io", icon: "devicon-socketio-original" },
                { name: "HMVC", icon: "devicon-php-plain" }
            ],
            description: "Sistem Informasi Manajemen Rumah Sakit (SIMRS) komprehensif dan terintegrasi yang menghadirkan solusi end-to-end untuk fasilitas kesehatan. Dilengkapi dengan berbagai modul cerdas mulai dari Rawat Jalan, IGD, Laboratorium, hingga E-Klaim dan integrasi platform Satu Sehat Kemenkes, dirancang khusus untuk mempercepat alur kerja, meningkatkan keakuratan medis, serta mengoptimalkan operasional secara keseluruhan."
        },
        {
            id: "ecommerce-jualaku",
            title: "App E-Commerce Jualaku",
            live: "#", 
            source: "#",
            appStore: "https://apps.apple.com/id/app/jualaku-jual-beli-makin-mudah/id6757433334",
            playStore: "https://play.google.com/store/apps/details?id=com.jualaku&pcampaignid=web_share",
            image: jualakuImages[0],
            images: jualakuImages,
            type: "mobile",
            techStack: [
                { name: "Flutter", icon: "devicon-flutter-plain" },
                { name: "Firebase", icon: "devicon-firebase-plain" },
                { name: "FCM", icon: "devicon-firebase-plain" },
                { name: "Riverpod", icon: "devicon-dart-plain" },
                { name: "Google Auth", icon: "devicon-google-plain" },
                { name: "Chat", icon: "fa-solid fa-comments" },
                { name: "Socket.io", icon: "devicon-socketio-original" }
            ],
            description: "Aplikasi e-commerce cerdas berbasis mobile yang dirancang menggunakan kerangka kerja Flutter. Performa luar biasa dengan state management Riverpod, terintegrasi mulus dengan backend Firebase. Menawarkan fitur autentikasi cepat dengan Google Sign-In, real-time chat interaktif bertenaga Socket.io, serta sistem notifikasi seketika (push notifications) menggunakan Firebase Cloud Messaging (FCM) untuk pengalaman berbelanja yang modern dan responsif."
        },
        {
            id: "aplikasi-klikpasien",
            title: "Aplikasi KlikPasien",
            live: "#", 
            source: "#",
            appStore: "https://apps.apple.com/id/app/klikpasien/id6443861016",
            playStore: "https://play.google.com/store/apps/details?id=com.klikdata.klikpasien&pcampaignid=web_share",
            image: klikpasienImages[0],
            images: klikpasienImages,
            type: "mobile",
            techStack: [
                { name: "Flutter", icon: "devicon-flutter-plain" },
                { name: "Firebase", icon: "devicon-firebase-plain" },
                { name: "FCM", icon: "devicon-firebase-plain" },
                { name: "Riverpod", icon: "devicon-dart-plain" },
                { name: "Chat", icon: "fa-solid fa-comments" },
                { name: "Video Call", icon: "fa-solid fa-video" }
            ],
            description: "Aplikasi inovatif di bidang health-tech yang mempermudah masyarakat dalam melakukan transaksi medis dan layanan berobat dari mana saja. Dibangun menggunakan framework Flutter dan state management Riverpod untuk performa yang optimal. Dilengkapi dengan arsitektur backend Firebase, serta menonjolkan fitur premium seperti Live Chat dan Video Call konsultasi dokter secara real-time, yang terhubung dengan notifikasi cerdas melalui Firebase Cloud Messaging (FCM)."
        },
        {
            id: "klikpasien-doctors",
            title: "KlikPasien for Doctors",
            live: "#", 
            source: "#",
            appStore: "https://apps.apple.com/br/app/klikpasien-for-doctors/id6443864832?l=en-GB",
            playStore: "https://play.google.com/store/apps/details?id=com.klikdata.klikpasienfordoctors&pcampaignid=web_share",
            image: klikpasienDoctorImages[0],
            images: klikpasienDoctorImages,
            type: "mobile",
            techStack: [
                { name: "Flutter", icon: "devicon-flutter-plain" },
                { name: "Firebase", icon: "devicon-firebase-plain" },
                { name: "FCM", icon: "devicon-firebase-plain" },
                { name: "Riverpod", icon: "devicon-dart-plain" },
                { name: "Chat", icon: "fa-solid fa-comments" },
                { name: "Video Call", icon: "fa-solid fa-video" }
            ],
            description: "Aplikasi companion KlikPasien yang dirancang secara eksklusif untuk tenaga medis profesional. Platform ini mengoptimalkan efisiensi praktik dokter dengan menyediakan dasbor pintar untuk memonitor kunjungan pasien, akses instan ke riwayat dan resume medis secara mendetail, serta manajemen jadwal yang terstruktur. Dibangun dengan fokus pada keamanan data kesehatan dan kemudahan penggunaan di tengah padatnya jadwal pelayanan medis."
        },
        {
            id: "simona",
            title: "Simona",
            live: "#", 
            source: "#",
            image: simonaImages[0],
            images: simonaImages,
            type: "web",
            techStack: [
                { name: "Codeigniter 3", icon: "devicon-codeigniter-plain" },
                { name: "Javascript", icon: "devicon-javascript-plain" },
                { name: "Jquery", icon: "devicon-jquery-plain" },
                { name: "HMVC", icon: "devicon-php-plain" }
            ],
            description: "Sistem Informasi Monitoring dan Pembinaan terintegrasi berbasis web. Dibangun dengan CodeIgniter 3 HMVC untuk performa yang optimal dan skalabel. Dilengkapi dasbor analitik serta visualisasi data interaktif menggunakan JavaScript dan jQuery. Mendukung otomatisasi pelaporan yang mempermudah pengawasan dan evaluasi kegiatan."
        },
        {
            id: "web-profil-rs",
            title: "Web Profil Rumah Sakit",
            live: "#", 
            source: "#",
            image: webProfilRsImages[0],
            images: webProfilRsImages,
            type: "web",
            techStack: [
                { name: "Codeigniter 3", icon: "devicon-codeigniter-plain" },
                { name: "Lumen", icon: "devicon-laravel-plain" },
                { name: "Javascript", icon: "devicon-javascript-plain" },
                { name: "Jquery", icon: "devicon-jquery-plain" },
                { name: "HMVC", icon: "devicon-php-plain" }
            ],
            description: "Website profil resmi rumah sakit yang modern dan responsif. Dirancang dengan CodeIgniter 3 HMVC dan integrasi API mikro-layanan menggunakan Lumen. Menampilkan informasi layanan, jadwal dokter, dan fasilitas secara dinamis menggunakan jQuery. Memberikan antarmuka yang informatif, cepat, dan mudah diakses oleh calon pasien."
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