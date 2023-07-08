// Portfolio Website built using Next.js
// author: Jonathan Tan Phan
// github: https://github.com/jtphan-asu

***Build Next.js Project
command: npx create-next-app@latest portfolio
	- Include Tailwind.css in build

***Start server
command: npm run dev
	- Server starts on http://localhost:3000

***Define a layout in Next.js
A layout helps provide consistent structure for the components to appear on every page of the website

Layout usually has header, navigation menu, and footer

File is located in components/Layout.jsx

***Define components/Navbar.jsx
Create link to homepage

Create link for Resume

***Define components/Hero.jsx

Create Place for Profile Image

Create Links to GitHub and LinkedIn

Create Introduction to portfolio


***Define components/About.jsx
Create About me paragraphs
Include Image

***Define components/Skills.jsx
Create skill card for each technology

Utilize hover to change background color

***Define components/Projects.jsx

Create A project grid to display array objects from pages/api/data.js

Map project content to each array item 


***Define components/Contact.jsx
Create Contact Me portion with link to a mailto

***Define components/Footer.jsx

Create copyright symbol and get current Date year

Create Links to GitHub and LinkedIn

***pages/index.js

Create Home index page that contains Hero and About component