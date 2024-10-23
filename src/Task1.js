
import * as THREE from 'three';

import { useEffect, useRef } from "react";

function Task1() {
    const refContainer = useRef(null);
    useEffect(() => {
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    }, []);
    return (
        <div ref={refContainer}></div>

    );
}

export default Task1


