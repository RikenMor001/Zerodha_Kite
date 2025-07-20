
"use client";
import { useState, useEffect } from "react";
import { Appbar } from "./components/appbar";
import { useUser } from "./components/UserContext";
import { useRef } from "react";
import axios from "axios";

const marketBlogs = [
  {
    id: 1,
    title: "How AI is Changing the World",
    content: "AI is transforming industries from healthcare to finance, automating tasks, and enabling new possibilities. Discover how AI is shaping the future and what it means for you.",
    author: { username: "Alice" },
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "10 Tips for Productive Remote Work",
    content: "Remote work is here to stay. Here are 10 tips to stay productive, focused, and maintain a healthy work-life balance while working from home.",
    author: { username: "Bob" },
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Mastering TypeScript in 2024",
    content: "TypeScript is a must-have skill for modern web developers. Learn the latest features and best practices to level up your coding.",
    author: { username: "Charlie" },
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: "The Rise of Quantum Computing",
    content: "Quantum computers are set to revolutionize technology. Explore what quantum computing is and why it matters.",
    author: { username: "Diana" },
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    title: "Building Scalable Web Apps",
    content: "Scalability is key for modern web applications. Here are strategies and tools to ensure your app can handle growth.",
    author: { username: "Ethan" },
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    title: "Design Thinking for Developers",
    content: "Design thinking isn't just for designers. Learn how developers can use it to build better products.",
    author: { username: "Fiona" },
    createdAt: new Date().toISOString(),
  },
];

