import React from 'react'
import { useState } from 'react';
import './Results.css'
import a1_img1 from '../../assets/A1/1.jpeg'
import a1_img2 from '../../assets/A1/2.jpeg'
import a1_img3 from '../../assets/A1/3.jpeg'
import a1_img4 from '../../assets/A1/4.jpeg'
import a1_img5 from '../../assets/A1/5.jpeg'
import a1_img6 from '../../assets/A1/6.jpeg'
import a1_img8 from '../../assets/A1/8.jpeg'
import a1_img9 from '../../assets/A1/9.jpeg'
import a1_img10 from '../../assets/A1/10.jpeg'
import a1_img11 from '../../assets/A1/11.jpeg'
import a1_img12 from '../../assets/A1/12.jpeg'
import a1_img13 from '../../assets/A1/13.jpeg'
import a1_img14 from '../../assets/A1/14.jpeg'
import a1_img15 from '../../assets/A1/15.jpeg'
import a1_img16 from '../../assets/A1/16.jpeg'
import a1_img17 from '../../assets/A1/17.jpeg'
import a1_img18 from '../../assets/A1/18.jpeg'
import a1_img19 from '../../assets/A1/19.jpeg'
import a1_img20 from '../../assets/A1/20.jpeg'
import a1_img21 from '../../assets/A1/21.jpeg'
import a2_img1 from '../../assets/A2/1.jpeg'
import a2_img2 from '../../assets/A2/2.jpeg'
import a2_img3 from '../../assets/A2/3.jpeg'
import a2_img4 from '../../assets/A2/4.jpeg'
import a2_img5 from '../../assets/A2/5.jpeg'
import a2_img6 from '../../assets/A2/6.jpeg'
import a2_img7 from '../../assets/A2/7.jpeg'
import a2_img8 from '../../assets/A2/8.jpeg'
import a2_img9 from '../../assets/A2/9.jpeg'
import a2_img10 from '../../assets/A2/10.jpeg'
import a2_img11 from '../../assets/A2/11.jpeg'
import a2_img12 from '../../assets/A2/12.jpeg'
import a2_img13 from '../../assets/A2/13.jpeg'
import a2_img14 from '../../assets/A2/14.jpeg'
import a2_img15 from '../../assets/A2/15.jpeg'
import a2_img16 from '../../assets/A2/16.jpeg'
import a2_img17 from '../../assets/A2/17.jpeg'
import a2_img18 from '../../assets/A2/18.jpeg'
import a2_img19 from '../../assets/A2/19.jpeg'
import a2_img20 from '../../assets/A2/20.jpeg'
import a2_img21 from '../../assets/A2/21.jpeg'
import a2_img22 from '../../assets/A2/22.jpeg'
import a2_img23 from '../../assets/A2/23.jpeg'
import a2_img24 from '../../assets/A2/24.jpeg'
import a2_img25 from '../../assets/A2/25.jpeg'
import a2_img26 from '../../assets/A2/26.jpeg'
import a2_img27 from '../../assets/A2/27.jpeg'
import a2_img28 from '../../assets/A2/28.jpeg'
const Results = () => {
    
    const initialImages1 = [a1_img1, a1_img2, a1_img3, a1_img4];
    const [images1, setImages1] = useState(initialImages1);
    const [allImagesLoaded1, setAllImagesLoaded1] = useState(false);

    const a1load = () => {
        const additionalImages1 = [a1_img5, a1_img6, a1_img8, a1_img9, a1_img10, a1_img11, a1_img12, a1_img13, a1_img14, a1_img15, a1_img16, a1_img17, a1_img18, a1_img19, a1_img20, a1_img21];
        if (images1.length + additionalImages1.length <= initialImages1.length + additionalImages1.length) {
            setImages1(prevImages1 => [...prevImages1, ...additionalImages1]);
        }
        setAllImagesLoaded1(true);
    };
    const initialImages2 = [a2_img1,a2_img2,a2_img3,a1_img4];
    const [images2, setImages2] = useState(initialImages2);
    const [allImagesLoaded2, setAllImagesLoaded2] = useState(false);

    const a2load= () => {
        const additionalImages2 = [a2_img5,a2_img6,a2_img7,a2_img8,a2_img9,a2_img10,a2_img11,a2_img12,a2_img13,a2_img14,a2_img15,a2_img16,a2_img17,a2_img18,a2_img19,a2_img20,a2_img21,a2_img22,a2_img23,a2_img24,a2_img25,a2_img26,a2_img27,a2_img28];
        if (images2.length + additionalImages2.length <= initialImages2.length + additionalImages2.length) {
            setImages2(prevImages2 => [...prevImages2, ...additionalImages2]);
        }
        setAllImagesLoaded2(true);
    };
        

       
            
          

  return (
    <div className='results' name='results'>
        <div className="A1">
            <p>A1 Results - Board 2024</p>
            <div className="A1-images">
            {images1.map((img, index) => (
                        <img key={index} src={img}/>
                    ))}
            </div>
            
            <button className='a1-load' onClick={a1load}>Load More</button>
        </div>
        <div className="A2">
            <p>A2 Results - Board 2024</p>
            <div className="A2-images">
            {images2.map((img, index) => (
                        <img key={index} src={img}/>
                    ))} 
            </div>
            <button className='a2-load' onClick={a2load}>Load More</button>
        </div>
    </div>
  )
}

export default Results