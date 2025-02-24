/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'res.cloudinary.com', 'blum-two.vercel.app', 'blumclub.com.ar'],  
        unoptimized: true
    },
    compress: true,
};

export default nextConfig;