export default function Home() {
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [marketBlogsState, setMarketBlogsState] = useState(marketBlogs);
  const modalRef = useRef<HTMLDivElement>(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    fetchMarketBlogs();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') setOrigin(window.location.origin);
  }, []);

  async function fetchMarketBlogs() {
    try {
      const res = await axios.get("/api/posts");
      setMarketBlogsState(res.data.concat(marketBlogs.filter(
        mb => !res.data.some((b: any) => b.title === mb.title && b.content === mb.content)
      )));
    } catch {
      setMarketBlogsState(marketBlogs);
    }
  }

  async function handlePost() {
    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();
    console.log('handlePost title:', trimmedTitle, 'content:', trimmedContent, 'user:', user);
    if (!user || !trimmedTitle || !trimmedContent) {
      setErrorMsg("Title and content required");
      return;
    }
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    try {
      const res = await axios.post("/api/posts", { title: trimmedTitle, content: trimmedContent, authorId: user.id });
      setSuccessMsg("Blog published successfully!");
      setTitle("");
      setContent("");
      setShowModal(true);
      fetchMarketBlogs();
    } catch (e) {
      setErrorMsg("Failed to publish blog. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleOpenModal() {
    setShowModal(true);
    // Do not clear title/content here
  }
  function handleCloseModal() {
    setShowModal(false);
    setTitle("");
    setContent("");
    setErrorMsg("");
    setSuccessMsg("");
  }

  // Helper: get top upvoted blogs (hardcoded upvotes for demo)
  const marketBlogsWithVotes = [
    ...marketBlogs.map((b, i) => ({ ...b, upvotes: [12, 8, 25, 5, 18, 10][i] || 0 }))
  ];
  const staffPicks = marketBlogsWithVotes
    .sort((a, b) => b.upvotes - a.upvotes)
    .slice(0, 2);

  return (
    <div className="bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#2d1b69] min-h-screen">
      <Appbar onOpenBlogModal={handleOpenModal} />
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
          <div ref={modalRef} className="bg-gradient-to-br from-[#232b32] to-[#1a1f2e] text-white rounded-3xl shadow-2xl p-8 w-full max-w-lg relative animate-fade-in border border-[#4a5568]">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl transition-colors">&times;</button>
            <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-[#fbbf24] to-[#f472b6] bg-clip-text text-transparent">Write a new blog post</h2>
            <p className="mb-6 text-slate-300 text-sm">Share your thoughts and publish your own blog.</p>
            {successMsg && <div className="mb-4 text-green-400 text-center font-semibold bg-green-900/20 p-3 rounded-lg border border-green-500/30">{successMsg}</div>}
            {errorMsg && <div className="mb-4 text-red-400 text-center font-semibold bg-red-900/20 p-3 rounded-lg border border-red-500/30">{errorMsg}</div>}
            <input
              className="w-full mb-4 p-4 border-2 border-[#4a5568] rounded-xl text-md bg-[#1a1f2e] text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-[#fbbf24] shadow-lg transition-all"
              placeholder="Blog Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              disabled={loading}
            />
            <textarea
              className="w-full mb-4 p-4 border-2 border-[#4a5568] rounded-xl min-h-[120px] text-md bg-[#1a1f2e] text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:border-[#fbbf24] shadow-lg transition-all resize-none"
              placeholder="Write your blog content here..."
              value={content}
              onChange={e => setContent(e.target.value)}
              disabled={loading}
            />
            <button
              className="bg-gradient-to-r from-[#fbbf24] to-[#f472b6] text-white px-6 py-3 rounded-xl hover:from-[#f59e0b] hover:to-[#ec4899] focus:ring-2 focus:ring-[#fbbf24] font-bold w-full transition-all transform hover:scale-105 disabled:opacity-50 shadow-lg"
              onClick={handlePost}
              disabled={loading}
            >
              {loading ? "Publishing..." : "Publish Blog"}
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-center font-light text-white text-sm p-4 border-b border-[#4a5568] bg-gradient-to-r from-[#232b32] to-[#1a1f2e] shadow-lg">
        <span className="bg-gradient-to-r from-[#fbbf24] to-[#f472b6] bg-clip-text text-transparent font-semibold">
          ✨ Get unlimited access to the best of Medium for less than $1/week.
        </span>
      </div>
      <div className="grid grid-cols-[65%_35%] gap-8 mx-auto max-w-7xl mt-8 px-6">
        <div>
          {user && (
            <section className="mb-10 p-8 bg-gradient-to-br from-[#232b32] to-[#1a1f2e] rounded-3xl shadow-2xl border border-[#4a5568] flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-[#fbbf24] to-[#f472b6] bg-clip-text text-transparent">Share your thoughts with the world</h2>
              <p className="mb-6 text-slate-300 text-center">Write and publish your own blog post. Your story could inspire others!</p>
              <button
                onClick={handleOpenModal}
                className="bg-gradient-to-r from-[#fbbf24] to-[#f472b6] text-white px-8 py-3 rounded-xl hover:from-[#f59e0b] hover:to-[#ec4899] font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                Start Writing ✍️
              </button>
            </section>
          )}
          <section>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#fbbf24] to-[#f472b6] bg-clip-text text-transparent">Featured Stories</h2>
            <div className="grid gap-8">
              {marketBlogsState.length === 0 ? (
                <div className="text-slate-400 text-center p-8 bg-[#232b32] rounded-2xl border border-[#4a5568]">
                  <div className="text-4xl mb-4">📝</div>
                  <div className="text-lg">No stories yet. Be the first to share!</div>
                </div>
              ) : (
                marketBlogsState.map((post, idx) => (
                  <article className="bg-gradient-to-br from-[#232b32] to-[#1a1f2e] text-white rounded-2xl shadow-2xl p-8 border border-[#4a5568] hover:border-[#fbbf24] transition-all duration-300 transform hover:scale-[1.02]" key={post.id || idx}>
                    <h2 className="text-2xl font-bold mb-3 text-white hover:text-[#fbbf24] transition-colors cursor-pointer">{post.title}</h2>
                    <p className="text-lg text-slate-300 mb-4 leading-relaxed">{post.content}</p>
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#fbbf24] to-[#f472b6] rounded-full flex items-center justify-center text-white font-bold">
                          {(post.author?.username || "U")[0].toUpperCase()}
                        </div>
                        <span className="font-medium text-slate-200">{post.author?.username || "Unknown"}</span>
                      </div>
                      <span>•</span>
                      <span>{new Date(post.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  </article>
                ))
              )}
            </div>
          </section>
        </div>
        <aside className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#fbbf24] to-[#f472b6] bg-clip-text text-transparent">Staff Picks</h2>
            <div className="bg-gradient-to-br from-[#232b32] to-[#1a1f2e] text-white rounded-2xl shadow-2xl p-6 border border-[#4a5568]">
              {staffPicks.map((blog, idx) => (
                <div key={idx} className="mb-6 last:mb-0">
                  <div className="font-bold text-lg text-white mb-2 hover:text-[#fbbf24] transition-colors cursor-pointer">{blog.title}</div>
                  <div className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                    <span>By {blog.author.username}</span>
                    <span className="bg-gradient-to-r from-[#fbbf24] to-[#f472b6] text-white px-2 py-1 rounded-full text-xs font-bold">
                      {blog.upvotes} ⭐
                    </span>
                  </div>
                  <div className="text-slate-300 text-sm leading-relaxed">{blog.content}</div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#fbbf24] to-[#f472b6] bg-clip-text text-transparent">Recent Activity</h2>
            <div className="bg-gradient-to-br from-[#232b32] to-[#1a1f2e] text-white rounded-2xl shadow-2xl p-6 border border-[#4a5568]">
              {marketBlogsState.slice(0, 3).map((blog, idx) => (
                <div key={idx} className="border-b border-[#4a5568] last:border-b-0 pb-4 last:pb-0 mb-4 last:mb-0">
                  <div className="font-semibold text-white mb-1 hover:text-[#fbbf24] transition-colors cursor-pointer">{blog.title}</div>
                  <div className="text-sm text-slate-400">By {blog.author?.username || "Unknown"}</div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#fbbf24] to-[#f472b6] bg-clip-text text-transparent">Invite Friends</h2>
            <div className="bg-gradient-to-br from-[#232b32] to-[#1a1f2e] text-white rounded-2xl shadow-2xl p-6 border border-[#4a5568] flex flex-col items-center">
              <div className="text-4xl mb-4">🚀</div>
              <p className="text-slate-300 text-center mb-4">Share Medium with your friends and grow your writing community!</p>
              <div className="flex gap-2 w-full">
                <input
                  type="text"
                  value={origin}
                  readOnly
                  className="flex-1 px-4 py-3 rounded-l-xl border-2 border-[#4a5568] bg-[#1a1f2e] text-white text-sm"
                />
                <button
                  className="px-6 py-3 rounded-r-xl bg-gradient-to-r from-[#fbbf24] to-[#f472b6] text-white text-sm font-bold hover:from-[#f59e0b] hover:to-[#ec4899] transition-all transform hover:scale-105 shadow-lg"
                  onClick={() => {navigator.clipboard.writeText(origin);}}
                >
                  Copy Link
                </button>                                     
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
