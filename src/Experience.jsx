import {
    PresentationControls,
    Float,
    Environment,
    useGLTF,
    OrbitControls,
    ContactShadows,
    Html,
    Text,
} from "@react-three/drei";

import * as THREE from 'three';
import { useMemo } from 'react';

export default function Experience() {
    const computer = useGLTF("/computer.glb");

    // Load the image texture
    const imageTexture = useMemo(() => new THREE.TextureLoader().load('/textures/background.jpg'), []);

    // Create a custom material with the image texture for the text
    const textMaterial = useMemo(() => new THREE.MeshBasicMaterial({ map: imageTexture }), [imageTexture]);

    return (
        <>
            <Environment preset="city" />

            <OrbitControls makeDefault />

            <PresentationControls
                global
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-2, 0.75]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 2, tension: 400 }}
            >
                <Float rotationIntensity={0.4}>
                    <rectAreaLight
                        width={2.5}
                        height={1.65}
                        intensity={65}
                        rotation={[-0.1, Math.PI, 0]}
                        position={[0, 0.55, -1.15]}
                    />
                    <primitive
                        object={computer.scene}
                        position-y={-0.8}
                        scale={0.6}
                        rotation-x={0.01}
                    >
                        <Html
                            transform
                            wrapperClass="computer-screen"
                            distanceFactor={2.3}
                            position={[-0.001, 2.58, -0.55]}
                            rotation-x={-0.23}
                        >
                            <iframe src="https://gdkdev.vercel.app/" />
                        </Html>
                    </primitive>
                    {/* Text with Texture */}
                    <Text
                        font="/GnarlyBonePersonalUseRegular-jExp7.woff" // Corrected path to font file
                        fontSize={0.65}
                        position={[-2.4, 0.80, -0.3]} // Adjust position as needed
                        rotation-x={-0.20}
                        rotation-y={-0.0010}
                        maxWidth={2}
                        textAlign="center"
                        // material={textMaterial}
                    >
                        WHITE
                    </Text>
                    <Text
                        font="/GnarlyBonePersonalUseRegular-jExp7.woff" // Corrected path to font file
                        fontSize={0.65}
                        position={[2.3, 0.80, -0.3]} 
                        rotation-x={-0.20}
                        rotation-y={-0.0010}
                        maxWidth={2}
                        textAlign="center"
                        // material={textMaterial}
                    >
                        DEVIL
                    </Text>
                </Float>
            </PresentationControls>
            <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
        </>
    );
}
