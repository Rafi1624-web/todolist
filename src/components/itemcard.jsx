export default function ImageCard({ imageUrl, title, link }) {
    return (
        <div className="w-full max-w-md">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="rounded-3xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-72 object-cover"
                    />
                </div>
            </a>
            <h2 className="mt-4 text-center text-2xl font-bold text-gray-800">
                {title}
            </h2>
        </div>
    );
}
