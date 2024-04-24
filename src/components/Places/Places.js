import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assests/places/boat.jpg";
import Img2 from "../../assests/places/tajmahal.jpg";
import Img3 from "../../assests/places/water.jpg";
import Img4 from "../../assests/places/place4.jpg";
import Img5 from "../../assests/places/place5.jpg";
import Img6 from "../../assests/places/place6.jpg";


const PlacesData = [
    {
      img: Img1,
      title: "Boat",
      location: "USA",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 6700,
      type: "Cultural Relax",
    },
    {
      img: Img2,
      title: "Taj Mahal",
      location: "India",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 1700,
      type: "Cultural Relax",
    },
    {
      img: Img3,
      title: "Underwater",
      location: "Maldives",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 5200,
      type: "Cultural Relax",
    },
    {
      img: Img4,
      title: "Sydney",
      location: "USA",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 4700,
      type: "Cultural Relax",
    },
    {
      img: Img5,
      title: "Los Angeles",
      location: "United states",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 6300,
      type: "Cultural Relax",
    },
    {
      img: Img6,
      title: "Los Vegas",
      location: "California",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
      price: 2500,
      type: "Cultural Relax",
    },
  ];

const Places = ({handleOrderPopup}) => {
  return (
    <>
     <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className='container'>
            <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
                Best Places to visit
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    PlacesData.map((item,index) =>(
                        <PlaceCard
                        handleOrderPopup={handleOrderPopup} 
                        key={index} 
                        {...item} />
                    ))
                }
            </div>
        </section>
    </div>
    </>
  )
}

export default Places;
