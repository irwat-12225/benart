import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Play } from 'lucide-react';

const BenArtFeed = () => {
  // Simulation de données de publications
  const posts = [
    {
      id: 1,
      artist: "Léa Design",
      avatar: "/api/placeholder/40/40",
      type: "image",
      content: "/api/placeholder/600/400",
      caption: "Exploration sur les textures organiques ce matin. #DigitalArt #Texture",
      likes: 124,
      comments: 18
    },
    {
      id: 2,
      artist: "Marc Painter",
      avatar: "/api/placeholder/40/40",
      type: "video",
      content: "/api/placeholder/600/800", // Simulation d'une vidéo verticale
      caption: "Work in progress : ma prochaine toile à l'huile. 🎨",
      likes: 89,
      comments: 5
    }
  ];

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      {/* Zone de création rapide (Post Bar) */}
      <div className="bg-white border rounded-xl p-4 mb-8 shadow-sm flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
          <img src="/api/placeholder/40/40" alt="Moi" />
        </div>
        <input 
          type="text" 
          placeholder="Partagez une création ou une idée..." 
          className="flex-1 bg-gray-100 border-none rounded-full px-5 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Liste des publications */}
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white border rounded-2xl overflow-hidden shadow-sm">
            {/* Header du Post */}
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={post.avatar} alt={post.artist} className="w-10 h-10 rounded-full border" />
                <span className="font-bold text-sm">{post.artist}</span>
              </div>
              <MoreHorizontal className="text-slate-400 cursor-pointer" />
            </div>

            {/* Contenu du Post (Image ou Vidéo) */}
            <div className="relative bg-slate-100 min-h-[300px] flex items-center justify-center">
              <img src={post.content} alt="Post content" className="w-full h-auto object-cover" />
              {post.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="bg-white/90 p-4 rounded-full shadow-xl">
                    <Play fill="black" size={24} />
                  </div>
                </div>
              )}
            </div>

            {/* Interactions */}
            <div className="p-4">
              <div className="flex gap-4 mb-3">
                <Heart className="w-6 h-6 cursor-pointer hover:text-red-500 transition-colors" />
                <MessageCircle className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-colors" />
                <Share2 className="w-6 h-6 cursor-pointer hover:text-green-500 transition-colors" />
              </div>
              
              <div className="text-sm font-bold mb-1">{post.likes} mentions J'aime</div>
              <p className="text-sm text-slate-700">
                <span className="font-bold mr-2">{post.artist}</span>
                {post.caption}
              </p>
              <button className="text-slate-400 text-xs mt-2 font-medium">
                Voir les {post.comments} commentaires
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BenArtFeed;