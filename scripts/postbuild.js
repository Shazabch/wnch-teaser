const fs = require("fs-extra");
const path = require("path");

async function main() {
    const root = process.cwd();

    const deployDir = path.join(root, "deploy");

    // remove old deploy
    await fs.remove(deployDir);

    // copy standalone server
    await fs.copy(
        path.join(root, ".next", "standalone"),
        deployDir
    );

    // copy static assets
    await fs.copy(
        path.join(root, ".next", "static"),
        path.join(deployDir, ".next", "static")
    );

    // copy public folder
    await fs.copy(
        path.join(root, "public"),
        path.join(deployDir, "public")
    );

    console.log("deploy folder created");
}

main().catch(console.error);
