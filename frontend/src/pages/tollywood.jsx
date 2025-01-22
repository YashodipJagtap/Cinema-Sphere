import React from "react";
import "./tollywood.css"; // Import CSS for styling
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// tollywood Movie Data
const tollywoodMovies = [
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1726053283513.jpg",
        youtubeLink: "https://youtu.be/Vd6mlPshfss?si=2jTy1OunrI12LlzW"
    },
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/rajkumar-16x9-1713976270183.jpg",
        youtubeLink: "https://youtu.be/0vdxmoWrTYk?si=Ww_sCt-6Hgwy0v4Z"
    },
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/bloody_daddy_3x4-1689152042847.jpg",
        youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
    },
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/vikram_vedha_3x4-1713964159968.jpg",
        youtubeLink: "https://youtu.be/QaloT95dYRE?si=gCR8PO4L_h2cu1qG"
    },
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1703659806635.jpg",
        youtubeLink: "https://youtu.be/mHspBRYFpww?si=ZIxlWlyyfBVk0Ahd"
    },
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/oppenheimer-3x4-1712046716651.jpg",
        youtubeLink: "https://youtu.be/BxC1TTuFyxY?si=-B02ZqZqBtiSMjwU"
    },
    {
        image: "https://qqcdnpictest.mxplay.com/pic/79d0d516406e89a157315244f0303d19/en/2x3/320x480/test_pic1728295115108.webp",
        youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
    },
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1726921755606.jpg",
        youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
    },
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1726053283513.jpg",
        youtubeLink: "https://youtu.be/mHspBRYFpww?si=ZIxlWlyyfBVk0Ahd"
    },
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1723207514091.jpg",
        youtubeLink: "https://youtu.be/BxC1TTuFyxY?si=-B02ZqZqBtiSMjwU"
    },
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1717744940215.jpg",
        youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
    },
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1724519516926.jpg",
        youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
    },
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1728636280403.jpg",
        youtubeLink: "https://youtu.be/mHspBRYFpww?si=ZIxlWlyyfBVk0Ahd"
    },
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-lang-1730619851330.jpg",
        youtubeLink: "https://youtu.be/BxC1TTuFyxY?si=-B02ZqZqBtiSMjwU"
    },{
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/the-amazing-spider-man-hindi-3x4-1726483982609.jpg",
        youtubeLink: "https://youtu.be/6kAy2KDDe9E?si=0XhGsTLLjgN7Y-bW"
    }, {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/the-amazing-spider-man-hindi-3x4-1726483982609.jpg",
        youtubeLink: "https://youtu.be/6kAy2KDDe9E?si=0XhGsTLLjgN7Y-bW"
    },
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/lathi-3x4-1724398632933.jpg",
        youtubeLink: "https://youtu.be/IbwjDTOvwG8?si=j5_14MV5Jqtcl6t5"
    },
    {
        image: "https://e1.pxfuel.com/desktop-wallpaper/998/938/desktop-wallpaper-brahmastra-bollywood-2022-movie-poster.jpg",
        youtubeLink: "https://youtu.be/974e5OVD1Jg?si=pvusbwJ7xo2jTFnu"
    },
    {
        image: "https://e1.pxfuel.com/desktop-wallpaper/322/698/desktop-wallpaper-upcoming-hindi-film-movie-posters-bollywood-2022-movie.jpg",
        youtubeLink: "https://youtu.be/vs7aqXYRdDM?si=cwVF7jaXtWBR9kGJ"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-4z5250959/portrait/1920x770dfb8519064cb4824a1a6b5129adc147d.jpg",
        youtubeLink: "https://youtu.be/mHspBRYFpww?si=ZIxlWlyyfBVk0Ahd"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-4z5649768/portrait/1920x770d54ead2f772049a6a4b5eebf4900c2b1519ccee1cafe43e98b4389c567efc809.jpg",
        youtubeLink: "https://youtu.be/BxC1TTuFyxY?si=-B02ZqZqBtiSMjwU"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-4z5130773/portrait/1920x7700bd693dd7a954518bc374ae89c86ddf2.jpg",
        youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-4z5105341/portrait/1920x7702e7ad0c124754c028495b14a43ce3646.jpg",
        youtubeLink: "https://youtu.be/mHspBRYFpww?si=ZIxlWlyyfBVk0Ahd"
    },
   
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1730397379478.jpg",
        youtubeLink: "https://youtu.be/IbwjDTOvwG8?si=j5_14MV5Jqtcl6t5"
    },
    {
        image: "https://e1.pxfuel.com/desktop-wallpaper/998/938/desktop-wallpaper-brahmastra-bollywood-2022-movie-poster.jpg",
        youtubeLink: "https://youtu.be/974e5OVD1Jg?si=pvusbwJ7xo2jTFnu"
    },
    {
        image: "https://e1.pxfuel.com/desktop-wallpaper/322/698/desktop-wallpaper-upcoming-hindi-film-movie-posters-bollywood-2022-movie.jpg",
        youtubeLink: "https://youtu.be/vs7aqXYRdDM?si=cwVF7jaXtWBR9kGJ"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-4z5250959/portrait/1920x770dfb8519064cb4824a1a6b5129adc147d.jpg",
        youtubeLink: "https://youtu.be/mHspBRYFpww?si=ZIxlWlyyfBVk0Ahd"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-4z5649768/portrait/1920x770d54ead2f772049a6a4b5eebf4900c2b1519ccee1cafe43e98b4389c567efc809.jpg",
        youtubeLink: "https://youtu.be/BxC1TTuFyxY?si=-B02ZqZqBtiSMjwU"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-4z5130773/portrait/1920x7700bd693dd7a954518bc374ae89c86ddf2.jpg",
        youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
    },
    {
        image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-4z5105341/portrait/1920x7702e7ad0c124754c028495b14a43ce3646.jpg",
        youtubeLink: "https://youtu.be/mHspBRYFpww?si=ZIxlWlyyfBVk0Ahd"
    }, 
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1731575457070.jpg",
        youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
    },
    {
        image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-lang-1730812815090.jpg",
        youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
    }
];

const tollywood = () => {
    return (<>
        <Navbar />
        <div className="tollywood-container">
            {tollywoodMovies.map((movie, index) => (
                <div
                    key={index}
                    className="movie-card"
                    onClick={() => window.open(movie.youtubeLink, "_blank")}
                >
                    <img src={movie.image} alt={`Movie ${index + 1}`} />
                </div>
            ))}
        </div>
        <Footer />
    </>
        
    );
};

export default tollywood;
