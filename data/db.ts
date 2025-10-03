const projects = [
  {
    id: 1,
    img_src: '/assets/images/project/Table.png',
    project_src: 'https://play.google.com/store/apps/details?id=com.tablemusicmobileapp&hl=en&pli=1',
    title: 'Table Music App',
    des: "Table Music App is a feature-rich music streaming app designed to offer users the ultimate music experience.",
    long_des: "Table Music App is a feature-rich music streaming app designed to offer users the ultimate music experience. Whether you prefer to listen online or offline, it provides access to an extensive library of songs and albums. Users can enjoy their favorite tunes for free with no ads or  premium features with flexible payment options, including credit/debit cards, mobile wallets, and in-app purchases. With thousands of songs available for seamless online streaming and the ability to download albums and playlists for offline listening,Table Music App  is always at your fingertips. The app boasts a curated music collection across various genres, offering personalized playlists based on listening history. It also delivers high-quality audio with an intuitive and stylish user interface for a smooth and enjoyable experience. Additionally, users get early access to exclusive albums, trending songs, and the latest releases from their favorite artists. Whether you are a casual listener or a music enthusiast,Table Music App caters to all needs, blending free and premium options for the best music experience. Available on Android and iOS, it is the perfect app for discovering, enjoying, and managing our music anytime, anywhere.",
    toLink: '/projects/1'
  },
  {
    id: 2,
    img_src: '/assets/images/project/QHRM.png',
    project_src: 'https://play.google.com/store/apps/details?id=luspl.qhrm&hl=en',
    title: 'QHRM AUTOMATING HR PROCESS',
    des: "QHRM HR process mobile app is a comprehensive solution designed to streamline workforce management for organizations.",
    long_des: "QHRM HR process mobile app is a comprehensive solution designed to streamline workforce management for organizations with over 30,000 users. Developed by a leading foreign company, this powerful platform integrates essential HR functions, including attendance tracking, leave management, payroll processing, employee onboarding, performance evaluation, and task management. With an intuitive interface and advanced automation, the app enhances operational efficiency, ensures compliance, and improves the overall employee experience. Whether managing daily attendance, processing payroll, or tracking performance, our app simplifies HR operations, making it an essential tool for modern businesses. Available on Android and iOS.",
    toLink: '/projects/2'
  },
  {
    id: 3,
    img_src: '/assets/images/project/Ewallet.png',
    project_src: 'https://github.com/AungNaingPhyo2006',
    title: 'E-Wallet App',
    des: "I focus on ensuring secure communication and data protection by integrating banking and wallet systems. I implement strong encryption protocols like",
    long_des: " I focus on ensuring secure communication and data protection by integrating banking and wallet systems. I implement strong encryption protocols like AES for encrypting sensitive data such as user credentials, transactions, and balances. For secure communication, I use SSL/TLS to encrypt data transmission between the mobile app and the server. Additionally, I integrate secure authentication methods, including two-factor authentication (2FA) and biometric login (fingerprint/face recognition), to protect user access. To ensure compliance with regulatory standards such as PCI-DSS and GDPR, I use secure key storage solutions like iOS’s Keychain and Android’s Keystore for cryptographic key management. I also ensure tokenization to replace sensitive payment data with unique identifiers, reducing the risk of data breaches. Throughout, I follow best practices for input validation, secure session management, and anomaly detection to safeguard both the app and user data from malicious threats.",
    toLink: '/projects/3'
  },
  {
    id: 4,
    img_src: '/assets/images/project/EV.png',
    project_src: 'https://github.com/AungNaingPhyo2006',
    title: 'EV Charging App',
    des: "In the development of an EV (Electric Vehicle) app that supports both Google Maps and Mapbox (for devices where Google Maps is not supported), ",
    long_des: "In the development of an EV (Electric Vehicle) app that supports both Google Maps and Mapbox (for devices where Google Maps is not supported), I focus on offering seamless navigation, routing, and charging station functionalities, specifically designed for electric vehicles. The app integrates Google Maps for devices where it is supported, ensuring accurate map rendering, directions, and real-time traffic data. For devices without Google Maps support, I use Mapbox as an alternative, offering a similar user experience with customizable maps and efficient routing.The EV-specific features include optimized route calculations that consider charging station locations and battery levels. The app calculates the best routes based on the vehicle's battery range, recommending charging stops when necessary. I implement dynamic routing to suggest alternative routes that include charging stations, taking into account the real-time availability of chargers and the vehicle’s energy consumption.To calculate directions, I leverage the routing APIs from both Google Maps and Mapbox, which provide turn-by-turn navigation, distance, and estimated travel time. For EV routing, I integrate additional logic that factors in battery percentage, vehicle efficiency, and charging station locations along the route, ensuring the app suggests the most efficient path and alerts the user when they need to recharge.The app also provides real-time data such as charging station availability, allowing users to view stations along their route and check their operational status. Both Google Maps and Mapbox APIs help in visualizing the EV-specific routing, with real-time updates on traffic, weather conditions, and the availability of chargers, enhancing the user experience for EV drivers.",
    toLink: '/projects/4',
  },
]

export default projects;