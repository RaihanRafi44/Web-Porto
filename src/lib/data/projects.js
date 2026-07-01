export const config = {
    // Masukkan ID project yang ingin ditampilkan di halaman utama (Karya Unggulan)
    featuredProjectIds: ['anicata', 'seller-tools-tisera']
};

export const projects = [
    {
        id: 'anicata',
        nama: 'Anicata',
        tipe: 'Personal Project',
        deskripsi: 'AniCata is an Android application designed for anime and manga enthusiasts to discover, search, and explore detailed information about their favorite titles. It provides a modern browsing experience with personalized features and an intuitive user interface. This application using Jikan API for anime and manga resources.',
        tech: ['Kotlin', 'Jikan API', 'Jetpack Compose', 'Koin', 'Paging 3', 'Firebase Auth', 'Firestore', 'Room Database', 'Retrofit', 'MVVM', 'GitHub'],
        featuresTitle: '✨ Key Features',
        fiturUtama: [
            'Browse anime and manga by season, category, and search.',
            'Explore comprehensive details, including synopsis, characters, staff, trailers, and related titles.',
            'Save bookmarks and favorites with cloud synchronization.',
            'Access recently viewed content through local history.',
            'Sign in securely with a Google account.'
        ],
        featured: true,
        needsDeviceFrame: true,
        thumbnail: '/images/projects/anicata/1_Home Page.webp',
        images: [
            '/images/projects/anicata/1_Home Page.webp',
            '/images/projects/anicata/2_Seasonal_Anime_List.webp',
            '/images/projects/anicata/3_Top_Anime_List.webp',
            '/images/projects/anicata/4_Top_Manga_List.webp',
            '/images/projects/anicata/5_All_Lists.webp',
            '/images/projects/anicata/6_Detail Page Overview.webp',
            '/images/projects/anicata/7_Detail_Page_Characters.webp',
            '/images/projects/anicata/8_Detail_Page_Related_Content.webp',
            '/images/projects/anicata/9_Search_Menu.webp',
            '/images/projects/anicata/10_Result_Search.webp',
            '/images/projects/anicata/11_Archive_Page.webp',
            '/images/projects/anicata/12_Bookmark_Page.webp',
            '/images/projects/anicata/13_Favorite_Page.webp',
            '/images/projects/anicata/14_Profile_Page.webp'
        ]
    },
    {
        id: 'seller-tools-tisera',
        nama: 'Seller Tools Tisera',
        tipe: 'Professional Work',
        deskripsi: 'A mobile procurement support application for a government procurement ecosystem, enabling seamless interaction between Procurement Officers (PP/PPK) and suppliers in managing end-to-end procurement workflows, including quotation submission, negotiation processes, order fulfillment, and transaction tracking.',
        tech: ['Flutter', 'Dart', 'REST API', 'Provider', 'GitLab'],
        featuresTitle: '👨‍💻 My Contributions',
        featured: true,
        fiturUtama: [
            'Developed offer, negotiation, discussion, and complaint features.',
            'Integrated REST APIs for provider-side workflows.',
            'Implemented dynamic UI based on offer status.',
            'Improved application UI and user experience.',
            'Fixed bugs and optimized existing modules.'
        ],
        needsDeviceFrame: true,
        thumbnail: '/images/projects/seller-tools-tisera/1_Home_Page.webp',
        images: [
            '/images/projects/seller-tools-tisera/1_Home_Page.webp',
            '/images/projects/seller-tools-tisera/2_Nego_Menu_List.webp',
            '/images/projects/seller-tools-tisera/3_Detail_Nego_Overview.webp',
            '/images/projects/seller-tools-tisera/4_Detail_Nego_More_Info.webp',
            '/images/projects/seller-tools-tisera/5_More_Detail_Product_Nego_List.webp',
            '/images/projects/seller-tools-tisera/6_Offer_Menu_List.webp',
            '/images/projects/seller-tools-tisera/7_Detail_Offers_Overview.webp',
            '/images/projects/seller-tools-tisera/8_Detail_Offers_Product.webp',
            '/images/projects/seller-tools-tisera/9_More_Detail_Offers_Product_List.webp',
            '/images/projects/seller-tools-tisera/10_Complaint_Menu_List.webp',
            '/images/projects/seller-tools-tisera/11_Detail_Complaint.webp',
            '/images/projects/seller-tools-tisera/12_Discussion_Menu_List.webp',
            '/images/projects/seller-tools-tisera/13_Detail_Discussion.webp',
            '/images/projects/seller-tools-tisera/14_Chat_Menu_Page.webp'
        ]
    },
    {
        id: 'smard-mobile',
        nama: 'SMARD Mobile',
        tipe: 'Professional Work',
        deskripsi: 'SMARD Mobile is a digital school information system that streamlines academic and administrative activities for students, teachers, and parents. The application provides integrated access to various school services, including academic information, attendance, communication, extracurricular activities, and other school-related features within a single mobile platform.',
        tech: ['Flutter', 'Dart', 'REST API', 'Provider', 'GitLab'],
        featuresTitle: '👨‍💻 My Contributions',
        fiturUtama: [
            'Implemented Google Sign-In authentication.',
            'Developed multi-role login and account handling.',
            'Implemented loading, success, empty, and error state management.',
            'Developed the Extracurricular Registration feature.',
            'Refactored several existing modules.'
        ],
        featured: true,
        needsDeviceFrame: true,
        thumbnail: '/images/projects/smard-mobile/3_Home_Page_Student.webp',
        images: [
            '/images/projects/smard-mobile/1_Login_Menu_Using_Google.webp',
            '/images/projects/smard-mobile/3_Home_Page_Student.webp',
            '/images/projects/smard-mobile/4_Home_Page_Student\'s_Parent.webp',
            '/images/projects/smard-mobile/5_Schedule_Page.webp',
            '/images/projects/smard-mobile/6_Announcement_Page.webp',
            '/images/projects/smard-mobile/7_Report_Page.webp',
            '/images/projects/smard-mobile/8_Detail_Report_Grades_Page.webp',
            '/images/projects/smard-mobile/9_Detail_Report_Extracurricular_Page.webp',
            '/images/projects/smard-mobile/10_Extracurricular_List.webp',
            '/images/projects/smard-mobile/11_Detail_Extracurricular_Page.webp'
        ]
    },
    {
        id: 'castfit',
        nama: 'Castfit',
        tipe: 'Thesis Project',
        deskripsi: 'An Android application that recommends physical activities based on weather conditions, user profile, and location data, providing personalized and context-aware activity suggestions.',
        tech: ['Kotlin', 'XML', 'REST API', 'Firebase Authentication', 'Firestore', 'Koin', 'Room Database', 'Retrofit', 'MVVM', 'GitHub'],
        featuresTitle: '✨ Key Features',
        featured: true,
        needsDeviceFrame: false,
        thumbnail: '/images/projects/castfit/Thumbnail_Castfit.webp',
        heroImage: '/images/projects/castfit/Preview All Castfit.png',
        images: [
            '/images/projects/castfit/1_Home_Page.png',
            '/images/projects/castfit/2_Recommendation_Activity_Page.png',
            '/images/projects/castfit/3_Progress_Menu.png',
            '/images/projects/castfit/4_History_Page.png',
            '/images/projects/castfit/5_Filter_Date_Range_History.png',
            '/images/projects/castfit/6_Chart_History.png',
            '/images/projects/castfit/7_Create_Schedule.png',
            '/images/projects/castfit/8_Schedule_Menu.png',
            '/images/projects/castfit/9_Notification_Schedule_Detail.png',
            '/images/projects/castfit/10_Profile_Update_Results.png'
        ]
    },
    {
        id: 'airseat',
        nama: 'AirSeat',
        tipe: 'Academic Team Project',
        deskripsi: 'An airline ticket booking application that enables users to search, compare, and book flights through a streamlined and user-friendly mobile experience.',
        tech: ['Kotlin', 'XML', 'REST API', 'Koin', 'Room Database', 'Retrofit', 'MVVM', 'GitHub'],
        featuresTitle: '👨‍💻 My Contributions',
        featured: true,
        fiturUtama: [
            'Developed the Home screen, Flight Search, and Flight Detail screens.',
            'Integrated REST APIs for flight information.',
            'Built responsive Android UI using XML.',
            'Collaborated with backend and web teams during development.'
        ],
        needsDeviceFrame: false,
        thumbnail: '/images/projects/airseat/Thumbnail_Airseat.webp',
        heroImage: '/images/projects/airseat/Preview All AirSeat.png',
        images: [
            '/images/projects/airseat/1_Home.png',
            '/images/projects/airseat/2_Search Ticket.png',
            '/images/projects/airseat/3_Detail Ticket.png',
            '/images/projects/airseat/4_Order Biodata.png',
            '/images/projects/airseat/5_Passenger Biodata.png',
            '/images/projects/airseat/6_Select Seat.png',
            '/images/projects/airseat/7_Detail Ticket Order.png',
            '/images/projects/airseat/8_Choose Payment.png',
            '/images/projects/airseat/9_Payment Virtual Account.png',
            '/images/projects/airseat/10_Status Payment.png',
            '/images/projects/airseat/11_Successful Payment.png',
            '/images/projects/airseat/12_History.png',
            '/images/projects/airseat/13_Notification.png',
            '/images/projects/airseat/14_Profile.png'
        ]
    },
    {
        id: 'foodstar',
        nama: 'FoodStar',
        tipe: 'Academic Personal Project',
        deskripsi: 'A food ordering application that enables users to browse menus, place orders, and manage transactions through a seamless mobile experience.',
        tech: ['Kotlin', 'XML', 'REST API', 'Koin', 'Room Database', 'Retrofit', 'MVVM', 'GitHub'],
        featuresTitle: '✨ Key Features',
        featured: true,
        needsDeviceFrame: false,
        thumbnail: '/images/projects/foodstar/Thumbnail_Foodstar.webp',
        heroImage: '/images/projects/foodstar/preview_all_foodstar.png',
        images: [
            '/images/projects/foodstar/1_Login_Page.png',
            '/images/projects/foodstar/2_Register_Page.png',
            '/images/projects/foodstar/3_Home_Page_Menu_List.png',
            '/images/projects/foodstar/4_Home_Page_Menu_Grid.png',
            '/images/projects/foodstar/5_Detail_Menu.png',
            '/images/projects/foodstar/6_Empty_Cart_Page.png',
            '/images/projects/foodstar/7_Cart_Menu_Page.png',
            '/images/projects/foodstar/8_Checkout_Page.png',
            '/images/projects/foodstar/9_Successful_Checkout.png',
            '/images/projects/foodstar/10_Profile_Page.png'
        ]
    }
];
