
import {WebGLRenderer , PerspectiveCamera , Scene , Mesh , PointLight , AmbientLight , BoxGeometry , MeshLambertMaterial} from 'three';

import { useEffect, useRef } from "react";

function Task1() {
    const refContainer = useRef(null);
    var scene = null
    var speed =0.01 ;
    useEffect(() => {
        const renderer = new WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;
        scene = new Scene();
        refContainer.current && refContainer.current.appendChild( renderer.domElement );



        const light = new PointLight(0xffffff, 1000)
        light.position.set(10, 10, 10)
        scene.add(light)

        const light2 = new AmbientLight(0xffffff, 1)
        scene.add(light2)


        const cubeMesh = new BoxGeometry(1, 1, 1);
        const cubematerial = new MeshLambertMaterial({ color: 0xeeffee });
        var cubeObject = new Mesh(cubeMesh, cubematerial);
        scene.add(cubeObject);





        var animate = function () {
            requestAnimationFrame(animate);
            cubeObject.rotation.x += speed ;
            cubeObject.rotation.y += speed ;
            renderer.render(scene, camera);
        };
        animate();
    }, []);
    return (
        <div ref={refContainer}></div>

    );
}
export default Task1


