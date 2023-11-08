import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';

export const images: string[] = [image1, image2, image3, image4];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
