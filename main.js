// ===== PRODUCTS DATA (60 items) =====
const products = [
    { id: 1, name: "iPhone 16 Pro Max 256GB", category: "phones", price: 1199, oldPrice: 1399, image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400", rating: 4.9, reviews: 2847, badge: "hot", desc: "A18 Pro chip, 48MP kamera, Titan dizayn. Eng kuchli iPhone.", specs: ["A18 Pro chip", "6.9 inch Super Retina XDR", "48MP + 12MP + 12MP kamera", "256GB xotira", "Titanium dizayn", "USB-C port", "5G qo'llab-quvvatlash", "Face ID"] },
    { id: 2, name: "iPhone 16 Pro 128GB", category: "phones", price: 999, oldPrice: 1099, image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400", rating: 4.8, reviews: 1923, badge: "new", desc: "A18 Pro chip, ProMotion displey", specs: ["A18 Pro chip", "6.3 inch display", "48MP kamera", "128GB", "ProMotion 120Hz"] },
    { id: 3, name: "iPhone 16 128GB", category: "phones", price: 799, oldPrice: null, image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=400", rating: 4.7, reviews: 3421, badge: null, desc: "A18 chip, 48MP asosiy kamera", specs: ["A18 chip", "6.1 inch", "48MP kamera", "128GB", "5G"] },
    { id: 4, name: "Samsung Galaxy S24 Ultra", category: "phones", price: 1099, oldPrice: 1299, image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400", rating: 4.8, reviews: 2156, badge: "sale", desc: "Snapdragon 8 Gen 3, 200MP kamera, S Pen", specs: ["Snapdragon 8 Gen 3", "6.8 inch Dynamic AMOLED", "200MP kamera", "S Pen", "12GB RAM", "512GB"] },
    { id: 5, name: "Samsung Galaxy S24+", category: "phones", price: 899, oldPrice: 999, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400", rating: 4.6, reviews: 1534, badge: null, desc: "6.7 inch Dynamic AMOLED, 50MP", specs: ["Snapdragon 8 Gen 3", "6.7 inch", "50MP kamera", "12GB RAM"] },
    { id: 6, name: "Samsung Galaxy Z Fold 5", category: "phones", price: 1799, oldPrice: 1999, image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=400", rating: 4.5, reviews: 876, badge: "hot", desc: "Buklama ekran, 7.6 inch", specs: ["Snapdragon 8 Gen 2", "7.6 inch buklama", "12GB RAM", "512GB", "S Pen qo'llab-quvvatlash"] },
    { id: 7, name: "Google Pixel 8 Pro", category: "phones", price: 899, oldPrice: 999, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400", rating: 4.7, reviews: 1245, badge: "new", desc: "Tensor G3, AI kamera, 50MP", specs: ["Tensor G3", "6.7 inch LTPO OLED", "50MP kamera", "12GB RAM", "AI xususiyatlar"] },
    { id: 8, name: "Xiaomi 14 Pro", category: "phones", price: 699, oldPrice: 799, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", rating: 4.6, reviews: 987, badge: null, desc: "Snapdragon 8 Gen 3, Leica kamera", specs: ["Snapdragon 8 Gen 3", "6.73 inch", "Leica 50MP kamera", "12GB RAM"] },
    { id: 9, name: "OnePlus 12", category: "phones", price: 799, oldPrice: null, image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400", rating: 4.5, reviews: 654, badge: "new", desc: "Snapdragon 8 Gen 3, 100W zaryad", specs: ["Snapdragon 8 Gen 3", "6.82 inch", "50MP kamera", "16GB RAM", "100W zaryad"] },
    { id: 10, name: "Huawei Mate 60 Pro", category: "phones", price: 999, oldPrice: 1199, image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400", rating: 4.4, reviews: 432, badge: "sale", desc: "Kirin 9000s, Sunway kamera", specs: ["Kirin 9000s", "6.82 inch", "50MP kamera", "12GB RAM"] },
    { id: 11, name: "MacBook Pro 16 M3 Max", category: "laptops", price: 3499, oldPrice: 3999, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400", rating: 4.9, reviews: 1876, badge: "hot", desc: "M3 Max chip, 36GB RAM, 1TB SSD", specs: ["M3 Max chip", "16.2 inch Liquid Retina XDR", "36GB RAM", "1TB SSD", "22 soat batareya"] },
    { id: 12, name: "MacBook Pro 14 M3 Pro", category: "laptops", price: 1999, oldPrice: 2199, image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400", rating: 4.8, reviews: 2341, badge: null, desc: "M3 Pro chip, 18GB RAM, 512GB SSD", specs: ["M3 Pro chip", "14.2 inch", "18GB RAM", "512GB SSD"] },
    { id: 13, name: "MacBook Air 15 M3", category: "laptops", price: 1299, oldPrice: null, image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400", rating: 4.7, reviews: 3124, badge: "new", desc: "M3 chip, 8GB RAM, 256GB SSD", specs: ["M3 chip", "15.3 inch", "8GB RAM", "256GB SSD", "18 soat batareya"] },
    { id: 14, name: "MacBook Air 13 M2", category: "laptops", price: 999, oldPrice: 1099, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400", rating: 4.7, reviews: 4532, badge: "sale", desc: "M2 chip, 8GB RAM, 256GB SSD", specs: ["M2 chip", "13.6 inch", "8GB RAM", "256GB SSD"] },
    { id: 15, name: "Dell XPS 15 OLED", category: "laptops", price: 1899, oldPrice: 2199, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400", rating: 4.6, reviews: 1234, badge: null, desc: "Intel i9, 32GB RAM, RTX 4060", specs: ["Intel i9-13900H", "15.6 inch OLED", "32GB RAM", "RTX 4060", "1TB SSD"] },
    { id: 16, name: "ASUS ROG Strix G16", category: "laptops", price: 1599, oldPrice: 1799, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400", rating: 4.7, reviews: 876, badge: "hot", desc: "Intel i9-13980HX, RTX 4070, 16GB", specs: ["Intel i9-13980HX", "16 inch 240Hz", "RTX 4070", "16GB RAM", "1TB SSD"] },
    { id: 17, name: "Lenovo ThinkPad X1 Carbon", category: "laptops", price: 1499, oldPrice: null, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400", rating: 4.6, reviews: 1543, badge: null, desc: "Intel i7-1365U, 16GB RAM, 512GB", specs: ["Intel i7-1365U", "14 inch", "16GB RAM", "512GB SSD"] },
    { id: 18, name: "HP Spectre x360 14", category: "laptops", price: 1399, oldPrice: 1599, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400", rating: 4.5, reviews: 765, badge: "sale", desc: "Intel i7, OLED, 16GB RAM", specs: ["Intel i7-1355U", "14 inch OLED", "16GB RAM", "1TB SSD"] },
    { id: 19, name: "ASUS ZenBook 14 OLED", category: "laptops", price: 999, oldPrice: 1199, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400", rating: 4.6, reviews: 1098, badge: null, desc: "AMD Ryzen 7, 16GB RAM, OLED", specs: ["AMD Ryzen 7 7730U", "14 inch OLED", "16GB RAM", "512GB SSD"] },
    { id: 20, name: "Microsoft Surface Laptop 5", category: "laptops", price: 1299, oldPrice: null, image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400", rating: 4.5, reviews: 654, badge: "new", desc: "Intel i7, 16GB RAM, 512GB SSD", specs: ["Intel i7-1265U", "13.5 inch", "16GB RAM", "512GB SSD"] },
    { id: 21, name: "iPad Pro 13 M4", category: "tablets", price: 1299, oldPrice: 1499, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400", rating: 4.9, reviews: 1567, badge: "hot", desc: "M4 chip, OLED displey, 256GB", specs: ["M4 chip", "13 inch OLED", "256GB", "Apple Pencil Pro"] },
    { id: 22, name: "iPad Pro 11 M4", category: "tablets", price: 999, oldPrice: 1099, image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400", rating: 4.8, reviews: 2134, badge: null, desc: "M4 chip, 128GB, Wi-Fi", specs: ["M4 chip", "11 inch", "128GB", "Wi-Fi 6E"] },
    { id: 23, name: "iPad Air M2 13\"", category: "tablets", price: 799, oldPrice: null, image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400", rating: 4.7, reviews: 1876, badge: "new", desc: "M2 chip, 128GB, Wi-Fi", specs: ["M2 chip", "13 inch", "128GB", "Wi-Fi"] },
    { id: 24, name: "iPad Air M2 11\"", category: "tablets", price: 599, oldPrice: 699, image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400", rating: 4.7, reviews: 2345, badge: "sale", desc: "M2 chip, 64GB, Wi-Fi", specs: ["M2 chip", "11 inch", "64GB"] },
    { id: 25, name: "iPad 10-avlod", category: "tablets", price: 449, oldPrice: null, image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400", rating: 4.5, reviews: 3456, badge: null, desc: "A14 Bionic, 64GB, 10.9 inch", specs: ["A14 Bionic", "10.9 inch", "64GB", "USB-C"] },
    { id: 26, name: "Samsung Galaxy Tab S9 Ultra", category: "tablets", price: 1199, oldPrice: 1399, image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=400", rating: 4.6, reviews: 876, badge: "hot", desc: "Snapdragon 8 Gen 2, 14.6 inch AMOLED", specs: ["Snapdragon 8 Gen 2", "14.6 inch AMOLED", "12GB RAM", "S Pen"] },
    { id: 27, name: "Samsung Galaxy Tab S9+", category: "tablets", price: 899, oldPrice: 999, image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400", rating: 4.5, reviews: 654, badge: null, desc: "12.4 inch AMOLED, S Pen", specs: ["Snapdragon 8 Gen 2", "12.4 inch AMOLED", "12GB RAM"] },
    { id: 28, name: "AirPods Pro 2 (USB-C)", category: "audio", price: 249, oldPrice: 279, image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f49?w=400", rating: 4.8, reviews: 5678, badge: "hot", desc: "Adaptive Audio, USB-C, 30 soat batareya", specs: ["H2 chip", "Adaptive Audio", "USB-C", "30 soat batareya", "IP54"] },
    { id: 29, name: "AirPods Max", category: "audio", price: 549, oldPrice: 599, image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=400", rating: 4.7, reviews: 2345, badge: null, desc: "Spatial Audio, 20 soat batareya", specs: ["H1 chip", "Spatial Audio", "20 soat", "Lightning"] },
    { id: 30, name: "AirPods 3-avlod", category: "audio", price: 169, oldPrice: 179, image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400", rating: 4.6, reviews: 4321, badge: "sale", desc: "Spatial Audio, MagSafe", specs: ["H1 chip", "Spatial Audio", "MagSafe", "30 soat"] },
    { id: 31, name: "Sony WH-1000XM5", category: "audio", price: 349, oldPrice: 399, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400", rating: 4.8, reviews: 3456, badge: "hot", desc: "Industry-leading ANC, 30 soat", specs: ["Industry-leading ANC", "30 soat batareya", "LDAC", "Multipoint"] },
    { id: 32, name: "Sony WF-1000XM5", category: "audio", price: 279, oldPrice: 299, image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400", rating: 4.7, reviews: 2134, badge: null, desc: "True wireless, ANC, LDAC", specs: ["ANC", "LDAC", "8 soat batareya", "IPX4"] },
    { id: 33, name: "Bose QuietComfort Ultra", category: "audio", price: 429, oldPrice: null, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400", rating: 4.7, reviews: 1567, badge: "new", desc: "Immersive Audio, ANC", specs: ["Immersive Audio", "ANC", "24 soat", "Bluetooth 5.3"] },
    { id: 34, name: "JBL Tune 770NC", category: "audio", price: 99, oldPrice: 129, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", rating: 4.4, reviews: 2876, badge: "sale", desc: "ANC, 70 soat batareya", specs: ["ANC", "70 soat batareya", "Bluetooth 5.3", "JBL Pure Bass"] },
    { id: 35, name: "Samsung Galaxy Buds3 Pro", category: "audio", price: 229, oldPrice: 249, image: "https://images.unsplash.com/photo-1598331668871-c8a6b5a8a6e7?w=400", rating: 4.5, reviews: 1234, badge: null, desc: "ANC, 360 Audio, IPX7", specs: ["ANC", "360 Audio", "IPX7", "Galaxy AI"] },
    { id: 36, name: "PlayStation 5 Slim", category: "gaming", price: 449, oldPrice: 499, image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400", rating: 4.9, reviews: 8765, badge: "hot", desc: "1TB SSD, 4K gaming, DualSense", specs: ["1TB SSD", "4K 120fps", "Ray Tracing", "DualSense controller"] },
    { id: 37, name: "PlayStation 5 Pro", category: "gaming", price: 699, oldPrice: null, image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400", rating: 4.8, reviews: 3456, badge: "new", desc: "8K gaming, 2TB SSD, Ray Tracing", specs: ["2TB SSD", "8K gaming", "Ray Tracing", "Wi-Fi 7"] },
    { id: 38, name: "Xbox Series X", category: "gaming", price: 499, oldPrice: 549, image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400", rating: 4.7, reviews: 5432, badge: "sale", desc: "1TB SSD, 12 TFLOPS, 4K 120fps", specs: ["1TB SSD", "12 TFLOPS", "4K 120fps", "Game Pass"] },
    { id: 39, name: "Nintendo Switch OLED", category: "gaming", price: 349, oldPrice: null, image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400", rating: 4.8, reviews: 6789, badge: null, desc: "7 inch OLED, 64GB, Joy-Con", specs: ["7 inch OLED", "64GB", "Joy-Con", "Docking station"] },
    { id: 40, name: "Steam Deck OLED 1TB", category: "gaming", price: 649, oldPrice: 699, image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400", rating: 4.7, reviews: 2345, badge: "hot", desc: "7.4 inch OLED, 1TB, Wi-Fi 6E", specs: ["7.4 inch OLED", "1TB SSD", "Wi-Fi 6E", "50Wh batareya"] },
    { id: 41, name: "ASUS ROG Ally", category: "gaming", price: 599, oldPrice: 699, image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400", rating: 4.5, reviews: 1234, badge: "sale", desc: "AMD Z1 Extreme, 7 inch 120Hz", specs: ["AMD Z1 Extreme", "7 inch 120Hz", "16GB RAM", "512GB SSD"] },
    { id: 42, name: "PS5 DualSense Controller", category: "gaming", price: 69, oldPrice: 79, image: "https://images.unsplash.com/photo-1592840496011-b8052509813c?w=400", rating: 4.7, reviews: 4567, badge: null, desc: "Haptic feedback, Adaptive triggers", specs: ["Haptic feedback", "Adaptive triggers", "USB-C", "Built-in microphone"] },
    { id: 43, name: "Samsung 65\" QN90C Neo QLED 4K", category: "tvs", price: 1799, oldPrice: 2199, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400", rating: 4.8, reviews: 1234, badge: "sale", desc: "Neo QLED, 4K 120Hz, Gaming Hub", specs: ["65 inch", "Neo QLED", "4K 120Hz", "Gaming Hub", "Object Tracking Sound"] },
    { id: 44, name: "LG 55\" C3 OLED 4K", category: "tvs", price: 1299, oldPrice: 1499, image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400", rating: 4.9, reviews: 2345, badge: "hot", desc: "OLED evo, α9 Gen6, Dolby Vision", specs: ["55 inch", "OLED evo", "α9 Gen6", "Dolby Vision", "4K 120Hz"] },
    { id: 45, name: "Sony 65\" A95L QD-OLED", category: "tvs", price: 2799, oldPrice: null, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400", rating: 4.9, reviews: 876, badge: "new", desc: "QD-OLED, XR Processor, 4K 120Hz", specs: ["65 inch", "QD-OLED", "XR Processor", "4K 120Hz", "Dolby Vision"] },
    { id: 46, name: "TCL 55\" C845 Mini LED 4K", category: "tvs", price: 699, oldPrice: 899, image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400", rating: 4.5, reviews: 1567, badge: "sale", desc: "Mini LED, 144Hz, Google TV", specs: ["55 inch", "Mini LED", "144Hz", "Google TV", "Dolby Vision"] },
    { id: 47, name: "Samsung Bespoke AI Fridge", category: "appliances", price: 2499, oldPrice: 2999, image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400", rating: 4.6, reviews: 543, badge: "hot", desc: "AI Energy Mode, 28 cu ft, Family Hub", specs: ["28 cu ft", "Family Hub", "AI Energy Mode", "Bespoke dizayn"] },
    { id: 48, name: "LG WashTower AI", category: "appliances", price: 1899, oldPrice: 2199, image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400", rating: 4.7, reviews: 432, badge: "new", desc: "AI Direct Drive, 5.2 cu ft", specs: ["5.2 cu ft", "AI Direct Drive", "ThinQ AI", "TurboWash"] },
    { id: 49, name: "Dyson V15 Detect", category: "appliances", price: 749, oldPrice: 849, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400", rating: 4.8, reviews: 2134, badge: null, desc: "Laser dust detection, 60 min", specs: ["Laser dust detection", "60 min batareya", "HEPA filtr", "LCD ekran"] },
    { id: 50, name: "iRobot Roomba j9+", category: "appliances", price: 899, oldPrice: 999, image: "https://images.unsplash.com/photo-1589820296156-2454bb8a4250?w=400", rating: 4.6, reviews: 1876, badge: "sale", desc: "AI navigation, Auto-empty, Pet friendly", specs: ["AI navigation", "Auto-empty", "Pet friendly", "Smart mapping"] },
    { id: 51, name: "Ninja Foodi 14-in-1", category: "appliances", price: 299, oldPrice: 349, image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400", rating: 4.7, reviews: 3456, badge: null, desc: "Pressure cook, air fry, bake", specs: ["14-in-1 funksiyalar", "8 qt", "Pressure cook", "Air fry", "Bake"] },
    { id: 52, name: "Apple HomePod 2", category: "smart", price: 299, oldPrice: null, image: "https://images.unsplash.com/photo-1543512214-318c77a07298?w=400", rating: 4.6, reviews: 1234, badge: "new", desc: "Spatial Audio, Siri, Smart Home Hub", specs: ["Spatial Audio", "Siri", "Smart Home Hub", "Thread qo'llab-quvvatlash"] },
    { id: 53, name: "Google Nest Hub Max", category: "smart", price: 229, oldPrice: 249, image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400", rating: 4.5, reviews: 2345, badge: null, desc: "10 inch display, Google Assistant", specs: ["10 inch display", "Google Assistant", "Kamera", "Smart Home control"] },
    { id: 54, name: "Amazon Echo Show 15", category: "smart", price: 279, oldPrice: 299, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400", rating: 4.4, reviews: 1567, badge: "sale", desc: "15.6 inch, Alexa, Smart display", specs: ["15.6 inch", "Alexa", "Smart display", "Video qo'ng'iroq"] },
    { id: 55, name: "Ring Video Doorbell Pro 2", category: "smart", price: 249, oldPrice: null, image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400", rating: 4.5, reviews: 3456, badge: null, desc: "1536p video, 3D motion, Alexa", specs: ["1536p video", "3D motion detection", "Alexa", "Night vision"] },
    { id: 56, name: "DJI Mavic 3 Pro", category: "drones", price: 2199, oldPrice: 2499, image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400", rating: 4.9, reviews: 876, badge: "hot", desc: "Hasselblad camera, 46 min flight", specs: ["Hasselblad camera", "46 min flight", "5.1K video", "Omnidirectional sensing"] },
    { id: 57, name: "DJI Air 3", category: "drones", price: 1099, oldPrice: 1199, image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=400", rating: 4.7, reviews: 1234, badge: "new", desc: "Dual camera, 46 min, 20km range", specs: ["Dual camera", "46 min flight", "20km range", "4K HDR"] },
    { id: 58, name: "DJI Mini 4 Pro", category: "drones", price: 759, oldPrice: null, image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=400", rating: 4.8, reviews: 2345, badge: null, desc: "249g, 4K HDR, Omnidirectional sensing", specs: ["249g", "4K HDR", "Omnidirectional sensing", "34 min flight"] },
    { id: 59, name: "Autel EVO Lite+", category: "drones", price: 1149, oldPrice: 1299, image: "https://images.unsplash.com/photo-1508614589041-895b8c9d7ef5?w=400", rating: 4.6, reviews: 543, badge: "sale", desc: "1-inch sensor, 40 min flight", specs: ["1-inch sensor", "40 min flight", "6K video", "Obstacle avoidance"] },
    { id: 60, name: "DJI FPV Combo", category: "drones", price: 999, oldPrice: 1199, image: "https://images.unsplash.com/photo-1506947411487-a56738c4b582?w=400", rating: 4.5, reviews: 765, badge: null, desc: "Immersive FPV, 4K 60fps, 140 km/h", specs: ["Immersive FPV", "4K 60fps", "140 km/h", "Motion controller"] }
];

// ===== STATE =====
let cart = [], wishlist = [], currentUser = null, displayed = 12, curCat = 'all', curSort = 'popular', currentPage = 'home', orders = [];

// ===== INIT =====
window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('hidden'), 1500);
    const s = localStorage.getItem('tz_cur');
    if (s) { currentUser = JSON.parse(s); enterSite() }
});

function enterSite() {
    document.getElementById('authPage').style.display = 'none';
    document.getElementById('mainSite').style.display = 'block';
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userMenuName').textContent = currentUser.name;
    document.getElementById('userMenuEmail').textContent = currentUser.email;
    document.getElementById('userAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
    document.getElementById('userMenuAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
    initSite();
}

function initSite() {
    renderCategories();
    renderHomeProds();
    renderOffers();
    initScroll();
    animStats();
    startCountdown();
}

// ===== AUTH =====
function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    document.getElementById(tab === 'signin' ? 'signinForm' : 'signupForm').classList.add('active');
}
function togglePass(id, btn) {
    const i = document.getElementById(id), ic = btn.querySelector('i');
    if (i.type === 'password') { i.type = 'text'; ic.className = 'fas fa-eye-slash' }
    else { i.type = 'password'; ic.className = 'fas fa-eye' }
}
function checkStrength(pw) {
    let s = 0;
    if (pw.length >= 8) s++;
    if (pw.length >= 12) s++;
    if (/[A-Z]/.test(pw)) s++;
    if (/[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    const lv = [{ p: 20, c: '#ef4444', l: 'Juda zaif' }, { p: 40, c: '#f59e0b', l: 'Zaif' }, { p: 60, c: '#fbbf24', l: "O'rtacha" }, { p: 80, c: '#10b981', l: 'Kuchli' }, { p: 100, c: '#06b6d4', l: 'Juda kuchli' }];
    const v = lv[Math.min(s, 4)];
    const f = document.getElementById('strengthFill'), lb = document.getElementById('strengthText');
    if (f) { f.style.width = v.p + '%'; f.style.background = v.c }
    if (lb) { lb.textContent = v.l; lb.style.color = v.c }
}
function handleSignIn(e) {
    e.preventDefault();
    const em = document.getElementById('signinEmail').value, pw = document.getElementById('signinPassword').value;
    const users = JSON.parse(localStorage.getItem('tz_users') || '[]');
    const user = users.find(u => u.email === em && u.password === pw);
    if (user) {
        currentUser = user;
        localStorage.setItem('tz_cur', JSON.stringify(user));
        enterSite();
        showToast('Xush kelibsiz, ' + user.name + '!', 'success');
    } else {
        const nu = { name: em.split('@')[0], email: em, password: pw, phone: '', avatar: '', joinDate: new Date().toISOString(), addresses: [], orders: [] };
        users.push(nu);
        localStorage.setItem('tz_users', JSON.stringify(users));
        currentUser = nu;
        localStorage.setItem('tz_cur', JSON.stringify(nu));
        enterSite();
        showToast('Muvaffaqiyatli kirdingiz!', 'success');
    }
}
function handleSignUp(e) {
    e.preventDefault();
    const nm = document.getElementById('signupName').value, em = document.getElementById('signupEmail').value, ph = document.getElementById('signupPhone').value, pw = document.getElementById('signupPassword').value, cf = document.getElementById('signupConfirm').value;
    if (pw !== cf) { showToast('Parollar mos kelmaydi!', 'error'); return }
    const users = JSON.parse(localStorage.getItem('tz_users') || '[]');
    if (users.find(u => u.email === em)) { showToast('Bu email allaqachon ro\'yxatdan o\'tgan!', 'error'); return }
    const nu = { name: nm, email: em, phone: ph, password: pw, avatar: '', joinDate: new Date().toISOString(), addresses: [{ id: 1, name: 'Uy', address: 'Toshkent sh., Amir Temur 108', phone: ph, default: true }], orders: [] };
    users.push(nu);
    localStorage.setItem('tz_users', JSON.stringify(users));
    currentUser = nu;
    localStorage.setItem('tz_cur', JSON.stringify(nu));
    enterSite();
    showToast('Muvaffaqiyatli ro\'yxatdan o\'tdingiz!', 'success');
}
function socialAuth(pr) {
    currentUser = { name: pr + ' User', email: 'user@' + pr.toLowerCase() + '.com', phone: '', avatar: '', joinDate: new Date().toISOString(), addresses: [], orders: [] };
    localStorage.setItem('tz_cur', JSON.stringify(currentUser));
    enterSite();
    showToast(pr + ' orqali muvaffaqiyatli kirdingiz!', 'success');
}
function logout() {
    currentUser = null;
    localStorage.removeItem('tz_cur');
    document.getElementById('mainSite').style.display = 'none';
    document.getElementById('authPage').style.display = 'flex';
    document.getElementById('userMenu').classList.remove('show');
    showToast('Tizimdan chiqdingiz', 'info');
}

// ===== PAGE NAVIGATION =====
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById('page-' + page);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = page;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.getElementById('userMenu').classList.remove('show');
        switch (page) {
            case 'products': renderProds(); break;
            case 'cart': renderCartPage(); break;
            case 'checkout': renderCheckoutPage(); break;
            case 'wishlist': renderWishlistPage(); break;
            case 'orders': renderOrders(); break;
            case 'profile': renderProfile(); break;
            case 'games': initGames(); break;
        }
    }
}

// ===== RENDERING =====
function renderCategories() {
    const cats = [{ id: 'phones', name: 'Telefonlar', icon: 'fa-mobile-screen', count: 10 }, { id: 'laptops', name: 'Noutbuklar', icon: 'fa-laptop', count: 10 }, { id: 'tablets', name: 'Planshetlar', icon: 'fa-tablet-screen-button', count: 7 }, { id: 'audio', name: 'Audio', icon: 'fa-headphones', count: 8 }, { id: 'gaming', name: 'Gaming', icon: 'fa-gamepad', count: 7 }, { id: 'tvs', name: 'Televizorlar', icon: 'fa-tv', count: 4 }, { id: 'appliances', name: 'Maishiy', icon: 'fa-blender', count: 5 }, { id: 'smart', name: 'Smart Home', icon: 'fa-house-signal', count: 4 }, { id: 'drones', name: 'Dronlar', icon: 'fa-helicopter', count: 5 }];
    document.getElementById('catGrid').innerHTML = cats.map(c => `<div class="cat-card" onclick="filterCat('${c.id}',null);showPage('products')"><div class="cat-icon"><i class="fas ${c.icon}"></i></div><h3>${c.name}</h3><p>${c.count} mahsulot</p></div>`).join('');
}
function renderHomeProds() {
    document.getElementById('homeProdGrid').innerHTML = products.filter(p => p.badge === 'hot' || p.badge === 'new').slice(0, 8).map((p, i) => prodCardHTML(p, i)).join('');
}
function prodCardHTML(p, i) {
    return `<div class="prod-card" style="animation-delay:${i * .04}s" onclick="showProductDetail(${p.id})">
    ${p.badge ? `<span class="prod-badge badge-${p.badge}">${p.badge === 'new' ? 'YANGI' : p.badge === 'sale' ? 'AKSIYA' : ' HIT'}</span>` : ''}
    <button class="prod-wish ${wishlist.includes(p.id) ? 'active' : ''}" onclick="event.stopPropagation();toggleWish(${p.id});showPage('wishlist')"><i class="fas fa-heart"></i></button>
    <div class="prod-img">
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300/1a1a2e/6366f1?text=${encodeURIComponent(p.name.split(' ')[0])}'">
      <div class="quick-acts">
        <button class="qa-btn" onclick="event.stopPropagation();showProductDetail(${p.id})"><i class="fas fa-eye"></i> Ko'rish</button>
        <button class="qa-btn add" onclick="event.stopPropagation();addToCart(${p.id})"><i class="fas fa-cart-plus"></i> Savatga</button>
      </div>
    </div>
    <div class="prod-info">
      <div class="prod-cat">${catName(p.category)}</div>
      <h3 class="prod-name">${p.name}</h3>
      <div class="prod-rating"><span class="stars">${stars(p.rating)}</span><span class="rating-cnt">(${p.reviews})</span></div>
      <div class="prod-price"><span class="price-cur">$${p.price.toLocaleString()}</span>${p.oldPrice ? `<span class="price-old">$${p.oldPrice.toLocaleString()}</span>` : ''}</div>
    </div>
  </div>`;
}
function renderProds() {
    const g = document.getElementById('prodGrid');
    let f = getFiltered().slice(0, displayed);
    g.innerHTML = f.map((p, i) => prodCardHTML(p, i)).join('');
    document.getElementById('prodCountText').textContent = getFiltered().length + ' ta mahsulot';
    const lb = document.getElementById('loadMoreBtn');
    if (lb) lb.style.display = displayed >= getFiltered().length ? 'none' : 'inline-flex';
}
function getFiltered() {
    let f = curCat === 'all' ? [...products] : products.filter(p => p.category === curCat);
    const s = document.getElementById('searchInput')?.value?.toLowerCase() || '';
    if (s) f = f.filter(p => p.name.toLowerCase().includes(s) || p.desc.toLowerCase().includes(s));
    switch (curSort) {
        case 'cheap': f.sort((a, b) => a.price - b.price); break;
        case 'expensive': f.sort((a, b) => b.price - a.price); break;
        case 'new': f.sort((a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0)); break;
        default: f.sort((a, b) => b.reviews - a.reviews);
    }
    return f;
}
function catName(c) { return { phones: 'Telefonlar', laptops: 'Noutbuklar', tablets: 'Planshetlar', audio: 'Audio', gaming: 'Gaming', tvs: 'Televizorlar', appliances: 'Maishiy', smart: 'Smart Home', drones: 'Dronlar' }[c] || c }
function stars(r) { const f = Math.floor(r), h = r % 1 >= .5 ? 1 : 0, e = 5 - f - h; return '★'.repeat(f) + (h ? '½' : '') + '☆'.repeat(e) }
function filterCat(c, btn) {
    curCat = c;
    displayed = 12;
    document.querySelectorAll('.nav-link').forEach(x => x.classList.remove('active'));
    if (btn) btn.classList.add('active');
    if (currentPage === 'products') renderProds();
}
function sortProd(s, btn) {
    curSort = s;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderProds();
}
function handleSearch() {
    displayed = 50;
    if (currentPage !== 'products') showPage('products');
    else renderProds();
    const s = document.getElementById('searchInput').value.toLowerCase();
    const dd = document.getElementById('searchDropdown');
    if (s.length > 2) {
        const res = products.filter(p => p.name.toLowerCase().includes(s)).slice(0, 5);
        dd.innerHTML = res.map(p => `<div class="search-result" onclick="showProductDetail(${p.id})"><img src="${p.image}" onerror="this.src='https://via.placeholder.com/44/1a1a2e/6366f1?text=IMG'"><div class="search-result-info"><div class="search-result-name">${p.name}</div><div class="search-result-price">$${p.price.toLocaleString()}</div></div></div>`).join('');
        dd.classList.add('show');
    } else { dd.classList.remove('show') }
}
function loadMore() { displayed += 12; renderProds() }
document.addEventListener('click', e => { if (!e.target.closest('.search-wrap')) document.getElementById('searchDropdown').classList.remove('show') });

// ===== PRODUCT DETAIL =====
function showProductDetail(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const similar = products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
    const reviews = [
        { name: 'Ali Valiyev', date: '2026-10-01', text: 'Ajoyib mahsulot! Sifati juda yaxshi, tavsiya qilaman.', rating: 5 },
        { name: 'Madina Karimova', date: '2026-09-28', text: 'Narxi biroz qimmat, lekin sifati arziydi. Yetkazib berish tez bo\'ldi.', rating: 4 },
        { name: 'Jasur Toshmatov', date: '2026-09-25', text: '2 haftadan beri ishlataman, hech qanday muammo yo\'q. Kafolat ham bor.', rating: 5 }
    ];
    const disc = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
    document.getElementById('productDetailContent').innerHTML = `
    <div class="breadcrumbs">
      <a href="#" onclick="showPage('home');return false;">Bosh sahifa</a>
      <i class="fas fa-chevron-right"></i>
      <a href="#" onclick="showPage('products');return false;">Mahsulotlar</a>
      <i class="fas fa-chevron-right"></i>
      <span>${p.name}</span>
    </div>
    <div class="pd-grid">
      <div class="pd-gallery">
        <div class="pd-main-img">
          <img src="${p.image}" alt="${p.name}" id="pdMainImg" onerror="this.src='https://via.placeholder.com/600x500/1a1a2e/6366f1?text=${encodeURIComponent(p.name.split(' ')[0])}'">
        </div>
        <div class="pd-thumbs">
          ${[p.image, 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=200', 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=200'].map((img, i) => `<div class="pd-thumb ${i === 0 ? 'active' : ''}" onclick="changePdImg('${img}',this)"><img src="${img}" alt="thumb" onerror="this.src='https://via.placeholder.com/150/1a1a2e/6366f1?text=${i + 1}'"></div>`).join('')}
        </div>
      </div>
      <div class="pd-info">
        <div class="prod-cat">${catName(p.category)}</div>
        <h1>${p.name}</h1>
        <div class="pd-rating"><span class="stars">${stars(p.rating)}</span><span>${p.rating} (${p.reviews} sharh)</span></div>
        <div class="pd-price-box">
          <div class="pd-price">
            <span class="price-cur">$${p.price.toLocaleString()}</span>
            ${p.oldPrice ? `<span class="price-old">$${p.oldPrice.toLocaleString()}</span>` : ''}
            ${disc ? `<span class="pd-discount">-${disc}%</span>` : ''}
          </div>
        </div>
        <p class="pd-desc">${p.desc}</p>
        <div class="pd-features">
          <h3>Xususiyatlar</h3>
          <ul class="pd-feat-list">${(p.specs || []).map(s => `<li><i class="fas fa-check-circle"></i> ${s}</li>`).join('')}</ul>
        </div>
        <div class="pd-qty">
          <label>Miqdor:</label>
          <div class="qty-ctrl">
            <button onclick="changePdQty(-1)">-</button>
            <span id="pdQty">1</span>
            <button onclick="changePdQty(1)">+</button>
          </div>
        </div>
        <div class="pd-actions">
          <button class="btn-primary" onclick="addToCartQty(${p.id})"><i class="fas fa-cart-plus"></i> Savatga qo'shish</button>
          <button class="btn-ghost" onclick="toggleWish(${p.id});showPage('wishlist')"><i class="fas fa-heart"></i></button>
        </div>
        <div class="pd-guarantee">
          <div><i class="fas fa-truck"></i><span>Bepul yetkazish</span></div>
          <div><i class="fas fa-shield-halved"></i><span>2 yil kafolat</span></div>
          <div><i class="fas fa-rotate-left"></i><span>14 kun qaytarish</span></div>
        </div>
      </div>
    </div>
    <div class="reviews-sec">
      <h2>Sharhlar (${reviews.length})</h2>
      ${reviews.map(r => `<div class="review-card"><div class="review-header"><div class="review-avatar">${r.name[0]}</div><div><div class="review-name">${r.name}</div><div class="review-date">${r.date} · <span class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span></div></div></div><p class="review-text">${r.text}</p></div>`).join('')}
    </div>
    <div class="similar-sec">
      <h2>O'xshash mahsulotlar</h2>
      <div class="prod-grid">${similar.map((s, i) => prodCardHTML(s, i)).join('')}</div>
    </div>
  `;
    showPage('product');
}
let pdQtyVal = 1;
function changePdImg(src, el) {
    document.getElementById('pdMainImg').src = src;
    document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
}
function changePdQty(d) { pdQtyVal = Math.max(1, pdQtyVal + d); document.getElementById('pdQty').textContent = pdQtyVal }
function addToCartQty(id) {
    const p = products.find(x => x.id === id);
    for (let i = 0; i < pdQtyVal; i++) {
        const ex = cart.find(x => x.id === id);
        if (ex) ex.qty++;
        else cart.push({ ...p, qty: 1 });
    }
    updateCartUI();
    showToast(`✅ ${p.name} savatga qo'shildi! (Miqdor: ${pdQtyVal} ta)`, 'success');
    animateCartCount();
    pdQtyVal = 1;
}

// ===== CART =====
function addToCart(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const ex = cart.find(x => x.id === id);
    if (ex) {
        ex.qty++;
        showToast(`✅ ${p.name} savatga qo'shildi! (Miqdor: ${ex.qty})`, 'success');
    } else {
        cart.push({ ...p, qty: 1 });
        showToast(`✅ ${p.name} savatga qo'shildi!`, 'success');
    }
    updateCartUI();
    animateCartCount();
}
function removeFromCart(id) {
    cart = cart.filter(x => x.id !== id);
    updateCartUI();
    if (currentPage === 'cart') renderCartPage();
    showToast('Mahsulot savatdan o\'chirildi', 'info');
}
function updateQty(id, d) {
    const it = cart.find(x => x.id === id);
    if (it) {
        it.qty += d;
        if (it.qty <= 0) { removeFromCart(id); return }
    }
    updateCartUI();
    if (currentPage === 'cart') renderCartPage();
}
function updateCartUI() {
    const c = cart.reduce((s, x) => s + x.qty, 0), t = cart.reduce((s, x) => s + x.price * x.qty, 0);
    document.getElementById('cartCount').textContent = c;
    document.getElementById('cartTotal').textContent = '$' + t.toLocaleString();
}
function animateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.style.transform = 'scale(1.5)';
    setTimeout(() => { cartCount.style.transform = 'scale(1)'; }, 300);
}
function renderCartPage() {
    const c = document.getElementById('cartPageContent');
    if (!cart.length) {
        c.innerHTML = `<h1>Savatcha</h1><div class="cart-empty-state"><i class="fas fa-bag-shopping"></i><h3>Savatchangiz bo'sh</h3><p>Mahsulotlarni qo'shing va xaridni boshlang</p><button class="btn-primary" onclick="showPage('products')"><i class="fas fa-bag-shopping"></i> Xarid qilish</button></div>`;
        return;
    }
    const subtotal = cart.reduce((s, x) => s + x.price * x.qty, 0), shipping = subtotal > 500 ? 0 : 29, tax = Math.round(subtotal * .12), total = subtotal + shipping + tax;
    c.innerHTML = `<h1>Savatcha (${cart.length} ta mahsulot)</h1>
    <div class="cart-layout">
      <div class="cart-items-list">
        ${cart.map(it => `<div class="cart-item-card">
          <div class="cart-item-img"><img src="${it.image}" alt="${it.name}" onerror="this.src='https://via.placeholder.com/100/1a1a2e/6366f1?text=IMG'"></div>
          <div class="cart-item-details">
            <h3>${it.name}</h3>
            <div class="cat">${catName(it.category)}</div>
            <div class="price">$${(it.price * it.qty).toLocaleString()}</div>
            <div class="cart-item-actions">
              <div class="qty-ctrl">
                <button onclick="updateQty(${it.id},-1)">-</button>
                <span>${it.qty}</span>
                <button onclick="updateQty(${it.id},1)">+</button>
              </div>
              <button class="cart-item-remove" onclick="removeFromCart(${it.id})"><i class="fas fa-trash"></i> O'chirish</button>
            </div>
          </div>
        </div>`).join('')}
      </div>
      <div class="cart-summary">
        <h3>Buyurtma xulosasi</h3>
        <div class="promo-code"><input type="text" placeholder="Promo-kod (TECH20)" id="promoInput"><button onclick="applyPromo()">Qo'llash</button></div>
        <div class="cart-totals">
          <div class="cart-total-row"><span>Subtotal</span><span>$${subtotal.toLocaleString()}</span></div>
          <div class="cart-total-row"><span>Yetkazish</span><span>${shipping === 0 ? 'BEPUL' : '$' + shipping}</span></div>
          <div class="cart-total-row"><span>Soliq (12%)</span><span>$${tax.toLocaleString()}</span></div>
          <div class="cart-total-row total"><span>Jami</span><span>$${total.toLocaleString()}</span></div>
        </div>
        <button class="btn-primary full" onclick="showPage('checkout')"><i class="fas fa-credit-card"></i> Buyurtma berish</button>
        <button class="btn-ghost full" style="margin-top:10px;justify-content:center" onclick="showPage('products')"><i class="fas fa-arrow-left"></i> Xaridni davom ettirish</button>
      </div>
    </div>`;
}
function applyPromo() {
    const code = document.getElementById('promoInput').value.trim().toUpperCase();
    if (code === 'TECH20') showToast('Promo-kod qo\'llandi! 20% chegirma', 'success');
    else if (code) showToast('Noto\'g\'ri promo-kod', 'error');
    else showToast('Promo-kod kiriting', 'info');
}
function renderCheckoutPage() {
    const c = document.getElementById('checkoutPageContent');
    const subtotal = cart.reduce((s, x) => s + x.price * x.qty, 0), shipping = subtotal > 500 ? 0 : 29, tax = Math.round(subtotal * .12), total = subtotal + shipping + tax;
    c.innerHTML = `<h1>Buyurtmani rasmiylashtirish</h1>
    <div class="checkout-layout">
      <div>
        <div class="checkout-form">
          <h3><i class="fas fa-user"></i> Shaxsiy ma'lumotlar</h3>
          <div class="form-row">
            <div class="form-group"><label>Ism</label><input type="text" value="${currentUser?.name || ''}" id="coName"></div>
            <div class="form-group"><label>Familiya</label><input type="text" id="coLastname"></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label>Email</label><input type="email" value="${currentUser?.email || ''}" id="coEmail"></div>
            <div class="form-group"><label>Telefon</label><input type="tel" value="${currentUser?.phone || ''}" id="coPhone"></div>
          </div>
        </div>
        <div class="checkout-form">
          <h3><i class="fas fa-truck"></i> Yetkazib berish manzili</h3>
          <div class="form-group"><label>Manzil</label><input type="text" placeholder="Ko'cha, uy raqami" id="coAddress"></div>
          <div class="form-row">
            <div class="form-group"><label>Shahar</label><select id="coCity"><option>Toshkent</option><option>Samarqand</option><option>Buxoro</option><option>Farg'ona</option></select></div>
            <div class="form-group"><label>Indeks</label><input type="text" placeholder="100000" id="coZip"></div>
          </div>
        </div>
        <div class="checkout-form">
          <h3><i class="fas fa-credit-card"></i> To'lov usuli</h3>
          <div class="payment-methods">
            <div class="pay-method active" onclick="selectPay(this)"><i class="fas fa-credit-card"></i><span>Karta</span></div>
            <div class="pay-method" onclick="selectPay(this)"><i class="fas fa-money-bill-wave"></i><span>Naqd</span></div>
            <div class="pay-method" onclick="selectPay(this)"><i class="fas fa-mobile-screen"></i><span>Click/Payme</span></div>
          </div>
        </div>
      </div>
      <div class="order-summary">
        <h3>Buyurtma xulosasi</h3>
        <div class="order-items">
          ${cart.map(it => `<div class="order-item"><div class="order-item-img"><img src="${it.image}" alt="${it.name}" onerror="this.src='https://via.placeholder.com/60/1a1a2e/6366f1?text=IMG'"></div><div class="order-item-info"><h4>${it.name}</h4><div class="qty">${it.qty} x $${it.price.toLocaleString()}</div></div><div class="order-item-price">$${(it.price * it.qty).toLocaleString()}</div></div>`).join('')}
        </div>
        <div class="cart-totals">
          <div class="cart-total-row"><span>Subtotal</span><span>$${subtotal.toLocaleString()}</span></div>
          <div class="cart-total-row"><span>Yetkazish</span><span>${shipping === 0 ? 'BEPUL' : '$' + shipping}</span></div>
          <div class="cart-total-row"><span>Soliq</span><span>$${tax.toLocaleString()}</span></div>
          <div class="cart-total-row total"><span>Jami</span><span>$${total.toLocaleString()}</span></div>
        </div>
        <button class="btn-primary full" onclick="confirmOrder()" style="margin-top:16px"><i class="fas fa-check"></i> Buyurtmani tasdiqlash</button>
      </div>
    </div>`;
}
function selectPay(el) { document.querySelectorAll('.pay-method').forEach(p => p.classList.remove('active')); el.classList.add('active') }
function confirmOrder() {
    const name = document.getElementById('coName').value, addr = document.getElementById('coAddress').value;
    if (!name || !addr) { showToast('Iltimos, barcha maydonlarni to\'ldiring', 'error'); return }
    const subtotal = cart.reduce((s, x) => s + x.price * x.qty, 0), shipping = subtotal > 500 ? 0 : 29, tax = Math.round(subtotal * .12);
    const order = { id: 'TZ' + Math.floor(Math.random() * 900000 + 100000), date: new Date().toISOString(), items: [...cart], total: subtotal + shipping + tax, status: 'processing', address: addr };
    orders.unshift(order);
    if (currentUser) { currentUser.orders = currentUser.orders || []; currentUser.orders.unshift(order); localStorage.setItem('tz_cur', JSON.stringify(currentUser)) }
    cart = [];
    updateCartUI();
    document.getElementById('checkoutPageContent').innerHTML = `<div class="checkout-success"><i class="fas fa-circle-check"></i><h2>Buyurtma muvaffaqiyatli qabul qilindi!</h2><p>Buyurtma raqami: #${order.id}<br>Tez orada siz bilan bog'lanamiz.</p><button class="btn-primary" onclick="showPage('home')" style="justify-content:center;margin:0 auto"><i class="fas fa-home"></i> Bosh sahifaga qaytish</button></div>`;
    showToast('Buyurtma tasdiqlandi!', 'success');
}

// ===== WISHLIST =====
function toggleWish(id) {
    const i = wishlist.indexOf(id);
    if (i > -1) {
        wishlist.splice(i, 1);
        showToast('Sevimlilardan olib tashlandi', 'info');
    } else {
        wishlist.push(id);
        showToast('Sevimlilarga qo\'shildi!', 'success');
    }
    document.getElementById('wishCount').textContent = wishlist.length;
    if (currentPage === 'products') renderProds();
    if (currentPage === 'home') renderHomeProds();
    if (currentPage === 'wishlist') renderWishlistPage();
}
function renderWishlistPage() {
    const c = document.getElementById('wishlistPageContent');
    const items = products.filter(p => wishlist.includes(p.id));
    if (!items.length) {
        c.innerHTML = `<h1>Sevimlilar</h1><div class="cart-empty-state"><i class="fas fa-heart"></i><h3>Sevimlilar bo'sh</h3><p>Mahsulotlarni sevimlilarga qo'shing</p><button class="btn-primary" onclick="showPage('products')"><i class="fas fa-bag-shopping"></i> Xarid qilish</button></div>`;
        return;
    }
    c.innerHTML = `<h1>Sevimlilar (${items.length} ta)</h1><div class="prod-grid">${items.map((p, i) => prodCardHTML(p, i)).join('')}</div>`;
}

// ===== ORDERS =====
function renderOrders() {
    const c = document.getElementById('ordersPageContent');
    const userOrders = currentUser?.orders || orders;
    if (!userOrders.length) {
        c.innerHTML = `<h1>Buyurtmalarim</h1><div class="orders-empty-state"><i class="fas fa-box"></i><h3>Buyurtmalar yo'q</h3><p>Buyurtma berishni boshlang</p><button class="btn-primary" onclick="showPage('products')"><i class="fas fa-bag-shopping"></i> Xarid qilish</button></div>`;
        return;
    }
    c.innerHTML = `<h1>Buyurtmalarim (${userOrders.length} ta)</h1>${userOrders.map(o => {
        const statusClass = o.status === 'delivered' ? 'status-delivered' : o.status === 'shipping' ? 'status-shipping' : 'status-processing';
        const statusText = o.status === 'delivered' ? 'Yetkazildi' : o.status === 'shipping' ? 'Yo\'lda' : 'Jarayonda';
        return `<div class="order-card">
      <div class="order-header">
        <div><div class="order-id">Buyurtma #${o.id}</div><div class="order-date">${new Date(o.date).toLocaleDateString('uz-UZ')}</div></div>
        <span class="order-status ${statusClass}">${statusText}</span>
      </div>
      <div class="order-products">${o.items.slice(0, 4).map(it => `<div class="order-prod-thumb"><img src="${it.image}" alt="${it.name}" onerror="this.src='https://via.placeholder.com/70/1a1a2e/6366f1?text=IMG'"></div>`).join('')}${o.items.length > 4 ? `<div class="order-prod-thumb" style="display:flex;align-items:center;justify-content:center;background:var(--bg-3);font-weight:700;color:var(--text-3)">+${o.items.length - 4}</div>` : ''}</div>
      <div class="order-footer">
        <span style="color:var(--text-3);font-size:14px">${o.items.length} ta mahsulot</span>
        <span class="order-total">$${o.total.toLocaleString()}</span>
      </div>
    </div>`;
    }).join('')}`;
}

// ===== PROFILE =====
function renderProfile() {
    if (!currentUser) return;
    const c = document.getElementById('profilePageContent');
    const totalOrders = (currentUser.orders || orders).length;
    const totalSpent = (currentUser.orders || orders).reduce((s, o) => s + o.total, 0);
    c.innerHTML = `<h1>Mening Profilim</h1>
    <div class="profile-layout">
      <div class="profile-sidebar">
        <div class="profile-avatar-lg" onclick="document.getElementById('avatarInput').click()">
          <span>${currentUser.name.charAt(0).toUpperCase()}</span>
        </div>
        <input type="file" id="avatarInput" accept="image/*" style="display:none" onchange="uploadAvatar(event)">
        <div class="profile-name">${currentUser.name}</div>
        <div class="profile-email">${currentUser.email}</div>
        <div class="profile-stats">
          <div class="profile-stat"><span class="num">${totalOrders}</span><span class="lbl">Buyurtmalar</span></div>
          <div class="profile-stat"><span class="num">${wishlist.length}</span><span class="lbl">Sevimlilar</span></div>
          <div class="profile-stat"><span class="num">$${totalSpent.toLocaleString()}</span><span class="lbl">Sarflangan</span></div>
        </div>
        <div class="profile-menu">
          <button class="profile-menu-btn active" onclick="showProfileSection('info',this)"><i class="fas fa-user"></i> Ma'lumotlar</button>
          <button class="profile-menu-btn" onclick="showPage('orders')"><i class="fas fa-box"></i> Buyurtmalarim</button>
          <button class="profile-menu-btn" onclick="logout()" style="color:var(--danger)"><i class="fas fa-right-from-bracket"></i> Chiqish</button>
        </div>
      </div>
      <div class="profile-content">
        <div class="profile-section active" id="profile-info">
          <h2><i class="fas fa-user"></i> Shaxsiy ma'lumotlar</h2>
          <div class="profile-info-grid">
            <div class="profile-info-item"><label>Ism</label><div class="value">${currentUser.name}</div></div>
            <div class="profile-info-item"><label>Email</label><div class="value">${currentUser.email}</div></div>
            <div class="profile-info-item"><label>Telefon</label><div class="value">${currentUser.phone || 'Kiritilmagan'}</div></div>
            <div class="profile-info-item"><label>Ro'yxatdan o'tgan sana</label><div class="value">${new Date(currentUser.joinDate).toLocaleDateString('uz-UZ')}</div></div>
          </div>
          <button class="btn-primary" style="margin-top:20px" onclick="editProfile()"><i class="fas fa-pen"></i> Tahrirlash</button>
        </div>
      </div>
    </div>`;
}
function showProfileSection(section, btn) {
    document.querySelectorAll('.profile-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.profile-menu-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('profile-' + section).classList.add('active');
    if (btn) btn.classList.add('active');
}
function uploadAvatar(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (ev) {
        currentUser.avatar = ev.target.result;
        localStorage.setItem('tz_cur', JSON.stringify(currentUser));
        renderProfile();
        showToast('Avatar yangilandi!', 'success');
    };
    reader.readAsDataURL(file);
}
function editProfile() {
    const newName = prompt('Yangi ism:', currentUser.name);
    if (newName && newName.trim()) {
        currentUser.name = newName.trim();
        document.getElementById('userName').textContent = currentUser.name;
        document.getElementById('userMenuName').textContent = currentUser.name;
        document.getElementById('userAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
        document.getElementById('userMenuAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
        localStorage.setItem('tz_cur', JSON.stringify(currentUser));
        renderProfile();
        showToast('Profil yangilandi!', 'success');
    }
}

// ===== OFFERS =====
function renderOffers() {
    const os = [
        { t: "iPhone 16 Pro", d: "20% chegirma - faqat shu hafta!", i: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600" },
        { t: "MacBook M3", d: "Bepul AirPods sovg'a!", i: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600" },
        { t: "PlayStation 5", d: "2 ta o'yin bepul!", i: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600" }
    ];
    document.getElementById('offersGrid').innerHTML = os.map(o => `<div class="offer-card"><img src="${o.i}" alt="${o.t}" onerror="this.src='https://via.placeholder.com/400x200/6366f1/fff?text=${encodeURIComponent(o.t)}'"><div class="offer-ov"><h3>${o.t}</h3><p>${o.d}</p><button class="o-btn">Batafsil</button></div></div>`).join('');
}

// ===== SCROLL & STATS =====
function initScroll() {
    const h = document.getElementById('siteHeader'), s = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) h.classList.add('scrolled'); else h.classList.remove('scrolled');
        if (window.scrollY > 400) s.classList.add('show'); else s.classList.remove('show');
    });
}
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
function animStats() {
    document.querySelectorAll('.stat-value').forEach(el => {
        const t = parseInt(el.dataset.count), dur = 2000, st = performance.now();
        function up(ct) {
            const e = ct - st, p = Math.min(e / dur, 1), ez = 1 - Math.pow(1 - p, 3), v = Math.floor(ez * t);
            el.textContent = v.toLocaleString();
            if (p < 1) requestAnimationFrame(up);
            else el.textContent = t.toLocaleString();
        }
        requestAnimationFrame(up);
    });
}
function startCountdown() {
    let h = 23, m = 59, s = 59;
    setInterval(() => {
        s--;
        if (s < 0) { s = 59; m-- }
        if (m < 0) { m = 59; h-- }
        document.getElementById('cdHours').textContent = String(h).padStart(2, '0');
        document.getElementById('cdMins').textContent = String(m).padStart(2, '0');
        document.getElementById('cdSecs').textContent = String(s).padStart(2, '0');
    }, 1000);
}

// ===== USER MENU =====
function toggleUserMenu() { document.getElementById('userMenu').classList.toggle('show') }
document.addEventListener('click', e => { if (!e.target.closest('.user-wrap')) document.getElementById('userMenu').classList.remove('show') });

// ===== TOAST =====
function showToast(msg, type = 'info') {
    const c = document.getElementById('toastContainer'), t = document.createElement('div');
    t.className = 'toast ' + type;
    const ic = { success: 'fa-circle-check', error: 'fa-circle-xmark', info: 'fa-circle-info' };
    t.innerHTML = `<i class="fas ${ic[type]}"></i><span>${msg}</span>`;
    c.appendChild(t);
    setTimeout(() => t.remove(), 3000);
}

// ===== GAMES =====
function initGames() { switchGame('snake', document.querySelector('.game-tab')) }
function switchGame(game, btn) {
    document.querySelectorAll('.game-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.game-container').forEach(c => c.style.display = 'none');
    if (btn) btn.classList.add('active');
    else document.querySelector('.game-tab')?.classList.add('active');
    document.getElementById('game-' + game).style.display = 'block';
    if (sInterval) clearInterval(sInterval);
    if (game === 'snake') setTimeout(initSnake, 100);
    else if (game === 'memory') setTimeout(initMemory, 100);
    else if (game === 'quiz') setTimeout(initQuiz, 100);
    else if (game === 'ttt') setTimeout(initTTT, 100);
}

// SNAKE
let sCanvas, sCtx, snake, food, sDirection, sNextDir, sInterval, sScoreVal = 0, sLevel = 1, sHighScore = parseInt(localStorage.getItem('snakeHigh') || '0');
function initSnake() { sCanvas = document.getElementById('sCanvas'); sCtx = sCanvas.getContext('2d'); resetSnake(); drawSnake() }
function resetSnake() { snake = [{ x: 10, y: 10 }]; food = { x: Math.floor(Math.random() * 39) + 1, y: Math.floor(Math.random() * 19) + 1 }; sDirection = 'right'; sNextDir = 'right'; sScoreVal = 0; sLevel = 1; updateSnakeUI(); if (sInterval) clearInterval(sInterval) }
function startSnake() { if (sInterval) return; sInterval = setInterval(updateSnake, Math.max(50, 120 - sLevel * 10)) }
function updateSnake() {
    sDirection = sNextDir;
    const head = { ...snake[0] };
    switch (sDirection) { case 'up': head.y--; break; case 'down': head.y++; break; case 'left': head.x--; break; case 'right': head.x++; break }
    if (head.x < 0 || head.x > 40 || head.y < 0 || head.y > 20 || snake.some(s => s.x === head.x && s.y === head.y)) {
        clearInterval(sInterval); sInterval = null;
        if (sScoreVal > sHighScore) { sHighScore = sScoreVal; localStorage.setItem('snakeHigh', sHighScore) }
        showToast('O\'yin tugadi! Ball: ' + sScoreVal, 'error');
        updateSnakeUI();
        return;
    }
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        sScoreVal += 10 * sLevel;
        if (sScoreVal % 100 === 0) sLevel++;
        food = { x: Math.floor(Math.random() * 39) + 1, y: Math.floor(Math.random() * 19) + 1 };
        updateSnakeUI();
        clearInterval(sInterval);
        sInterval = setInterval(updateSnake, Math.max(50, 120 - sLevel * 10));
    } else { snake.pop() }
    drawSnake();
}
function drawSnake() {
    sCtx.fillStyle = '#1a472a';
    sCtx.fillRect(0, 0, 800, 400);
    sCtx.strokeStyle = 'rgba(255,255,255,.05)';
    sCtx.lineWidth = 1;
    for (let i = 0; i <= 40; i++) { sCtx.beginPath(); sCtx.moveTo(i * 20, 0); sCtx.lineTo(i * 20, 400); sCtx.stroke() }
    for (let i = 0; i <= 20; i++) { sCtx.beginPath(); sCtx.moveTo(0, i * 20); sCtx.lineTo(800, i * 20); sCtx.stroke() }
    sCtx.fillStyle = '#ef4444';
    sCtx.shadowColor = '#ef4444';
    sCtx.shadowBlur = 15;
    sCtx.beginPath();
    sCtx.arc(food.x * 20 + 10, food.y * 20 + 10, 8, 0, Math.PI * 2);
    sCtx.fill();
    sCtx.shadowBlur = 0;
    snake.forEach((seg, i) => {
        const grad = sCtx.createLinearGradient(seg.x * 20, seg.y * 20, seg.x * 20 + 20, seg.y * 20 + 20);
        grad.addColorStop(0, '#6366f1');
        grad.addColorStop(1, '#06b6d4');
        sCtx.fillStyle = grad;
        if (i === 0) { sCtx.shadowColor = '#6366f1'; sCtx.shadowBlur = 10 }
        sCtx.fillRect(seg.x * 20 + 1, seg.y * 20 + 1, 18, 18);
        sCtx.shadowBlur = 0;
    });
}
function updateSnakeUI() { document.getElementById('sScore').textContent = sScoreVal; document.getElementById('sHighScore').textContent = sHighScore; document.getElementById('sLevel').textContent = sLevel }
document.addEventListener('keydown', e => {
    if (document.getElementById('game-snake')?.style.display === 'none') return;
    switch (e.key) {
        case 'ArrowUp': case 'w': case 'W': if (sDirection !== 'down') sNextDir = 'up'; break;
        case 'ArrowDown': case 's': case 'S': if (sDirection !== 'up') sNextDir = 'down'; break;
        case 'ArrowLeft': case 'a': case 'A': if (sDirection !== 'right') sNextDir = 'left'; break;
        case 'ArrowRight': case 'd': case 'D': if (sDirection !== 'left') sNextDir = 'right'; break;
    }
});

// MEMORY
let memoryCards = [], memoryFlipped = [], memoryMatched = [], memoryMoves = 0, memoryTimer, memorySeconds = 0;
const memoryIcons = ['📱', '💻', '🎧', '⌚', '📺', '🎮', '🎯', '🔋'];
function initMemory() {
    const grid = document.getElementById('memoryGrid');
    grid.innerHTML = '';
    memoryCards = [...memoryIcons, ...memoryIcons].sort(() => Math.random() - .5);
    memoryFlipped = [];
    memoryMatched = [];
    memoryMoves = 0;
    memorySeconds = 0;
    clearInterval(memoryTimer);
    memoryTimer = setInterval(() => { memorySeconds++; document.getElementById('mTime').textContent = memorySeconds + 's' }, 1000);
    updateMemoryUI();
    memoryCards.forEach((icon, i) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.index = i;
        card.dataset.icon = icon;
        card.innerHTML = `<span>${icon}</span>`;
        card.onclick = () => flipMemoryCard(card);
        grid.appendChild(card);
    });
}
function flipMemoryCard(card) {
    if (card.classList.contains('flipped') || card.classList.contains('matched') || memoryFlipped.length >= 2) return;
    card.classList.add('flipped');
    memoryFlipped.push(card);
    if (memoryFlipped.length === 2) { memoryMoves++; updateMemoryUI(); checkMemoryMatch() }
}
function checkMemoryMatch() {
    const [c1, c2] = memoryFlipped;
    if (c1.dataset.icon === c2.dataset.icon) {
        setTimeout(() => {
            c1.classList.add('matched');
            c2.classList.add('matched');
            memoryMatched.push(c1, c2);
            memoryFlipped = [];
            updateMemoryUI();
            if (memoryMatched.length === 16) { clearInterval(memoryTimer); showToast(`Tabriklaymiz! ${memoryMoves} yurishda yakunladingiz!`, 'success') }
        }, 500);
    } else {
        setTimeout(() => { c1.classList.remove('flipped'); c2.classList.remove('flipped'); memoryFlipped = [] }, 1000);
    }
}
function updateMemoryUI() { document.getElementById('mMoves').textContent = memoryMoves; document.getElementById('mPairs').textContent = `${memoryMatched.length / 2}/8` }

// QUIZ
const quizQuestions = [
    { q: "iPhone 16 Pro Max qaysi chip bilan ishlaydi?", a: ["A18 Pro", "A17 Pro", "M3", "Snapdragon"], c: 0 },
    { q: "MacBook Pro 16 M3 Max narxi qancha?", a: ["$2499", "$3499", "$4499", "$1999"], c: 1 },
    { q: "AirPods Pro 2 qaysi port bilan keladi?", a: ["Lightning", "USB-C", "Micro USB", "Wireless"], c: 1 },
    { q: "Samsung Galaxy S24 Ultra kamerasi nechta MP?", a: ["108MP", "200MP", "50MP", "48MP"], c: 1 },
    { q: "DJI Mavic 3 Pro uchish vaqti qancha?", a: ["30 daqiqa", "46 daqiqa", "60 daqiqa", "40 daqiqa"], c: 1 },
    { q: "iPad Pro 13 M4 displeyi qanday?", a: ["LCD", "OLED", "Mini LED", "QD-OLED"], c: 1 },
    { q: "Sony WH-1000XM5 batareyasi qancha ishlaydi?", a: ["20 soat", "30 soat", "40 soat", "25 soat"], c: 1 },
    { q: "Steam Deck OLED xotirasi nechta?", a: ["256GB", "512GB", "1TB", "2TB"], c: 2 },
    { q: "LG C3 OLED qaysi protsessorga ega?", a: ["α8 Gen5", "α9 Gen6", "XR Processor", "Tensor G3"], c: 1 },
    { q: "PlayStation 5 Pro qachon chiqarilgan?", a: ["2023", "2024", "2025", "2022"], c: 1 }
];
let quizCurrent = 0, quizCorrect = 0, quizWrong = 0;
function initQuiz() { quizCurrent = 0; quizCorrect = 0; quizWrong = 0; showQuizQuestion(); updateQuizUI() }
function showQuizQuestion() {
    if (quizCurrent >= quizQuestions.length) { showQuizResult(); return }
    const q = quizQuestions[quizCurrent];
    document.getElementById('quizQuestion').textContent = `${quizCurrent + 1}. ${q.q}`;
    const opts = document.getElementById('quizOptions');
    opts.innerHTML = '';
    q.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt';
        btn.innerHTML = `<span>${String.fromCharCode(65 + i)})</span><span>${opt}</span>`;
        btn.onclick = () => answerQuiz(i);
        opts.appendChild(btn);
    });
}
function answerQuiz(ans) {
    const q = quizQuestions[quizCurrent];
    const opts = document.querySelectorAll('.quiz-opt');
    opts.forEach((o, i) => { o.classList.add(i === q.c ? 'correct' : i === ans && i !== q.c ? 'wrong' : ''); o.style.pointerEvents = 'none' });
    if (ans === q.c) quizCorrect++;
    else quizWrong++;
    updateQuizUI();
    setTimeout(() => { quizCurrent++; showQuizQuestion() }, 1500);
}
function showQuizResult() {
    const box = document.getElementById('quizBox');
    const percent = Math.round(quizCorrect / quizQuestions.length * 100);
    box.innerHTML = `<div class="quiz-result"><h3>${percent >= 80 ? '🏆 Ajoyib!' : percent >= 60 ? '👍 Yaxshi!' : ' Yana o\'rganing!'}</h3><p>${quizCorrect} ta to'g'ri, ${quizWrong} ta noto'g'ri<br>Natija: ${percent}%</p><button class="btn-primary" onclick="initQuiz()" style="justify-content:center;margin:0 auto"><i class="fas fa-rotate-right"></i> Qayta boshlash</button></div>`;
    if (percent >= 80) showToast('Tabriklaymiz! Siz texnika bo\'yicha ekspertsiz!', 'success');
}
function updateQuizUI() { document.getElementById('qCorrect').textContent = quizCorrect; document.getElementById('qWrong').textContent = quizWrong; document.getElementById('qNumber').textContent = `${Math.min(quizCurrent + 1, quizQuestions.length)}/${quizQuestions.length}` }

// TIC TAC TOE
let tttBoard, tttCurrentPlayer, tttGameOver, tttScores = { player: 0, ai: 0, draw: 0 };
function initTTT() { tttBoard = Array(9).fill(''); tttCurrentPlayer = 'X'; tttGameOver = false; document.getElementById('tttStatus').textContent = 'Sizning navbatingiz (X)'; renderTTT() }
function renderTTT() {
    const grid = document.getElementById('tttGrid');
    grid.innerHTML = '';
    tttBoard.forEach((cell, i) => {
        const div = document.createElement('div');
        div.className = 'ttt-cell' + (cell === 'X' ? ' x' : cell === 'O' ? ' o' : '');
        div.textContent = cell;
        div.onclick = () => tttMove(i);
        grid.appendChild(div);
    });
    document.getElementById('tttPlayer').textContent = tttScores.player;
    document.getElementById('tttAI').textContent = tttScores.ai;
    document.getElementById('tttDraw').textContent = tttScores.draw;
}
function tttMove(i) {
    if (tttBoard[i] || tttGameOver || tttCurrentPlayer !== 'X') return;
    tttBoard[i] = 'X';
    if (checkTTTWin('X')) { tttGameOver = true; tttScores.player++; showToast('Siz yutdingiz! 🎉', 'success'); document.getElementById('tttStatus').textContent = 'Siz yutdingiz! 🎉'; renderTTT(); return }
    if (tttBoard.every(c => c)) { tttGameOver = true; tttScores.draw++; document.getElementById('tttStatus').textContent = 'Durrang!'; renderTTT(); return }
    tttCurrentPlayer = 'O';
    document.getElementById('tttStatus').textContent = 'AI o\'ylamoqda...';
    renderTTT();
    setTimeout(tttAI, 500);
}
function tttAI() {
    if (tttGameOver) return;
    const best = tttBestMove();
    tttBoard[best] = 'O';
    if (checkTTTWin('O')) { tttGameOver = true; tttScores.ai++; showToast('AI yutdi! 😅', 'error'); document.getElementById('tttStatus').textContent = 'AI yutdi!'; renderTTT(); return }
    if (tttBoard.every(c => c)) { tttGameOver = true; tttScores.draw++; document.getElementById('tttStatus').textContent = 'Durrang!'; renderTTT(); return }
    tttCurrentPlayer = 'X';
    document.getElementById('tttStatus').textContent = 'Sizning navbatingiz (X)';
    renderTTT();
}
function tttBestMove() {
    let bestScore = -Infinity, bestMove = 0;
    for (let i = 0; i < 9; i++) {
        if (!tttBoard[i]) {
            tttBoard[i] = 'O';
            let score = minimax(tttBoard, 0, false);
            tttBoard[i] = '';
            if (score > bestScore) { bestScore = score; bestMove = i }
        }
    }
    return bestMove;
}
function minimax(board, depth, isMax) {
    if (checkTTTWin('O')) return 10 - depth;
    if (checkTTTWin('X')) return depth - 10;
    if (board.every(c => c)) return 0;
    if (isMax) {
        let best = -Infinity;
        for (let i = 0; i < 9; i++) { if (!board[i]) { board[i] = 'O'; best = Math.max(best, minimax(board, depth + 1, false)); board[i] = '' } }
        return best;
    } else {
        let best = Infinity;
        for (let i = 0; i < 9; i++) { if (!board[i]) { board[i] = 'X'; best = Math.min(best, minimax(board, depth + 1, true)); board[i] = '' } }
        return best;
    }
}
function checkTTTWin(p) {
    const w = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    return w.some(([a, b, c]) => tttBoard[a] === p && tttBoard[b] === p && tttBoard[c] === p);
}

// ===== AI ASSISTANT =====
function toggleAI() { document.getElementById('aiPanel').classList.toggle('show') }
function quickAI(text) { document.getElementById('aiInput').value = text; sendAI() }
function handleAIKey(e) { if (e.key === 'Enter') sendAI() }
function sendAI() {
    const input = document.getElementById('aiInput');
    const msg = input.value.trim();
    if (!msg) return;
    addAIMessage(msg, 'user');
    input.value = '';
    setTimeout(() => { addAIMessage(getAIResponse(msg), 'bot') }, 500 + Math.random() * 1000);
}
function addAIMessage(text, type) {
    const div = document.createElement('div');
    div.className = `ai-msg ${type}`;
    div.innerHTML = `<p>${text}</p>`;
    const container = document.getElementById('aiMessages');
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}
function getAIResponse(msg) {
    msg = msg.toLowerCase();
    if (msg.includes('iphone') || msg.includes('telefon')) return 'iPhone uchun maslahatim:<br>• iPhone 16 Pro Max - eng kuchli (A18 Pro, 48MP)<br>• iPhone 16 - optimal narx/sifat<br>• iPhone 15 - arzonroq variant<br>Budgetingiz qancha?';
    if (msg.includes('noutbuk') || msg.includes('laptop') || msg.includes('macbook')) return 'Noutbuk tanlashda:<br>• MacBook Pro M3 - professional ishlar uchun<br>• MacBook Air M3 - yengil, ofis ishlari<br>• ASUS ROG - gaming uchun<br>• Dell XPS - biznes uchun<br>Qaysi maqsadda kerak?';
    if (msg.includes('arzon') || msg.includes('uchun')) return 'Arzon variantlar:<br>📱 iPhone 15 - $799<br>💻 MacBook Air M2 - $999<br>🎧 AirPods 3 - $169<br>⌚ iPad 10 - $449<br>Bularning barchasi a\'lo sifat!';
    if (msg.includes('yetkazish') || msg.includes('delivery')) return '🚚 Yetkazib berish:<br>• 500,000 so\'mdan yuqori - BEPUL<br>• Toshkent ichida - 1-2 kun<br>• Viloyatlar - 3-5 kun';
    if (msg.includes('salom') || msg.includes('hi')) return 'Salom! 👋 Men TechZone AI yordamchisiman. Sizga qanday yordam bera olaman?';
    return 'Tushundim! Bu haqida batafsil ma\'lumot uchun:<br>• Mahsulotlar bo\'limiga qarang<br>• Telefon: +998 90 123 45 67<br>• Email: info@techzone.uz<br>Yoki boshqa savolingiz bormi?';
}

// ===== IMAGE FALLBACK =====
document.addEventListener('error', function (e) {
    if (e.target.tagName === 'IMG' && !e.target.src.includes('placeholder')) {
        e.target.src = `https://via.placeholder.com/400x300/1a1a2e/6366f1?text=${encodeURIComponent(e.target.alt || 'Product')}`;
    }
}, true);