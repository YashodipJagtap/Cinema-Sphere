import React, { useState } from 'react';
import Avatar from 'react-avatar'; // Ensure react-avatar is installed using `npm install react-avatar`
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const SingleMovie = () => {
  const [comment, setComment] = useState('');
  const [data, setData] = useState({
    comments: [
      { username: 'Yashodip Jagtap', comment: 'Amazing movie! Loved the suspense.' },
      { username: 'Harshal Chavan', comment: 'Classic comedy with a horror twist. A must-watch!' },
      { username: 'Rakesh Kummari', comment: 'Watched it multiple times, and it never gets old.' },
      { username: 'Banesh Durgam', comment: 'The acting was top-notch. Brilliant!' },
    ],
  });

  const addComment = () => {
    if (comment.trim()) {
      setData((prevData) => ({
        ...prevData,
        comments: [...prevData.comments, { username: 'User', comment }],
      }));
      setComment('');
    }
  };

  return (<>
    <Navbar />
    <div className="bg-black min-h-screen text-white">
      {/* Video Section */}
      <div className="container mx-auto px-4 md:px-8 pt-6">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/jzYxbnHHhY4?si=3yvSs6Qv7isr2Jxs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg mb-6"
        ></iframe>
        <h1 className="text-4xl font-bold">Bhool Bhulaiyaa</h1>
        <p className="text-gray-400 text-lg mt-2">
          Bhool Bhulaiyaa is a 2007 Indian Hindi-language comedy horror film directed by Priyadarshan.
        </p>
      </div>

      {/* Comments Section */}
      <div className="container mx-auto px-4 md:px-8 pt-6">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Write your comment here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' && addComment()}
            className="w-full bg-[#1a1a1a] text-white p-3 rounded-md border border-gray-600 placeholder-gray-500 focus:outline-none"
          />
          <button
            onClick={addComment}
            className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        </div>
        {/* Display Comments */}
        <div className="space-y-4">
          {data.comments.map((c, index) => (
            <div
              key={index}
              className="flex items-start bg-[#242424] p-4 rounded-lg"
            >
              <Avatar
                name={c.username}
                size="40"
                round
                className="mr-4"
                color="#1E90FF"
              />
              <div>
                <p className="text-gray-300 text-sm">@{c.username}</p>
                <p className="text-white">{c.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default SingleMovie;
