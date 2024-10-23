import { WebGLRenderer, PerspectiveCamera, Scene, Mesh, PointLight, AmbientLight, BoxGeometry, MeshLambertMaterial } from 'three';
import { useEffect, useRef } from "react";

function Task1() {
    const container = useRef(null);
    var speed = 0.01;
    let frameId = null;

    useEffect(() => {
        console.log("Component mounted");

        // Create the renderer and append it to the DOM
        const renderer = new WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.current.appendChild(renderer.domElement);

        // Create the scene, camera, and objects
        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;

        const scene = new Scene();

        const light = new PointLight(0xffffff, 1000);
        light.position.set(10, 10, 10);
        scene.add(light);

        const light2 = new AmbientLight(0xffffff, 1);
        scene.add(light2);

        const cubeMesh = new BoxGeometry(1, 1, 1);
        const cubematerial = new MeshLambertMaterial({ color: 0xeeffee });
        const cubeObject = new Mesh(cubeMesh, cubematerial);
        scene.add(cubeObject);

        // Animation function
        const animate = function () {
            cubeObject.rotation.x += speed;
            cubeObject.rotation.y += speed;
            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate); // Store frame id for cleanup
        };

        animate();

        // Cleanup function
        return () => {
            console.log("Component unmounted");
            if (frameId) {
                cancelAnimationFrame(frameId); // Stop the animation loop
            }
            container.current.removeChild(renderer.domElement); // Remove the renderer from the DOM
            renderer.dispose(); // Dispose of the renderer
        };
    }, []); // The empty array ensures the effect only runs once

    return (
        <div ref={container}></div>
    );
}

export default Task1;
