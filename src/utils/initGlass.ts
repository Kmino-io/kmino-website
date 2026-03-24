import {
  flutedGlassFragmentShader,
  ShaderMount,
  GlassDistortionShapes,
  GlassGridShapes,
  ShaderFitOptions,
  getShaderColorFromString,
} from "@paper-design/shaders";

export type FlutedGlassOptions = {
  image: HTMLImageElement;
  speed?: number;
  distortion?: number;
  size?: number;
  shape?: keyof typeof GlassGridShapes;
  distortionShape?: keyof typeof GlassDistortionShapes;
  mouseStrength?: number;
  smoothing?: number;
};

export function initGlass(parent: HTMLElement, options: FlutedGlassOptions) {
  const {
    image,
    speed = 0,
    distortion = 0.5,
    size = 0.5,
    shape = "lines",
    distortionShape = "prism",
    mouseStrength = 1,
    smoothing = 0.08,
  } = options;

  const baseUniforms = {
    u_image: image,
    u_colorBack: getShaderColorFromString("#00000000"),
    u_colorShadow: getShaderColorFromString("#000000"),
    u_colorHighlight: getShaderColorFromString("#ffffff"),
    u_shadows: 0.25,
    u_size: size,
    u_angle: 0,
    u_distortion: distortion,
    u_shift: 0,
    u_blur: 0,
    u_edges: 0.25,
    u_stretch: 0,
    u_distortionShape: GlassDistortionShapes[distortionShape],
    u_highlights: 0.1,
    u_shape: GlassGridShapes[shape],
    u_marginLeft: 0,
    u_marginRight: 0,
    u_marginTop: 0,
    u_marginBottom: 0,
    u_grainMixer: 0,
    u_grainOverlay: 0,
    u_fit: ShaderFitOptions["cover"],
    u_scale: 1,
    u_rotation: 0,
    u_offsetX: 0,
    u_offsetY: 0,
    u_originX: 0.5,
    u_originY: 0.5,
    u_worldWidth: 1,
    u_worldHeight: 1,
  };

  const shader = new ShaderMount(
    parent,
    flutedGlassFragmentShader,
    baseUniforms,
    undefined,
    speed,
    0,
    2,
    1920 * 1080 * 2 * 2,
    ["u_image"],
  );

  // --- Mouse interaction ---

  let targetX = 0.5;
  let currentX = 0.5;

  function handleMouseMove(e: MouseEvent) {
    const rect = parent.getBoundingClientRect();
    targetX = (e.clientX - rect.left) / rect.width; // 0 → 1
  }

  const mouseTarget = parent.parentElement ?? parent;
  mouseTarget.addEventListener("mousemove", handleMouseMove);

  let rafId: number;

  function animate() {
    currentX += (targetX - currentX) * 0.25;

    // shift expects small values, so center around 0
    const centered = (currentX - 0.5) * 2;

    shader.setUniforms({
      u_shift: centered * 0.1, // control intensity here
    });

    rafId = requestAnimationFrame(animate);
  }

  animate();

  return {
    shader,
    destroy: () => {
      cancelAnimationFrame(rafId);
      mouseTarget.removeEventListener("mousemove", handleMouseMove);
      shader.dispose();
    },
  };
}
