import React from 'react'
//Carrusel
import SlideShow from 'react-image-show';


const Index = props => {
  const urlArray = [
    "https://i.pinimg.com/600x315/4f/a5/bd/4fa5bdd32a614a2ab59fe92cf65c0a2d.jpg",
    "http://www.vectorfree.com/media/vectors/star-wars-pack.jpg",
    "https://www.hipsthetic.com/wp-content/uploads/2016/04/Top-10-Free-Star-Wars-Vector-Icon-Sets-01.jpg",
    "http://pngimg.com/uploads/starwars/starwars_PNG7.png",
    "https://cdn.pixabay.com/photo/2012/04/18/18/59/star-wars-37577_960_720.png",
    "https://cdn.dribbble.com/users/1994296/screenshots/3968552/thelastvectordrb.png",
    "https://clipartion.com/wp-content/uploads/2015/10/star-wars-image-blog-clipart-free-clip-art-images.png"
  ]
  return (
    <section className="Homepage">
      <SlideShow
        images={urlArray}
        width="920px"
        imagesWidth="800px"
        imagesHeight="450px"
        imagesHeightMobile="56vw"
        thumbnailsWidth="920px"
        thumbnailsHeight="12vw"
        indicators thumbnails fixedImagesHeight
      />
    </section>
  )
}


Index.propTypes = {

}

export default Index
