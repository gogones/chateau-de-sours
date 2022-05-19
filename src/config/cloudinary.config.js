// Create and configure your Cloudinary instance.
import {Cloudinary} from "@cloudinary/url-gen";

const cld = new Cloudinary({
    cloud: {
        cloudName: 'basecreative1'
    }
});

export default cld;