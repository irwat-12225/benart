import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Share2 } from 'lucide-react';

const PostArt = ({ post }) => {
  // --- ÉTAT (STATE) DU COMPOSANT ---
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [comments, setComments] = useState([
    { id: 1, user: "ArtLover", text: "Les couleurs sont incroyables !" },
  ]);
  const [newComment, setNewComment] = useState("");

  // --- LOGIQUE DES ACTIONS ---
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;
    
    // Ajout du commentaire à la liste (en local pour l'instant)
    const commentObj = {
      id: Date.now(),
      user: "Moi", // Simulé
      text: newComment
    };
    
    setComments([...comments, commentObj]);
    setNewComment("");
  };

  return (
    <article className="max-w-xl mx-auto bg-white border border-gray-200 rounded-2xl overflow-hidden mb-10 shadow-sm">
      {/* Image de l'œuvre */}
      <div className="relative aspect-square bg-slate-100" onDoubleClick={handleLike}>
        <img src={post.content} alt="Oeuvre Ben'Art" className="w-full h-full object-cover" />
      </div>

      {/* Barre d'actions */}
      <div className="p-4">
        <div className="flex gap-4 mb-3">
          <button onClick={handleLike} className="transition-transform active:scale-125">
            <Heart 
              className={`w-7 h-7 ${isLiked ? "fill-red-500 text-red-500" : "text-slate-700"}`} 
            />
          </button>
          <MessageCircle className="w-7 h-7 text-slate-700 cursor-pointer" />
          <Share2 className="w-7 h-7 text-slate-700 cursor-pointer ml-auto" />
        </div>

        <div className="font-bold text-sm mb-2">{likesCount.toLocaleString()} mentions J'aime</div>
        
        {/* Liste des commentaires */}
        <div className="space-y-2 mb-4 max-h-32 overflow-y-auto pr-2">
          {comments.map((c) => (
            <p key={c.id} className="text-sm">
              <span className="font-bold mr-2">{c.user}</span>
              <span className="text-slate-600">{c.text}</span>
            </p>
          ))}
        </div>

        {/* Formulaire de commentaire "Pro" */}
        <form onSubmit={handleAddComment} className="flex items-center gap-2 border-t pt-3">
          <input 
            type="text" 
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Ajouter un commentaire constructif..." 
            className="flex-1 text-sm outline-none bg-transparent"
          />
          <button 
            type="submit" 
            disabled={!newComment.trim()}
            className="text-blue-600 font-bold text-sm disabled:opacity-30"
          >
            Publier
          </button>
        </form>
      </div>
    </article>
  );
};

export default PostArt;