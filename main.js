
'use strict';

const $ = id => document.getElementById(id);
const article = $('content');

/* SIDEBAR LINKS */

const links = [
  ['▦', 'Dashboard', '#548bea', 'content'],
  ['〈〉', 'HTML Editor', '#40b99a', 'htmlTopic'],
  ['✎', 'CSS Styles', '#e7a23a', 'cssTopic'],
  ['▣', 'JS Console', '#dd70a7', 'jsTopic'],
  ['▧', 'Components', '#548bea', 'htmlTopic'],
  ['◫', 'Templates', '#40b99a', 'htmlTopic'],
  ['▤', 'Snippets', '#e7a23a', 'jsTopic'],
  ['▱', 'Projects', '#dd70a7', 'content'],
  ['◉', 'Live Preview', '#548bea', 'content'],
  ['▣', 'Responsive Design', '#40b99a', 'cssTopic'],
  ['◌', 'Color Palette', '#e7a23a', 'cssTopic'],
  ['Aa', 'Typography', '#dd70a7', 'cssTopic'],
  ['⚙', 'Animations', '#548bea', 'content'],
  ['☼', 'Debugger', '#40b99a', 'jsTopic'],
  ['☀', 'Settings', '#e7a23a', 'content']
];

$('menu').innerHTML = links.map(([icon, label, color, target]) => `
  <a href="#${target}">
    <b style="--icon:${color}">${icon}</b>${label}
  </a>
`).join('');

$('menu').onclick = event => {
  const link = event.target.closest('a');

  if (!link) return;

  event.preventDefault();

  $('menu').querySelectorAll('.active').forEach(a => {
    a.classList.remove('active');
  });

  link.classList.add('active');

  const element = document.querySelector(
    link.getAttribute('href')
  );

  const top = element === article
    ? 0
    : article.scrollTop
      + element.getBoundingClientRect().top
      - article.getBoundingClientRect().top;

  article.scrollTo({
    top,
    behavior: 'smooth'
  });
};

/* DYNAMIC HEADER UPDATES */

let next = 0;
const updates = $('updates');

function addContent() {
  const n = ++next;
  const item = document.createElement('li');

  item.innerHTML = `
    <span>Update ${n}</span>
    <button
      type="button"
      aria-label="Remove Update ${n}"
    >×</button>
  `;

  updates.append(item);
}

$('add').onclick = $('fab').onclick = addContent;

$('clear').onclick = () => {
  updates.replaceChildren();
  next = 0;
};

updates.onclick = event => {
  if (event.target.matches('button')) {
    event.target.closest('li').remove();
  }
};

/* RTL / LTR */

let rtl = false;

$('direction').onclick = () => {
  rtl = !rtl;

  document.documentElement.dir = rtl ? 'rtl' : 'ltr';

  $('direction').textContent =
    rtl ? '◎ English' : '◎ العربية';
};

/* SIDEBAR RESIZING */

const grip = $('grip');

let width = 205;
let startX = 0;
let startWidth = 0;

function resize(value) {
  width = Math.max(
    125,
    Math.min(Math.min(390, innerWidth * 0.45), value)
  );

  document.documentElement.style.setProperty(
    '--side',
    width + 'px'
  );

  grip.setAttribute('aria-valuenow', Math.round(width));
}

grip.onpointerdown = event => {
  startX = event.clientX;
  startWidth = width;

  grip.setPointerCapture(event.pointerId);
  grip.classList.add('dragging');
};

grip.onpointermove = event => {
  if (grip.hasPointerCapture(event.pointerId)) {
    resize(
      startWidth +
      (event.clientX - startX) * (rtl ? -1 : 1)
    );
  }
};

grip.onpointerup = grip.onpointercancel = () => {
  grip.classList.remove('dragging');
};

grip.onkeydown = event => {
  if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) {
    return;
  }

  event.preventDefault();

  resize(
    width +
    (event.key === 'ArrowRight' ? 15 : -15) *
    (rtl ? -1 : 1)
  );
};

window.addEventListener('resize', () => resize(width));

resize(width);

/* CSS ANIMATION SQUARES */

document.querySelector('.motion').insertAdjacentHTML(
  'beforeend',

  [
    [125, -15, 18, -4],
    [170, 26, 25, -12],
    [70, 68, 15, -8],
    [55, 55, 19, -2],
    [95, 81, 22, -17],
    [32, 20, 13, -9],
    [105, -23, 21, -15],
    [24, 47, 14, -5],
    [135, 84, 26, -23]
  ]

  .map(([s, y, t, d], i) => `
    <i
      class="${i % 2 ? 'outline' : ''}"
      style="
        --s:${s}px;
        --y:${y}%;
        --t:${t}s;
        --d:${d}s;
      ">
    </i>
  `).join('')
);

/* INTERACTIVE 3D HEART */

async function showHeart() {

  const panel = document.querySelector('.heart');
  const canvas = $('heartCanvas');

  try {

    /* IMPORT THREE.JS */

    const THREE = await import('three');

    const [{ OrbitControls }, { GLTFLoader }] =
      await Promise.all([
        import('three/addons/controls/OrbitControls.js'),
        import('three/addons/loaders/GLTFLoader.js')
      ]);

    /* RENDERER */

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio || 1, 1.7)
    );

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    /* CAMERA AND SCENE */

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      40,
      1,
      0.1,
      100
    );

    camera.position.set(0, 0, 4.8);

    /* LIGHTING */

    scene.add(
      new THREE.HemisphereLight(
        0xffffff,
        0x865a58,
        2
      )
    );

    const light = new THREE.DirectionalLight(
      0xffffff,
      2.6
    );

    light.position.set(-2, 4, 5);
    scene.add(light);

    /* HEART CONTROLS */

    const controls = new OrbitControls(camera, canvas);

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    controls.enablePan = true;
    controls.enableZoom = true;

    // Bigger zoom steps with mouse wheel
    controls.zoomSpeed = 4;

    controls.minDistance = 0.5;
    controls.maxDistance = 30;

    // Automatic rotation from left to right
    controls.autoRotate = true;
    controls.autoRotateSpeed = -3;

    // Pause rotation while interacting
    controls.addEventListener('start', () => {
      controls.autoRotate = false;
    });

    // Resume rotation after interacting
    controls.addEventListener('end', () => {
      controls.autoRotate = true;
    });

    /* LOAD REAL 3D HEART */

    const loader = new GLTFLoader();

    const gltf = await loader.loadAsync('heart.glb');

    const model = gltf.scene;

    /* CENTER AND SCALE THE HEART */

    const box = new THREE.Box3().setFromObject(model);

    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    const scale = 2.6 / Math.max(
      size.x,
      size.y,
      size.z
    );

    if (!Number.isFinite(scale)) {
      throw new Error('Invalid heart model');
    }

    model.position.sub(center);

    const heart = new THREE.Group();

    heart.add(model);
    heart.scale.setScalar(scale);

    scene.add(heart);

    // Hide fallback image when 3D heart is ready
    panel.classList.add('ready');

    /* RESPONSIVE CANVAS */

    const resizeObserver = new ResizeObserver(() => {

      const { width, height } =
        panel.getBoundingClientRect();

      if (!width || !height) return;

      renderer.setSize(width, height, false);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

    });

    resizeObserver.observe(panel);

    /* ANIMATION LOOP */

    renderer.setAnimationLoop(() => {

      if (document.hidden) return;

      controls.update();
      renderer.render(scene, camera);

    });

  } catch (error) {

    console.error('Heart loading error:', error);

    // Keep fallback image visible if 3D fails
    panel.classList.add('no3d');

  }
}

showHeart();
