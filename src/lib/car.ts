// Loads the car once and shares it between the hero and the "Under the hood" section.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import badgeUrl from '../assets/badge-fgm.png?inline'; // FGM in the logo's own lettering (made from logo-wordmark.png)

export const MODEL_URL = '/models/sonata.glb';
export const byName = (root: THREE.Object3D, n: string) => root.getObjectByName(THREE.PropertyBinding.sanitizeNodeName(n));

// brand + material clean-up (the OBJ export only carried flat colours)
const looks: Record<string, (m: any) => void> = {
  carpaint: (m) => { m.color.set('#b30f2d'); m.metalness = 0.5; m.roughness = 0.28; }, // Carmine
  chrome: (m) => { m.metalness = 1; m.roughness = 0.12; },
  chromedoor1: (m) => { m.metalness = 1; m.roughness = 0.12; },
  chromedoor2: (m) => { m.metalness = 1; m.roughness = 0.12; },
  mirror: (m) => { m.metalness = 1; m.roughness = 0.05; },
  mattemetal: (m) => { m.metalness = 0.8; m.roughness = 0.4; },
  windowglass: (m) => { m.color.set('#1b2224'); m.transparent = true; m.opacity = 0.55; m.metalness = 0.2; m.roughness = 0.05; },
  clearglass: (m) => { m.transparent = true; m.opacity = 0.25; m.roughness = 0.05; },
  redglass: (m) => { m.transparent = true; m.opacity = 0.8; m.roughness = 0.1; },
  orangeglass: (m) => { m.transparent = true; m.opacity = 0.8; m.roughness = 0.1; },
  yellow: (m) => { m.color.set('#2a7f62'); }, // dipstick / oil cap in Jungle Teal
  wire_060110190: (m) => { m.color.set('#141413'); m.roughness = 0.9; }, // stray blue tyre in the source model
};

let cached: Promise<THREE.Group> | null = null;

/** Oval chrome badge reading "FGM", sized to the box of the badge it replaces. */
function makeBadge(box: THREE.Box3): THREE.Mesh {
  const tex = new THREE.TextureLoader().load(badgeUrl);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  const size = box.getSize(new THREE.Vector3()), mid = box.getCenter(new THREE.Vector3());
  const geo = new THREE.CircleGeometry(0.5, 48); // unit oval; UVs map the canvas onto it
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: tex, transparent: true, metalness: 0.7, roughness: 0.25 }));
  mesh.scale.set(size.x * 1.05, size.y * 1.05, 1);
  mesh.position.set(mid.x, mid.y, box.max.z + 0.004); // nose faces +z
  mesh.name = 'FGM badge';
  return mesh;
}

/** Resolves to a fresh copy of the grounded, centred car (nose = +z). Download happens once. */
export function loadCar(): Promise<THREE.Group> {
  return loadBase().then((g) => g.clone(true));
}

function loadBase(): Promise<THREE.Group> {
  if (cached) return cached;
  const draco = new DRACOLoader().setDecoderPath((globalThis as any).__dracoPath ?? '/draco/');
  const loader = new GLTFLoader().setDRACOLoader(draco);
  // preview builds can inline the model as window.__carBuf; normal sites fetch MODEL_URL
  const inline = (globalThis as any).__carBuf as ArrayBuffer | undefined;
  cached = (inline ? loader.parseAsync(inline, '') : loader.loadAsync(MODEL_URL)).then((gltf) => {
    const car = gltf.scene;
    // swap the maker badge on the grille for an FGM one, same size and spot
    const oem = byName(car, 'Hyundai_Sonata_2016___Sko_245');
    if (oem) {
      const ob = new THREE.Box3().setFromObject(oem);
      oem.removeFromParent();
      car.add(makeBadge(ob));
    }
    car.traverse((o: any) => {
      if (!o.isMesh) return;
      o.castShadow = true;
      for (const m of [o.material].flat()) if (m) { looks[m.name]?.(m); m.needsUpdate = true; }
    });
    const box = new THREE.Box3().setFromObject(car);
    car.position.set(-(box.min.x + box.max.x) / 2, -box.min.y, -(box.min.z + box.max.z) / 2);
    const g = new THREE.Group(); g.add(car); g.updateMatrixWorld(true);
    return g;
  });
  return cached;
}
