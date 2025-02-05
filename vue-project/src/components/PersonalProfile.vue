<template>
  <div class="portfolio">
    <header class="header"><h1>Personal Profile Web page</h1></header>
    <section class="projects">
      <div class="project">
        <div class="project-info">
          <h3>About Me</h3>
          <a target="_blank" href="https://media.licdn.com/dms/image/v2/D4D03AQFdClyGWq_oSg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715780431331?e=1738195200&v=beta&t=cmk_6OJZCwP15FuD550-EHKHykdbgkC72eMmhHg9UW0">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQFdClyGWq_oSg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715780431331?e=1738195200&v=beta&t=cmk_6OJZCwP15FuD550-EHKHykdbgkC72eMmhHg9UW0" width="168" height="168">
          </a>
          <p>Charijoy Cempron</p>
          <p>Cha/ri, Kakay, Acerola</p>
          <p>Metro Manila, Philippines</p>
          <p><a href="https://www.linkedin.com/in/charijoy-cempron-0b6950281/">LinkedIn profile</a></p>
        </div>
      </div>
      <div class="project">
        <div class="project-info">
          <h3>Educational Background</h3>
          <table>
            <tr>
              <td>Secondary</td>
            </tr>
            <tr>
              <td>St. Ives School</td>
            </tr>
            <tr>
              <td>Severina Subd. Bagumbayan, Taguig City</td>
            </tr>
            <tr>
              <td>SY 2017-2023</td>
            </tr>
            <tr>
              <td>With Honors</td>
            </tr>
          </table>
          <table>
            <tr>
              <td>Tertiary</td>
            </tr>
            <tr>
              <td>Asia Pacific College</td>
            </tr>
            <tr>
              <td>Humabon St. Magallanes, Makati City</td>
            </tr>
            <tr>
              <td>SY 2023-Present</td>
            </tr>
            <tr>
              <td>Bachelor of Science in Information Technology with Specialization in Mobile Internet</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="project">
        <div class="project-info">
          <h3>IT Experience</h3>
          <ul>
            <li>Basic Java</li>
            <li>Basic Python</li>
            <li>Code Combat</li>
          </ul>
        </div>
      </div>
      <div class="project">
        <div class="project-info">
          <h3>Hobbies & Interests</h3>
          <ul>
            <li>Blackpink (Jennie Kim)</li>
            <li>Mangas/Manhwas/Manhuas (Just Twilight, Sakamoto Days, The Return of the Crazy Demon)</li>
            <li>Animes (Zom 100: Bucketlist of the Dead, Chainsaw Man)</li>
            <li>Pirates of the Carribean</li>
          </ul>
        </div>
      </div>
      <div class="project">
        <div class="project-info">
          <h3>Goals in Life</h3>
          <ul>
            <li>Have successful businesses</li>
            <li>Be a model at least once</li>
            <li>Master a musical instrument</li>
            <li>Retire early</li>
            <li>Find my purpose</li>
            <li>Master a sport</li>
            <li>Be active in fitness and gym</li>
            <li>Have a healthy skin, mind, and body</li>
          </ul>
        </div>
      </div>
    </section>
    <footer class="footer"><h3>Picture Gallery</h3>
      <main class="cards">
        <img src="https://preguides.com/images/3WEFh1H1DbUzbxDBYBRF1652927083.jpg" width="300" height="200">
        <img src="https://i.pinimg.com/originals/fb/74/d7/fb74d7ea64686e2e22a89a229912b150.jpg" width="300" height="200">
        <img src="https://preview.redd.it/new-wallpaper-for-my-pc-they-have-no-right-being-this-cool-v0-3l2k9lpytrcc1.jpeg?auto=webp&s=84fbc9925af40466495e023248afa37305b232fd" width="300" height="200">
      </main>
    </footer>
  </div>
</template>

<script></script>

<style scoped>
header {
  background: linear-gradient(90deg, #f8bae3, #dc55ab, #F11EB6);
  color: white;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
}

body {
  margin: 100px;
  background-color: lightpink;
}

.portfolio {
  display: grid;
  grid-template-areas:
    "header"
    "projects"
    "footer";
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  padding: 20px;
}

.header {
  grid-area: header;
  border-radius: 10px;
  background-color: #3498db;
  color: white;
  padding: 20px;
  text-align: center;
  background: black;
  color: hotpink;
  font-family: "Monaco", monospace;
}

.projects {
  grid-area: projects;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.project {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background: black;
  color: hotpink;
  font-family: "Monaco", monospace;
}

.project-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: black;
  color: hotpink;
  font-family: "Monaco", monospace;
}

.footer {
  border-radius: 10px;
  grid-area: footer;
  background-color: #34495e;
  color: white;
  padding: 20px;
  text-align: center;
  background: black;
  color: hotpink;
  font-family: "Monaco", monospace;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  max-height: 100vh;
  align-items: center;
  justify-content: center;
}

.cards img {
  margin: 10px;
  border: 3px solid hotpink;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.3);
  max-width: 23vw;
  border-radius: 10px;
}

a:visited {
  color: hotpink;
}

.no-bullets {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove default padding */
}
</style>