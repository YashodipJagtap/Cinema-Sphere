import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Movie from "../components/Movie"; // Custom Movie component
import { api_base_url } from "../helper";

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  // Fetch movies from API
  const getMovies = () => {
    fetch(`${api_base_url}/getMovies`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setData(data.movies);
        } else {
          setError(data.msg);
        }
      })
      .catch(() => setError("Failed to fetch movies."));
  };

  useEffect(() => {
    getMovies();
  }, []);
  // Movie categories
  const trendingMovies = [{
    image: "https://pbs.twimg.com/media/FA5oWvWVgA86QKf?format=jpg&name=large",
    youtubeLink: "https://youtu.be/QaloT95dYRE?si=gCR8PO4L_h2cu1qG"
  },
    {
      image: "https://pbs.twimg.com/media/FA5oWv_VcAQ0CsW?format=jpg&name=large",
      youtubeLink: "https://youtu.be/974e5OVD1Jg?si=pvusbwJ7xo2jTFnu"
    },
    {
      image: "https://wallpapercave.com/wp/wp8807395.jpg",
      youtubeLink: "https://youtu.be/6kAy2KDDe9E?si=0XhGsTLLjgN7Y-bW"
    }, {
      image: "https://images.lifestyleasia.com/wp-content/uploads/2018/12/26131302/Yeh-Meri-Family1-1024x437.jpg",
      youtubeLink: "https://youtu.be/QaloT95dYRE?si=gCR8PO4L_h2cu1qG"
    },
    {
      image: "https://images.lifestyleasia.com/wp-content/uploads/2018/12/26133350/Lust-Stories.jpg?tr=w-1600",
      youtubeLink: "https://youtu.be/6kAy2KDDe9E?si=0XhGsTLLjgN7Y-bW"
    },
    {
      image: "https://images.lifestyleasia.com/wp-content/uploads/2018/12/26132401/Sacred-Games-1024x647.jpg",
      youtubeLink: "https://youtu.be/974e5OVD1Jg?si=pvusbwJ7xo2jTFnu"
    },
    {
      image: "https://images.lifestyleasia.com/wp-content/uploads/2018/12/26132138/Haq-Se-1024x577.jpg",
      youtubeLink: "https://youtu.be/6kAy2KDDe9E?si=0XhGsTLLjgN7Y-bW"
    },
    {
      image: "https://images.lifestyleasia.com/wp-content/uploads/2018/12/26130121/Little-Things-1024x576.jpg",
      youtubeLink: "https://youtu.be/974e5OVD1Jg?si=pvusbwJ7xo2jTFnu"
    },
    {
      image: "https://images.lifestyleasia.com/wp-content/uploads/2018/12/26130223/Breathe-1024x768.jpg",
      youtubeLink: "https://youtu.be/6kAy2KDDe9E?si=0XhGsTLLjgN7Y-bW"
    },
    {
      image: "https://images.lifestyleasia.com/wp-content/uploads/2018/12/26130609/Ghoul-1024x576.jpg",
      youtubeLink: "https://youtu.be/974e5OVD1Jg?si=pvusbwJ7xo2jTFnu"
    }]; // Use your movie arrays here
  const bollywoodMovies = [{
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
      image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-4z536637/portrait/063038cover.jpg",
      youtubeLink: "https://youtu.be/BxC1TTuFyxY?si=-B02ZqZqBtiSMjwU"
    }];
  const hollywoodMovies = [{
    image: "https://www.joblo.com/wp-content/uploads/2024/10/canary-black-poster-400x600.jpg",
    youtubeLink: "https://youtu.be/Vd6mlPshfss?si=2jTy1OunrI12LlzW"
  },
    {
      image: "https://m.media-amazon.com/images/M/MV5BNWIyNmU5MGYtZDZmNi00ZjAwLWJlYjgtZTc0ZGIxMDE4ZGYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      youtubeLink: "https://youtu.be/0vdxmoWrTYk?si=Ww_sCt-6Hgwy0v4Z"
    },
    {
      image: "https://www.joblo.com/wp-content/uploads/2024/09/wolf-man-poster-2-400x600.jpg",
      youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
    },
    {
      image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/gothika-3x4-1701351964712.jpg",
      youtubeLink: "https://youtu.be/QaloT95dYRE?si=gCR8PO4L_h2cu1qG"
    },
    {
      image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1730397379478.jpg",
      youtubeLink: "https://youtu.be/mHspBRYFpww?si=ZIxlWlyyfBVk0Ahd"
    },
    {
      image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/vikram_vedha_3x4-1713964159968.jpg",
      youtubeLink: "https://youtu.be/BxC1TTuFyxY?si=-B02ZqZqBtiSMjwU"
    },
    {
      image: "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/satyabhama-3x4-1727441427782.jpg",
      youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
    }];
  const tollywoodMovies = [{
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
  }];
  const webSeries = [{
    image: "https://qqcdnpictest.mxplay.com/pic/1b08eb07f765aea3af1468e2d67a021d/en/2x3/320x480/test_pic1727946740245.webp",
    youtubeLink: "https://youtu.be/Vd6mlPshfss?si=2jTy1OunrI12LlzW"
  },
  {
    image: "https://qqcdnpictest.mxplay.com/pic/671b5c2dee524748ca17cf3956ac301e/en/16x9/320x180/6e239949708d5a2e4a14c718c7517067_1920x1080.webp",
    youtubeLink: "https://youtu.be/0vdxmoWrTYk?si=Ww_sCt-6Hgwy0v4Z"
  },
  {
    image: "https://qqcdnpictest.mxplay.com/pic/a5807c1f4c8ee63a3e474d1164546239/en/2x3/320x480/test_pic1687789429072.webp",
    youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
  },
  {
    image: "https://qqcdnpictest.mxplay.com/pic/262cd11e686098046a14e58cc74c05e7/en/16x9/320x180/test_pic1727365732275.webp",
    youtubeLink: "https://youtu.be/QaloT95dYRE?si=gCR8PO4L_h2cu1qG"
  },
  {
    image: "https://qqcdnpictest.mxplay.com/pic/09eab5e4a94be86cbdf64d0b88638b94/en/16x9/320x180/test_pic1728805079620.webp",
    youtubeLink: "https://youtu.be/mHspBRYFpww?si=ZIxlWlyyfBVk0Ahd"
  },
  {
    image: "https://qqcdnpictest.mxplay.com/pic/0dcdb2dad744506671b7ca7ef024c9ec/en/2x3/320x480/4eaccffa92d4efeb52759847df9f3900_1280x1920_badged_1729141213537.webp",
    youtubeLink: "https://youtu.be/BxC1TTuFyxY?si=-B02ZqZqBtiSMjwU"
  },
  {
    image: "https://qqcdnpictest.mxplay.com/pic/f352d6df67f3d2fa47bf50849d5b5956/en/16x9/320x180/5946ab189cd00a2afe85a93412fdf236_1920x1080.webp",
    youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
  }];

  const comedyMovies = [{
    image: "https://qqcdnpictest.mxplay.com/pic/9cb04798d7143d1e22a7409677af4fec/en/2x3/320x480/ea1ecc5b5ddcaaba5396cb1a198627cd_1280x1920.webp",
    youtubeLink: "https://youtu.be/Vd6mlPshfss?si=2jTy1OunrI12LlzW"
  },
  {
    image: "https://qqcdnpictest.mxplay.com/pic/fff56b8f86fc76cd08aef4a01a8f516e/en/2x3/320x480/90315dc4b7f0df25cb33732f8364fb3a_1280x1920.webp",
    youtubeLink: "https://youtu.be/0vdxmoWrTYk?si=Ww_sCt-6Hgwy0v4Z"
  },
  {
    image: "https://qqcdnpictest.mxplay.com/pic/3a79c5be607d18696529abc88f9de9aa/en/2x3/320x480/test_pic1602753990574.webp",
    youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
  },
  {
    image: "https://qqcdnpictest.mxplay.com/pic/8095452c9f27aa14058a713da98e222f/en/2x3/320x480/test_pic1576232589579.webp",
    youtubeLink: "https://youtu.be/QaloT95dYRE?si=gCR8PO4L_h2cu1qG"
  },
  {
    image: "https://qqcdnpictest.mxplay.com/pic/7a0cad6d2aa94835ff2346ad2891ff58/en/2x3/320x480/test_pic1614066943195.webp",
    youtubeLink: "https://youtu.be/mHspBRYFpww?si=ZIxlWlyyfBVk0Ahd"
  },
  {
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-1586/portrait/1920x770281148014.jpg",
    youtubeLink: "https://youtu.be/BxC1TTuFyxY?si=-B02ZqZqBtiSMjwU"
  },
  {
    image: "https://qqcdnpictest.mxplay.com/pic/f352d6df67f3d2fa47bf50849d5b5956/en/16x9/320x180/5946ab189cd00a2afe85a93412fdf236_1920x1080.webp",
    youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
  }];
  const romanceMovies = [{
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-3015/portrait/063015cover947b2796460044c3b9bbe9ad4023826c.jpg"
  },
  {
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-3172/portrait/1920x7701748311272.jpg",
    youtubeLink: "https://youtu.be/0vdxmoWrTYk?si=Ww_sCt-6Hgwy0v4Z"
  },
  {
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-3189/portrait/063189cover0554e528afb04d8d945018389477ba56.jpg",
    youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
  },
  {
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-3190/portrait/063190cover6011424076011424714b2ccf512d417192ae4cb87a0f1876.jpg",
    youtubeLink: "https://youtu.be/QaloT95dYRE?si=gCR8PO4L_h2cu1qG"
  },
  {
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-2876/portrait/062876cover.jpg",
    youtubeLink: "https://youtu.be/mHspBRYFpww?si=ZIxlWlyyfBVk0Ahd"
  },
  {
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-3299/portrait/063299cover.jpg",
    youtubeLink: "https://youtu.be/BxC1TTuFyxY?si=-B02ZqZqBtiSMjwU"
  },
  {
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-4z5192239/portrait/1920x77033c6cc61bc1e47929f41bd8260e85116.jpg",
    youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
  }];
  const documentaries = [{
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-4z5192239/portrait/1920x77033c6cc61bc1e47929f41bd8260e85116.jpg",
    youtubeLink: "https://youtu.be/6kAy2KDDe9E?si=0XhGsTLLjgN7Y-bW"
  },
  {
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-4z5185904/portrait/1920x770e75b13d185584284a9f294a290d05604.jpg",
    youtubeLink: "https://youtu.be/IbwjDTOvwG8?si=j5_14MV5Jqtcl6t5"
  },
  {
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-2589/portrait/1920x7701134924736.jpg",
    youtubeLink: "https://youtu.be/974e5OVD1Jg?si=pvusbwJ7xo2jTFnu"
  },
  {
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-tvshow_1034754939/portrait/1920x770670409537.jpg",
    youtubeLink: "https://youtu.be/vs7aqXYRdDM?si=cwVF7jaXtWBR9kGJ"
  },
  {
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-1590/portrait/1920x7701450800166.jpg",
    youtubeLink: "https://youtu.be/mHspBRYFpww?si=ZIxlWlyyfBVk0Ahd"
  },
  {
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-2129/portrait/1920x770305762060.jpg",
    youtubeLink: "https://youtu.be/BxC1TTuFyxY?si=-B02ZqZqBtiSMjwU"
  },
  {
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-2376/portrait/1920x770444984466.jpg",
    youtubeLink: "https://youtu.be/VaVFF83WJgQ?si=B7fWRtEkrs8KbM6C"
  },
  {
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-2161/portrait/062161cover7870a2bfc7ab4a02a13b53c88574f120.jpg",
    youtubeLink: "https://youtu.be/mHspBRYFpww?si=ZIxlWlyyfBVk0Ahd"
  },
  {
    image: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-2022/portrait/1920x770a8222510fa88413eb2a30bfde558c0c3bd6971b4963645518afd56e696961cfb.jpg",
    youtubeLink: "https://youtu.be/BxC1TTuFyxY?si=-B02ZqZqBtiSMjwU"
  }];


  return (
    <>
      <Navbar />
      <div className="px-[100px] mt-3">
        {/* Trending Section */}
        <h3 className="text-2xl my-5">Trending</h3>
        <Swiper
          navigation={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {trendingMovies.map((movie, index) => (
            <SwiperSlide key={index}>
              <img
                src={movie.image}
                alt={`Slide ${index + 1}`}
                onClick={() => window.open(movie.youtubeLink, "_blank")}
                className="cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bollywood Section */}
        <h3 className="text-2xl my-5">Bollywood</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {bollywoodMovies.map((movie, index) => (
            <SwiperSlide key={index}>
              <Movie image={movie.image} youtubeLink={movie.youtubeLink} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hollywood Section */}
        <h3 className="text-2xl my-5">Hollywood</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {hollywoodMovies.map((movie, index) => (
            <SwiperSlide key={index}>
              <Movie image={movie.image} youtubeLink={movie.youtubeLink} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tollywood Section */}
        <h3 className="text-2xl my-5">Tollywood</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {tollywoodMovies.map((movie, index) => (
            <SwiperSlide key={index}>
              <Movie image={movie.image} youtubeLink={movie.youtubeLink} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Web Series Section */}
        <h3 className="text-2xl my-5">Web Series</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {webSeries.map((movie, index) => (
            <SwiperSlide key={index}>
              <Movie image={movie.image} youtubeLink={movie.youtubeLink} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Comedy Section */}
        <h3 className="text-2xl my-5">Comedy</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {comedyMovies.map((movie, index) => (
            <SwiperSlide key={index}>
              <Movie image={movie.image} youtubeLink={movie.youtubeLink} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Romance Section */}
        <h3 className="text-2xl my-5">Romance</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {romanceMovies.map((movie, index) => (
            <SwiperSlide key={index}>
              <Movie image={movie.image} youtubeLink={movie.youtubeLink} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Documentaries Section */}
        <h3 className="text-2xl my-5">Hindi Dubbed</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {documentaries.map((movie, index) => (
            <SwiperSlide key={index}>
              <Movie image={movie.image} youtubeLink={movie.youtubeLink} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </>
  );
};

export default Home;