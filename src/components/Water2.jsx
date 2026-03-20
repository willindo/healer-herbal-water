import React, { useEffect, useRef } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  ShaderMaterial,
} from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";
import { WaterMaterial } from "@babylonjs/materials";

function Water2() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Set canvas dimensions
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.7;

      const engine = new Engine(canvas);
      const scene = new Scene(engine);

      var camera = new BABYLON.ArcRotateCamera(
        "Camera",
        (3 * Math.PI) / 2,
        Math.PI / 4,
        100,
        BABYLON.Vector3.Zero(),
        scene,
      );
      camera.attachControl(canvas, true);
      camera.wheelPrecision = 50;
      camera.pinchPrecision = 50;

      var light = new BABYLON.HemisphericLight(
        "light1",
        new BABYLON.Vector3(0, 1, 0),
        scene,
      );
      light.intensity = 0.7;

      // Skybox
      var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
      var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
      skyboxMaterial.backFaceCulling = false;
      skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
        "../TropicalSunnyDay/TropicalSunnyDay",
        scene,
      );
      skyboxMaterial.reflectionTexture.coordinatesMode =
        BABYLON.Texture.SKYBOX_MODE;
      skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
      skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
      skyboxMaterial.disableLighting = true;
      skybox.material = skyboxMaterial;

      // Ground with custom texture placement
      var groundTexture = new BABYLON.Texture("../ALMAZ100_1.png", scene);

      // Set texture to cover the entire ground without repeating
      groundTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
      groundTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
      groundTexture.uScale = 0.1; // % size
      groundTexture.vScale = 0.1;
      groundTexture.uOffset = -0.1; // Center it
      groundTexture.vOffset = -0.1;

      // Scale texture to fit ground dimensions
      const groundSize = 512;
      const textureSize = 1; // Full texture coverage
      groundTexture.uScale = groundSize / (groundSize * textureSize);
      groundTexture.vScale = groundSize / (groundSize * textureSize);

      var groundMaterial = new BABYLON.StandardMaterial(
        "groundMaterial",
        scene,
      );
      groundMaterial.diffuseTexture = groundTexture;

      // Add some specular and ambient for better appearance
      groundMaterial.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
      groundMaterial.ambientColor = new BABYLON.Color3(0.3, 0.3, 0.3);

      var ground = BABYLON.Mesh.CreateGround(
        "ground",
        groundSize,
        groundSize,
        64, // Increased subdivisions for smoother appearance
        scene,
        false,
      );
      ground.position.y = -1;
      ground.material = groundMaterial;

      // Water
      var waterMesh = BABYLON.Mesh.CreateGround(
        "waterMesh",
        groundSize,
        groundSize,
        64,
        scene,
        false,
      );
      waterMesh.position.y = 0; // Slightly above ground

      var water = new WaterMaterial(
        "water",
        scene,
        new BABYLON.Vector2(1024, 1024),
      );
      water.backFaceCulling = true;
      water.bumpTexture = new BABYLON.Texture("../waterbump.png", scene);
      water.windForce = -5;
      water.waveHeight = 0.5;
      water.bumpHeight = 0.1;
      water.waveLength = 0.1;
      water.colorBlendFactor = 0;
      water.addToRenderList(skybox);
      water.addToRenderList(ground);
      waterMesh.material = water;

      // Add some atmospheric effects
      // scene.fogEnabled = true;
      // scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
      // scene.fogDensity = 0.01;
      // scene.fogColor = new BABYLON.Color3(0.8, 0.85, 0.9);

      // Handle window resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 0.7;
        engine.resize();
      };

      window.addEventListener("resize", handleResize);

      engine.runRenderLoop(() => {
        scene.render();
      });

      return () => {
        window.removeEventListener("resize", handleResize);
        engine.dispose();
      };
    }
  }, []);

  return (
    <canvas
      className="z-10 fixed top-0 left-0 w-full h-[70vh] "
      ref={canvasRef}
      style={{
        objectFit: "cover",
        pointerEvents: "none",
      }}
    />
  );
}

export default Water2;
