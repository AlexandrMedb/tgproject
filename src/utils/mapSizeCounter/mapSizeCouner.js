import Jimp from 'jimp/es';


export const mapSizeCounter =({imgElement})=>{
    Jimp.read('./img/logo.jpg')
        .then(image => {
            console.log("sa")
        })
        .catch(err => {
            // Handle an exception.
        });

//     imgElement.onload = async function () {
//         const src = cv.imread(imgElement);
//         const dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
//         const lines = new cv.Mat();
//         const color = new cv.Scalar(0, 255, 0);
//         cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
//         cv.Canny(src, src, 50, 200, 3);
// // You can try more different parameters
//         console.dir(imgElement.width);
//         const w = imgElement.width
//         cv.HoughLinesP(src, lines, 1, Math.PI / 180, Math.ceil(0.3 * w), Math.ceil(0.1 * w), Math.ceil(0.2 * w));
//         console.log(lines.rows);
//         let hor = [];
//         let ver = [];
//         for (let i = 0; i < lines.rows; ++i) {
//             const startPoint = new cv.Point(lines.data32S[i * 4], lines.data32S[i * 4 + 1]);
//             const endPoint = new cv.Point(lines.data32S[i * 4 + 2], lines.data32S[i * 4 + 3]);
//             if (Math.abs(startPoint.y - endPoint.y) < 5) {
//                 hor.push({startPoint, endPoint})
//                 // cv.line(dst, startPoint, endPoint, color);
//             }
//
//             if (Math.abs(startPoint.x - endPoint.x) < 5) {
//                 console.log()
//                 ver.push({startPoint, endPoint})
//                 // cv.line(dst, startPoint, endPoint, color);
//             }
//         }
//
//         hor.sort((a, b) => a.startPoint.y - b.startPoint.y)
//         ver.sort((a, b) => a.startPoint.x - b.startPoint.x)
//         ver = ver.filter((el, i) => {
//             if (el.startPoint.x - ver[i - 1]?.startPoint.x < 5 || ver[i + 1]?.startPoint.x - el.startPoint.x < 5) {
//                 return true;
//             }
//             return false
//         });
//         hor = hor.filter((el, i) => {
//             if (el.startPoint.y - hor[i - 1]?.startPoint.y < 5 || hor[i + 1]?.startPoint.y - el.startPoint.y < 5) {
//                 return true;
//             }
//             return false
//         });
//         ver.forEach(el => cv.line(dst, el.startPoint, el.endPoint, color));
//         hor.forEach(el => cv.line(dst, el.startPoint, el.endPoint, color));
//         cv.imshow('canvasOutput', dst);
//         src.delete();
//         dst.delete();
//         lines.delete();
//         const squere = [];
//         for (let i = 0; i < hor.length; i += 2) {
//             const side = (hor[i + 3]?.startPoint.y + hor[i + 2]?.startPoint.y) / 2 - (hor[i + 1]?.startPoint.y + hor[i]?.startPoint.y) / 2;
//             if (side === side) squere.push(side);
//         }
//         for (let i = 0; i < ver.length; i += 2) {
//             const side = (ver[i + 3]?.startPoint.x + ver[i + 2]?.startPoint.x) / 2
//                 - (ver[i + 1]?.startPoint.x + ver[i]?.startPoint.x) / 2;
//             if (side === side) squere.push(side);
//         }
//         squere.sort((a, b) => a - b);
//         const centr = Math.ceil(squere.length / 2);
//
//         const side = squere[centr];
//         return side;
//     };
}

