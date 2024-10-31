// challenge code is commented

// function Profile() {
//     return (
//         <img
//             src="https://i.imgur.com/QIrZWGIs.jpg"
//             alt="Alan L. Hart"
//         />
//     );
// }
//
// export default function Gallery() {
//     return (
//         <section>
//             <h1>Amazing scientists</h1>
//             <profile />
//             <profile />
//             <profile />
//         </section>
//     );
// }

// solution
function Profile() {
    return (
        <img
            src="https://i.imgur.com/QIrZWGIs.jpg"
            alt="Alan L. Hart"
        />
    );
}

export default function Challenge3() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}