import * as THREE from "three";

const width = 960;
const height = 540;

// レンダラーを作成
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanVas")
});

renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio)

// シーン：オブジェクトや光源の置き場所を作成
const scene = new THREE.Scene();

// カメラを作成（が描く、アスペクト比、描画開始距離、描画修了距離）
const camera = new THREE.PerspectiveCamera(
    45,
    width / height,
    1,
    10000
);

// カメラの初期座標を設定（x座標、 y座標、 z座標）
camera.position.set(0, 0, 1000)

// オブジェクトの生成
// ジオメトリ：頂点情報や面情報などの形状
const geometry = new THREE.BoxGeometry(500, 500, 500);
// マテリアル：色や質感などの素材
const material = new THREE.MeshStandardMaterial({
    color: 0x0000ff
});
const box = new THREE.Mesh(geometry, material);
scene.add(box);

// ライトの作成
const light = new THREE.DirectionalLight(0xffffff);
light.intensity = 2;
light.position.set(1, 1, 1);
scene.add(light);

tick();

function tick() {
    requestAnimationFrame(tick);

    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    renderer.render(scene, camera);
}