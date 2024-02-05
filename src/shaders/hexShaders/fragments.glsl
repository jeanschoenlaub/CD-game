uniform vec3 uColor;
uniform float uNorthEastBlend;
uniform float uEastBlend;
uniform float uSouthEastBlend;
uniform float uSouthWestBlend;
uniform float uWestBlend;
uniform float uNorthWestBlend;

varying vec3 vPosition;

void main() {
    vec3 yellowColor = vec3(1.0, 1.0, 0.0); // RGB for yellow
    vec3 baseColor = uColor;
    float radius = 1.0; // Adjust if your hexagon has a different radius
    float blendThreshold = 0.4 * radius;

    if (uNorthEastBlend > 0.9) {
        baseColor = vec3(1.0, 0.0, 0.0); // Set to red for debugging
    }

    gl_FragColor = vec4(baseColor, 1.0);
}

