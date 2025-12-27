import React from 'react';
import { Camera, MessageSquare, Image as ImageIcon, User } from 'lucide-react';

const BenArtProfile = () => {
  // Données de démonstration (Simuler ce qui viendra de la base de données plus tard)
  const artist = {
    name: "Benjamin K.",
    bio: "Artiste multidisciplinaire passionné par l'art numérique et la peinture abstraite. Je cherche à explorer la fusion entre le code et le pinceau.",
    avatar: "/api/placeholder/150/150",
    stats: { posts: 24, followers: 1200, following: 450 }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans">
      {/* Barre de navigation simplifiée */}
      <nav className="border-b bg-white px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold tracking-tighter">BEN'ART</h1>
        <div className="flex gap-6">
          <ImageIcon className="w-6 h-6 cursor-pointer hover:text-blue-600" />
          <MessageSquare className="w-6 h-6 cursor-pointer hover:text-blue-600" />
          <User className="w-6 h-6 cursor-pointer hover:text-blue-600" />
        </div>
      </nav>

      {/* En-tête du Profil */}
      <main className="max-w-4xl mx-auto pt-10 px-4">
        <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
          {/* Photo de Profil */}
          <div className="relative group">
            <img 
              src={artist.avatar} 
              alt="Profil" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <button className="absolute bottom-2 right-2 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={16} />
            </button>
          </div>

          {/* Bio et Infos */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <h2 className="text-3xl font-extrabold">{artist.name}</h2>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Éditer le profil
              </button>
            </div>
            
            <div className="flex justify-center md:justify-start gap-8 mb-4 text-sm font-semibold">
              <span><strong>{artist.stats.posts}</strong> publications</span>
              <span><strong>{artist.stats.followers}</strong> abonnés</span>
              <span><strong>{artist.stats.following}</strong> abonnements</span>
            </div>

            <p className="text-slate-600 leading-relaxed max-w-xl">
              {artist.bio}
            </p>
          </div>
        </section>

        {/* Onglets de contenu */}
        <div className="border-t pt-4">
          <div className="flex justify-center gap-12 text-xs uppercase tracking-widest font-bold text-slate-400">
            <span className="border-t-2 border-black pt-2 text-black cursor-pointer">Publications</span>
            <span className="pt-2 hover:text-black cursor-pointer transition-colors">Vidéos</span>
            <span className="pt-2 hover:text-black cursor-pointer transition-colors">À propos</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BenArtProfile;