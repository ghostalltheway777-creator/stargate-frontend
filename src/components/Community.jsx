import React, { useState, useEffect, useCallback } from 'react'
import { useUser } from '../UserContext'
import './Community.css'

const TOPIC_GROUPS = [
  {
    label: 'Generelt',
    topics: [
      { id: 'Alle',           icon: '✦', desc: 'Alle indlæg' },
      { id: 'Fælles Sandhed', icon: '⬡', desc: 'Den røde tråd der forbinder alle traditioner' },
      { id: 'Generelt',       icon: '◎', desc: 'Alt andet' },
    ]
  },
  {
    label: 'Traditioner',
    topics: [
      { id: 'Kristendom',          icon: '✝', desc: '' },
      { id: 'Islam',               icon: '☽', desc: '' },
      { id: 'Jødedom & Kabbalah',  icon: '✡', desc: '' },
      { id: 'Hinduisme',           icon: '🕉', desc: '' },
      { id: 'Buddhisme',           icon: '☸', desc: '' },
      { id: 'Nordisk & Shamanisme',icon: 'Ω', desc: '' },
      { id: 'Oldtid & Rødder',     icon: '☥', desc: 'Sumerisk, Egyptisk, Anunnaki' },
      { id: 'Frimureri & Esoterisk',icon: '🔺', desc: '' },
    ]
  },
  {
    label: 'Emner',
    topics: [
      { id: 'Numerologi & Astrologi', icon: '∞', desc: '' },
      { id: 'Kvantum & Videnskab',    icon: '⚛', desc: '' },
      { id: '3D→5D Bevidsthed',       icon: '◈', desc: '' },
      { id: 'Drømme & Ritualer',      icon: '☽', desc: '' },
      { id: 'Tarot & Chakra',         icon: '🌀', desc: '' },
      { id: 'Fødselskort & Livssti',  icon: '♈', desc: '' },
      { id: 'Maya & Galaktisk',       icon: '🌎', desc: '' },
    ]
  },
]

const TOPICS = ['Alle', ...TOPIC_GROUPS.slice(1).flatMap(g => g.topics.map(t => t.id)), 'Fælles Sandhed', 'Generelt']

function timeAgo(iso) {
  const diff = (Date.now() - new Date(iso)) / 1000
  if (diff < 60) return 'netop nu'
  if (diff < 3600) return `${Math.floor(diff/60)} min siden`
  if (diff < 86400) return `${Math.floor(diff/3600)} t siden`
  return `${Math.floor(diff/86400)} d siden`
}

function PostCard({ post, uuid, onLike, onOpen }) {
  const liked = post._liked
  return (
    <div className="comm-post" onClick={() => onOpen(post)}>
      <div className="comm-post-header">
        <span className="comm-avatar">{post.display_name[0].toUpperCase()}</span>
        <div className="comm-meta">
          <span className="comm-name">{post.display_name}</span>
          {post.topic && <span className="comm-topic">{post.topic}</span>}
        </div>
        <span className="comm-time">{timeAgo(post.created_at)}</span>
      </div>
      <p className="comm-content">{post.content}</p>
      <div className="comm-actions" onClick={e => e.stopPropagation()}>
        <button className={`comm-like-btn ${liked ? 'liked' : ''}`}
          onClick={() => onLike(post.id)}>
          {liked ? '♥' : '♡'} {post.likes}
        </button>
        <span className="comm-comments-count">
          💬 {post.comment_count || 0}
        </span>
      </div>
    </div>
  )
}

