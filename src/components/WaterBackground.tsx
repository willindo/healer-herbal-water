// WaterBackground.jsx - Updated for better integration
import React, { useEffect, useRef } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  Mesh,
  StandardMaterial,
  Texture,
  Color3,
  CubeTexture,
  Color4,
} from "@babylonjs/core";
import { WaterMaterial } from "@babylonjs/materials";

function WaterBackground({
  intensity = 0.5,
  color = [0.1, 0.3, 0.5],
  speed = 1,
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new Engine(canvasRef.current, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    });

    const scene = new Scene(engine);
    scene.clearColor = new Color4(0, 0, 0, 0); // Black background with transparency

    // Minimal camera (no controls for background)
    const camera = new ArcRotateCamera(
      "camera",
      Math.PI * 1.5,
      Math.PI / 3,
      100,
      Vector3.Zero(),
      scene,
    );
    camera.detachControl(); // No mouse interaction for background

    // Simple lighting
    new HemisphericLight("light", new Vector3(0, 1, 0), scene).intensity = 0.7;

    // Create water plane
    const waterMesh = Mesh.CreatePlane("water", 20, scene);
    waterMesh.rotation.x = -Math.PI / 2; // Lay flat
    waterMesh.scaling = new Vector3(10, 10, 10); // Scale to cover view

    // Simple water material
    const water = new WaterMaterial("water", scene);
    water.backFaceCulling = true;
    water.windForce = speed * 3;
    water.waveHeight = intensity * 0.8;
    water.waterColor = new Color3(...color);
    water.colorBlendFactor = 0.3;

    waterMesh.material = water;

    // Handle resize
    const resize = () => engine.resize();
    window.addEventListener("resize", resize);

    // Animation loop
    let animationId: any;
    const renderLoop = () => {
      scene.render();
      animationId = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      scene.dispose();
      engine.dispose();
    };
  }, [intensity, color, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`water-background ${className}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // Behind everything
        // pointerEvents: "none",
      }}
    />
  );
}

export default WaterBackground;
