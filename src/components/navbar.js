import * as React from "react";
import "./navbar.scss";
export default function NavBar() {
  return (
    <header className="main-header">
      <div class="manim-logo-div">
        <a class="manim-logo-a" href="/">
          <img
            src="/logo.svg"
            width="60"
            height="60"
            alt="Manim Community Logo"
            loading="lazy"
          />
          Manim Community
        </a>
      </div>
      <button
        class="navbar-toggler-button"
        type="button"
        aria-label="Toggle navigation"
      >
        <span class="fa fa-bars"></span>
      </button>
      {/* <div class="collapse navbar-collapse" id="social">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="https://www.manim.community">
              Home
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Plugins<span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              href="https://docs.manim.community"
              class="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" class="btn btn-outline-light">
                <i class="fas fa-book"></i> Documentation
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="https://github.com/ManimCommunity/manim"
              class="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" class="btn btn-outline-light">
                <i class="fab fa-github"></i> GitHub
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="https://twitter.com/manim_community/"
              class="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" class="btn btn-outline-light">
                <i class="fab fa-twitter"></i> Twitter
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="https://discord.gg/mMRrZQW"
              class="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" class="btn btn-outline-light">
                <i class="fab fa-discord"></i> Discord
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="https://www.reddit.com/r/manim/"
              class="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" class="btn btn-outline-light">
                <i class="fab fa-reddit"></i> Reddit
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="https://docs.manim.community/en/latest/conduct.html"
              class="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" class="btn btn-outline-light">
                <i class="fa fa-gavel"></i> Conduct
              </button>
            </a>
          </li>
        </ul>
      </div> */}
    </header>
  );
}
// export default function NavBar() {
//   return (
//     <header class="border-bottom border-dark mb-4">
//       <nav class="nav-class navbar navbar-expand-lg navbar-dark bg-dark">
//         <a class="navbar-brand" href="#">
//           <img
//             src="logo.svg"
//             width="60"
//             height="60"
//             alt="Manim Community Logo"
//             loading="lazy"
//           />
//           Manim Community
//         </a>
//          <button
//           class="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#social"
//           aria-controls="social"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="social">
//           <ul class="navbar-nav mr-auto">
//             <li class="nav-item">
//               <a class="nav-link" href="https://www.manim.community">
//                 Home
//               </a>
//             </li>
//             <li class="nav-item active">
//               <a class="nav-link" href="#">
//                 Plugins<span class="sr-only">(current)</span>
//               </a>
//             </li>
//           </ul>
//           <ul class="navbar-nav">
//             <li class="nav-item">
//               <a
//                 href="https://docs.manim.community"
//                 class="nav-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button type="button" class="btn btn-outline-light">
//                   <i class="fas fa-book"></i> Documentation
//                 </button>
//               </a>
//             </li>
//             <li class="nav-item">
//               <a
//                 href="https://github.com/ManimCommunity/manim"
//                 class="nav-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button type="button" class="btn btn-outline-light">
//                   <i class="fab fa-github"></i> GitHub
//                 </button>
//               </a>
//             </li>
//             <li class="nav-item">
//               <a
//                 href="https://twitter.com/manim_community/"
//                 class="nav-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button type="button" class="btn btn-outline-light">
//                   <i class="fab fa-twitter"></i> Twitter
//                 </button>
//               </a>
//             </li>
//             <li class="nav-item">
//               <a
//                 href="https://discord.gg/mMRrZQW"
//                 class="nav-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button type="button" class="btn btn-outline-light">
//                   <i class="fab fa-discord"></i> Discord
//                 </button>
//               </a>
//             </li>
//             <li class="nav-item">
//               <a
//                 href="https://www.reddit.com/r/manim/"
//                 class="nav-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button type="button" class="btn btn-outline-light">
//                   <i class="fab fa-reddit"></i> Reddit
//                 </button>
//               </a>
//             </li>
//             <li class="nav-item">
//               <a
//                 href="https://docs.manim.community/en/latest/conduct.html"
//                 class="nav-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button type="button" class="btn btn-outline-light">
//                   <i class="fa fa-gavel"></i> Conduct
//                 </button>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }
