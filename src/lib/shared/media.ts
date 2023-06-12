// Import the Cloudinary class.
import { Cloudinary } from "@cloudinary/url-gen";

// Import any actions and qualifiers required for transformations.
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";


const getMediaURL = (publicId: string, width: number | null = null, height: number | null = null) => {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dywyr2kco'
        }
    });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'front_face'.
    // const media = cld.image('elephants');
    const media = cld.video(publicId);

    if (width || height) {
        let tf = fill();
        if (width) {
            tf = tf.width(width);
        }
        if (height) {
            tf = tf.height(height);
        }
        // Apply the transformation.
        media.resize(tf.gravity(autoGravity()))
            .format('auto')
            .quality('auto');
    }

    return media.toURL()
}

export {
    getMediaURL
}