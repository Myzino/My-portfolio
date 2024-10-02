import { ImageResponse } from "next/og";

export const runtime  = "edge"
export const size = {

    width: 40,
    height: 40

};
export const  contentType  =  "image/png";

export default function Icon() {
    return new ImageResponse (
        (

        <div style={
            {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent:"center",
                alignItems: "center",
    
            }
        }>

            <img src="icon.png" alt="icon" />
        </div>
    ),
    { ...size }
);
}