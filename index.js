const mainContainer = document.getElementById("main-container");

const projects = [
  {
    title: "Hotel page",
    description:
      "A page to show the expected limited scope of Noroff, and displays that after years of school, we are not supposed to even handle a basic backend with filters and even sorting. Even a basic woocommerce setup gives more options out of the gate than this.",
    image: "./screenshots/hotelPage.png",
    github: "https://github.com/Martinsn676/exam2/tree/main",
    netlify: "https://rococo-crisp-371f09.netlify.app/",
  },
  {
    title: "Bidding page",
    description:
      "Another page made useless due to spam and lack of control by developer, making it an ugly page to display and coding is needed just to try filter out the shit",
    image: "./screenshots/biddingPage.png",
    github: "https://github.com/Martinsn676/semester2",
    netlify: "https://mellow-snickerdoodle-569c35.netlify.app/",
  },
  {
    title: "WebStore page",
    description:
      "A storefront page made in react as practice, but apperantly this is one of top 3 things I should brag about after 2 YEARS of school. A very limited page without any design direction given and no inspiration with the damn mix of products, making it seem like a Temu or Wish store",
    image: "./screenshots/reactPage.png",
    github: "https://github.com/Martinsn676/reactDelivery/tree/master",
    netlify: "https://leafy-frangipane-da4873.netlify.app/",
  },
];

const content = document.createElement("div");
content.classList = "flex-row flex-wrap";
for (const project of projects) {
  console.log(project);
  const { title, description, image, github, netlify } = project;
  const projectDiv = document.createElement("div");
  projectDiv.classList = "project-card flex-column";
  projectDiv.innerHTML = `
    <h4>${title}</h4>
    <a href="${netlify}" target="_new" class="">
        <img src="${image}" alt="Project screenshot">
    </a>
    <div class="description">${description}</div>
    <ul class="links">
<li>
        <a href="${github}" target="_new">Github link</a></li>
        <li><a href="${netlify}" target="_new">Live site</a></li>
    </ul>
`;
  content.appendChild(projectDiv);
}
mainContainer.appendChild(content);
