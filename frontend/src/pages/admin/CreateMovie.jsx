import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api_base_url } from '../../helper';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const CreateMovie = () => {
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [video, setVideo] = useState('');
  const [alertMessage, setAlertMessage] = useState(null); // State to handle alert messages

  const getImage = (e) => {
    const file = e.target.files[0];
    const tempURL = URL.createObjectURL(file);
    setImageFile(file);
    document.getElementById('realImg').src = tempURL;
    document.querySelector('.uploadImg > h2').style.display = 'none';
  };

  const createMovie = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('desc', desc);
    formData.append('video', video);
    formData.append('movieImg', imageFile);

    fetch(`${api_base_url}/uploadMovie`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Set the alert message on successful movie addition
          setAlertMessage("Movie added successfully!");
        } else {
          alert('Failed to add movie');
        }
      })
      .catch((error) => console.error('Error:', error));
  };
  // Handler function for the button click
  const handleClick = () => {
    // Display an alert
    alert("Movie added successfully!");

    // Refresh the page
    window.location.reload();
  };
  return (
    <>
      <Navbar/>
      <div className="nav flex items-center justify-between h-[90px] bg-[#18181B] px-[50px]">
        <span className="text-white text-2xl"> </span> {/* Displaying "Let's Build" */}
      </div>
      <div className="flex">
        <div className="sideBar w-[20vw] bg-[#18181B] p-[10px]" style={{ height: 'calc(100vh - 90px)' }}>
          <div className="w-full flex items-center justify-center">
            <Link to="/createMovie"> </Link>
          </div>
        </div>
        <form onSubmit={createMovie} className="p-[15px]">
          <h3 className="text-2xl">Add a new movie</h3>
          <div className="inputBox w-[40vw] mt-3">
            <input required onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Movie name" />
          </div>
          <div className="inputBox w-[40vw] mt-3">
            <input required onChange={(e) => setVideo(e.target.value)} value={video} type="text" placeholder="YouTube Video URL" />
          </div>
          <div className="inputBox w-[40vw] mt-3">
            <textarea required onChange={(e) => setDesc(e.target.value)} value={desc} placeholder="Movie Description"></textarea>
          </div>
          <input type="file" id="file" onChange={getImage} hidden />
          <div
            onClick={() => document.getElementById('file').click()}
            className="uploadImg overflow-hidden bg-[#27272A] mt-3 flex items-center justify-center w-[200px] h-[300px] rounded-lg cursor-pointer"
          >
            <img id="realImg" alt="" />
            <h2>Image</h2>
          </div>
          <button className="btnBlue mt-4 mb-5 w-[140px]"  onClick={handleClick}
            >Add Movie</button>
        </form>
      </div>

      {/* Display the success message alert when a movie is added successfully */}
      {alertMessage && (
        <div className="alert bg-green-500 text-white p-4 fixed top-0 left-0 w-full text-center">
          {alertMessage}
        </div>
      )}
    <Footer/>
    </>
  );
};

export default CreateMovie;
