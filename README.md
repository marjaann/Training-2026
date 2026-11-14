# Training 2026 – Website Development Prompt

**Student Name:** Marjan Bdeir  
**Student ID:** 202404697  
**Project Name:** Training 2026  
**Technologies:** HTML5, CSS3, JavaScript, 


---

## Project Prompt

Create a complete, modern, responsive, and interactive website called **Training 2026** using HTML5, CSS3, and vanilla JavaScript. The website should focus on CSS animations and web development concepts. Use dark red (`#990000`) as the primary color, combined with light gray and white for a clean and organized appearance.

The main goal is to implement all the required features with **high code efficiency**. Keep the code simple, readable, and easy to explain. Avoid unnecessary HTML elements, repeated CSS properties, complicated JavaScript functions, and excessive nesting. Use semantic HTML, CSS Grid, Flexbox, and reusable JavaScript functions whenever possible.

### 1. Header and Dynamic Content

Create a full-width dark red header containing a graduation-cap icon and the title **Training 2026** on the left side.

On the right side, add three buttons with suitable icons: **العربية**, **Add Content**, and **Clear Content**.

The Add Content button should dynamically insert numbered updates below the website title, such as Update 1, Update 2, and Update 3. Each update must include a small square × button that allows the user to delete that specific update without affecting the others.

The header should automatically increase in height when updates are added and decrease when they are removed. The sidebar and main content should move down together as the header expands.

The Clear Content button should remove all updates, reset the update counter, and return the header to its original height.

### 2. Language Toggle and Layout Direction

Implement a language button that switches the website layout between left-to-right (LTR) and right-to-left (RTL).

When RTL is selected, the sidebar should move to the right, and the main layout should be mirrored. When LTR is selected, the original layout should be restored.

Keep the navigation labels and educational content in English. The toggle should mainly control the layout direction rather than translate all text.

Ensure that buttons, spacing, alignment, and the resizable sidebar work correctly in both directions.

### 3. Sidebar and Navigation

Create a light-gray vertical sidebar with small colored icons, clear navigation labels, and smooth hover effects.

Include the following navigation options: Dashboard, HTML Editor, CSS Styles, JS Console, Components, Templates, Snippets, Projects, Live Preview, Responsive Design, Color Palette, Typography, Animations, Debugger, and Settings.

Define the navigation destinations clearly:

- Dashboard, Projects, Live Preview, and Animations should navigate to the main content area.
- HTML Editor, Components, and Templates should navigate to the HTML section.
- CSS Styles, Responsive Design, Color Palette, and Typography should navigate to the CSS section.
- JS Console, Snippets, and Debugger should navigate to the JavaScript section.
- Settings should navigate to a dedicated Settings section.

Navigation should use smooth scrolling inside the main content area without moving the header, sidebar, or footer.

Add a draggable vertical divider between the sidebar and main content, allowing the user to resize the sidebar. Set reasonable minimum and maximum widths to prevent layout problems.

### 4. Main Layout and CSS Animation

Divide the upper main area into two equal-sized panels using CSS Grid.

The first panel should have a dark red gradient background and display the heading **CSS Animation** in the center.

Add multiple semi-transparent squares with different sizes, positions, animation speeds, and delays. Some squares should be filled, while others should have transparent centers and visible borders.

Use CSS keyframes to animate the squares continuously from left to right. The animation should be smooth and visually attractive.

To improve code efficiency, generate the repeated animated squares using a JavaScript array instead of writing each element manually in HTML.

### 5. Interactive 3D Human Heart

The second panel should contain a realistic anatomical 3D human heart using Three.js and a local GLB model.

The heart should have realistic colors, textures, lighting, and proportions.

Implement the following interactions:

- Rotate the heart automatically from left to right at a noticeable speed.
- Pause automatic rotation while the user interacts with the model.
- Resume automatic rotation when the interaction ends.
- Allow the user to rotate the heart manually by dragging the mouse.
- Enable zooming in and out using the mouse wheel.
- Make each scroll movement produce a clearly noticeable zoom change.
- Allow panning and limit the minimum and maximum zoom distances.
- Automatically center and scale the model inside its panel.
- Adjust the 3D renderer when the panel size changes.

Do not display any text, loading messages, labels, or instructions inside the heart panel.

Optimize the 3D model and rendering performance to reduce loading time. Include a fallback image in case the 3D model cannot be displayed.

### 6. Educational Content and Scrolling

Below the two upper panels, create an independently scrollable educational content section.

Include clear headings and short explanations about HTML, CSS, JavaScript, and how these technologies work together.

Use small colored badges to visually distinguish the technologies.

The two upper panels must remain fixed in their positions while the educational content scrolls independently.

Scrolling inside the content section must not move the header, sidebar, or footer.

### 7. Footer and Floating Add Button

Create a simple footer at the bottom of the main content area displaying:

**© 2026 Training 2026. All rights reserved.**

Keep the footer fixed at the bottom of the main area, outside the sidebar.

Add a circular dark red **+** button near the right edge of the main area, positioned so that half of the button overlaps the scrollable content area and the other half overlaps the footer.

The button must remain on the side rather than in the horizontal center.

Clicking this button should perform the same function as the Add Content button in the header.

When the mouse hovers over the floating button, its background should become darker, and it should move slightly upward using a smooth CSS transition.

### 8. Responsive Design

Make the website responsive for different screen sizes using CSS Grid, Flexbox, and media queries.

Ensure that the header buttons, sidebar, animation panels, educational content, and footer remain organized.

The sidebar resizing feature should not cause overlapping or broken layouts.

Maintain consistent spacing, colors, typography, and hover effects throughout the website.

### 9. Code Efficiency and Optimization

**Code efficiency is one of the most important requirements of this project.**

Implement the website using the minimum amount of code necessary without removing any required functionality.

Follow these principles:

- Use semantic HTML elements such as `header`, `nav`, `aside`, `main`, `section`, `article`, and `footer`.
- Prefer a single structural `div`, or at most two, wherever practical.
- Avoid unnecessary nested elements.
- Use CSS Grid and Flexbox instead of complicated positioning.
- Combine repeated CSS declarations.
- Use JavaScript arrays and loops to generate repeated elements.
- Reuse functions for similar interactions.
- Avoid unnecessary external libraries.
- Use Three.js only for the interactive 3D heart.
- Optimize animations and model loading for smooth performance.
- Keep the code organized, understandable, and suitable for a student to explain.

### 10. Final Deliverables

Provide a complete working website with the following files:

- `index.html` – Website structure
- `style.css` – Styling, layout, responsiveness, and animations
- `main.js` – Interactive functionality
- `heart.glb` – Optimized 3D heart model
- `heart-fallback.webp` – Fallback image

Ensure all files are correctly connected and the website runs using VS Code Live Server.

**Final requirement:** Complete the entire website based on this single prompt, prioritizing high code efficiency, minimal repetition, clean design, responsive layout, and fully functional interactions.