function PostDetail({ post, uuid, onBack }) {
  const { profile } = useUser()
  const [comments, setComments] = useState([])
  const [text, setText] = useState('')
  const [sending, setSending] = useState(false)

  useEffect(() => {
    fetch(`/api/community/posts/${post.id}/comments`)
      .then(r => r.json())
      .then(d => setComments(d.comments || []))
      .catch(() => {})
  }, [post.id])

  async function sendComment() {
    if (!text.trim() || !profile.displayName) return
    setSending(true)
    try {
      await fetch(`/api/community/posts/${post.id}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uuid, display_name: profile.displayName, content: text }),
      })
      const d = await fetch(`/api/community/posts/${post.id}/comments`).then(r => r.json())
      setComments(d.comments || [])
      setText('')
    } catch {}
    setSending(false)
  }

  return (
    <div className="comm-detail">
      <button className="comm-back" onClick={onBack}>← Tilbage</button>
      <div className="comm-detail-post">
        <div className="comm-post-header">
          <span className="comm-avatar">{post.display_name[0].toUpperCase()}</span>
          <div className="comm-meta">
            <span className="comm-name">{post.display_name}</span>
            {post.topic && <span className="comm-topic">{post.topic}</span>}
          </div>
          <span className="comm-time">{timeAgo(post.created_at)}</span>
        </div>
        <p className="comm-content">{post.content}</p>
      </div>

      <div className="comm-comments-section">
        <h4 className="comm-comments-title">Kommentarer ({comments.length})</h4>
        {comments.map(c => (
          <div key={c.id} className="comm-comment">
            <span className="comm-avatar comm-avatar-sm">{c.display_name[0].toUpperCase()}</span>
            <div className="comm-comment-body">
              <span className="comm-name">{c.display_name}</span>
              <span className="comm-time">{timeAgo(c.created_at)}</span>
              <p className="comm-comment-text">{c.content}</p>
            </div>
          </div>
        ))}

        {profile.displayName ? (
          <div className="comm-reply">
            <textarea
              placeholder="Skriv en kommentar..."
              value={text}
              onChange={e => setText(e.target.value)}
              rows={2}
            />
            <button className="comm-send-btn" onClick={sendComment}
              disabled={sending || !text.trim()}>
              {sending ? '...' : 'Send'}
            </button>
          </div>
        ) : (
          <p className="comm-login-hint">Opret en profil for at kommentere →</p>
        )}
      </div>
    </div>
  )
}

export default function Community() {
  const { uuid, profile, isSetup } = useUser()
  const [posts, setPosts] = useState([])
  const [topic, setTopic] = useState('Alle')
  const [loading, setLoading] = useState(true)
  const [showNew, setShowNew] = useState(false)
  const [newContent, setNewContent] = useState('')
  const [newTopic, setNewTopic] = useState('')
  const [posting, setPosting] = useState(false)
  const [openPost, setOpenPost] = useState(null)
  const [likedPosts, setLikedPosts] = useState(() => {
    try { return JSON.parse(localStorage.getItem('sg_likes') || '{}') } catch { return {} }
  })

  const load = useCallback(() => {
    setLoading(true)
    fetch('/api/community/posts')
      .then(r => r.json())
      .then(d => {
        const raw = d.posts || []
        setPosts(raw.map(p => ({ ...p, _liked: !!likedPosts[p.id] })))
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [likedPosts])

  useEffect(() => { load() }, [])

  async function handleLike(postId) {
    try {
      const res = await fetch(`/api/community/posts/${postId}/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uuid }),
      })
      const d = await res.json()
      const newLiked = { ...likedPosts, [postId]: d.liked }
      setLikedPosts(newLiked)
      localStorage.setItem('sg_likes', JSON.stringify(newLiked))
      setPosts(ps => ps.map(p => p.id === postId
        ? { ...p, likes: d.likes, _liked: d.liked } : p))
    } catch {}
  }

  async function submitPost() {
    if (!newContent.trim() || !profile.displayName) return
    setPosting(true)
    try {
      await fetch('/api/community/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uuid, display_name: profile.displayName,
          topic: newTopic || null, content: newContent,
        }),
      })
      setNewContent(''); setNewTopic(''); setShowNew(false)
      load()
    } catch {}
    setPosting(false)
  }

  const filtered = topic === 'Alle'
    ? posts
    : posts.filter(p => p.topic === topic)

  if (openPost) {
    return <PostDetail post={openPost} uuid={uuid} onBack={() => { setOpenPost(null); load() }} />
  }

  return (
    <div className="community-page">

      <div className="comm-header">
        <h2 className="comm-title">✦ Fællesskab</h2>
        <p className="comm-sub">Del indsigter, analyser og refleksioner med andre søgende</p>
      </div>

      {/* Topic filter — grupperet */}
      <div className="comm-topic-groups">
        {TOPIC_GROUPS.map(group => (
          <div key={group.label} className="comm-topic-group">
            <span className="comm-topic-group-label">{group.label}</span>
            <div className="comm-topics">
              {group.topics.map(t => (
                <button key={t.id}
                  className={`comm-topic-btn ${topic === t.id ? 'active' : ''}`}
                  onClick={() => setTopic(t.id)}
                  title={t.desc}>
                  <span className="ct-icon">{t.icon}</span>
                  <span>{t.id}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* New post */}
      {isSetup ? (
        <div className="comm-new-section">
          {!showNew ? (
            <button className="comm-new-btn" onClick={() => setShowNew(true)}>
              ✍ Del en tanke eller analyse...
            </button>
          ) : (
            <div className="comm-new-form card">
              <select className="comm-topic-select" value={newTopic}
                onChange={e => setNewTopic(e.target.value)}>
                <option value="">Vælg emne (valgfrit)</option>
                {TOPIC_GROUPS.map(group => (
                  <optgroup key={group.label} label={group.label}>
                    {group.topics.filter(t => t.id !== 'Alle').map(t =>
                      <option key={t.id} value={t.id}>{t.icon} {t.id}</option>
                    )}
                  </optgroup>
                ))}
              </select>
              <textarea
                className="comm-textarea"
                placeholder="Del din indsigt, en analyse, et spørgsmål..."
                value={newContent}
                onChange={e => setNewContent(e.target.value)}
                rows={4}
                autoFocus
              />
              <div className="comm-new-actions">
                <button className="comm-cancel-btn" onClick={() => setShowNew(false)}>Annuller</button>
                <button className="comm-post-btn" onClick={submitPost}
                  disabled={posting || !newContent.trim()}>
                  {posting ? 'Sender...' : 'Del →'}
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="comm-setup-hint">
          Opret en profil under "Mig" for at deltage i fællesskabet →
        </div>
      )}

      {/* Posts feed */}
      {loading ? (
        <div className="tt-loading"><div className="tt-loading-ring" /></div>
      ) : filtered.length === 0 ? (
        <div className="comm-empty">
          Ingen indlæg endnu — vær den første til at dele en tanke ✦
        </div>
      ) : (
        <div className="comm-feed">
          {filtered.map(p => (
            <PostCard key={p.id} post={p} uuid={uuid}
              onLike={handleLike} onOpen={setOpenPost} />
          ))}
        </div>
      )}
    </div>
  )
}
