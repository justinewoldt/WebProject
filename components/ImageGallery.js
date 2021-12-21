import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
export default function ImageGallery(){
    return(
        <div className= {utilStyles.borderNothing}>
            <Image
              src="/../public/images/image1.jpeg"
              className={utilStyles.borderNothing}
              height={200}
              width={200}
            />
            <Image
              src="/../public/images/image2.jpeg"
              height={200}
              width={200}
            />
        </div>
    )
}