import * as React from "react";
import AvatarEditor, { ImageState, CroppedRect } from "react-avatar-editor";

const file: File = new File(["str"], "image.jpg");
const image: ImageData = new ImageData(1, 2);
const imageState: ImageState = {
    height: 1,
    width: 1,
    x: 1,
    y: 1,
    resource: image
};

class AvatarEditorTest extends React.Component {
    avatar: AvatarEditor;

    test() {
        const getImage: HTMLCanvasElement = this.avatar.getImage();
        const getImageScaledToCanvas: HTMLCanvasElement = this.avatar.getImageScaledToCanvas();
        const getCroppingRect: CroppedRect = this.avatar.getCroppingRect();
    }

    render() {
        return (
            <div>
                <AvatarEditor image="" />
                <AvatarEditor image={file} />
                <AvatarEditor image="" width={1} />
                <AvatarEditor image="" height={1} />
                <AvatarEditor image="" border={1} />
                <AvatarEditor image="" border={[1, 2]} />
                <AvatarEditor image="" borderRadius={1} />
                <AvatarEditor image="" color={[1]} />
                <AvatarEditor image="" style={{}} />
                <AvatarEditor image="" scale={1} />
                <AvatarEditor image="" position={{}} />
                <AvatarEditor image="" rotate={1} />
                <AvatarEditor image="" crossOrigin="" />
                <AvatarEditor image="" onLoadFailure={event => { }} />
                <AvatarEditor image="" onLoadSuccess={imageState => { }} />
                <AvatarEditor image="" onImageReady={event => { }} />
                <AvatarEditor image="" onMouseUp={() => { }} />
                <AvatarEditor image="" onMouseMove={event => { }} />
                <AvatarEditor image="" onImageChange={() => { }} />
                <AvatarEditor image="" onPositionChange={() => { }} />
                <AvatarEditor
                    image=""
                    ref={ref => {
                        this.avatar = ref!;
                    }}
                />
            </div>
        );
    }
}
